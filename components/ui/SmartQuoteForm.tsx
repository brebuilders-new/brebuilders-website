'use client'

import { useState, useCallback, useRef, useEffect } from 'react'

// ─── Types ──────────────────────────────────────────────────────────────────────

export type ServiceId =
  | 'adu' | 'additions' | 'new-home' | 'kitchen-bath'
  | 'repairs' | 'decks' | 'commercial' | 'other'

// Services that support image upload
export const IMAGE_UPLOAD_SERVICES: ServiceId[] = ['repairs', 'decks', 'kitchen-bath']

interface FormState {
  // Step 1 — multi-select
  services: ServiceId[]
  // Step 2 — Contact + Qualification
  firstName: string
  lastName: string
  phone: string
  email: string
  contactPref: 'call' | 'text' | 'email' | ''
  bestTime: 'morning' | 'midday' | 'afternoon' | 'evening' | ''
  ownsProperty: 'yes' | 'no' | 'escrow' | ''
  isDecisionMaker: 'yes' | 'no-partner' | 'no-other' | ''
  gettingBids: 'yes' | 'no' | 'not-yet' | ''
  // Step 3 — Property
  addressLine1: string
  city: string
  state: string
  zip: string
  propertyType: 'single-family' | 'townhome-condo' | 'multi-unit' | 'commercial' | ''
  yearBuilt: 'pre-1980' | '1980-1999' | '2000-2010' | 'post-2010' | 'not-sure' | ''
  // Step 4 — Service-specific (all optional, only relevant ones sent)
  // ADU
  aduType: string
  aduSqft: string
  aduLandConstraints: string[]
  // Additions
  additionType: string[]
  additionSqft: string
  additionPlans: 'yes' | 'no' | 'need-help' | ''
  // New Home
  homeStyle: string
  homeBeds: string
  homeBaths: string
  homeSqft: string
  homePlans: string
  homeLand: string
  homeSpecialRooms: string[]
  // Kitchen/Bath
  kitchenScope: string[]
  kitchenStyle: string
  // Repairs
  repairIssues: string[]
  repairLocation: string[]
  repairWhen: string
  repairSeverity: string
  repairTriggers: string[]
  // Decks
  deckType: string
  deckMaterial: string
  deckSqft: string
  deckSnowZone: 'yes' | 'no' | ''
  // Commercial
  commercialType: string
  commercialSqft: string
  commercialOccupancy: string
  // Step 5 — Budget + timeline
  budget: string
  timeline: string
  // Step 6
  notes: string
  consent: boolean
  // Source tracking
  hearAboutUs: string
}

const EMPTY: FormState = {
  services: [],
  firstName: '', lastName: '', phone: '', email: '',
  contactPref: '', bestTime: '',
  ownsProperty: '', isDecisionMaker: '', gettingBids: '',
  addressLine1: '', city: '', state: '', zip: '',
  propertyType: '', yearBuilt: '',
  aduType: '', aduSqft: '', aduLandConstraints: [],
  additionType: [], additionSqft: '', additionPlans: '',
  homeStyle: '', homeBeds: '', homeBaths: '', homeSqft: '',
  homePlans: '', homeLand: '', homeSpecialRooms: [],
  kitchenScope: [], kitchenStyle: '',
  repairIssues: [], repairLocation: [], repairWhen: '', repairSeverity: '', repairTriggers: [],
  deckType: '', deckMaterial: '', deckSqft: '', deckSnowZone: '',
  commercialType: '', commercialSqft: '', commercialOccupancy: '',
  budget: '', timeline: '', notes: '', consent: false, hearAboutUs: '',
}

// ─── Service config ──────────────────────────────────────────────────────────────

const SERVICES: { id: ServiceId; label: string; sub: string; icon: string }[] = [
  { id: 'adu',         label: 'ADU / Guest House',     sub: 'Detached, attached, garage conversion',  icon: '⬜' },
  { id: 'additions',   label: 'Home Addition',          sub: 'Room additions, bump-outs, second story', icon: '➕' },
  { id: 'new-home',    label: 'New Custom Home',        sub: 'Ground-up builds, full design-build',    icon: '🏗' },
  { id: 'kitchen-bath',label: 'Kitchen & Bath',         sub: 'Full remodel, renovation, upgrade',      icon: '🍳' },
  { id: 'repairs',     label: 'Structural Repairs',     sub: 'Foundation, dry rot, water intrusion',   icon: '🔧' },
  { id: 'decks',       label: 'Decks & Outdoor',        sub: 'New decks, repairs, Tahoe snow-rated',   icon: '🌲' },
  { id: 'commercial',  label: 'Commercial / TI',        sub: 'Offices, retail, warehouse, buildouts',  icon: '🏢' },
  { id: 'other',       label: 'Something Else',         sub: 'Concrete, hauling, other work',          icon: '💬' },
]

