import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  const { data, error } = await supabaseAdmin
    .from('leads')
    .insert({
      first_name: 'Debug',
      last_name: 'Env',
      email: 'debug-env@test.dev',
      phone: '0000000000',
      services: ['adu'],
      status: 'new',
    })
    .select('id, lead_number')
    .single()

  return NextResponse.json({
    url_prefix: url?.slice(0, 35),
    key_prefix: key?.slice(0, 20),
    insert_data: data,
    insert_error: error ? { code: error.code, message: error.message } : null,
  })
}
