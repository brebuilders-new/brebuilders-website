'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'

const SERVICES = [
  { id: 'adu', label: 'ADU Construction', sub: '$75K–$300K · Reno & Lake Tahoe' },
  { id: 'repairs', label: 'Structural Repairs', sub: 'Foundation, framing, water intrusion' },
  { id: 'kitchen-bath', label: 'Kitchen & Bath Remodel', sub: 'Full scope remodeling' },
  { id: 'additions', label: 'Home Addition', sub: 'Room additions, second stories' },
  { id: 'new-home', label: 'Custom Home Build', sub: 'Ground-up construction' },
  { id: 'decks', label: 'Deck Build or Repair', sub: 'New construction or structural repair' },
  { id: 'concrete', label: 'Concrete Work', sub: 'Slabs, foundations, driveways' },
  { id: 'commercial', label: 'Commercial', sub: 'TI, offices, warehouses, retail' },
  { id: 'hauling', label: 'Hauling & Removal', sub: 'Debris, junk, full cleanouts' },
  { id: 'other', label: 'Other / Not Sure', sub: 'Tell us what you need' },
]

function ContactForm() {
  const searchParams = useSearchParams()
  const defaultService = searchParams.get('service') || ''

  const [service, setService] = useState(defaultService)
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', city: '', message: '', how: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!service || !form.firstName || !form.phone) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service }),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="bg-teal/[0.06] border border-teal/25 rounded-2xl p-10 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h2 className="font-display text-[28px] text-cream mb-3">Request Received</h2>
        <p className="text-[15px] text-cream/55 mb-6">
          We&apos;ll be in touch within 24 hours. In the meantime, call us directly if urgent.
        </p>
        <a href={SITE.phoneHref} className="btn-primary inline-flex">📞 {SITE.phone}</a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Step 1: Service */}
      <div>
        <label className="font-mono text-[10px] tracking-[3px] uppercase text-teal/70 mb-3 block">
          What do you need? *
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setService(s.id)}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                service === s.id
                  ? 'border-teal bg-teal/[0.08] text-cream'
                  : 'border-white/[0.07] text-cream/50 hover:border-teal/30 hover:text-cream/80'
              }`}
            >
              <div className="font-display text-[15px] leading-snug">{s.label}</div>
              <div className="font-mono text-[10px] text-cream/30 mt-0.5 leading-snug">{s.sub}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Contact info */}
      {service && (
        <>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="font-mono text-[10px] tracking-wider uppercase text-cream/40 mb-2 block">First Name *</label>
              <input
                type="text" required
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className="w-full bg-panel border border-white/[0.07] rounded-lg px-4 py-3 text-[14px] text-cream focus:border-teal/50 focus:outline-none transition-colors"
                placeholder="Steve"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-wider uppercase text-cream/40 mb-2 block">Last Name</label>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="w-full bg-panel border border-white/[0.07] rounded-lg px-4 py-3 text-[14px] text-cream focus:border-teal/50 focus:outline-none transition-colors"
                placeholder="Rosenthal"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="font-mono text-[10px] tracking-wider uppercase text-cream/40 mb-2 block">Phone *</label>
              <input
                type="tel" required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-panel border border-white/[0.07] rounded-lg px-4 py-3 text-[14px] text-cream focus:border-teal/50 focus:outline-none transition-colors"
                placeholder="(775) 555-0100"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-wider uppercase text-cream/40 mb-2 block">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-panel border border-white/[0.07] rounded-lg px-4 py-3 text-[14px] text-cream focus:border-teal/50 focus:outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="font-mono text-[10px] tracking-wider uppercase text-cream/40 mb-2 block">City / Location</label>
            <input
              type="text"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className="w-full bg-panel border border-white/[0.07] rounded-lg px-4 py-3 text-[14px] text-cream focus:border-teal/50 focus:outline-none transition-colors"
              placeholder="Reno, NV"
            />
          </div>

          <div>
            <label className="font-mono text-[10px] tracking-wider uppercase text-cream/40 mb-2 block">
              Tell us about your project
            </label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-panel border border-white/[0.07] rounded-lg px-4 py-3 text-[14px] text-cream focus:border-teal/50 focus:outline-none transition-colors resize-none"
              placeholder="Briefly describe what you need. The more detail, the better we can prepare for your free estimate."
            />
          </div>

          <div>
            <label className="font-mono text-[10px] tracking-wider uppercase text-cream/40 mb-2 block">How did you find us?</label>
            <select
              value={form.how}
              onChange={(e) => setForm({ ...form, how: e.target.value })}
              className="w-full bg-panel border border-white/[0.07] rounded-lg px-4 py-3 text-[14px] text-cream focus:border-teal/50 focus:outline-none transition-colors"
            >
              <option value="">Select one</option>
              <option value="google">Google search</option>
              <option value="referral">Referral / word of mouth</option>
              <option value="yelp">Yelp</option>
              <option value="facebook">Facebook</option>
              <option value="drove-by">Drove by a job site</option>
              <option value="return">Returning customer</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary w-full justify-center py-4 text-[15px] disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending...' : 'Submit Project Request →'}
          </button>

          {status === 'error' && (
            <p className="font-mono text-[12px] text-red-400 text-center">
              Something went wrong. Please call us directly at {SITE.phone}.
            </p>
          )}

          <p className="font-mono text-[11px] text-cream/25 text-center">
            We respond within 24 hours. Your information is never shared.
          </p>
        </>
      )}
    </form>
  )
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-28 pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">

            {/* Left: contact info */}
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Get In Touch</span>
              </div>
              <h1 className="font-display text-[clamp(32px,4.5vw,58px)] font-light leading-[1.05] tracking-tight text-cream mb-4">
                Request a Free
                <br /><span className="italic text-teal">Quote or Estimate</span>
              </h1>
              <p className="text-[15px] text-cream/55 leading-relaxed mb-8">
                Free estimates after site visit. We respond within 24 hours. Licensed in Nevada and
                California since 1989.
              </p>

              <div className="space-y-4 mb-8">
                <a href={SITE.phoneHref} className="flex items-center gap-4 p-4 bg-panel rounded-xl border border-white/[0.055] hover:border-teal/30 transition-all group">
                  <div className="w-10 h-10 bg-teal/10 border border-teal/25 rounded-lg flex items-center justify-center text-teal flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-wider uppercase text-cream/30 mb-0.5">Call or Text</div>
                    <div className="text-[16px] text-cream group-hover:text-teal transition-colors">{SITE.phone}</div>
                  </div>
                </a>

                <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 p-4 bg-panel rounded-xl border border-white/[0.055] hover:border-teal/30 transition-all group">
                  <div className="w-10 h-10 bg-teal/10 border border-teal/25 rounded-lg flex items-center justify-center text-teal flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-wider uppercase text-cream/30 mb-0.5">Email</div>
                    <div className="text-[15px] text-cream group-hover:text-teal transition-colors">{SITE.email}</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-panel rounded-xl border border-white/[0.055]">
                  <div className="w-10 h-10 bg-teal/10 border border-teal/25 rounded-lg flex items-center justify-center text-teal flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-wider uppercase text-cream/30 mb-0.5">Office</div>
                    <div className="text-[14px] text-cream/60">{SITE.address}</div>
                  </div>
                </div>
              </div>

              <div className="bg-deep rounded-xl p-5 border border-teal/15">
                <p className="font-mono text-[10px] tracking-wider uppercase text-teal mb-3">Licensed in Nevada & California</p>
                <p className="text-[13px] text-cream/50 leading-relaxed">
                  NV License #0085999<br />
                  CA License #1093798<br />
                  Blue Reef Enterprises, LLC · Est. 1989
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-panel rounded-2xl border border-white/[0.06] p-6 lg:p-8">
              <Suspense fallback={<div className="text-cream/40 text-[14px]">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
