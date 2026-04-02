import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const { leadId, content, author = 'Steve' } = await req.json()
  if (!leadId || !content) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

  const { data: note, error } = await supabaseAdmin
    .from('lead_notes')
    .insert({ lead_id: leadId, content, author })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  await supabaseAdmin.from('activity_log').insert({
    lead_id:  leadId,
    actor:    author,
    action:   'lead.note_added',
    metadata: { preview: content.slice(0, 80) },
  })

  return NextResponse.json({ note })
}
