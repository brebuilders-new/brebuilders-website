-- BRE Builders — Admin System Schema
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/paehnccexfbmauyqshiv/sql

-- ─── LEADS ──────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS leads (
  id              UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now(),

  -- Contact
  first_name      TEXT NOT NULL,
  last_name       TEXT NOT NULL,
  phone           TEXT NOT NULL,
  email           TEXT NOT NULL,
  contact_pref    TEXT,
  best_time       TEXT,

  -- Qualification signals
  owns_property   TEXT,
  is_decision_maker TEXT,
  getting_bids    TEXT,
  hear_about_us   TEXT,

  -- Property
  address_line1   TEXT,
  city            TEXT,
  state           TEXT,
  zip             TEXT,
  property_type   TEXT,
  year_built      TEXT,

  -- Services (array — supports multi-service submissions)
  services        TEXT[] NOT NULL DEFAULT '{}',

  -- Budget & timeline
  budget          TEXT,
  timeline        TEXT,
  notes           TEXT,

  -- Lead scoring
  lead_score      INTEGER DEFAULT 0,
  lead_badge      TEXT DEFAULT '🔵 Standard',
  score_signals   TEXT[],
  score_flags     TEXT[],

  -- Service-specific data (JSONB — flexible per service)
  service_data    JSONB DEFAULT '{}',

  -- Images submitted
  has_images      BOOLEAN DEFAULT FALSE,
  image_count     INTEGER DEFAULT 0,

  -- Pipeline status
  status          TEXT DEFAULT 'new'
    CHECK (status IN ('new','contacted','site_visit','quoted','won','lost','archived')),

  -- Admin fields
  assigned_to     TEXT,
  internal_notes  TEXT,
  quote_amount    NUMERIC(12,2),
  quote_sent_at   TIMESTAMPTZ,
  quote_accepted_at TIMESTAMPTZ,
  won_at          TIMESTAMPTZ,
  lost_reason     TEXT,
  follow_up_at    TIMESTAMPTZ
);

-- ─── LEAD IMAGES ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS lead_images (
  id              UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at      TIMESTAMPTZ DEFAULT now(),
  lead_id         UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,

  -- Storage
  storage_path    TEXT NOT NULL,     -- Supabase storage path
  public_url      TEXT NOT NULL,     -- Public URL
  file_name       TEXT,
  file_size       INTEGER,
  mime_type       TEXT,

  -- AI Vision Analysis
  ai_analyzed     BOOLEAN DEFAULT FALSE,
  ai_analyzed_at  TIMESTAMPTZ,
  ai_model        TEXT,

  -- Extracted intelligence
  condition_summary   TEXT,          -- "Severe dry rot on exterior sill, approx 4ft section"
  damage_type         TEXT[],        -- ["dry_rot","water_damage","structural_crack"]
  severity            TEXT,          -- "critical" | "moderate" | "minor" | "cosmetic"
  urgency_flag        BOOLEAN DEFAULT FALSE,
  scope_estimate      TEXT,          -- "Full sill replacement + repaint, 1–2 days"
  materials_visible   TEXT[],        -- ["wood_framing","drywall","concrete","tile"]
  room_or_area        TEXT,          -- "exterior_wall" | "kitchen" | "foundation" | etc.
  before_or_after     TEXT,          -- "before" | "after" | "during" | "unknown"
  comparable_project  TEXT,          -- BRE portfolio match suggestion
  contractor_notes    TEXT,          -- What a contractor would focus on
  full_analysis       TEXT           -- Complete AI narrative
);

-- ─── LEAD TIMELINE ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS lead_timeline (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at  TIMESTAMPTZ DEFAULT now(),
  lead_id     UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  event_type  TEXT NOT NULL,         -- "created"|"status_change"|"note"|"email"|"call"|"quote_sent"
  event_data  JSONB DEFAULT '{}',
  actor       TEXT DEFAULT 'system'  -- "system"|"steve"|"chris"|"sean"
);

-- ─── QUOTES ─────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS quotes (
  id              UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now(),
  lead_id         UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,

  quote_number    TEXT UNIQUE,       -- "BRE-2026-0047"
  status          TEXT DEFAULT 'draft'
    CHECK (status IN ('draft','sent','accepted','declined','expired')),

  -- Line items
  line_items      JSONB DEFAULT '[]',  -- [{desc, qty, unit, unit_price, total}]
  subtotal        NUMERIC(12,2) DEFAULT 0,
  tax_rate        NUMERIC(5,4) DEFAULT 0,
  tax_amount      NUMERIC(12,2) DEFAULT 0,
  total           NUMERIC(12,2) DEFAULT 0,
  deposit_pct     NUMERIC(5,2) DEFAULT 30,
  deposit_amount  NUMERIC(12,2) DEFAULT 0,

  -- Validity
  valid_days      INTEGER DEFAULT 30,
  expires_at      TIMESTAMPTZ,

  -- Sent/accepted
  sent_at         TIMESTAMPTZ,
  accepted_at     TIMESTAMPTZ,
  declined_at     TIMESTAMPTZ,
  notes           TEXT,
  terms           TEXT
);

-- ─── SETTINGS ───────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS admin_settings (
  key    TEXT PRIMARY KEY,
  value  JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Default settings
INSERT INTO admin_settings (key, value) VALUES
  ('notification_emails', '["brebuilders@gmail.com","steve@brebuilders.com","chris@brebuilders.com","sean@brebuilders.com"]'),
  ('company', '{"name":"Blue Reef Builders","phone":"(775) 391-4517","email":"brebuilders@gmail.com","address":"2600 Mill St #400, Reno, NV 89502","nv_license":"0085999","ca_license":"1093798"}')
ON CONFLICT (key) DO NOTHING;

-- ─── INDEXES ────────────────────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS leads_status_idx    ON leads(status);
CREATE INDEX IF NOT EXISTS leads_created_idx   ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS leads_services_idx  ON leads USING GIN(services);
CREATE INDEX IF NOT EXISTS leads_score_idx     ON leads(lead_score DESC);
CREATE INDEX IF NOT EXISTS images_lead_idx     ON lead_images(lead_id);
CREATE INDEX IF NOT EXISTS timeline_lead_idx   ON lead_timeline(lead_id, created_at DESC);
CREATE INDEX IF NOT EXISTS quotes_lead_idx     ON quotes(lead_id);

-- ─── UPDATED_AT TRIGGER ─────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER leads_updated_at   BEFORE UPDATE ON leads   FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER quotes_updated_at  BEFORE UPDATE ON quotes  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ─── STORAGE BUCKET ─────────────────────────────────────────────────────────────
-- Run separately in Supabase Storage settings or via API:
-- CREATE BUCKET 'lead-images' with public=true, file_size_limit=10485760 (10MB)
-- Policy: authenticated users can upload, public can read

-- ─── ROW LEVEL SECURITY ─────────────────────────────────────────────────────────
-- For now: service_role key bypasses RLS (used server-side only)
-- Public anon key should have NO access to these tables
ALTER TABLE leads         ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_images   ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_timeline ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes        ENABLE ROW LEVEL SECURITY;

-- Service role bypass (handled automatically by Supabase service role key)
-- No public policies = anon users can't read/write any of these tables
