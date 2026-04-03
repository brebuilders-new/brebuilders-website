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

const STATUS_COLOR: Record<string, { bg: string; text: string; border: string }> = {
  new:        { bg: '#eff6ff', text: '#2563eb', border: '#bfdbfe' },
  contacted:  { bg: '#fefce8', text: '#92400e', border: '#fde68a' },
  site_visit: { bg: '#faf5ff', text: '#7c3aed', border: '#e9d5ff' },
  quoted:     { bg: '#fff7ed', text: '#c2410c', border: '#fed7aa' },
  won:        { bg: '#f0fdf4', text: '#15803d', border: '#bbf7d0' },
  lost:       { bg: '#fef2f2', text: '#b91c1c', border: '#fecaca' },
  archived:   { bg: '#f9fafb', text: '#6b7280', border: '#e5e7eb' },
}

function scoreColor(s: number) {
  if (s >= 70) return '#15803d'
  if (s >= 45) return '#b45309'
  if (s >= 20) return '#1d4ed8'
  return '#6b7280'
}

function scoreBg(s: number) {
  if (s >= 70) return '#f0fdf4'
  if (s >= 45) return '#fffbeb'
  if (s >= 20) return '#eff6ff'
  return '#f9fafb'
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
    <div className="p-4 md:p-8" >
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
                border: active ? 'none' : '1px solid #e5e7eb',
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
                border: active ? '1px solid rgba(200,146,58,0.5)' : '1px solid #e5e7eb',
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
          <div style={{ padding: '60px', textAlign: 'center', color: '#9ca3af', fontFamily: 'monospace', fontSize: '13px' }}>
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
                      <span style={{ display: 'inline-block', background: scoreBg(lead.lead_score || 0), color: scoreColor(lead.lead_score || 0), fontWeight: 700, fontSize: '13px', padding: '2px 8px', borderRadius: '6px', fontFamily: 'monospace' }}>{Math.min(lead.lead_score || 0, 100)}</span>
                    </td>
                    <td style={cell}>
                      <span style={{ fontSize: '12px', color: '#c8923a' }}>{lead.budget || '—'}</span>
                    </td>
                    <td style={cell}>
                      <span style={{ fontSize: '12px' }}>{[lead.city, lead.state].filter(Boolean).join(', ') || '—'}</span>
                    </td>
                    <td style={cell}>
                      <span style={{ padding: '3px 9px', borderRadius: '6px', fontSize: '11px', fontFamily: 'monospace', background: sc.bg, color: sc.text, border: `1px solid ${sc.border}` }}>
                        {STATUS_LABELS[lead.status] || lead.status}
                      </span>
                    </td>
                    <td style={{ ...cell, fontFamily: 'monospace', fontSize: '11px', color: '#9ca3af' }}>
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
