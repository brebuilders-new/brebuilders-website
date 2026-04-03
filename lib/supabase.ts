import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://paehnccexfbmauyqshiv.supabase.co'
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhZWhuY2NleGZibWF1eXFzaGl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwOTgzMDcsImV4cCI6MjA5MDY3NDMwN30.hW1nrOXmY6rLIFZ1TOEItrwGLq7vYCMljm4yVVvBTZc'
const service = process.env.SUPABASE_SERVICE_ROLE_KEY ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhZWhuY2NleGZibWF1eXFzaGl2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTA5ODMwNywiZXhwIjoyMDkwNjc0MzA3fQ.4ztYLwrHpjRiVWp4hJWrI4Xa7MoOPo6an_6GbwOwcBI'

export const supabase = createClient(url, anon)

export const supabaseAdmin = createClient(url, service, {
  auth: { persistSession: false },
})

export const SUPABASE_URL = url
