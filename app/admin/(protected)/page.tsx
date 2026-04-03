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
    return { total: total.count || 0, new: newLeads.count || 0, hot: hot.count || 0, warm: warm.count || 0, won: won.count || 0, recent: recent.data || [] }
  } catch { return { total: 0, new: 0, hot: 0, warm: 0, won: 0, recent: [] } }
}

const STATUS_LABEL: Record<string, string> = {
  new: 'New', contacted: 'Contacted', site_visit: 'Site Visit',
  quoted: 'Quoted', won: 'Won', lost: 'Lost', archived: 'Archived',
}

const STATUS_COLOR: Record<string, { bg: string; text: string; border: string }> = {
  new:        { bg: '#eff6ff', text: '#2563eb', border: '#bfdbfe' },
  contacted:  { bg: '#fefce8', text: '#92400e', border: '#fde68a' },
  site_visit: { bg: '#faf5ff', text: '#7c3aed', border: '#e9d5ff' },
  quoted:     { bg: '#fff7ed', text: '#c2410c', border: '#fed7aa' },
  won:        { bg: '#f0fdf4', text: '#15803d', border: '#bbf7d0' },
  lost:       { bg: '#fef2f2', text: '#b91c1c', border: '#fecaca' },
  archived:   { bg: '#f9fafb', text: '#6b7280', border: '#e5e7eb' },
}

function scoreColor(score: number) {
  if (score >= 70) return '#15803d'
  if (score >= 45) return '#b45309'
  if (score >= 20) return '#1d4ed8'
  return '#6b7280'
}

function scoreBg(score: number) {
  if (score >= 70) return '#f0fdf4'
  if (score >= 45) return '#fffbeb'
  if (score >= 20) return '#eff6ff'
  return '#f9fafb'
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
    { label: 'Total Leads',   value: stats.total, color: '#92400e', bg: '#fffbeb', border: '#fde68a' },
    { label: 'New / Unread',  value: stats.new,   color: '#1d4ed8', bg: '#eff6ff', border: '#bfdbfe' },
    { label: 'Hot Leads 🔥',  value: stats.hot,   color: '#15803d', bg: '#f0fdf4', border: '#bbf7d0' },
    { label: 'Warm Leads ⚡', value: stats.warm,  color: '#b45309', bg: '#fffbeb', border: '#fde68a' },
    { label: 'Won Projects',  value: stats.won,   color: '#6d28d9', bg: '#faf5ff', border: '#e9d5ff' },
  ]

  const cell: React.CSSProperties = {
    padding: '12px 16px',
    borderBottom: '1px solid #f3f4f6',
    fontSize: '13px',
    color: '#374151',
    verticalAlign: 'middle' as const,
  }

  return (
    <div className="p-4 md:p-8" style={{ background: '#f9fafb', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <p style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '3px', color: '#c07d3e', textTransform: 'uppercase', margin: '0 0 6px' }}>Overview</p>
        <h1 style={{ fontSize: '28px', fontWeight: 600, margin: 0, color: '#111827' }}>Dashboard</h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
        {cards.map(c => (
          <div key={c.label} style={{ background: c.bg, borderRadius: '12px', border: `1px solid ${c.border}`, padding: '16px 18px' }}>
            <p style={{ fontSize: '10px', color: c.color, fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 8px', opacity: 0.7 }}>{c.label}</p>
            <p style={{ fontSize: '32px', fontWeight: 700, color: c.color, margin: 0, lineHeight: 1 }}>{c.value}</p>
          </div>
        ))}
      </div>

      {/* Recent leads */}
      <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #f3f4f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#111827' }}>Recent Leads</p>
          <Link href="/admin/leads" style={{ fontFamily: 'monospace', fontSize: '11px', color: '#c07d3e', textDecoration: 'none' }}>View all →</Link>
        </div>

        {stats.recent.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#9ca3af', fontFamily: 'monospace', fontSize: '13px' }}>
            No leads yet — submit a test form to see results here.
          </div>
        ) : (
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
              <thead>
                <tr style={{ background: '#f9fafb' }}>
                  {['#', 'Name', 'Service', 'Score', 'Budget', 'Location', 'Status', 'Time', ''].map(h => (
                    <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontSize: '10px', fontFamily: 'monospace', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1.5px', borderBottom: '1px solid #f3f4f6', fontWeight: 500 }}>
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
                        <p style={{ margin: 0, color: '#111827', fontWeight: 500 }}>{lead.first_name as string} {lead.last_name as string}</p>
                        <p style={{ margin: '2px 0 0', fontSize: '11px', color: '#9ca3af', fontFamily: 'monospace' }}>{lead.phone as string}</p>
                      </td>
                      <td style={cell}>
                        <span style={{ fontSize: '12px', color: '#6b7280' }}>{serviceShort}</span>
                      </td>
                      <td style={{ ...cell, textAlign: 'center' }}>
                        <span style={{ display: 'inline-block', background: scoreBg(score), color: scoreColor(score), fontWeight: 700, fontSize: '13px', padding: '2px 8px', borderRadius: '6px', fontFamily: 'monospace' }}>{score}</span>
                      </td>
                      <td style={cell}>
                        <span style={{ fontSize: '12px', color: '#92400e', fontWeight: 500 }}>{lead.budget as string || '—'}</span>
                      </td>
                      <td style={cell}>
                        <span style={{ fontSize: '12px', color: '#374151' }}>{[lead.city, lead.state].filter(Boolean).join(', ') || '—'}</span>
                      </td>
                      <td style={cell}>
                        <span style={{ padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontFamily: 'monospace', background: sc.bg, color: sc.text, border: `1px solid ${sc.border}` }}>
                          {STATUS_LABEL[s] || s}
                        </span>
                      </td>
                      <td style={{ ...cell, fontSize: '11px', fontFamily: 'monospace', color: '#9ca3af' }}>
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
