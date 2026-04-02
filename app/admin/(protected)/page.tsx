import { supabaseAdmin } from '@/lib/supabase'
import Link from 'next/link'

async function getStats() {
  try {
    const [total, newLeads, hot, warm, won, recent] = await Promise.all([
      supabaseAdmin.from('leads').select('id', { count: 'exact', head: true }),
      supabaseAdmin.from('leads').select('id', { count: 'exact', head: true }).eq('status', 'new'),
      supabaseAdmin.from('leads').select('id', { count: 'exact', head: true }).gte('lead_score', 70),
      supabaseAdmin.from('leads').select('id', { count: 'exact', head: true }).gte('lead_score', 45).lt('lead_score', 70),
      supabaseAdmin.from('leads').select('id', { count: 'exact', head: true }).eq('status', 'won'),
      supabaseAdmin.from('leads')
        .select('id,lead_number,first_name,last_name,services,lead_score,score_badge,status,city,state,created_at,budget,phone,email')
        .order('created_at', { ascending: false })
        .limit(8),
    ])
    return {
      total: total.count || 0,
      new: newLeads.count || 0,
      hot: hot.count || 0,
      warm: warm.count || 0,
      won: won.count || 0,
      recent: recent.data || [],
    }
  } catch (err) {
    console.error('getStats error:', err)
    return { total: 0, new: 0, hot: 0, warm: 0, won: 0, recent: [] }
  }
}

const STATUS_LABEL: Record<string, string> = {
  new: 'New', contacted: 'Contacted', site_visit: 'Site Visit',
  quoted: 'Quoted', won: 'Won', lost: 'Lost', archived: 'Archived',
}

const STATUS_COLOR: Record<string, { bg: string; text: string }> = {
  new:        { bg: 'rgba(59,130,246,0.15)', text: '#93c5fd' },
  contacted:  { bg: 'rgba(234,179,8,0.15)',  text: '#fde047' },
  site_visit: { bg: 'rgba(168,85,247,0.15)', text: '#d8b4fe' },
  quoted:     { bg: 'rgba(249,115,22,0.15)', text: '#fdba74' },
  won:        { bg: 'rgba(34,197,94,0.15)',  text: '#86efac' },
  lost:       { bg: 'rgba(239,68,68,0.15)',  text: '#fca5a5' },
  archived:   { bg: 'rgba(107,114,128,0.15)',text: '#9ca3af' },
}

function scoreColor(score: number) {
  if (score >= 70) return '#22c55e'
  if (score >= 45) return '#f59e0b'
  if (score >= 20) return '#3b82f6'
  return '#6b7280'
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  return `${Math.floor(hrs / 24)}d ago`
}

export default async function AdminDashboard() {
  const stats = await getStats()

  const cards = [
    { label: 'Total Leads',   value: stats.total, color: '#c07d3e' },
    { label: 'New / Unread',  value: stats.new,   color: '#3b82f6' },
    { label: 'Hot Leads 🔥',  value: stats.hot,   color: '#22c55e' },
    { label: 'Warm Leads ⚡', value: stats.warm,  color: '#f59e0b' },
    { label: 'Won Projects',  value: stats.won,   color: '#a855f7' },
  ]

  const cell: React.CSSProperties = {
    padding: '12px 16px',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    fontSize: '13px',
    color: 'rgba(232,228,220,0.7)',
    verticalAlign: 'middle' as const,
  }

  return (
    <div className="p-4 md:p-8">
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <p style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '3px', color: '#c07d3e', textTransform: 'uppercase', margin: '0 0 6px' }}>Overview</p>
        <h1 style={{ fontSize: '28px', fontWeight: 400, margin: 0, color: '#e8e4dc' }}>Dashboard</h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
        {cards.map(c => (
          <div key={c.label} style={{ background: '#1c1714', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.07)', padding: '16px 18px' }}>
            <p style={{ fontSize: '11px', color: 'rgba(232,228,220,0.4)', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 8px' }}>{c.label}</p>
            <p style={{ fontSize: '32px', fontWeight: 600, color: c.color, margin: 0, lineHeight: 1 }}>{c.value}</p>
          </div>
        ))}
      </div>

      {/* Recent leads */}
      <div style={{ background: '#1c1714', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ margin: 0, fontSize: '14px', fontWeight: 500, color: '#e8e4dc' }}>Recent Leads</p>
          <Link href="/admin/leads" style={{ fontFamily: 'monospace', fontSize: '11px', color: '#c07d3e', textDecoration: 'none' }}>View all →</Link>
        </div>

        {stats.recent.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: 'rgba(232,228,220,0.3)', fontFamily: 'monospace', fontSize: '13px' }}>
            No leads yet — run the SQL migration first, then submit a test form.
          </div>
        ) : (
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}><table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
            <thead>
              <tr>
                {['#', 'Name', 'Services', 'Score', 'Budget', 'Location', 'Status', 'Time', ''].map(h => (
                  <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontSize: '10px', fontFamily: 'monospace', color: 'rgba(232,228,220,0.3)', textTransform: 'uppercase', letterSpacing: '1.5px', borderBottom: '1px solid rgba(255,255,255,0.06)', fontWeight: 400 }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stats.recent.map((lead: Record<string, unknown>) => {
                const s = lead.status as string
                const sc = STATUS_COLOR[s] || STATUS_COLOR.new
                const score = lead.lead_score as number
                const services = (lead.services as string[]) || []
                const serviceShort = services.slice(0, 2).join(', ') + (services.length > 2 ? ` +${services.length - 2}` : '')

                return (
                  <tr key={lead.id as string} style={{ cursor: 'pointer' }}>
                    <td style={cell}>
                      <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#c07d3e' }}>
                        BRE-{String(lead.lead_number).padStart(4, '0')}
                      </span>
                    </td>
                    <td style={cell}>
                      <p style={{ margin: 0, color: '#e8e4dc', fontWeight: 500 }}>{lead.first_name as string} {lead.last_name as string}</p>
                      <p style={{ margin: '2px 0 0', fontSize: '11px', color: 'rgba(232,228,220,0.35)', fontFamily: 'monospace' }}>{lead.phone as string}</p>
                    </td>
                    <td style={cell}>
                      <span style={{ fontSize: '12px', color: 'rgba(232,228,220,0.6)' }}>{serviceShort}</span>
                    </td>
                    <td style={{ ...cell, textAlign: 'center' }}>
                      <span style={{ fontSize: '15px', fontWeight: 600, color: scoreColor(score) }}>{score}</span>
                    </td>
                    <td style={cell}>
                      <span style={{ fontSize: '12px', color: '#c8923a' }}>{lead.budget as string || '—'}</span>
                    </td>
                    <td style={cell}>
                      <span style={{ fontSize: '12px' }}>{[lead.city, lead.state].filter(Boolean).join(', ') || '—'}</span>
                    </td>
                    <td style={cell}>
                      <span style={{ padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontFamily: 'monospace', background: sc.bg, color: sc.text, border: `1px solid ${sc.text}30` }}>
                        {STATUS_LABEL[s] || s}
                      </span>
                    </td>
                    <td style={{ ...cell, fontSize: '11px', fontFamily: 'monospace', color: 'rgba(232,228,220,0.3)' }}>
                      {timeAgo(lead.created_at as string)}
                    </td>
                    <td style={cell}>
                      <Link href={`/admin/leads/${lead.id as string}`} style={{ fontFamily: 'monospace', fontSize: '11px', color: '#c07d3e', textDecoration: 'none' }}>
                        View →
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          </div>
        )}
      </div>
    </div>
  )
}
