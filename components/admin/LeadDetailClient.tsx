'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Lead {
  id: string; lead_number: number; first_name: string; last_name: string
  email: string; phone: string; contact_pref: string; best_time: string
  owns_property: string; is_decision_maker: string; getting_bids: string
  services: string[]; address_line1: string; city: string; state: string; zip: string
  property_type: string; year_built: string; service_data: Record<string, Record<string, unknown>>
  budget: string; timeline: string; notes: string; hear_about_us: string
  lead_score: number; score_badge: string; score_signals: string[]; score_flags: string[]
  status: string; assigned_to: string; created_at: string; updated_at: string
}
interface LeadImage {
  id: string; service: string; public_url: string; ai_analyzed: boolean
  ai_analysis: { summary?: string; damage_type?: string; severity?: string; urgency?: string; affected_area?: string; materials_visible?: string[]; contractor_notes?: string; scope_estimate?: string; questions_to_ask?: string[]; red_flags?: string[]; photo_quality?: string; needs_more_photos?: boolean; more_photos_note?: string } | null
}
interface LeadNote { id: string; author: string; content: string; is_pinned: boolean; created_at: string }
interface Activity { id: string; actor: string; action: string; metadata: Record<string, unknown>; created_at: string }

const SERVICE_LABELS: Record<string, string> = {
  'adu': 'ADU / Guest House', 'additions': 'Home Addition', 'new-home': 'New Custom Home',
  'kitchen-bath': 'Kitchen & Bath', 'repairs': 'Structural Repairs', 'decks': 'Decks & Outdoor',
  'commercial': 'Commercial / TI', 'other': 'Other',
}

const PIPELINE = [
  { value: 'new',        label: 'New',        active: '#2563eb', activeTxt: '#ffffff' },
  { value: 'contacted',  label: 'Contacted',  active: '#92400e', activeTxt: '#ffffff' },
  { value: 'site_visit', label: 'Site Visit', active: '#7c3aed', activeTxt: '#ffffff' },
  { value: 'quoted',     label: 'Quoted',     active: '#c2410c', activeTxt: '#ffffff' },
  { value: 'won',        label: 'Won',        active: '#15803d', activeTxt: '#ffffff' },
  { value: 'lost',       label: 'Lost',       active: '#b91c1c', activeTxt: '#ffffff' },
]

const SEVERITY_COLOR: Record<string, string> = {
  minor: '#2563eb', moderate: '#b45309', severe: '#c2410c', critical: '#b91c1c',
}
const URGENCY_COLOR: Record<string, string> = {
  'immediate': '#b91c1c', 'within-1-week': '#c2410c', 'within-2-weeks': '#b45309',
  'within-month': '#2563eb', 'non-urgent': '#6b7280', 'informational': '#6b7280',
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
function scoreBorder(s: number) {
  if (s >= 70) return '#bbf7d0'
  if (s >= 45) return '#fde68a'
  if (s >= 20) return '#bfdbfe'
  return '#e5e7eb'
}

function fmt(d: string) {
  return new Date(d).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })
}