// Budget ranges per service
const BUDGET_RANGES: Record<ServiceId, string[]> = {
  'adu':          ['Under $75k', '$75k–$120k', '$120k–$200k', '$200k–$300k', 'Over $300k', 'Not sure yet'],
  'additions':    ['Under $50k', '$50k–$100k', '$100k–$200k', '$200k–$350k', 'Over $350k', 'Not sure yet'],
  'new-home':     ['Under $300k', '$300k–$500k', '$500k–$750k', '$750k–$1M', 'Over $1M', 'Not sure yet'],
  'kitchen-bath': ['Under $20k', '$20k–$50k', '$50k–$100k', '$100k–$150k', 'Over $150k', 'Not sure yet'],
  'repairs':      ['Under $10k', '$10k–$25k', '$25k–$75k', '$75k–$150k', 'Over $150k', 'Not sure yet'],
  'decks':        ['Under $15k', '$15k–$35k', '$35k–$75k', '$75k–$150k', 'Over $150k', 'Not sure yet'],
  'commercial':   ['Under $50k', '$50k–$150k', '$150k–$500k', '$500k–$1M', 'Over $1M', 'Not sure yet'],
  'other':        ['Under $10k', '$10k–$30k', '$30k–$75k', '$75k–$200k', 'Over $200k', 'Not sure yet'],
}

const TIMELINES = [
  'Ready to start now', 'Within 1–3 months', '3–6 months out',
  '6–12 months out', 'Just researching', 'Flexible',
]

// ─── Helpers ────────────────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal mb-3">{children}</p>
}

function Q({ children }: { children: React.ReactNode }) {
  return <p className="font-display text-[clamp(18px,2.5vw,26px)] font-light text-cream leading-snug mb-5">{children}</p>
}

function OptionBtn({
  selected, onClick, children, sub,
}: { selected: boolean; onClick: () => void; children: React.ReactNode; sub?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group w-full text-left px-4 py-3.5 rounded-xl border transition-all duration-200
        ${selected
          ? 'border-teal bg-teal/10 text-cream'
          : 'border-white/[0.09] bg-white/[0.02] text-cream/70 hover:border-white/20 hover:bg-white/[0.04] hover:text-cream'
        }
      `}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-[14px] leading-snug">{children}</span>
        {selected && (
          <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      {sub && <p className="text-[11px] text-cream/35 mt-0.5 font-mono">{sub}</p>}
    </button>
  )
}

function CheckBtn({
  selected, onClick, children,
}: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        text-left px-3.5 py-2.5 rounded-lg border text-[13px] transition-all duration-200
        ${selected
          ? 'border-teal/60 bg-teal/10 text-cream'
          : 'border-white/[0.09] bg-white/[0.02] text-cream/60 hover:border-white/20 hover:text-cream'
        }
      `}
    >
      <span className={`mr-1.5 ${selected ? 'text-teal' : 'text-cream/20'}`}>{selected ? '◼' : '◻'}</span>
      {children}
    </button>
  )
}

function TextInput({
  value, onChange, placeholder, type = 'text', required,
}: { value: string; onChange: (v: string) => void; placeholder: string; type?: string; required?: boolean }) {
  return (
    <input
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full bg-white/[0.03] border border-white/[0.09] rounded-xl px-4 py-3.5 text-[14px] text-cream placeholder:text-cream/25 focus:outline-none focus:border-teal/50 focus:bg-white/[0.05] transition-all"
    />
  )
}

function StepProgress({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className={`h-[2px] flex-1 rounded-full transition-all duration-400 ${
          i < step ? 'bg-teal' : i === step ? 'bg-teal/40' : 'bg-white/[0.08]'
        }`} />
      ))}
      <span className="font-mono text-[10px] text-cream/30 tracking-wider ml-1 flex-shrink-0">
        {step + 1}/{total}
      </span>
    </div>
  )
}

function toggle(arr: string[], val: string): string[] {
  return arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val]
}

// ─── Step components ─────────────────────────────────────────────────────────────

function Step1Service({ form, set }: { form: FormState; set: (k: keyof FormState, v: unknown) => void }) {
  const toggleService = (id: ServiceId) => {
    const current = form.services
    const next = current.includes(id)
      ? current.filter(s => s !== id)
      : [...current, id]
    set('services', next)
  }

  return (
    <div>
      <Label>Step 1 of 6 — What do you need?</Label>
      <Q>What can BRE Builders help you with?</Q>
      <p className="text-[12px] text-cream/35 font-mono mb-4">Select all that apply — you can choose multiple services.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {SERVICES.map(s => (
          <OptionBtn
            key={s.id}
            selected={form.services.includes(s.id)}
            onClick={() => toggleService(s.id)}
            sub={s.sub}
          >
            <span className="mr-2">{s.icon}</span>{s.label}
          </OptionBtn>
        ))}
      </div>
      {form.services.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {form.services.map(id => {
            const svc = SERVICES.find(s => s.id === id)
            return (
              <span key={id} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal/10 border border-teal/25 font-mono text-[10px] text-teal">
                {svc?.label}
                <button type="button" onClick={() => toggleService(id)} className="ml-0.5 text-teal/50 hover:text-teal">×</button>
              </span>
            )
          })}
        </div>
      )}
    </div>
  )
}

