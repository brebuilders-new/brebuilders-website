-- ============================================================
-- BRE Builders — Complete Database Schema
-- Run this ONCE in Supabase Dashboard → SQL Editor
-- Project: paehnccexfbmauyqshiv
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- LEADS
-- Core table — every quote form submission
-- ============================================================
CREATE TABLE IF NOT EXISTS leads (
  id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_number         SERIAL UNIQUE,            -- Human-readable: BRE-1001
  status              TEXT NOT NULL DEFAULT 'new'
                        CHECK (status IN ('new','contacted','site_visit','quoted','won','lost','archived')),

  -- Contact
  first_name          TEXT NOT NULL,
  last_name           TEXT NOT NULL,
  email               TEXT NOT NULL,
  phone               TEXT NOT NULL,
  contact_pref        TEXT CHECK (contact_pref IN ('call','text','email','')),
  best_time           TEXT,

  -- Qualification signals
  owns_property       TEXT CHECK (owns_property IN ('yes','no','escrow','')),
  is_decision_maker   TEXT,
  getting_bids        TEXT CHECK (getting_bids IN ('yes','no','not-yet','')),

  -- Services — array, supports multi-service requests
  services            TEXT[] NOT NULL DEFAULT '{}',

  -- Property
  address_line1       TEXT,
  city                TEXT,
  state               TEXT,
  zip                 TEXT,
  property_type       TEXT,
  year_built          TEXT,

  -- Service-specific data stored as JSONB
  -- Keyed by service: { "adu": {...}, "repairs": {...} }
  service_data        JSONB DEFAULT '{}',

  -- Budget & timeline
  budget              TEXT,
  timeline            TEXT,
  notes               TEXT,
  hear_about_us       TEXT,

  -- Lead intelligence
  lead_score          INTEGER DEFAULT 0 CHECK (lead_score >= 0 AND lead_score <= 100),
  score_badge         TEXT,                     -- '🔥 Hot Lead' etc
  score_signals       TEXT[],                   -- positive signals
  score_flags         TEXT[],                   -- warning signals
  ai_summary          TEXT,                     -- AI-generated summary of submission

  -- Pipeline tracking
  assigned_to         TEXT,
  last_contacted_at   TIMESTAMPTZ,
  next_follow_up      DATE,
  follow_up_count     INTEGER DEFAULT 0,
  lost_reason         TEXT,
  won_value           NUMERIC(10,2),            -- project value if won

  -- Meta
  source              TEXT DEFAULT 'website',
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER leads_updated_at BEFORE UPDATE ON leads
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Indexes for common queries
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_leads_lead_score ON leads(lead_score DESC);
CREATE INDEX idx_leads_services ON leads USING GIN(services);

-- ============================================================
-- LEAD IMAGES
-- Uploaded photos attached to a lead — AI-analyzed
-- Services that support upload: repairs, decks, kitchen-bath,
-- water-intrusion, foundation (within repairs)
-- ============================================================
CREATE TABLE IF NOT EXISTS lead_images (
  id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id             UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  service             TEXT NOT NULL,            -- which service this image relates to
  storage_path        TEXT NOT NULL,            -- Supabase Storage path
  public_url          TEXT NOT NULL,            -- public URL for display
  filename            TEXT,
  file_size           INTEGER,
  mime_type           TEXT,

  -- AI Vision Analysis (GPT-4o)
  ai_analyzed         BOOLEAN DEFAULT FALSE,
  ai_analysis         JSONB DEFAULT '{}',
  -- Structure of ai_analysis:
  -- {
  --   "summary": "Visible foundation crack running diagonally from window corner...",
  --   "damage_type": "Foundation crack — diagonal tension crack",
  --   "severity": "moderate",          -- minor/moderate/severe/critical
  --   "urgency": "within-2-weeks",     -- immediate/within-week/within-2-weeks/non-urgent
  --   "affected_area": "Foundation wall, NE corner",
  --   "materials_visible": ["concrete block", "stucco", "moisture staining"],
  --   "contractor_notes": "Classic stair-step cracking pattern suggesting differential settlement...",
  --   "scope_estimate": "Likely requires helical pier installation (2-4 piers) + crack injection",
  --   "similar_portfolio": "quaking-aspen-repair",   -- BRE project this resembles
  --   "questions_to_ask": ["Has this crack widened in the past 6 months?", "Any recent heavy rain?"],
  --   "red_flags": ["Crack width appears >1/4 inch in upper section", "Active moisture present"]
  -- }
  analysis_model      TEXT DEFAULT 'gpt-4o',
  analysis_tokens     INTEGER,

  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_lead_images_lead_id ON lead_images(lead_id);
CREATE INDEX idx_lead_images_analyzed ON lead_images(ai_analyzed);

-- ============================================================
-- LEAD NOTES
-- Internal team notes on a lead
-- ============================================================
CREATE TABLE IF NOT EXISTS lead_notes (
  id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id             UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  author              TEXT NOT NULL DEFAULT 'Steve',
  content             TEXT NOT NULL,
  is_pinned           BOOLEAN DEFAULT FALSE,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_lead_notes_lead_id ON lead_notes(lead_id);

-- ============================================================
-- QUOTES
-- Formal quote records attached to a lead
-- ============================================================
CREATE TABLE IF NOT EXISTS quotes (
  id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  quote_number        SERIAL UNIQUE,            -- BRE-Q-1001
  lead_id             UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  status              TEXT NOT NULL DEFAULT 'draft'
                        CHECK (status IN ('draft','sent','viewed','accepted','declined','expired')),

  -- Quote details
  services            TEXT[] NOT NULL DEFAULT '{}',
  line_items          JSONB DEFAULT '[]',
  -- line_items: [{ "description": "ADU Foundation", "qty": 1, "unit": "ls", "amount": 45000 }]
  subtotal            NUMERIC(10,2) DEFAULT 0,
  tax_rate            NUMERIC(5,4) DEFAULT 0,
  tax_amount          NUMERIC(10,2) DEFAULT 0,
  total               NUMERIC(10,2) DEFAULT 0,
  notes               TEXT,
  valid_until         DATE,

  -- Timeline
  sent_at             TIMESTAMPTZ,
  viewed_at           TIMESTAMPTZ,
  accepted_at         TIMESTAMPTZ,
  declined_at         TIMESTAMPTZ,

  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER quotes_updated_at BEFORE UPDATE ON quotes
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE INDEX idx_quotes_lead_id ON quotes(lead_id);
CREATE INDEX idx_quotes_status ON quotes(status);

-- ============================================================
-- ACTIVITY LOG
-- Every action on every lead — immutable audit trail
-- ============================================================
CREATE TABLE IF NOT EXISTS activity_log (
  id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id             UUID REFERENCES leads(id) ON DELETE SET NULL,
  quote_id            UUID REFERENCES quotes(id) ON DELETE SET NULL,
  actor               TEXT DEFAULT 'system',    -- 'steve', 'chris', 'system'
  action              TEXT NOT NULL,
  -- action examples: 'lead.created', 'lead.status_changed', 'lead.note_added',
  --                  'quote.sent', 'image.analyzed', 'lead.contacted'
  metadata            JSONB DEFAULT '{}',       -- { "from": "new", "to": "contacted" }
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_activity_log_lead_id ON activity_log(lead_id);
CREATE INDEX idx_activity_log_created_at ON activity_log(created_at DESC);

-- ============================================================
-- ADMIN USERS
-- Who can access the /admin dashboard
-- ============================================================
CREATE TABLE IF NOT EXISTS admin_users (
  id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email               TEXT UNIQUE NOT NULL,
  name                TEXT NOT NULL,
  role                TEXT NOT NULL DEFAULT 'admin'
                        CHECK (role IN ('owner','admin','viewer')),
  is_active           BOOLEAN DEFAULT TRUE,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Seed admin users
INSERT INTO admin_users (email, name, role) VALUES
  ('steve@brebuilders.com', 'Steve Rosenthal', 'owner'),
  ('chris@brebuilders.com', 'Chris', 'admin'),
  ('sean@brebuilders.com', 'Sean', 'admin'),
  ('brebuilders@gmail.com', 'BRE Admin', 'admin')
ON CONFLICT (email) DO NOTHING;

-- ============================================================
-- RLS POLICIES
-- Service role bypasses all — anon key blocked from admin tables
-- ============================================================
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Allow INSERT from anon (form submissions)
CREATE POLICY "anon_insert_leads" ON leads FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "anon_insert_images" ON lead_images FOR INSERT TO anon WITH CHECK (true);

-- Service role has full access (used by server-side API)
CREATE POLICY "service_all_leads" ON leads FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "service_all_images" ON lead_images FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "service_all_notes" ON lead_notes FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "service_all_quotes" ON quotes FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "service_all_activity" ON activity_log FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "service_all_admin_users" ON admin_users FOR ALL TO service_role USING (true) WITH CHECK (true);

-- ============================================================
-- STORAGE BUCKET for lead images
-- Create via Supabase Dashboard > Storage > New Bucket
-- Name: "lead-images", Public: true
-- ============================================================
-- (Storage buckets cannot be created via SQL — do it manually)

-- ============================================================
-- VERIFICATION
-- Run this to confirm everything was created correctly
-- ============================================================
SELECT
  table_name,
  (SELECT COUNT(*) FROM information_schema.columns c
   WHERE c.table_name = t.table_name AND c.table_schema = 'public') AS column_count
FROM information_schema.tables t
WHERE table_schema = 'public'
  AND table_type = 'BASE TABLE'
ORDER BY table_name;
