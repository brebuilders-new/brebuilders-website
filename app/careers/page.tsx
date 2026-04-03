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

const inputCls = "w-full bg-deep border border-white/[0.07] rounded-lg px-4 py-3 text-[14px] text-cream focus:border-teal/50 focus:outline-none transition-colors placeholder:text-cream/20"
const selectCls = "w-full bg-deep border border-white/[0.07] rounded-lg px-4 py-3 text-[14px] text-cream focus:border-teal/50 focus:outline-none transition-colors appearance-none"
const labelCls = "font-mono text-[10px] tracking-wider uppercase text-cream/40 mb-2 block"

export default function CareersPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    position: '',
    experience: '',
    licensed: '',
    availability: '',
    employmentStatus: '',
    workLocation: '',
    transportation: '',
    workAuth: '',
    resumeUrl: '',
    referral: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.firstName || !form.phone || !form.position) return
    setStatus('sending')
    try {
      const summary = [
        `Position: ${form.position}`,
        `Experience: ${form.experience}`,
        `Licensed: ${form.licensed}`,
        `Availability: ${form.availability}`,
        `Employment Status: ${form.employmentStatus}`,
        `Preferred Location: ${form.workLocation}`,
        `Own Transportation: ${form.transportation}`,
        `Work Authorization: ${form.workAuth}`,
        form.resumeUrl ? `Resume/Portfolio: ${form.resumeUrl}` : '',
        form.referral ? `Referral: ${form.referral}` : '',
        form.message ? `\nAbout: ${form.message}` : '',
      ].filter(Boolean).join('\n')

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          phone: form.phone,
          email: form.email,
          service: \`CAREERS: \${form.position}\`,
          message: summary,
        }),
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
          <div className="grid lg:grid-cols-[1fr_1.25fr] gap-16 items-start">

            {/* ── LEFT: job info ── */}
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

              <SL text="Open Positions" />
              <div className="grid grid-cols-2 gap-2 mb-8">
                {POSITIONS.slice(0, -1).map(p => (
                  <div key={p} className="text-[13px] text-cream/55 border border-white/[0.07] px-3 py-2 rounded-lg flex items-center gap-2">
                    <span className="text-teal text-[11px]">✓</span>{p}
                  </div>
                ))}
              </div>

              <div className="bg-panel rounded-xl p-5 border border-white/[0.055]">
                <p className="font-mono text-[10px] tracking-[2px] uppercase text-cream/30 mb-2">Contact Directly</p>
                <a href={`mailto:${SITE.email}`} className="text-[14px] text-teal hover:text-cream transition-colors">{SITE.email}</a>
                <p className="font-mono text-[11px] text-cream/30 mt-1">or use the application form →</p>
              </div>
            </div>

            {/* ── RIGHT: application form ── */}
            <div className="bg-panel rounded-2xl border border-white/[0.06] p-6 lg:p-8">
              {status === 'done' ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">✓</div>
                  <h2 className="font-display text-[28px] text-cream mb-3">Application Received</h2>
                  <p className="text-[14px] text-cream/50 max-w-[300px] mx-auto">We&apos;ll review your application and be in touch if there&apos;s a fit. Thank you.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  <div>
                    <p className="font-mono text-[10px] tracking-[3px] uppercase text-teal/70 mb-3">Position of Interest *</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {POSITIONS.map(p => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setForm(prev => ({ ...prev, position: p }))}
                          className={`p-2.5 rounded-xl border text-left text-[12px] transition-all font-display leading-tight ${
                            form.position === p
                              ? 'border-teal bg-teal/[0.10] text-cream'
                              : 'border-white/[0.07] text-cream/45 hover:border-teal/30 hover:text-cream/70'
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Contact */}
                  <div>
                    <p className={labelCls}>Personal Information</p>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <label className={labelCls}>First Name *</label>
                        <input type="text" required value={form.firstName} onChange={set('firstName')} className={inputCls} placeholder="First" />
                      </div>
                      <div>
                        <label className={labelCls}>Last Name</label>
                        <input type="text" value={form.lastName} onChange={set('lastName')} className={inputCls} placeholder="Last" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={labelCls}>Phone *</label>
                        <input type="tel" required value={form.phone} onChange={set('phone')} className={inputCls} placeholder="(775) 555-0100" />
                      </div>
                      <div>
                        <label className={labelCls}>Email</label>
                        <input type="email" value={form.email} onChange={set('email')} className={inputCls} placeholder="you@email.com" />
                      </div>
                    </div>
                  </div>

                  {/* Experience + License */}
                  <div>
                    <p className={labelCls}>Trade Background</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={labelCls}>Years of Experience</label>
                        <select value={form.experience} onChange={set('experience')} className={selectCls}>
                          <option value="">Select</option>
                          <option value="0-1">Less than 1 year</option>
                          <option value="1-3">1–3 years</option>
                          <option value="3-5">3–5 years</option>
                          <option value="5-10">5–10 years</option>
                          <option value="10+">10+ years</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>Licensed / Certified?</label>
                        <select value={form.licensed} onChange={set('licensed')} className={selectCls}>
                          <option value="">Select</option>
                          <option value="none">No license</option>
                          <option value="nevada">NV license</option>
                          <option value="california">CA license</option>
                          <option value="both">Licensed in both states</option>
                          <option value="other">Other certification</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Availability + Status */}
                  <div>
                    <p className={labelCls}>Availability</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={labelCls}>When Can You Start?</label>
                        <select value={form.availability} onChange={set('availability')} className={selectCls}>
                          <option value="">Select</option>
                          <option value="immediate">Immediately</option>
                          <option value="2weeks">Within 2 weeks</option>
                          <option value="1month">Within 1 month</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>Current Status</label>
                        <select value={form.employmentStatus} onChange={set('employmentStatus')} className={selectCls}>
                          <option value="">Select</option>
                          <option value="employed">Currently employed</option>
                          <option value="available">Available now</option>
                          <option value="sub">Independent sub / self-employed</option>
                          <option value="looking">Actively looking</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Location + Transportation */}
                  <div>
                    <p className={labelCls}>Logistics</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={labelCls}>Preferred Work Area</label>
                        <select value={form.workLocation} onChange={set('workLocation')} className={selectCls}>
                          <option value="">Select</option>
                          <option value="reno">Reno / Sparks</option>
                          <option value="tahoe">Lake Tahoe</option>
                          <option value="norcal">Northern California</option>
                          <option value="flexible">Flexible / Any</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>Reliable Transportation?</label>
                        <select value={form.transportation} onChange={set('transportation')} className={selectCls}>
                          <option value="">Select</option>
                          <option value="yes">Yes — own vehicle</option>
                          <option value="truck">Yes — truck / work vehicle</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Work auth + Referral */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelCls}>Work Authorization (US)</label>
                      <select value={form.workAuth} onChange={set('workAuth')} className={selectCls}>
                        <option value="">Select</option>
                        <option value="citizen">US Citizen</option>
                        <option value="pr">Permanent Resident</option>
                        <option value="authorized">Authorized to work</option>
                        <option value="visa">Visa / sponsorship needed</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>How Did You Hear About Us?</label>
                      <select value={form.referral} onChange={set('referral')} className={selectCls}>
                        <option value="">Select</option>
                        <option value="google">Google Search</option>
                        <option value="referral">Referral from someone</option>
                        <option value="indeed">Indeed / job board</option>
                        <option value="social">Social media</option>
                        <option value="site">BREBuilders.com</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Resume URL */}
                  <div>
                    <label className={labelCls}>Resume / Portfolio URL (optional)</label>
                    <input
                      type="url"
                      value={form.resumeUrl}
                      onChange={set('resumeUrl')}
                      className={inputCls}
                      placeholder="LinkedIn, Google Drive link, portfolio site, etc."
                    />
                  </div>

                  {/* Free text */}
                  <div>
                    <label className={labelCls}>Tell Us About Your Experience</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={set('message')}
                      className="w-full bg-deep border border-white/[0.07] rounded-lg px-4 py-3 text-[14px] text-cream focus:border-teal/50 focus:outline-none transition-colors resize-none placeholder:text-cream/20"
                      placeholder="Projects you've worked on, tools and equipment you operate, specialties, anything else you want us to know."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending' || !form.position || !form.firstName || !form.phone}
                    className="btn-primary w-full justify-center py-4 text-[15px] disabled:opacity-40"
                  >
                    {status === 'sending' ? 'Submitting…' : 'Submit Application →'}
                  </button>

                  <p className="font-mono text-[10px] text-cream/25 text-center">
                    Fields marked * are required. We respond to all applications within 5 business days.
                  </p>

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