function Row({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null
  return (
    <div style={{ display: 'flex', gap: '12px', padding: '8px 0', borderBottom: '1px solid #f3f4f6' }}>
      <span style={{ width: '140px', flexShrink: 0, fontSize: '11px', fontFamily: 'monospace', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.5px', paddingTop: '1px' }}>{label}</span>
      <span style={{ fontSize: '13px', color: '#374151' }}>{value}</span>
    </div>
  )
}

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ background: '#ffffff', borderRadius: '14px', border: '1px solid #e5e7eb', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', ...style }}>
      {children}
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#9ca3af', margin: '0 0 14px' }}>{children}</p>
}

export default function LeadDetailClient({ lead, images, notes, activity }: {
  lead: Lead; images: LeadImage[]; notes: LeadNote[]; activity: Activity[]
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
    <div style={{ padding: 'clamp(16px, 4vw, 32px)', maxWidth: '1200px', background: '#f9fafb', minHeight: '100vh' }}>

      {/* Back + header */}
      <div style={{ marginBottom: '24px' }}>
        <Link href="/admin/leads" style={{ fontFamily: 'monospace', fontSize: '11px', color: '#0284c7', textDecoration: 'none', marginBottom: '16px', display: 'inline-block' }}>
          ← Back to Leads
        </Link>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
              <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#c07d3e', margin: 0 }}>
                BRE-{String(lead.lead_number).padStart(4, '0')}
              </p>
              <p style={{ fontSize: '11px', fontFamily: 'monospace', color: '#9ca3af', margin: 0 }}>{fmt(lead.created_at)}</p>
            </div>
            <h1 style={{ fontSize: '28px', fontWeight: 600, margin: 0, color: '#111827' }}>
              {lead.first_name} {lead.last_name}
            </h1>
            <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>
              {services.map(s => SERVICE_LABELS[s] || s).join(' + ')} · {lead.city || 'Location TBD'}
            </p>
          </div>

          {/* Score badge */}
          <div style={{ background: scoreBg(lead.lead_score), border: `1px solid ${scoreBorder(lead.lead_score)}`, borderRadius: '12px', padding: '14px 20px', textAlign: 'center', minWidth: '100px' }}>
            <p style={{ margin: '0 0 2px', fontFamily: 'monospace', fontSize: '9px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '2px' }}>Score</p>
            <p style={{ margin: 0, fontSize: '30px', fontWeight: 700, color: scoreColor(lead.lead_score), lineHeight: 1 }}>{lead.lead_score}</p>
            <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#374151' }}>{lead.score_badge}</p>
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
                fontFamily: 'monospace', border: '1px solid', transition: 'all 0.15s',
                background: status === p.value ? p.active : '#f9fafb',
                color: status === p.value ? p.activeTxt : '#6b7280',
                borderColor: status === p.value ? p.active : '#e5e7eb',
                fontWeight: status === p.value ? 600 : 400,
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '16px' }} className="admin-lead-grid">

        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* Contact info */}
          <Card>
            <SectionTitle>Contact</SectionTitle>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <a href={`tel:${lead.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '8px', color: '#0284c7', textDecoration: 'none', fontSize: '13px', fontFamily: 'monospace' }}>
                📞 {lead.phone}
              </a>
              <a href={`mailto:${lead.email}`} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', color: '#374151', textDecoration: 'none', fontSize: '13px' }}>
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
                <div key={label} style={{ background: label === 'Budget' ? '#fffbeb' : '#f9fafb', borderRadius: '8px', padding: '10px 12px', border: label === 'Budget' ? '1px solid #fde68a' : '1px solid #f3f4f6' }}>
                  <p style={{ margin: '0 0 2px', fontSize: '10px', fontFamily: 'monospace', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</p>
                  <p style={{ margin: 0, fontSize: '13px', color: label === 'Budget' ? '#92400e' : '#111827', fontWeight: label === 'Budget' ? 600 : 400 }}>{value}</p>
                </div>
              ))}
            </div>

            {lead.score_signals?.length > 0 && (
              <div style={{ marginBottom: '10px' }}>
                <p style={{ margin: '0 0 8px', fontSize: '11px', fontFamily: 'monospace', color: '#15803d', textTransform: 'uppercase', letterSpacing: '1px' }}>Positive signals</p>
                {lead.score_signals.map(s => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <span style={{ color: '#15803d', fontSize: '12px' }}>✓</span>
                    <span style={{ fontSize: '12px', color: '#374151' }}>{s}</span>
                  </div>
                ))}
              </div>
            )}
            {lead.score_flags?.length > 0 && (
              <div>
                <p style={{ margin: '0 0 8px', fontSize: '11px', fontFamily: 'monospace', color: '#b91c1c', textTransform: 'uppercase', letterSpacing: '1px' }}>Flags</p>
                {lead.score_flags.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <span style={{ color: '#b91c1c', fontSize: '12px' }}>⚠</span>
                    <span style={{ fontSize: '12px', color: '#374151' }}>{f}</span>
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
              <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: 0 }}>{lead.notes}</p>
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
                    style={{ position: 'relative', aspectRatio: '1', borderRadius: '10px', overflow: 'hidden', border: selectedImage?.id === img.id ? '2px solid #0284c7' : '1px solid #e5e7eb', cursor: 'pointer', background: 'none', padding: 0 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.public_url} alt="Lead upload" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    {img.ai_analyzed && img.ai_analysis?.severity && (
                      <div style={{ position: 'absolute', bottom: '4px', right: '4px', background: SEVERITY_COLOR[img.ai_analysis.severity] || '#6b7280', borderRadius: '4px', padding: '2px 5px', fontSize: '9px', fontFamily: 'monospace', color: '#fff' }}>
                        {img.ai_analysis.severity}
                      </div>
                    )}
                    {!img.ai_analyzed && (
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '10px', color: '#9ca3af', fontFamily: 'monospace' }}>analyzing...</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {selectedImage?.ai_analysis && (
                <div style={{ background: '#f9fafb', borderRadius: '10px', padding: '16px', border: '1px solid #e5e7eb' }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    {selectedImage.ai_analysis.severity && (
                      <span style={{ padding: '3px 10px', borderRadius: '6px', fontSize: '11px', fontFamily: 'monospace', background: '#fff', color: SEVERITY_COLOR[selectedImage.ai_analysis.severity], border: `1px solid ${SEVERITY_COLOR[selectedImage.ai_analysis.severity]}40` }}>
                        {selectedImage.ai_analysis.severity} severity
                      </span>
                    )}
                    {selectedImage.ai_analysis.urgency && (
                      <span style={{ padding: '3px 10px', borderRadius: '6px', fontSize: '11px', fontFamily: 'monospace', background: '#fff', color: URGENCY_COLOR[selectedImage.ai_analysis.urgency] || '#6b7280', border: `1px solid ${(URGENCY_COLOR[selectedImage.ai_analysis.urgency] || '#6b7280')}40` }}>
                        {selectedImage.ai_analysis.urgency}
                      </span>
                    )}
                  </div>
                  {selectedImage.ai_analysis.summary && (
                    <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: '0 0 12px' }}>{selectedImage.ai_analysis.summary}</p>
                  )}
                  {selectedImage.ai_analysis.contractor_notes && (
                    <div style={{ background: '#fffbeb', borderLeft: '3px solid #d97706', borderRadius: '0 8px 8px 0', padding: '10px 14px', marginBottom: '12px' }}>
                      <p style={{ margin: '0 0 4px', fontSize: '10px', fontFamily: 'monospace', color: '#92400e', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Contractor Notes</p>
                      <p style={{ margin: 0, fontSize: '13px', color: '#374151', lineHeight: 1.6 }}>{selectedImage.ai_analysis.contractor_notes}</p>
                    </div>
                  )}
                  {selectedImage.ai_analysis.scope_estimate && <Row label="Scope Estimate" value={selectedImage.ai_analysis.scope_estimate} />}
                  {selectedImage.ai_analysis.affected_area && <Row label="Affected Area" value={selectedImage.ai_analysis.affected_area} />}
                  {selectedImage.ai_analysis.materials_visible?.length && <Row label="Materials" value={selectedImage.ai_analysis.materials_visible.join(', ')} />}
                  {selectedImage.ai_analysis.questions_to_ask?.length && (
                    <div style={{ marginTop: '12px' }}>
                      <p style={{ margin: '0 0 6px', fontSize: '10px', fontFamily: 'monospace', color: '#0284c7', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Questions to ask</p>
                      {selectedImage.ai_analysis.questions_to_ask.map((q, i) => (
                        <p key={i} style={{ margin: '0 0 4px', fontSize: '12px', color: '#6b7280' }}>· {q}</p>
                      ))}
                    </div>
                  )}
                  {selectedImage.ai_analysis.red_flags?.length && (
                    <div style={{ marginTop: '12px', background: '#fef2f2', borderRadius: '8px', padding: '10px 14px', border: '1px solid #fecaca' }}>
                      <p style={{ margin: '0 0 6px', fontSize: '10px', fontFamily: 'monospace', color: '#b91c1c', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Red Flags</p>
                      {selectedImage.ai_analysis.red_flags.map((f, i) => (
                        <p key={i} style={{ margin: '0 0 3px', fontSize: '12px', color: '#b91c1c' }}>⚠ {f}</p>
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
              style={{ width: '100%', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '12px', fontSize: '13px', color: '#111827', resize: 'vertical', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }}
            />
            <button
              onClick={handleAddNote}
              disabled={savingNote || !noteText.trim()}
              style={{ marginTop: '8px', width: '100%', padding: '10px', background: noteText.trim() ? '#0284c7' : '#f3f4f6', color: noteText.trim() ? '#ffffff' : '#9ca3af', border: 'none', borderRadius: '8px', fontSize: '13px', fontFamily: 'monospace', cursor: noteText.trim() ? 'pointer' : 'not-allowed', fontWeight: 600 }}
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
                  <div key={note.id} style={{ background: '#f9fafb', borderRadius: '8px', padding: '12px', border: '1px solid #f3f4f6' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#0284c7' }}>{note.author}</span>
                      <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#9ca3af' }}>
                        {new Date(note.created_at).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: '13px', color: '#374151', lineHeight: 1.6 }}>{note.content}</p>
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
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0284c7', flexShrink: 0, marginTop: '5px' }} />
                    <div>
                      <p style={{ margin: 0, fontSize: '12px', color: '#374151', fontFamily: 'monospace' }}>{a.action}</p>
                      <p style={{ margin: '2px 0 0', fontSize: '10px', color: '#9ca3af', fontFamily: 'monospace' }}>
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
