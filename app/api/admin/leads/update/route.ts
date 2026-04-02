import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function PATCH(req: NextRequest) {
  const { id, status, assigned_to, next_follow_up } = await req.json()
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })

  const updates: Record<string, unknown> = {}
  if (status) updates.status = status
  if (assigned_to !== undefined) updates.assigned_to = assigned_to
  if (next_follow_up !== undefined) updates.next_follow_up = next_follow_up

  const { error } = await supabaseAdmin.from('leads').update(updates).eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // Log activity
  if (status) {
    await supabaseAdmin.from('activity_log').insert({
      lead_id:  id,
      actor:    'admin',
      action:   'lead.status_changed',
      metadata: { to: status },
    })
  }

  return NextResponse.json({ success: true })
}
