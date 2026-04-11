-- BRE Builders Photo System — Supabase Schema
-- Run this entire script in Supabase SQL Editor → New Query → Run

-- ─── Projects ────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS bre_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_slug TEXT UNIQUE NOT NULL,
  project_name TEXT NOT NULL,
  location TEXT,
  service_type TEXT,
  client_name TEXT,
  client_email TEXT,
  client_phone TEXT,
  start_date DATE,
  end_date DATE,
  status TEXT DEFAULT 'active',
  description TEXT,
  website_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- ─── Photos ──────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS bre_photos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES bre_projects(id) ON DELETE SET NULL,
  blob_url TEXT NOT NULL,
  blob_size INTEGER,
  filename TEXT,
  construction_phase TEXT,
  ai_description TEXT,
  location_description TEXT,
  title TEXT,
  description TEXT,
  title_is_custom BOOLEAN DEFAULT false,
  crew_member TEXT,
  crew_email TEXT,
  date_taken DATE,
  approval_status TEXT DEFAULT 'pending',
  approval_requested_at TIMESTAMP DEFAULT NOW(),
  approved_by TEXT,
  approved_at TIMESTAMP,
  rejection_reason TEXT,
  published_to_gallery BOOLEAN DEFAULT false,
  published_to_website BOOLEAN DEFAULT false,
  is_before_photo BOOLEAN DEFAULT false,
  is_after_photo BOOLEAN DEFAULT false,
  paired_with_photo_id UUID REFERENCES bre_photos(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- ─── Videos ──────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS bre_videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES bre_projects(id) ON DELETE SET NULL,
  blob_url_original TEXT NOT NULL,
  blob_url_compressed TEXT,
  filename TEXT,
  duration_seconds INTEGER,
  construction_phase TEXT,
  ai_description TEXT,
  crew_member TEXT,
  compression_status TEXT DEFAULT 'pending',
  published_to_website BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- ─── Chat messages ───────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS bre_chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES bre_projects(id) ON DELETE SET NULL,
  sender TEXT,
  sender_email TEXT,
  message_text TEXT,
  attached_photo_id UUID REFERENCES bre_photos(id) ON DELETE SET NULL,
  attached_video_id UUID REFERENCES bre_videos(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- ─── Before/After pairs ──────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS bre_before_after (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES bre_projects(id) ON DELETE SET NULL,
  location TEXT,
  before_photo_id UUID REFERENCES bre_photos(id) ON DELETE SET NULL,
  after_photo_id UUID REFERENCES bre_photos(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(project_id, location)
);

-- ─── Indexes ─────────────────────────────────────────────────────────────────

CREATE INDEX IF NOT EXISTS idx_photos_approval ON bre_photos(approval_status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_photos_project ON bre_photos(project_id);
CREATE INDEX IF NOT EXISTS idx_photos_published ON bre_photos(published_to_website);
CREATE INDEX IF NOT EXISTS idx_before_after_project ON bre_before_after(project_id);

-- ─── Row Level Security ───────────────────────────────────────────────────────

ALTER TABLE bre_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE bre_photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE bre_videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE bre_chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE bre_before_after ENABLE ROW LEVEL SECURITY;

-- Public can read approved photos (gallery frontend uses anon key)
CREATE POLICY "Public read approved photos"
  ON bre_photos FOR SELECT
  USING (approval_status = 'approved' AND published_to_website = true);

-- Public can read active projects
CREATE POLICY "Public read active projects"
  ON bre_projects FOR SELECT
  USING (status = 'active');

-- Public can read before/after pairs
CREATE POLICY "Public read before after"
  ON bre_before_after FOR SELECT
  USING (true);

-- Note: service role key bypasses RLS automatically — no extra policy needed
-- Webhook and admin API both use SUPABASE_SERVICE_ROLE_KEY

-- ─── Seed: 11 existing portfolio projects ────────────────────────────────────

INSERT INTO bre_projects (project_slug, project_name, location, service_type, status, website_published)
VALUES
  ('lake-tahoe-renovation',    'Lake Tahoe Full Home Renovation',   'Zephyr Cove, NV',          'Full Home Renovation',   'completed', true),
  ('glenbrook-lake-tahoe',     'Glenbrook Lake Tahoe Renovation',   'Glenbrook, NV',          'Full Home Renovation',   'completed', true),
  ('ripon-estate',             'Ripon CA Luxury Estate',            'Ripon, CA', 'Custom Home',            'completed', true),
  ('rio-tinto',                'Rio Tinto Home Renovation',         'Reno, NV',                'Residential Renovation', 'completed', true),
  ('quaking-aspen',            'Quaking Aspen Structural Repair',   'Reno, NV',                'Structural Repair',      'completed', true),
  ('lake-tahoe-deck',          'Lake Tahoe Deck Structural Repair', 'Lake Tahoe, NV',          'Deck Structural Repair', 'completed', true),
  ('mine-shaft',               'Mine Shaft Framing & Shed',         'Reno, NV',                'Custom Framing',         'completed', true),
  ('car-wash',                 'Car Wash Concrete & Foundation',    'Reno, NV',                'Commercial Concrete',    'completed', true),
  ('arun-deck-repair',         'Arun Hillside Deck Repair',         'Lake Tahoe, NV',          'Deck Repair',            'completed', true),
  ('charolettes-deck',         'Charolettes Deck',                  'Reno, NV',                'Deck Construction',      'completed', true),
  ('warehouse-metal-buildings','Warehouse Metal Building',          'Northern Nevada, NV',    'Commercial',             'completed', true)
ON CONFLICT (project_slug) DO NOTHING;
