import { supabaseAdmin } from '@/lib/supabase'
import Link from 'next/link'

const STAGES = [
  { value: 'new',        label: 'New',        color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe' },
  { value: 'contacted',  label: 'Contacted',  color: '#92400e', bg: '#fefce8', border: '#fde68a' },
  { value: 'site_visit', label: 'Site Visit', color: '#7c3aed', bg: '#faf5ff', border: '#e9d5ff' },
  { value: 'quoted',     label: 'Quoted',     color: '#c2410c', bg: '#fff7ed', border: '#fed7aa' },
  { value: 'won',        label: 'Won ✓',      color: '#15803d', bg: '#f0fdf4', border: '#bbf7d0' },
  { value: 'lost',       label: 'Lost',       color: '#b91c1c', bg: '#fef2f2', border: '#fecaca' },
]

const SERVICE_SHORT: Record<string, string> = {
  'adu': 'ADU', 'additions': 'Add.', 'new-home': 'New Home',
  'kitchen-bath': 'K/B', 'repairs': 'Repairs', 'decks': 'Decks',
  'commercial': 'Comm.', 'safe-rooms': 'Safe Rm', 'other': 'Other',
}

function scoreColor(s: number) {
  if (s >= 70) return '#15803d'
  if (s >= 45) return '#b45309'
  return '#1d4ed8'
}

function scoreBg(s: number) {
  if (s >= 70) return '#f0fdf4'
  if (s >= 45) return '#fffbeb'
  return '#eff6ff'
}

export default async function PipelinePage() {
  const { data: leads } = await supabaseAdmin
    .from('leads')
    .select('id,lead_number,first_name,last_name,services,lead_score,score_badge,budget,city,state,created_at,status')
    .not('status', 'in', '("archived")')
    .order('lead_score', { ascending: false })

  const grouped = STAGES.reduce<Record<string, typeof leads>>((acc, s) => {
    acc[s.value] = (leads || []).filter(l => l.status === s.value)
    return acc
  }, {})

  return (
    <div style={{ padding: 'clamp(16px,4vw,32px)', background: '#f9fafb', minHeight: '100vh' }}>
      <div style={{ marginBottom: '24px' }}>
        <p style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '3px', color: '#c07d3e', textTransform: 'uppercase', margin: '0 0 6px' }}>Lead Pipeline</p>
        <h1 style={{ fontSize: '28px', fontWeight: 600, margin: 0, color: '#111827' }}>Pipeline</h1>
      </div>

      <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px', minWidth: '960px' }}>
          {STAGES.map(stage => {
            const stageLeads = grouped[stage.value] || []
            return (
              <div key={stage.value}>
                {/* Column header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '0 2px' }}>
                  <span style={{ fontSize: '12px', fontFamily: 'monospace', color: stage.color, fontWeight: 600 }}>{stage.label}</span>
                  <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#9ca3af', background: '#f3f4f6', borderRadius: '10px', padding: '1px 7px' }}>{stageLeads.length}</span>
                </div>

                {/* Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minHeight: '80px' }}>
                  {stageLeads.map(lead => {
                    const services = (lead.services as string[]) || []
                    const svc = services.slice(0, 2).map(s => SERVICE_SHORT[s] || s).join(', ')
                    return (
                      <Link
                        key={lead.id}
                        href={`/admin/leads/${lead.id}`}
                        style={{
                          display: 'block', textDecoration: 'none',
                          background: '#ffffff',
                          borderRadius: '10px',
                          border: `1px solid ${stage.border}`,
                          padding: '12px',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                          transition: 'box-shadow 0.15s',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '5px' }}>
                          <p style={{ margin: 0, fontSize: '13px', color: '#111827', fontWeight: 600, lineHeight: 1.2 }}>
                            {lead.first_name} {lead.last_name}
                          </p>
                          <span style={{ fontSize: '12px', fontWeight: 700, color: scoreColor(lead.lead_score || 0), background: scoreBg(lead.lead_score || 0), padding: '1px 6px', borderRadius: '4px', fontFamily: 'monospace', flexShrink: 0, marginLeft: '6px' }}>
                            {lead.lead_score}
                          </span>
                        </div>
                        <p style={{ margin: '0 0 5px', fontSize: '11px', color: '#6b7280' }}>{svc}</p>
                        {lead.budget && (
                          <p style={{ margin: 0, fontSize: '11px', fontFamily: 'monospace', color: '#92400e', fontWeight: 500 }}>{lead.budget}</p>
                        )}
                        <p style={{ margin: '6px 0 0', fontSize: '10px', fontFamily: 'monospace', color: '#d1d5db' }}>
                          BRE-{String(lead.lead_number).padStart(4, '0')} · {lead.city || '—'}
                        </p>
                      </Link>
                    )
                  })}
                  {stageLeads.length === 0 && (
                    <div style={{ border: '1px dashed #e5e7eb', borderRadius: '10px', padding: '16px', textAlign: 'center', color: '#d1d5db', fontSize: '11px', fontFamily: 'monospace' }}>
                      Empty
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
