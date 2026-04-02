// Browser client (anon key — for form submissions from client side)
import { createClient } from '@supabase/supabase-js'

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Client-side: uses anon key (can only INSERT leads/images)
export const supabase = createClient(URL, ANON)

// Server-side: uses service role (full access — admin dashboard, API routes)
export const supabaseAdmin = createClient(URL, SERVICE, {
  auth: { persistSession: false },
})

export const SUPABASE_URL = URL
