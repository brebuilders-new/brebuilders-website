'use client'

import { useState } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'

const POSITIONS = [
  'General Laborer',
  'Framing Carpenter',
  'Finish Carpenter',
  'Concrete Worker',
  'Project Manager',
  'Site Supervisor',
  'Estimator',
  'Apprentice',
  'Other / Multiple',
]

function SL({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-7 h-px bg-teal flex-shrink-0" />
      <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{text}</span>
    </div>
  )
}

export default function CareersPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', email: '',
    position: '', experience: '', licensed: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.firstName || !form.phone || !form.position) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service: `CAREERS: ${form.position}` }),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Nav />
      <main className="pt-28 pb-24 bg-deep min-h-screen">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">

            {/* Left: job info */}
            <div>
              <SL text="Join Our Team" />
              <h1 className="font-display text-[clamp(36px,5vw,66px)] font-light leading-[0.95] tracking-tight text-cream mb-5">
                Build Something<br />
                <span className="italic text-teal">Worth Showing.</span>
              </h1>
              <p className="text-[15px] text-cream/55 leading-relaxed mb-8">
                BRE Builders is a licensed general contractor based in Reno, NV. We take on residential
                and commercial projects across Northern Nevada and California. We work with craftspeople
                who take their trade seriously.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  { title: 'Consistent Work', desc: 'Active project pipeline across Reno, Sparks, Lake Tahoe, and Northern California.' },
                  { title: 'Skilled Team', desc: 'Work alongside licensed, experienced contractors who do things right the first time.' },
                  { title: 'All Project Types', desc: 'ADU construction, structural repairs, custom homes, commercial TI, decks, concrete.' },
                  { title: 'Nevada & California', desc: 'Licensed in both states — opportunities across the full BRE service area.' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-display text-[16px] text-cream mb-0.5">{item.title}</div>
                      <div className="text-[13px] text-cream/45">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Open positions */}
              <SL text="Open Positions" />
              <div className="grid grid-cols-2 gap-2 mb-8">
                {POSITIONS.slice(0, -1).map(p => (
                  <div key={p} className="text-[13px] text-cream/55 border border-white/[0.07] px-3 py-2 rounded-lg flex items-center gap-2">
                    <span className="text-teal text-[11px]">✓</span>{p}
                  </div>
                ))}
              </div>

              <div className="bg-panel rounded-xl p-5 border border-white/[0.055]">
                <p className="font-mono text-[10px] tracking-[2px] uppercase text-cream/30 mb-2">Contact</p>
                <a href={`mailto:${SITE.email}`} className="text-[14px] text-teal hover:text-cream transition-colors">{SITE.email}</a>
                <p className="font-mono text-[11px] text-cream/30 mt-1">or use the form →</p>
              </div>
            </div>

            {/* Right: application form */}
            <div className="bg-panel rounded-2xl border border-white/[0.06] p-6 lg:p-8">
              {status === 'done' ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">✓</div>
                  <h2 className="font-display text-[26px] text-cream mb-3">Application Received</h2>
                  <p className="text-[14px] text-cream/50">We&apos;ll be in touch if there&apos;s a fit. Thank you for reaching out.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <p className="font-mono text-[10px] tracking-[3px] uppercase text-teal/70 mb-3">Position of Interest *</p>
                    <div className="grid grid-cols-2 gap-2">
                      {POSITIONS.map(p => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setForm({ ...form, position: p })}
                          className={`p-3 rounded-xl border text-left text-[13px] transition-all font-display ${
                            form.position === p
                              ? 'border-teal bg-teal/[0.08] text-cream'
                              : 'border-white/[0.07] text-cream/50 hover:border-teal/30'
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-[10px] tracking-wider uppercase text-cream/40 mb-2 block">First Name *</label>
                      <input type="text" required value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} className="w-full bg-deep border border-white/[0.07] rounded-lg px-4 py-3 text-[14px] text-cream focus:border-teal/50 focus:outline-none transition-colors" placeholder="Steve" />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] tracking-wider uppercase text-cream/40 mb-2 block">Last Name</label>
                      <input type="text" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} className="w-full bg-deep border border-white/[0.07] rounded-lg px-4 py-3 text-[14px] text-cream focus:border-teal/50 focus:outline-none transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-[10px] tracking-wider uppercase text-cream/40 mb-2 block">Phone *</label>
                      <input type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full bg-deep border border-white/[0.07] rounded-lg px-4 py-3 text-[14px] text-cream focus:border-teal/50 focus:outline-none transition-colors" placeholder="(775) 555-0100" />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] tracking-wider uppercase text-cream/40 mb-2 block">Email</label>
                      <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full bg-deep border border-white/[0.07] rounded-lg px-4 py-3 text-[14px] text-cream focus:border-teal/50 focus:outline-none transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] tracking-wider uppercase text-cream/40 mb-2 block">Years of Experience</label>
                    <select value={form.experience} onChange={e => setForm({ ...form, experience: e.target.value })} className="w-full bg-deep border border-white/[0.07] rounded-lg px-4 py-3 text-[14px] text-cream focus:border-teal/50 focus:outline-none transition-colors">
                      <option value="">Select</option>
                      <option value="0-1">Less than 1 year</option>
                      <option value="1-3">1–3 years</option>
                      <option value="3-5">3–5 years</option>
                      <option value="5-10">5–10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] tracking-wider uppercase text-cream/40 mb-2 block">Licensed or Certified?</label>
                    <select value={form.licensed} onChange={e => setForm({ ...form, licensed: e.target.value })} className="w-full bg-deep border border-white/[0.07] rounded-lg px-4 py-3 text-[14px] text-cream focus:border-teal/50 focus:outline-none transition-colors">
                      <option value="">Select</option>
                      <option value="none">No license / certification</option>
                      <option value="nevada">Nevada license</option>
                      <option value="california">California license</option>
                      <option value="both">Licensed in both states</option>
                      <option value="other">Other certification</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] tracking-wider uppercase text-cream/40 mb-2 block">Tell us about your experience</label>
                    <textarea rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full bg-deep border border-white/[0.07] rounded-lg px-4 py-3 text-[14px] text-cream focus:border-teal/50 focus:outline-none transition-colors resize-none" placeholder="Types of projects you've worked on, tools you're proficient with, anything else relevant." />
                  </div>

                  <button type="submit" disabled={status === 'sending' || !form.position} className="btn-primary w-full justify-center py-4 text-[15px] disabled:opacity-50">
                    {status === 'sending' ? 'Submitting...' : 'Submit Application →'}
                  </button>

                  {status === 'error' && (
                    <p className="font-mono text-[12px] text-red-400 text-center">
                      Something went wrong. Email us directly at {SITE.email}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
