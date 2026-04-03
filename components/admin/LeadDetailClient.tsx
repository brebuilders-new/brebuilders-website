'use client'

import { useState } from 'react'
import Link from 'next/link'

// ─── Types ──────────────────────────────────────────────────────────────────────

interface Lead {
  id: string
  lead_number: number
  first_name: string
  last_name: string
  email: string
  phone: string
  contact_pref: string
  best_time: string
  owns_property: string
  is_decision_maker: string
  getting_bids: string
  services: string[]
  address_line1: string
  city: string
  state: string
  zip: string
  property_type: string
  year_built: string
  service_data: Record<string, Record<string, unknown>>
  budget: string
  timeline: string
  notes: string
  hear_about_us: string
  lead_score: number
  score_badge: string
  score_signals: string[]
  score_flags: string[]
  status: string
  assigned_to: string
  created_at: string
  updated_at: string
}

interface LeadImage {
  id: string
  service: string
  public_url: string
  ai_analyzed: boolean
  ai_analysis: {
    summary?: string
    damage_type?: string
    severity?: string
    urgency?: string
    affected_area?: string
    materials_visible?: string[]
    contractor_notes?: string
    scope_estimate?: string
    questions_to_ask?: string[]
    red_flags?: string[]
    photo_quality?: string
    needs_more_photos?: boolean
    more_photos_note?: string
  } | null
}

interface LeadNote {
  id: string
  author: string
  content: string
  is_pinned: boolean
  created_at: string
}

interface Activity {
  id: string
  actor: string
  action: string
  metadata: Record<string, unknown>
  created_at: string
}

// ─── Constants ───────────────────────────────────────────────────────────────────

const SERVICE_LABELS: Record<string, string> = {
  'adu': 'ADU / Guest House', 'additions': 'Home Addition', 'new-home': 'New Custom Home',
  'kitchen-bath': 'Kitchen & Bath', 'repairs': 'Structural Repairs', 'decks': 'Decks & Outdoor',
  'commercial': 'Commercial / TI', 'other': 'Other',
}

const PIPELINE = [
  { value: 'new',        label: 'New',        color: '#3b82f6' },
  { value: 'contacted',  label: 'Contacted',  color: '#eab308' },
  { value: 'site_visit', label: 'Site Visit', color: '#a855f7' },
  { value: 'quoted',     label: 'Quoted',     color: '#f97316' },
  { value: 'won',        label: 'Won',        color: '#22c55e' },
  { value: 'lost',       label: 'Lost',       color: '#ef4444' },
]

const SEVERITY_COLOR: Record<string, string> = {
  minor:    '#3b82f6',
  moderate: '#f59e0b',
  severe:   '#f97316',
  critical: '#ef4444',
}

const URGENCY_COLOR: Record<string, string> = {
  'immediate':       '#ef4444',
  'within-1-week':   '#f97316',
  'within-2-weeks':  '#eab308',
  'within-month':    '#3b82f6',
  'non-urgent':      '#6b7280',
  'informational':   '#6b7280',
}

// ─── Helpers ────────────────────────────────────────────────────────────────────

function scoreColor(s: number) {
  if (s >= 70) return '#22c55e'
  if (s >= 45) return '#f59e0b'
  if (s >= 20) return '#3b82f6'
  return '#6b7280'
}

function fmt(d: string) {
  return new Date(d).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })
}

