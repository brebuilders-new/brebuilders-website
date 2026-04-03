import { supabaseAdmin } from '@/lib/supabase'
import Link from 'next/link'

const STAGES = [
  { value: 'new',        label: 'New',        color: '#3b82f6', border: 'rgba(59,130,246,0.3)' },
  { value: 'contacted',  label: 'Contacted',  color: '#eab308', border: 'rgba(234,179,8,0.3)' },
  { value: 'site_visit', label: 'Site Visit', color: '#a855f7', border: 'rgba(168,85,247,0.3)' },
  { value: 'quoted',     label: 'Quoted',     color: '#f97316', border: 'rgba(249,115,22,0.3)' },
  { value: 'won',        label: 'Won ✓',     color: '#22c55e', border: 'rgba(34,197,94,0.3)' },
  { value: 'lost',       label: 'Lost',       color: '#ef4444', border: 'rgba(239,68,68,0.3)' },
]

const SERVICE_SHORT: Record<string, string> = {
  'adu': 'ADU', 'additions': 'Add.', 'new-home': 'New Home',
  'kitchen-bath': 'K/B', 'repairs': 'Repairs', 'decks': 'Decks',
  'commercial': 'Comm.', 'other': 'Other',
}

function scoreColor(s: number) {
  if (s >= 70) return '#22c55e'
  if (s >= 45) return '#f59e0b'
  return '#3b82f6'
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
    <div style={{ padding: 'clamp(16px,4vw,32px)', background: '#060e18', minHeight: '100vh' }}>
      <div style={{ marginBottom: '24px' }}>
        <p style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '3px', color: '#c07d3e', textTransform: 'uppercase', margin: '0 0 6px' }}>Lead Pipeline</p>
        <h1 style={{ fontSize: '28px', fontWeight: 400, margin: 0, color: '#e8e4dc' }}>Pipeline</h1>
      </div>

      <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px', minWidth: '900px', overflowX: 'auto' }}>
        {STAGES.map(stage => {
          const stageLeads = grouped[stage.value] || []
          return (
            <div key={stage.value}>
              {/* Column header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '0 2px' }}>
                <span style={{ fontSize: '12px', fontFamily: 'monospace', color: stage.color, fontWeight: 600 }}>{stage.label}</span>
                <span style={{ fontSize: '11px', fontFamily: 'monospace', color: 'rgba(232,228,220,0.35)', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '1px 7px' }}>{stageLeads.length}</span>
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
                        background: '#1c1714', borderRadius: '10px',
                        border: `1px solid ${stage.border}`,
                        padding: '12px',
                        transition: 'border-color 0.15s',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                        <p style={{ margin: 0, fontSize: '13px', color: '#e8e4dc', fontWeight: 500, lineHeight: 1.2 }}>
                          {lead.first_name} {lead.last_name}
                        </p>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: scoreColor(lead.lead_score || 0), flexShrink: 0, marginLeft: '6px' }}>{lead.lead_score}</span>
                      </div>
                      <p style={{ margin: '0 0 6px', fontSize: '11px', color: 'rgba(232,228,220,0.45)' }}>{svc}</p>
                      {lead.budget && (
                        <p style={{ margin: 0, fontSize: '11px', fontFamily: 'monospace', color: '#c8923a' }}>{lead.budget}</p>
                      )}
                      <p style={{ margin: '6px 0 0', fontSize: '10px', fontFamily: 'monospace', color: 'rgba(232,228,220,0.25)' }}>
                        BRE-{String(lead.lead_number).padStart(4, '0')} · {lead.city || '—'}
                      </p>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      </div>
    </div>
  )
}
