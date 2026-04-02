import { supabaseAdmin } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import LeadDetailClient from '@/components/admin/LeadDetailClient'

interface Props { params: Promise<{ id: string }> }

export default async function LeadDetailPage({ params }: Props) {
  const { id } = await params

  const [leadRes, imagesRes, notesRes, activityRes] = await Promise.all([
    supabaseAdmin.from('leads').select('*').eq('id', id).single(),
    supabaseAdmin.from('lead_images').select('*').eq('lead_id', id).order('created_at'),
    supabaseAdmin.from('lead_notes').select('*').eq('lead_id', id).order('created_at', { ascending: false }),
    supabaseAdmin.from('activity_log').select('*').eq('lead_id', id).order('created_at', { ascending: false }).limit(20),
  ])

  if (leadRes.error || !leadRes.data) notFound()

  return (
    <LeadDetailClient
      lead={leadRes.data}
      images={imagesRes.data || []}
      notes={notesRes.data || []}
      activity={activityRes.data || []}
    />
  )
}