function Row({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null
  return (
    <div style={{ display: 'flex', gap: '12px', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <span style={{ width: '140px', flexShrink: 0, fontSize: '11px', fontFamily: 'monospace', color: 'rgba(232,228,220,0.35)', textTransform: 'uppercase', letterSpacing: '0.5px', paddingTop: '1px' }}>{label}</span>
      <span style={{ fontSize: '13px', color: 'rgba(232,228,220,0.8)' }}>{value}</span>
    </div>
  )
}

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ background: '#0c1a27', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.07)', padding: '20px', ...style }}>
      {children}
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(232,228,220,0.35)', margin: '0 0 14px' }}>{children}</p>
}

// ─── Main component ──────────────────────────────────────────────────────────────

export default function LeadDetailClient({ lead, images, notes, activity }: {
  lead: Lead
  images: LeadImage[]
  notes: LeadNote[]
  activity: Activity[]
}) {
  const [status, setStatus] = useState(lead.status)
  const [noteText, setNoteText] = useState('')
  const [localNotes, setLocalNotes] = useState(notes)
  const [savingNote, setSavingNote] = useState(false)
  const [selectedImage, setSelectedImage] = useState<LeadImage | null>(null)

  const handleStatusChange = async (newStatus: string) => {
    setStatus(newStatus)
    await fetch('/api/admin/leads/update', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: lead.id, status: newStatus }),
    })
  }

  const handleAddNote = async () => {
    if (!noteText.trim()) return
    setSavingNote(true)
    const res = await fetch('/api/admin/leads/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ leadId: lead.id, content: noteText }),
    })
    if (res.ok) {
      const { note } = await res.json()
      setLocalNotes(prev => [note, ...prev])
      setNoteText('')
    }
    setSavingNote(false)
  }

  const services = lead.services || []
  const location = [lead.address_line1, lead.city, lead.state, lead.zip].filter(Boolean).join(', ')

  return (
    <div style={{ padding: 'clamp(16px, 4vw, 32px)', maxWidth: '1200px', background: '#060e18', minHeight: '100vh' }}>

      {/* Back + header */}
      <div style={{ marginBottom: '24px' }}>
        <Link href="/admin/leads" style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1cb8b3', textDecoration: 'none', marginBottom: '16px', display: 'inline-block' }}>
          ← Back to Leads
        </Link>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
              <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#1cb8b3', margin: 0 }}>
                BRE-{String(lead.lead_number).padStart(4, '0')}
              </p>
              <p style={{ fontSize: '11px', fontFamily: 'monospace', color: 'rgba(232,228,220,0.3)', margin: 0 }}>{fmt(lead.created_at)}</p>
            </div>
            <h1 style={{ fontSize: '28px', fontWeight: 400, margin: 0, color: '#e8e4dc' }}>
              {lead.first_name} {lead.last_name}
            </h1>
            <p style={{ margin: '4px 0 0', fontSize: '14px', color: 'rgba(232,228,220,0.5)' }}>
              {services.map(s => SERVICE_LABELS[s] || s).join(' + ')} · {lead.city || 'Location TBD'}
            </p>
          </div>

          {/* Score badge */}
          <div style={{ background: '#0c1a27', border: `1px solid ${scoreColor(lead.lead_score)}40`, borderRadius: '12px', padding: '14px 20px', textAlign: 'center', minWidth: '100px' }}>
            <p style={{ margin: '0 0 2px', fontFamily: 'monospace', fontSize: '9px', color: 'rgba(232,228,220,0.3)', textTransform: 'uppercase', letterSpacing: '2px' }}>Score</p>
            <p style={{ margin: 0, fontSize: '30px', fontWeight: 700, color: scoreColor(lead.lead_score), lineHeight: 1 }}>{lead.lead_score}</p>
            <p style={{ margin: '4px 0 0', fontSize: '12px' }}>{lead.score_badge}</p>
          </div>
        </div>
      </div>

      {/* Pipeline status */}
      <Card style={{ marginBottom: '20px' }}>
        <SectionTitle>Pipeline Status</SectionTitle>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {PIPELINE.map(p => (
            <button
              key={p.value}
              onClick={() => handleStatusChange(p.value)}
              style={{
                padding: '8px 16px', borderRadius: '8px', fontSize: '13px', cursor: 'pointer',
                fontFamily: 'monospace', border: 'none', transition: 'all 0.15s',
                background: status === p.value ? p.color : 'rgba(255,255,255,0.04)',
                color: status === p.value ? '#060d14' : 'rgba(232,228,220,0.5)',
                fontWeight: status === p.value ? 600 : 400,
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </Card>

      <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'minmax(0, 1fr)',
                gap: '16px'
              }} className="admin-lead-grid">

        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* Contact info */}
          <Card>
            <SectionTitle>Contact</SectionTitle>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <a href={`tel:${lead.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', background: 'rgba(28,184,179,0.1)', border: '1px solid rgba(28,184,179,0.25)', borderRadius: '8px', color: '#1cb8b3', textDecoration: 'none', fontSize: '13px', fontFamily: 'monospace' }}>
                📞 {lead.phone}
              </a>
              <a href={`mailto:${lead.email}`} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'rgba(232,228,220,0.7)', textDecoration: 'none', fontSize: '13px' }}>
                ✉ {lead.email}
              </a>
            </div>
            <Row label="Contact Pref" value={`${lead.contact_pref || '—'}${lead.best_time ? ' · ' + lead.best_time : ''}`} />
            <Row label="Location" value={location || '—'} />
            <Row label="Property Type" value={lead.property_type ? `${lead.property_type} · Built ${lead.year_built || '—'}` : null} />
          </Card>

          {/* Qualification */}
          <Card>
            <SectionTitle>Lead Qualification</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
              {[
                { label: 'Owns Property', value: lead.owns_property },
                { label: 'Decision Maker', value: lead.is_decision_maker },
                { label: 'Getting Bids', value: lead.getting_bids },
                { label: 'Budget', value: lead.budget },
                { label: 'Timeline', value: lead.timeline },
                { label: 'Heard Via', value: lead.hear_about_us },
              ].map(({ label, value }) => value && (
                <div key={label} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '8px', padding: '10px 12px' }}>
                  <p style={{ margin: '0 0 2px', fontSize: '10px', fontFamily: 'monospace', color: 'rgba(232,228,220,0.35)', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</p>
                  <p style={{ margin: 0, fontSize: '13px', color: label === 'Budget' ? '#c8923a' : '#e8e4dc', fontWeight: label === 'Budget' ? 600 : 400 }}>{value}</p>
                </div>
              ))}
            </div>

            {lead.score_signals?.length > 0 && (
              <div style={{ marginBottom: '10px' }}>
                <p style={{ margin: '0 0 8px', fontSize: '11px', fontFamily: 'monospace', color: '#4ade80', textTransform: 'uppercase', letterSpacing: '1px' }}>Positive signals</p>
                {lead.score_signals.map(s => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <span style={{ color: '#4ade80', fontSize: '12px' }}>✓</span>
                    <span style={{ fontSize: '12px', color: 'rgba(232,228,220,0.65)' }}>{s}</span>
                  </div>
                ))}
              </div>
            )}
            {lead.score_flags?.length > 0 && (
              <div>
                <p style={{ margin: '0 0 8px', fontSize: '11px', fontFamily: 'monospace', color: '#f87171', textTransform: 'uppercase', letterSpacing: '1px' }}>Flags</p>
                {lead.score_flags.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <span style={{ color: '#f87171', fontSize: '12px' }}>⚠</span>
                    <span style={{ fontSize: '12px', color: 'rgba(232,228,220,0.65)' }}>{f}</span>
                  </div>
                ))}
              </div>
            )}
          </Card>

          {/* Service-specific data */}
          {services.map(svc => {
            const data = lead.service_data?.[svc]
            if (!data) return null
            const entries = Object.entries(data).filter(([, v]) => v && (!Array.isArray(v) || (v as unknown[]).length > 0))
            if (!entries.length) return null
            return (
              <Card key={svc}>
                <SectionTitle>{SERVICE_LABELS[svc] || svc} — Project Details</SectionTitle>
                {entries.map(([k, v]) => (
                  <Row key={k} label={k.replace(/([A-Z])/g, ' $1').trim()} value={Array.isArray(v) ? (v as string[]).join(', ') : String(v)} />
                ))}
              </Card>
            )
          })}

          {/* Notes from client */}
          {lead.notes && (
            <Card>
              <SectionTitle>Client Notes</SectionTitle>
              <p style={{ fontSize: '14px', color: 'rgba(232,228,220,0.75)', lineHeight: 1.7, margin: 0 }}>{lead.notes}</p>
            </Card>
          )}

          {/* Photos + AI analysis */}
          {images.length > 0 && (
            <Card>
              <SectionTitle>Uploaded Photos — AI Analysis</SectionTitle>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', marginBottom: '16px' }}>
                {images.map(img => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImage(img)}
                    style={{ position: 'relative', aspectRatio: '1', borderRadius: '10px', overflow: 'hidden', border: selectedImage?.id === img.id ? '2px solid #1cb8b3' : '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', background: 'none', padding: 0 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.public_url} alt="Lead upload" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    {img.ai_analyzed && img.ai_analysis?.severity && (
                      <div style={{ position: 'absolute', bottom: '4px', right: '4px', background: SEVERITY_COLOR[img.ai_analysis.severity] || '#6b7280', borderRadius: '4px', padding: '2px 5px', fontSize: '9px', fontFamily: 'monospace', color: '#fff' }}>
                        {img.ai_analysis.severity}
                      </div>
                    )}
                    {!img.ai_analyzed && (
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace' }}>analyzing...</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Selected image analysis */}
              {selectedImage?.ai_analysis && (
                <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '16px' }}>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    {selectedImage.ai_analysis.severity && (
                      <span style={{ padding: '3px 10px', borderRadius: '6px', fontSize: '11px', fontFamily: 'monospace', background: `${SEVERITY_COLOR[selectedImage.ai_analysis.severity]}20`, color: SEVERITY_COLOR[selectedImage.ai_analysis.severity], border: `1px solid ${SEVERITY_COLOR[selectedImage.ai_analysis.severity]}40` }}>
                        {selectedImage.ai_analysis.severity} severity
                      </span>
                    )}
                    {selectedImage.ai_analysis.urgency && (
                      <span style={{ padding: '3px 10px', borderRadius: '6px', fontSize: '11px', fontFamily: 'monospace', background: `${URGENCY_COLOR[selectedImage.ai_analysis.urgency] || '#6b7280'}20`, color: URGENCY_COLOR[selectedImage.ai_analysis.urgency] || '#6b7280', border: `1px solid ${URGENCY_COLOR[selectedImage.ai_analysis.urgency] || '#6b7280'}40` }}>
                        {selectedImage.ai_analysis.urgency}
                      </span>
                    )}
                  </div>

                  {selectedImage.ai_analysis.summary && (
                    <p style={{ fontSize: '14px', color: 'rgba(232,228,220,0.85)', lineHeight: 1.7, margin: '0 0 12px' }}>{selectedImage.ai_analysis.summary}</p>
                  )}
                  {selectedImage.ai_analysis.contractor_notes && (
                    <div style={{ background: 'rgba(200,146,58,0.06)', borderLeft: '3px solid rgba(200,146,58,0.4)', borderRadius: '0 8px 8px 0', padding: '10px 14px', marginBottom: '12px' }}>
                      <p style={{ margin: '0 0 4px', fontSize: '10px', fontFamily: 'monospace', color: 'rgba(200,146,58,0.6)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Contractor Notes</p>
                      <p style={{ margin: 0, fontSize: '13px', color: 'rgba(232,228,220,0.75)', lineHeight: 1.6 }}>{selectedImage.ai_analysis.contractor_notes}</p>
                    </div>
                  )}
                  {selectedImage.ai_analysis.scope_estimate && (
                    <Row label="Scope Estimate" value={selectedImage.ai_analysis.scope_estimate} />
                  )}
                  {selectedImage.ai_analysis.affected_area && (
                    <Row label="Affected Area" value={selectedImage.ai_analysis.affected_area} />
                  )}
                  {selectedImage.ai_analysis.materials_visible?.length && (
                    <Row label="Materials" value={selectedImage.ai_analysis.materials_visible.join(', ')} />
                  )}
                  {selectedImage.ai_analysis.questions_to_ask?.length && (
                    <div style={{ marginTop: '12px' }}>
                      <p style={{ margin: '0 0 6px', fontSize: '10px', fontFamily: 'monospace', color: 'rgba(28,184,179,0.6)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Questions to ask</p>
                      {selectedImage.ai_analysis.questions_to_ask.map((q, i) => (
                        <p key={i} style={{ margin: '0 0 4px', fontSize: '12px', color: 'rgba(232,228,220,0.6)' }}>· {q}</p>
                      ))}
                    </div>
                  )}
                  {selectedImage.ai_analysis.red_flags?.length && (
                    <div style={{ marginTop: '12px', background: 'rgba(239,68,68,0.05)', borderRadius: '8px', padding: '10px 14px' }}>
                      <p style={{ margin: '0 0 6px', fontSize: '10px', fontFamily: 'monospace', color: '#f87171', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Red Flags</p>
                      {selectedImage.ai_analysis.red_flags.map((f, i) => (
                        <p key={i} style={{ margin: '0 0 3px', fontSize: '12px', color: '#fca5a5' }}>⚠ {f}</p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </Card>
          )}
        </div>

        {/* Right column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* Add note */}
          <Card>
            <SectionTitle>Add Note</SectionTitle>
            <textarea
              value={noteText}
              onChange={e => setNoteText(e.target.value)}
              placeholder="Call notes, site visit observations, follow-up actions..."
              rows={4}
              style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '10px', padding: '12px', fontSize: '13px', color: '#e8e4dc', resize: 'vertical', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }}
            />
            <button
              onClick={handleAddNote}
              disabled={savingNote || !noteText.trim()}
              style={{ marginTop: '8px', width: '100%', padding: '10px', background: noteText.trim() ? '#1cb8b3' : 'rgba(255,255,255,0.04)', color: noteText.trim() ? '#060d14' : 'rgba(232,228,220,0.25)', border: 'none', borderRadius: '8px', fontSize: '13px', fontFamily: 'monospace', cursor: noteText.trim() ? 'pointer' : 'not-allowed', fontWeight: 600 }}
            >
              {savingNote ? 'Saving...' : 'Save Note'}
            </button>
          </Card>

          {/* Notes list */}
          {localNotes.length > 0 && (
            <Card>
              <SectionTitle>Notes ({localNotes.length})</SectionTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {localNotes.map(note => (
                  <div key={note.id} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '8px', padding: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#1cb8b3' }}>{note.author}</span>
                      <span style={{ fontSize: '10px', fontFamily: 'monospace', color: 'rgba(232,228,220,0.3)' }}>
                        {new Date(note.created_at).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: '13px', color: 'rgba(232,228,220,0.75)', lineHeight: 1.6 }}>{note.content}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Activity log */}
          {activity.length > 0 && (
            <Card>
              <SectionTitle>Activity</SectionTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {activity.map(a => (
                  <div key={a.id} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1cb8b3', flexShrink: 0, marginTop: '5px' }} />
                    <div>
                      <p style={{ margin: 0, fontSize: '12px', color: 'rgba(232,228,220,0.6)', fontFamily: 'monospace' }}>{a.action}</p>
                      <p style={{ margin: '2px 0 0', fontSize: '10px', color: 'rgba(232,228,220,0.25)', fontFamily: 'monospace' }}>
                        {a.actor} · {new Date(a.created_at).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
