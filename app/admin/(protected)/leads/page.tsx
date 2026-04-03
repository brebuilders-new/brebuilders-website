import { supabaseAdmin } from '@/lib/supabase'
import Link from 'next/link'

interface Lead {
  id: string
  lead_number: number
  first_name: string
  last_name: string
  phone: string
  email: string
  services: string[]
  lead_score: number
  score_badge: string
  status: string
  city: string
  state: string
  budget: string
  timeline: string
  created_at: string
  updated_at: string
}

const SERVICE_LABELS: Record<string, string> = {
  'adu': 'ADU', 'additions': 'Addition', 'new-home': 'New Home',
  'kitchen-bath': 'Kitchen/Bath', 'repairs': 'Repairs', 'decks': 'Decks',
  'commercial': 'Commercial', 'other': 'Other',
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

function scoreColor(s: number) {
  if (s >= 70) return '#22c55e'
  if (s >= 45) return '#f59e0b'
  if (s >= 20) return '#3b82f6'
  return '#6b7280'
}

function timeAgo(d: string) {
  const diff = Date.now() - new Date(d).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 60) return `${m}m`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h`
  return `${Math.floor(h / 24)}d`
}

interface PageProps {
  searchParams: Promise<{ status?: string; service?: string; sort?: string }>
}

export default async function AdminLeadsPage({ searchParams }: PageProps) {
  const params = await searchParams
  const statusFilter = params.status || ''
  const serviceFilter = params.service || ''

  let leads: Lead[] = []
  try {
    let query = supabaseAdmin
      .from('leads')
      .select('id,lead_number,first_name,last_name,phone,email,services,lead_score,score_badge,status,city,state,budget,timeline,created_at,updated_at')
      .order('created_at', { ascending: false })
      .limit(100)

    if (statusFilter) query = query.eq('status', statusFilter)
    if (serviceFilter) query = query.contains('services', [serviceFilter])

    const { data } = await query
    leads = (data as Lead[]) || []
  } catch (err) {
    console.error('leads fetch error:', err)
  }

  // Count by status for filter tabs
  const counts: Record<string, number> = {}
  try {
    const { data: statusRows } = await supabaseAdmin
      .from('leads')
      .select('status')
    statusRows?.forEach((r: { status: string }) => {
      counts[r.status] = (counts[r.status] || 0) + 1
    })
  } catch (err) {
    console.error('statusCounts error:', err)
  }

  const STATUSES = ['', 'new', 'contacted', 'site_visit', 'quoted', 'won', 'lost']
  const STATUS_LABELS: Record<string, string> = {
    '': 'All', new: 'New', contacted: 'Contacted', site_visit: 'Site Visit',
    quoted: 'Quoted', won: 'Won', lost: 'Lost',
  }

  const cell: React.CSSProperties = { padding: '13px 16px', borderBottom: '1px solid #f3f4f6', fontSize: '13px', verticalAlign: 'middle' as const }

  return (
    <div className="p-4 md:p-8" style={{ background: '#f1f0ee', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
        <div>
          <p style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '3px', color: '#c07d3e', textTransform: 'uppercase', margin: '0 0 6px' }}>All Submissions</p>
          <h1 style={{ fontSize: '28px', fontWeight: 400, margin: 0, color: '#111827' }}>Leads</h1>
        </div>
        <p style={{ fontFamily: 'monospace', fontSize: '12px', color: '#9ca3af', margin: 0 }}>{leads?.length || 0} results</p>
      </div>

      {/* Status filter tabs */}
      <div style={{ display: 'flex', gap: '4px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {STATUSES.map(s => {
          const active = statusFilter === s
          const count = s === '' ? leads.length : (counts[s] || 0)
          return (
            <Link
              key={s}
              href={`/admin/leads${s ? `?status=${s}` : ''}`}
              style={{
                padding: '7px 14px', borderRadius: '8px', fontSize: '12px', textDecoration: 'none',
                fontFamily: 'monospace', transition: 'all 0.15s',
                background: active ? '#c07d3e' : '#f3f4f6',
                color: active ? '#ffffff' : '#6b7280',
                border: active ? 'none' : '1px solid rgba(255,255,255,0.07)',
                fontWeight: active ? 600 : 400,
              }}
            >
              {STATUS_LABELS[s]} {count > 0 && <span style={{ opacity: active ? 0.7 : 0.5 }}>({count})</span>}
            </Link>
          )
        })}
      </div>

      {/* Service filter */}
      <div style={{ display: 'flex', gap: '4px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {['', ...Object.keys(SERVICE_LABELS)].map(s => {
          const active = serviceFilter === s
          return (
            <Link
              key={s}
              href={`/admin/leads${s ? `?service=${s}${statusFilter ? `&status=${statusFilter}` : ''}` : statusFilter ? `?status=${statusFilter}` : ''}`}
              style={{
                padding: '5px 11px', borderRadius: '6px', fontSize: '11px', textDecoration: 'none',
                fontFamily: 'monospace', transition: 'all 0.15s',
                background: active ? 'rgba(200,146,58,0.15)' : 'transparent',
                color: active ? '#c8923a' : '#6b7280',
                border: active ? '1px solid rgba(200,146,58,0.4)' : '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {s === '' ? 'All services' : SERVICE_LABELS[s]}
            </Link>
          )
        })}
      </div>

      {/* Table */}
      <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
        {!leads?.length ? (
          <div style={{ background: '#060e18', minHeight: '100vh', padding: '60px', textAlign: 'center', color: '#9ca3af', fontFamily: 'monospace', fontSize: '13px' }}>
            No leads match this filter.
          </div>
        ) : (
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' as const }}>
          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", margin: "0 -16px", padding: "0 16px" }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
            <thead>
              <tr>
                {['#', 'Name', 'Services', 'Score', 'Budget', 'Location', 'Status', 'Age', ''].map(h => (
                  <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontSize: '10px', fontFamily: 'monospace', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1.5px', borderBottom: '1px solid #f3f4f6', fontWeight: 400 }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leads.map(lead => {
                const sc = STATUS_COLOR[lead.status] || STATUS_COLOR.new
                const services = (lead.services as string[]) || []
                const svcText = services.map(s => SERVICE_LABELS[s] || s).slice(0, 2).join(', ') + (services.length > 2 ? ` +${services.length - 2}` : '')

                return (
                  <tr
                    key={lead.id}
                    style={{ cursor: 'pointer', transition: 'background 0.1s' }}

                  >
                    <td style={cell}>
                      <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#c07d3e' }}>
                        BRE-{String(lead.lead_number).padStart(4, '0')}
                      </span>
                    </td>
                    <td style={cell}>
                      <p style={{ margin: 0, color: '#111827', fontWeight: 500, fontSize: '13px' }}>{lead.first_name} {lead.last_name}</p>
                      <p style={{ margin: '1px 0 0', fontSize: '11px', color: '#9ca3af', fontFamily: 'monospace' }}>{lead.email}</p>
                    </td>
                    <td style={{ ...cell, maxWidth: '160px' }}>
                      <span style={{ fontSize: '12px', color: '#6b7280' }}>{svcText}</span>
                    </td>
                    <td style={{ ...cell, textAlign: 'center' }}>
                      <div>
                        <span style={{ fontSize: '15px', fontWeight: 700, color: scoreColor(lead.lead_score || 0) }}>{lead.lead_score}</span>
                        <p style={{ margin: 0, fontSize: '9px', color: '#d1d5db', fontFamily: 'monospace' }}>/100</p>
                      </div>
                    </td>
                    <td style={cell}>
                      <span style={{ fontSize: '12px', color: '#c8923a' }}>{lead.budget || '—'}</span>
                    </td>
                    <td style={cell}>
                      <span style={{ fontSize: '12px' }}>{[lead.city, lead.state].filter(Boolean).join(', ') || '—'}</span>
                    </td>
                    <td style={cell}>
                      <span style={{ padding: '3px 9px', borderRadius: '6px', fontSize: '11px', fontFamily: 'monospace', background: sc.bg, color: sc.text, border: `1px solid ${sc.text}30` }}>
                        {STATUS_LABELS[lead.status] || lead.status}
                      </span>
                    </td>
                    <td style={{ ...cell, fontFamily: 'monospace', fontSize: '11px', color: 'rgba(232,228,220,0.3)' }}>
                      {timeAgo(lead.created_at)}
                    </td>
                    <td style={cell}>
                      <Link href={`/admin/leads/${lead.id}`} style={{ fontFamily: 'monospace', fontSize: '11px', color: '#c07d3e', textDecoration: 'none' }}>
                        Open →
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          </div>
          </div>
        )}
      </div>
    </div>
  )
}