function Step2Contact({ form, set }: { form: FormState; set: (k: keyof FormState, v: unknown) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <Label>Step 2 of 6 — Contact & Qualification</Label>
        <Q>How do we reach you?</Q>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <TextInput value={form.firstName} onChange={v => set('firstName', v)} placeholder="First name" required />
          <TextInput value={form.lastName} onChange={v => set('lastName', v)} placeholder="Last name" required />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <TextInput value={form.phone} onChange={v => set('phone', v)} placeholder="Phone number" type="tel" required />
          <TextInput value={form.email} onChange={v => set('email', v)} placeholder="Email address" type="email" required />
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Preferred contact method</p>
        <div className="flex flex-wrap gap-2">
          {(['call', 'text', 'email'] as const).map(v => (
            <OptionBtn key={v} selected={form.contactPref === v} onClick={() => set('contactPref', v)}>
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </OptionBtn>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Best time to reach you</p>
        <div className="flex flex-wrap gap-2">
          {[
            { v: 'morning', l: 'Morning (8–11)' },
            { v: 'midday', l: 'Midday (11–2)' },
            { v: 'afternoon', l: 'Afternoon (2–5)' },
            { v: 'evening', l: 'Evening (5+)' },
          ].map(({ v, l }) => (
            <OptionBtn key={v} selected={form.bestTime === v} onClick={() => set('bestTime', v as typeof form.bestTime)}>{l}</OptionBtn>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-white/[0.06]">
        <p className="font-mono text-[10px] tracking-[2px] uppercase text-cream/30 mb-3">Quick qualification</p>

        <div className="space-y-4">
          <div>
            <p className="text-[13px] text-cream/50 mb-2">Do you own the property — or are you the authorized decision maker?</p>
            <div className="flex flex-wrap gap-2">
              {[
                { v: 'yes', l: 'Yes, I own it' },
                { v: 'escrow', l: 'In escrow / buying' },
                { v: 'no', l: 'No' },
              ].map(({ v, l }) => (
                <OptionBtn key={v} selected={form.ownsProperty === v} onClick={() => set('ownsProperty', v as typeof form.ownsProperty)}>{l}</OptionBtn>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[13px] text-cream/50 mb-2">Are you the final decision maker on this project?</p>
            <div className="flex flex-wrap gap-2">
              {[
                { v: 'yes', l: 'Yes, just me' },
                { v: 'no-partner', l: 'Me + partner/spouse' },
                { v: 'no-other', l: 'Others involved' },
              ].map(({ v, l }) => (
                <OptionBtn key={v} selected={form.isDecisionMaker === v} onClick={() => set('isDecisionMaker', v as typeof form.isDecisionMaker)}>{l}</OptionBtn>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[13px] text-cream/50 mb-2">Are you getting bids from multiple contractors?</p>
            <div className="flex flex-wrap gap-2">
              {[
                { v: 'yes', l: 'Yes' },
                { v: 'not-yet', l: 'Not yet' },
                { v: 'no', l: 'BRE is my first call' },
              ].map(({ v, l }) => (
                <OptionBtn key={v} selected={form.gettingBids === v} onClick={() => set('gettingBids', v as typeof form.gettingBids)}>{l}</OptionBtn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Step3Property({ form, set }: { form: FormState; set: (k: keyof FormState, v: unknown) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <Label>Step 3 of 6 — Property</Label>
        <Q>Where is the project located?</Q>
        <div className="space-y-3">
          <TextInput value={form.addressLine1} onChange={v => set('addressLine1', v)} placeholder="Street address" />
          <div className="grid grid-cols-2 gap-3">
            <TextInput value={form.city} onChange={v => set('city', v)} placeholder="City" required />
            <TextInput value={form.zip} onChange={v => set('zip', v)} placeholder="ZIP code" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { v: 'NV', l: 'Nevada' }, { v: 'CA', l: 'California' },
            ].map(({ v, l }) => (
              <OptionBtn key={v} selected={form.state === v} onClick={() => set('state', v)}>{l}</OptionBtn>
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Property type</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { v: 'single-family', l: 'Single-family home' },
            { v: 'townhome-condo', l: 'Townhome / Condo' },
            { v: 'multi-unit', l: 'Multi-unit' },
            { v: 'commercial', l: 'Commercial' },
          ].map(({ v, l }) => (
            <OptionBtn key={v} selected={form.propertyType === v} onClick={() => set('propertyType', v as typeof form.propertyType)}>{l}</OptionBtn>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Approximate year built</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { v: 'pre-1980', l: 'Before 1980' },
            { v: '1980-1999', l: '1980–1999' },
            { v: '2000-2010', l: '2000–2010' },
            { v: 'post-2010', l: 'After 2010' },
            { v: 'not-sure', l: 'Not sure' },
          ].map(({ v, l }) => (
            <OptionBtn key={v} selected={form.yearBuilt === v} onClick={() => set('yearBuilt', v as typeof form.yearBuilt)}>{l}</OptionBtn>
          ))}
        </div>
      </div>
    </div>
  )
}

function Step4Service({ form, set, serviceId }: { form: FormState; set: (k: keyof FormState, v: unknown) => void; serviceId?: ServiceId }) {
  const s = serviceId || form.services[0] || 'other'

  const ServiceLabel = () => {
    const svc = SERVICES.find(x => x.id === s)
    return form.services.length <= 1 ? <Label>Step 4 of 7 — {svc?.label || 'Project details'}</Label> : null
  }

  if (s === 'adu') return (
    <div className="space-y-5">
      <ServiceLabel />
      <Q>Tell us about your ADU project.</Q>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">ADU type</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { v: 'detached', l: 'Detached (separate structure)', sub: 'New build in backyard' },
            { v: 'attached', l: 'Attached ADU', sub: 'Shares wall with main home' },
            { v: 'garage-conversion', l: 'Garage conversion', sub: 'Convert existing garage' },
            { v: 'in-law-suite', l: 'In-law suite / casita', sub: 'Interior conversion' },
            { v: 'not-sure', l: 'Not sure yet', sub: 'Need guidance' },
          ].map(({ v, l, sub }) => (
            <OptionBtn key={v} selected={form.aduType === v} onClick={() => set('aduType', v)} sub={sub}>{l}</OptionBtn>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Approximate size needed</p>
        <div className="flex flex-wrap gap-2">
          {['Under 400 sqft', '400–600 sqft', '600–800 sqft', '800–1,000 sqft', 'Over 1,000 sqft', 'Not sure'].map(v => (
            <OptionBtn key={v} selected={form.aduSqft === v} onClick={() => set('aduSqft', v)}>{v}</OptionBtn>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Any site constraints? (check all that apply)</p>
        <div className="flex flex-wrap gap-2">
          {['Septic / no sewer', 'Steep slope', 'HOA restrictions', 'Limited lot size', 'Need permitting help', 'None known'].map(v => (
            <CheckBtn key={v} selected={form.aduLandConstraints.includes(v)} onClick={() => set('aduLandConstraints', toggle(form.aduLandConstraints, v))}>{v}</CheckBtn>
          ))}
        </div>
      </div>
    </div>
  )

  if (s === 'additions') return (
    <div className="space-y-5">
      <ServiceLabel />
      <Q>What kind of addition are you planning?</Q>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Addition type (check all that apply)</p>
        <div className="flex flex-wrap gap-2">
          {[
            'Bedroom addition', 'Bathroom addition', 'Garage addition',
            'Second story', 'Sunroom / enclosed patio', 'Bump-out expansion',
            'In-law suite', 'Home office', 'Not sure yet',
          ].map(v => (
            <CheckBtn key={v} selected={form.additionType.includes(v)} onClick={() => set('additionType', toggle(form.additionType, v))}>{v}</CheckBtn>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Approximate square footage to add</p>
        <div className="flex flex-wrap gap-2">
          {['Under 200 sqft', '200–400 sqft', '400–750 sqft', '750–1,200 sqft', 'Over 1,200 sqft', 'Not sure'].map(v => (
            <OptionBtn key={v} selected={form.additionSqft === v} onClick={() => set('additionSqft', v)}>{v}</OptionBtn>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Do you have plans or drawings?</p>
        <div className="flex flex-wrap gap-2">
          {[
            { v: 'yes', l: 'Yes, plans are ready' },
            { v: 'no', l: 'No plans yet' },
            { v: 'need-help', l: 'Need BRE to design' },
          ].map(({ v, l }) => (
            <OptionBtn key={v} selected={form.additionPlans === v} onClick={() => set('additionPlans', v as typeof form.additionPlans)}>{l}</OptionBtn>
          ))}
        </div>
      </div>
    </div>
  )

  if (s === 'new-home') return (
    <div className="space-y-5">
      <ServiceLabel />
      <Q>Tell us about your new home vision.</Q>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Home style</p>
        <div className="grid grid-cols-2 gap-2">
          {['Single-story', 'Two-story', 'Multi-level custom', 'Mountain / lodge', 'Modern / contemporary', 'Not sure yet'].map(v => (
            <OptionBtn key={v} selected={form.homeStyle === v} onClick={() => set('homeStyle', v)}>{v}</OptionBtn>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div>
          <p className="text-[12px] text-cream/40 mb-1.5">Bedrooms</p>
          <TextInput value={form.homeBeds} onChange={v => set('homeBeds', v)} placeholder="e.g. 4" />
        </div>
        <div>
          <p className="text-[12px] text-cream/40 mb-1.5">Bathrooms</p>
          <TextInput value={form.homeBaths} onChange={v => set('homeBaths', v)} placeholder="e.g. 3" />
        </div>
        <div>
          <p className="text-[12px] text-cream/40 mb-1.5">Sq ft (approx)</p>
          <TextInput value={form.homeSqft} onChange={v => set('homeSqft', v)} placeholder="e.g. 2,800" />
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Do you own land?</p>
        <div className="flex flex-wrap gap-2">
          {[
            { v: 'yes', l: 'Yes, land is ready' },
            { v: 'escrow', l: 'In escrow' },
            { v: 'no', l: 'Still searching' },
          ].map(({ v, l }) => (
            <OptionBtn key={v} selected={form.homeLand === v} onClick={() => set('homeLand', v)}>{l}</OptionBtn>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Do you have architectural plans?</p>
        <div className="flex flex-wrap gap-2">
          {[
            { v: 'yes', l: 'Yes, complete plans' },
            { v: 'in-progress', l: 'In progress' },
            { v: 'need-bre', l: 'Need BRE to design' },
            { v: 'no', l: 'No plans yet' },
          ].map(({ v, l }) => (
            <OptionBtn key={v} selected={form.homePlans === v} onClick={() => set('homePlans', v)}>{l}</OptionBtn>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Special rooms? (check all)</p>
        <div className="flex flex-wrap gap-2">
          {['Home office', 'Gym', 'Theater', 'Workshop', 'Multi-gen space', 'Bunker / safe room', 'None'].map(v => (
            <CheckBtn key={v} selected={form.homeSpecialRooms.includes(v)} onClick={() => set('homeSpecialRooms', toggle(form.homeSpecialRooms, v))}>{v}</CheckBtn>
          ))}
        </div>
      </div>
    </div>
  )

  if (s === 'kitchen-bath') return (
    <div className="space-y-5">
      <ServiceLabel />
      <Q>What are you remodeling?</Q>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Scope (check all that apply)</p>
        <div className="flex flex-wrap gap-2">
          {[
            'Kitchen — full remodel', 'Kitchen — partial (cabinets, counters)',
            'Primary bathroom', 'Guest bathroom', 'Powder room',
            'Laundry room', 'Multiple rooms',
          ].map(v => (
            <CheckBtn key={v} selected={form.kitchenScope.includes(v)} onClick={() => set('kitchenScope', toggle(form.kitchenScope, v))}>{v}</CheckBtn>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Style direction</p>
        <div className="grid grid-cols-2 gap-2">
          {['Modern / minimal', 'Traditional / classic', 'Mountain / rustic', 'Transitional', 'Open concept', 'Not sure yet'].map(v => (
            <OptionBtn key={v} selected={form.kitchenStyle === v} onClick={() => set('kitchenStyle', v)}>{v}</OptionBtn>
          ))}
        </div>
      </div>
    </div>
  )

  if (s === 'repairs') return (
    <div className="space-y-5">
      <ServiceLabel />
      <Q>What issues have you noticed?</Q>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Issues (check all that apply)</p>
        <div className="flex flex-wrap gap-2">
          {[
            'Cracks in walls or ceilings', 'Cracks in foundation / masonry',
            'Doors or windows not closing right', 'Uneven or sloping floors',
            'Bowing or separating walls', 'Water near foundation',
            'Dry rot or wood damage', 'Deck / balcony structural concern',
            'Other visible damage',
          ].map(v => (
            <CheckBtn key={v} selected={form.repairIssues.includes(v)} onClick={() => set('repairIssues', toggle(form.repairIssues, v))}>{v}</CheckBtn>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Where is the issue?</p>
        <div className="flex flex-wrap gap-2">
          {['Foundation', 'Interior walls', 'Exterior walls', 'Floors', 'Deck / balcony', 'Crawl space', 'Roof area', 'Multiple areas'].map(v => (
            <CheckBtn key={v} selected={form.repairLocation.includes(v)} onClick={() => set('repairLocation', toggle(form.repairLocation, v))}>{v}</CheckBtn>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Is it getting worse over time?</p>
        <div className="flex flex-wrap gap-2">
          {[
            { v: 'getting-worse', l: 'Yes, getting worse' },
            { v: 'stable', l: 'Appears stable' },
            { v: 'not-sure', l: 'Not sure' },
          ].map(({ v, l }) => (
            <OptionBtn key={v} selected={form.repairSeverity === v} onClick={() => set('repairSeverity', v)}>{l}</OptionBtn>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Any recent triggering events?</p>
        <div className="flex flex-wrap gap-2">
          {['Heavy rain / snow melt', 'Nearby construction', 'Recent remodel', 'Home inspection flagged it', 'Preparing to sell', 'None'].map(v => (
            <CheckBtn key={v} selected={form.repairTriggers.includes(v)} onClick={() => set('repairTriggers', toggle(form.repairTriggers, v))}>{v}</CheckBtn>
          ))}
        </div>
      </div>
    </div>
  )

  if (s === 'decks') return (
    <div className="space-y-5">
      <ServiceLabel />
      <Q>What are you looking to build or repair?</Q>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Project type</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { v: 'new-deck', l: 'New deck', sub: 'Ground-up construction' },
            { v: 'deck-repair', l: 'Deck repair', sub: 'Structural or cosmetic' },
            { v: 'balcony', l: 'Balcony / elevated', sub: 'Attached or freestanding' },
            { v: 'replacement', l: 'Full replacement', sub: 'Tear out and rebuild' },
          ].map(({ v, l, sub }) => (
            <OptionBtn key={v} selected={form.deckType === v} onClick={() => set('deckType', v)} sub={sub}>{l}</OptionBtn>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Material preference</p>
        <div className="flex flex-wrap gap-2">
          {['Composite (Trex / Fiberon)', 'Redwood or cedar', 'Pressure-treated wood', 'Not sure — want recommendation'].map(v => (
            <OptionBtn key={v} selected={form.deckMaterial === v} onClick={() => set('deckMaterial', v)}>{v}</OptionBtn>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Approximate size</p>
        <div className="flex flex-wrap gap-2">
          {['Under 200 sqft', '200–400 sqft', '400–700 sqft', 'Over 700 sqft', 'Not sure'].map(v => (
            <OptionBtn key={v} selected={form.deckSqft === v} onClick={() => set('deckSqft', v)}>{v}</OptionBtn>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Is the property in a snow / fire zone? (Lake Tahoe, Truckee, mountain areas)</p>
        <div className="flex gap-2">
          {[{ v: 'yes' as const, l: 'Yes' }, { v: 'no' as const, l: 'No' }].map(({ v, l }) => (
            <OptionBtn key={v} selected={form.deckSnowZone === v} onClick={() => set('deckSnowZone', v)}>{l}</OptionBtn>
          ))}
        </div>
      </div>
    </div>
  )

  if (s === 'commercial') return (
    <div className="space-y-5">
      <ServiceLabel />
      <Q>Tell us about the commercial project.</Q>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Space type</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { v: 'office', l: 'Office build-out / TI' },
            { v: 'retail', l: 'Retail space' },
            { v: 'restaurant', l: 'Restaurant / food service' },
            { v: 'warehouse', l: 'Warehouse / industrial' },
            { v: 'medical', l: 'Medical / professional' },
            { v: 'other', l: 'Other commercial' },
          ].map(({ v, l }) => (
            <OptionBtn key={v} selected={form.commercialType === v} onClick={() => set('commercialType', v)}>{l}</OptionBtn>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Approximate square footage</p>
        <div className="flex flex-wrap gap-2">
          {['Under 1,000 sqft', '1,000–3,000 sqft', '3,000–7,500 sqft', '7,500–15,000 sqft', 'Over 15,000 sqft', 'Not sure'].map(v => (
            <OptionBtn key={v} selected={form.commercialSqft === v} onClick={() => set('commercialSqft', v)}>{v}</OptionBtn>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">Target occupancy / open date</p>
        <div className="flex flex-wrap gap-2">
          {['ASAP', '1–3 months', '3–6 months', '6–12 months', 'Flexible'].map(v => (
            <OptionBtn key={v} selected={form.commercialOccupancy === v} onClick={() => set('commercialOccupancy', v)}>{v}</OptionBtn>
          ))}
        </div>
      </div>
    </div>
  )

  // other
  return (
    <div>
      <ServiceLabel />
      <Q>What kind of work do you need?</Q>
      <div className="grid grid-cols-2 gap-2">
        {['Concrete work', 'Hauling / demolition', 'Loft / condo remodel', 'Fencing', 'Site prep', 'Something else'].map(v => (
          <OptionBtn key={v} selected={form.notes === v} onClick={() => set('notes', v)}>{v}</OptionBtn>
        ))}
      </div>
    </div>
  )
}


function Step4Services({ form, set }: { form: FormState; set: (k: keyof FormState, v: unknown) => void }) {
  if (form.services.length === 0) return null

  return (
    <div className="space-y-8">
      <div>
        <Label>Step 4 of 7 — Project Details</Label>
        <Q>Tell us more about each service you need.</Q>
      </div>
      {form.services.map((serviceId, idx) => (
        <div key={serviceId} className={idx > 0 ? "pt-6 border-t border-white/[0.06]" : ""}>
          {form.services.length > 1 && (
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center">
                <span className="font-mono text-[10px] text-teal">{idx + 1}</span>
              </div>
              <span className="font-mono text-[11px] tracking-[2px] uppercase text-teal/70">
                {SERVICES.find(s => s.id === serviceId)?.label}
              </span>
            </div>
          )}
          <Step4Service form={form} set={set} serviceId={serviceId} />
        </div>
      ))}
    </div>
  )
}


// ─── Image upload types ──────────────────────────────────────────────────────────
interface LeadImage {
  file: File
  preview: string
  service: ServiceId
  status: 'pending' | 'uploading' | 'done' | 'error'
}

function Step5Images({
  form, set, leadImages, setLeadImages,
}: {
  form: FormState
  set: (k: keyof FormState, v: unknown) => void
  leadImages: LeadImage[]
  setLeadImages: React.Dispatch<React.SetStateAction<LeadImage[]>>
}) {
  const uploadServices = form.services.filter(s =>
    (IMAGE_UPLOAD_SERVICES as string[]).includes(s)
  ) as ServiceId[]

  const SERVICE_UPLOAD_LABELS: Partial<Record<ServiceId, { prompt: string; examples: string }>> = {
    'repairs': {
      prompt: 'Photos of the damage or issue',
      examples: 'Foundation cracks, dry rot, water stains, structural damage, bowing walls',
    },
    'decks': {
      prompt: 'Photos of your current deck or build site',
      examples: 'Existing deck condition, site slope, attachment points, any damage areas',
    },
    'kitchen-bath': {
      prompt: 'Photos of the current space',
      examples: 'Current kitchen layout, cabinet condition, plumbing locations, bathroom layout',
    },
  }

  const handleFiles = (files: FileList | null, service: ServiceId) => {
    if (!files) return
    const newImages: LeadImage[] = Array.from(files)
      .filter(f => f.type.startsWith('image/') && f.size < 20 * 1024 * 1024) // 20MB limit
      .slice(0, 8) // max 8 per service
      .map(file => ({
        file,
        service,
        preview: URL.createObjectURL(file),
        status: 'pending' as const,
      }))
    setLeadImages(prev => [...prev, ...newImages])
  }

  const removeImage = (idx: number) => {
    setLeadImages(prev => {
      URL.revokeObjectURL(prev[idx].preview)
      return prev.filter((_, i) => i !== idx)
    })
  }

  return (
    <div className="space-y-7">
      <div>
        <Label>Step 5 of 7 — Photos (optional but powerful)</Label>
        <Q>Upload photos so we can assess before we call.</Q>
        <p className="text-[13px] text-cream/45 leading-relaxed max-w-[480px]">
          Our AI will analyze every photo and give Steve a detailed assessment before he contacts you.
          The more you show us, the more accurate and useful your estimate will be.
        </p>
      </div>

      {uploadServices.map(service => {
        const config = SERVICE_UPLOAD_LABELS[service]
        const serviceImages = leadImages.filter(img => img.service === service)
        const svcLabel = SERVICES.find(s => s.id === service)?.label || service

        return (
          <div key={service} className="space-y-3">
            {uploadServices.length > 1 && (
              <p className="font-mono text-[11px] tracking-[2px] uppercase text-teal/70">{svcLabel}</p>
            )}
            <p className="text-[13px] text-cream/60">{config?.prompt}</p>
            <p className="text-[11px] text-cream/30 font-mono">{config?.examples}</p>

            {/* Upload zone */}
            <label className="group flex flex-col items-center justify-center w-full border-2 border-dashed border-white/[0.12] hover:border-teal/40 rounded-2xl py-8 px-4 cursor-pointer transition-all duration-200 hover:bg-teal/[0.03]">
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={e => handleFiles(e.target.files, service)}
              />
              <div className="w-10 h-10 rounded-full border border-white/[0.12] group-hover:border-teal/30 flex items-center justify-center mb-3 transition-all">
                <svg className="w-5 h-5 text-cream/30 group-hover:text-teal/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-[13px] text-cream/40 group-hover:text-cream/70 transition-colors text-center">
                Click to upload photos <span className="text-cream/20">· or drag and drop</span>
              </p>
              <p className="text-[11px] text-cream/20 mt-1 font-mono">JPG, PNG, HEIC · up to 20MB each · max 8 photos</p>
            </label>

            {/* Preview grid */}
            {serviceImages.length > 0 && (
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-2">
                {serviceImages.map((img, i) => {
                  const globalIdx = leadImages.indexOf(img)
                  return (
                    <div key={i} className="relative group aspect-square rounded-xl overflow-hidden border border-white/[0.08]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img.preview} alt="Upload preview" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-void/0 group-hover:bg-void/50 transition-all duration-200 flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() => removeImage(globalIdx)}
                          className="opacity-0 group-hover:opacity-100 w-7 h-7 rounded-full bg-red-500/80 flex items-center justify-center transition-all"
                          aria-label="Remove photo"
                        >
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}

      <div className="flex items-start gap-3 p-4 bg-teal/[0.04] border border-teal/15 rounded-xl">
        <svg className="w-4 h-4 text-teal/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        <div>
          <p className="text-[12px] text-teal/80 font-mono tracking-wide mb-0.5">AI-powered photo analysis</p>
          <p className="text-[12px] text-cream/40 leading-relaxed">
            Our AI identifies damage type, severity, affected materials, and scope estimates from your photos.
            Steve receives this analysis before calling — saving you time and getting you a more accurate quote.
          </p>
        </div>
      </div>
    </div>
  )
}

function Step5Budget({ form, set }: { form: FormState; set: (k: keyof FormState, v: unknown) => void }) {
  const primaryService = form.services[0] as ServiceId
  const ranges = BUDGET_RANGES[primaryService] || BUDGET_RANGES['other']

  return (
    <div className="space-y-6">
      <div>
        <Label>Step 5 of 6 — Budget & Timeline</Label>
        <Q>What budget range are you working with?</Q>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {ranges.map(v => (
            <OptionBtn key={v} selected={form.budget === v} onClick={() => set('budget', v)}>{v}</OptionBtn>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">When are you looking to start?</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {TIMELINES.map(v => (
            <OptionBtn key={v} selected={form.timeline === v} onClick={() => set('timeline', v)}>{v}</OptionBtn>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[13px] text-cream/50 mb-2.5">How did you hear about BRE Builders?</p>
        <div className="flex flex-wrap gap-2">
          {['Google / Bing', 'AI recommendation', 'Yelp', 'Referral', 'Houzz', 'Social media', 'Past client', 'Other'].map(v => (
            <OptionBtn key={v} selected={form.hearAboutUs === v} onClick={() => set('hearAboutUs', v)}>{v}</OptionBtn>
          ))}
        </div>
      </div>
    </div>
  )
}

function Step6Confirm({
  form, set, submitting, error,
}: {
  form: FormState
  set: (k: keyof FormState, v: unknown) => void
  submitting: boolean
  error: string
}) {
  const summaryRows: { label: string; value: string }[] = [
    { label: 'Services', value: form.services.map(id => SERVICES.find(s => s.id === id)?.label || id).join(', ') },
    { label: 'Name', value: `${form.firstName} ${form.lastName}` },
    { label: 'Phone', value: form.phone },
    { label: 'Email', value: form.email },
    { label: 'Contact pref', value: form.contactPref || '—' },
    { label: 'Location', value: [form.city, form.state, form.zip].filter(Boolean).join(', ') || '—' },
    { label: 'Budget', value: form.budget || '—' },
    { label: 'Timeline', value: form.timeline || '—' },
  ].filter(r => r.value !== '—')

  return (
    <div className="space-y-6">
      <div>
        <Label>Step 6 of 6 — Confirm & Submit</Label>
        <Q>Almost done — does this look right?</Q>

        <div className="bg-white/[0.03] rounded-xl border border-white/[0.08] divide-y divide-white/[0.06] mb-5">
          {summaryRows.map(r => (
            <div key={r.label} className="flex items-baseline justify-between gap-4 px-4 py-2.5">
              <span className="font-mono text-[11px] text-cream/35 uppercase tracking-wider flex-shrink-0">{r.label}</span>
              <span className="text-[13px] text-cream/80 text-right">{r.value}</span>
            </div>
          ))}
        </div>

        <div>
          <p className="text-[13px] text-cream/50 mb-2">Anything else we should know?</p>
          <textarea
            value={form.notes}
            onChange={e => set('notes', e.target.value)}
            placeholder="Additional details, access notes, specific concerns..."
            rows={3}
            className="w-full bg-white/[0.03] border border-white/[0.09] rounded-xl px-4 py-3 text-[13px] text-cream placeholder:text-cream/25 focus:outline-none focus:border-teal/50 transition-all resize-none"
          />
        </div>
      </div>

      <label className="flex items-start gap-3 cursor-pointer group">
        <button
          type="button"
          onClick={() => set('consent', !form.consent)}
          className={`mt-0.5 w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-all ${
            form.consent ? 'bg-teal border-teal' : 'border-white/20 bg-transparent'
          }`}
        >
          {form.consent && (
            <svg className="w-3 h-3 text-void" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
        <span className="text-[12px] text-cream/40 leading-relaxed group-hover:text-cream/60 transition-colors">
          I agree to be contacted by BRE Builders regarding this project inquiry. I understand this is an evaluation request, not an instant quote.
        </span>
      </label>

      {error && (
        <div className="px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-[13px] text-red-300">
          {error}
        </div>
      )}
    </div>
  )
}

// ─── Main form ───────────────────────────────────────────────────────────────────

interface SmartQuoteFormProps {
  preselect?: ServiceId
  className?: string
}

export default function SmartQuoteForm({ preselect, className = '' }: SmartQuoteFormProps) {
  const [form, setFormRaw] = useState<FormState>({
    ...EMPTY,
    services: preselect ? [preselect] : [],
    state: 'NV',
  })
  const [step, setStep] = useState(preselect ? 1 : 0)
  const [leadImages, setLeadImages] = useState<LeadImage[]>([])
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const topRef = useRef<HTMLDivElement>(null)

  const set = useCallback((k: keyof FormState, v: unknown) => {
    setFormRaw(prev => ({ ...prev, [k]: v }))
  }, [])

  // Scroll to top of form on step change
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [step])

  const TOTAL_STEPS = 7

  const canAdvance = () => {
    if (step === 0) return form.services.length > 0
    if (step === 1) return !!(form.firstName && form.lastName && form.phone && form.email)
    if (step === 2) return !!(form.city && form.state)
    return true
  }

  const handleNext = () => {
    if (canAdvance()) setStep(s => Math.min(s + 1, TOTAL_STEPS - 1))
  }

  const handleBack = () => setStep(s => Math.max(s - 1, 0))

  const handleSubmit = async () => {
    if (!form.consent) { setError('Please confirm your consent to be contacted.'); return }
    if (!form.firstName || !form.lastName || !form.phone || !form.email) {
      setError('Please fill in your contact details.')
      setStep(1)
      return
    }
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or call us at (775) 391-4517.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) return (
    <div className={`text-center py-12 px-4 ${className}`}>
      <div className="w-14 h-14 rounded-full bg-teal/10 border border-teal/30 flex items-center justify-center mx-auto mb-6">
        <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="font-mono text-[10px] tracking-[3px] uppercase text-teal mb-3">Request Received</p>
      <h3 className="font-display text-[28px] font-light text-cream mb-3">
        We&apos;ll be in touch, {form.firstName}.
      </h3>
      <p className="text-[14px] text-cream/50 max-w-[340px] mx-auto leading-relaxed mb-8">
        Expect a call or email within 24 hours to schedule your free site visit and estimate.
      </p>
      <div className="inline-flex flex-col items-center gap-2">
        <p className="text-[12px] text-cream/30">Need to reach us sooner?</p>
        <a href="tel:7753914517" className="font-mono text-[15px] text-teal hover:text-teal/80 transition-colors">
          (775) 391-4517
        </a>
      </div>
    </div>
  )

  const hasImageUpload = form.services.some(s => IMAGE_UPLOAD_SERVICES.includes(s as ServiceId))

  const steps = [
    <Step1Service key={0} form={form} set={set} />,
    <Step2Contact key={1} form={form} set={set} />,
    <Step3Property key={2} form={form} set={set} />,
    <Step4Services key={3} form={form} set={set} />,
    hasImageUpload
      ? <Step5Images key={4} form={form} set={set} leadImages={leadImages} setLeadImages={setLeadImages} />
      : <Step5Budget key={4} form={form} set={set} />,
    hasImageUpload ? <Step5Budget key={5} form={form} set={set} /> : <Step6Confirm key={5} form={form} set={set} submitting={submitting} error={error} />,
    hasImageUpload ? <Step6Confirm key={6} form={form} set={set} submitting={submitting} error={error} /> : null,
  ].filter(Boolean)

  return (
    <div ref={topRef} className={`${className}`}>
      <StepProgress step={step} total={TOTAL_STEPS} />

      <div className="min-h-[320px]">
        {steps[step]}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-white/[0.06]">
        {step > 0 ? (
          <button
            type="button"
            onClick={handleBack}
            className="font-mono text-[12px] text-cream/35 hover:text-cream/70 transition-colors flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        ) : <div />}

        {step < TOTAL_STEPS - 1 ? (
          <button
            type="button"
            onClick={handleNext}
            disabled={!canAdvance()}
            className={`
              flex items-center gap-2 px-7 py-3.5 rounded-xl font-mono text-[13px] font-medium transition-all duration-200
              ${canAdvance()
                ? 'bg-teal text-void hover:bg-teal/90 active:scale-[0.98]'
                : 'bg-white/[0.05] text-cream/20 cursor-not-allowed'
              }
            `}
          >
            Continue
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting || !form.consent}
            className={`
              flex items-center gap-2 px-8 py-3.5 rounded-xl font-mono text-[13px] font-medium transition-all duration-200
              ${(!submitting && form.consent)
                ? 'bg-gold text-void hover:bg-gold/90 active:scale-[0.98]'
                : 'bg-white/[0.05] text-cream/20 cursor-not-allowed'
              }
            `}
          >
            {submitting ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Submit Request
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  )
}
