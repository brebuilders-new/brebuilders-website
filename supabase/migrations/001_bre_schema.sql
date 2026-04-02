-- BRE Builders Lead Management Schema
-- Run this in: supabase.com/dashboard/project/paehnccexfbmauyqshiv/sql/new
-- Paste everything below this line and click Run

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ── LEADS ────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS leads (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_number       SERIAL UNIQUE,
  
  -- Pipeline
  status            TEXT NOT NULL DEFAULT 'new'
                    CHECK (status IN ('new','contacted','site_visit','quoted','won','lost','archived')),
  assigned_to       TEXT,
  last_contacted_at TIMESTAMPTZ,
  next_follow_up    DATE,
  follow_up_count   INTEGER DEFAULT 0,
  
  -- Contact (maps to all form first_name/last_name/email/phone fields)
  first_name        TEXT NOT NULL,
  last_name         TEXT NOT NULL,
  email             TEXT NOT NULL,
  phone             TEXT NOT NULL,
  contact_pref      TEXT,   -- preferred_contact_method
  best_time         TEXT,   -- best_time_to_contact (Form 10)
  
  -- Qualification signals
  owns_property     TEXT,   -- do_you_already_own_the_land / is_primary_residence
  is_decision_maker TEXT,
  getting_bids      TEXT,   -- are_you_working_with_another_contractor
  
  -- Services requested (from new Next.js form — array)
  services          TEXT[] NOT NULL DEFAULT '{}',
  
  -- Property
  address_line1     TEXT,
  city              TEXT,
  state             TEXT,
  zip               TEXT,
  property_type     TEXT,
  year_built        TEXT,
  
  -- Service-specific JSON (flexible per service type)
  service_data      JSONB DEFAULT '{}',
  
  -- Project info
  budget            TEXT,
  timeline          TEXT,
  notes             TEXT,
  hear_about_us     TEXT,
  
  -- Lead scoring
  lead_score        INTEGER DEFAULT 0 CHECK (lead_score >= 0 AND lead_score <= 100),
  score_badge       TEXT,
  score_signals     TEXT[],
  score_flags       TEXT[],
  ai_summary        TEXT,
  
  -- Outcome
  lost_reason       TEXT,
  won_value         NUMERIC(10,2),
  
  -- Source tracking
  source            TEXT DEFAULT 'website',
  source_form_id    INTEGER, -- original WP Fluent Forms form ID (2,3,6,7,8,9,10)
  source_form_name  TEXT,    -- e.g. "STRUCTURAL REPAIR INSPECTION FORM"
  wp_submission_id  INTEGER, -- original WP submission ID for deduplication
  
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Auto-update timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = NOW(); RETURN NEW; END; $$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS leads_updated_at ON leads;
CREATE TRIGGER leads_updated_at BEFORE UPDATE ON leads
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Indexes
CREATE INDEX IF NOT EXISTS idx_leads_status      ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at  ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_lead_score  ON leads(lead_score DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email       ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_services    ON leads USING GIN(services);

-- ── LEAD IMAGES ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS lead_images (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id          UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  service          TEXT NOT NULL,
  storage_path     TEXT,
  public_url       TEXT NOT NULL,
  filename         TEXT,
  file_size        INTEGER,
  mime_type        TEXT,
  ai_analyzed      BOOLEAN DEFAULT FALSE,
  ai_analysis      JSONB DEFAULT '{}',
  analysis_model   TEXT DEFAULT 'gpt-4o',
  analysis_tokens  INTEGER,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_lead_images_lead_id ON lead_images(lead_id);

-- ── LEAD NOTES ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS lead_notes (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id    UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  author     TEXT NOT NULL DEFAULT 'Steve',
  content    TEXT NOT NULL,
  is_pinned  BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_lead_notes_lead_id ON lead_notes(lead_id);

-- ── QUOTES ───────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS quotes (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  quote_number SERIAL UNIQUE,
  lead_id      UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  status       TEXT NOT NULL DEFAULT 'draft'
               CHECK (status IN ('draft','sent','viewed','accepted','declined','expired')),
  services     TEXT[] NOT NULL DEFAULT '{}',
  line_items   JSONB DEFAULT '[]',
  subtotal     NUMERIC(10,2) DEFAULT 0,
  tax_rate     NUMERIC(5,4) DEFAULT 0,
  tax_amount   NUMERIC(10,2) DEFAULT 0,
  total        NUMERIC(10,2) DEFAULT 0,
  notes        TEXT,
  valid_until  DATE,
  sent_at      TIMESTAMPTZ,
  viewed_at    TIMESTAMPTZ,
  accepted_at  TIMESTAMPTZ,
  declined_at  TIMESTAMPTZ,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_quotes_lead_id ON quotes(lead_id);

-- ── ACTIVITY LOG ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS activity_log (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id    UUID REFERENCES leads(id) ON DELETE SET NULL,
  quote_id   UUID REFERENCES quotes(id) ON DELETE SET NULL,
  actor      TEXT DEFAULT 'system',
  action     TEXT NOT NULL,
  metadata   JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_activity_log_lead_id    ON activity_log(lead_id);
CREATE INDEX IF NOT EXISTS idx_activity_log_created_at ON activity_log(created_at DESC);

-- ── ADMIN USERS ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS admin_users (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email      TEXT UNIQUE NOT NULL,
  name       TEXT NOT NULL,
  role       TEXT NOT NULL DEFAULT 'admin'
             CHECK (role IN ('owner','admin','viewer')),
  is_active  BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO admin_users (email, name, role) VALUES
  ('steve@brebuilders.com',    'Steve Rosenthal', 'owner'),
  ('chris@brebuilders.com',   'Chris',            'admin'),
  ('sean@brebuilders.com',    'Sean',             'admin'),
  ('brebuilders@gmail.com',   'BRE Admin',        'admin')
ON CONFLICT (email) DO NOTHING;

-- ── RLS POLICIES ─────────────────────────────────────────────────────────────
ALTER TABLE leads        ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_images  ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_notes   ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes       ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users  ENABLE ROW LEVEL SECURITY;

-- Anon can INSERT leads and images (from public form)
CREATE POLICY "anon_insert_leads"  ON leads        FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "anon_insert_images" ON lead_images  FOR INSERT TO anon WITH CHECK (true);

-- Service role gets full access to everything
CREATE POLICY "service_leads"       ON leads        FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "service_images"      ON lead_images  FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "service_notes"       ON lead_notes   FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "service_quotes"      ON quotes       FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "service_activity"    ON activity_log FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "service_admin_users" ON admin_users  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Verify
SELECT table_name, (SELECT count(*) FROM information_schema.columns WHERE table_name = t.table_name) as col_count
FROM information_schema.tables t
WHERE table_schema = 'public' AND table_name IN ('leads','lead_images','lead_notes','quotes','activity_log','admin_users')
ORDER BY table_name;
