'use client'

import { useState } from 'react'

interface FAQItem {
  q: string
  a: string
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <FAQItem key={i} q={item.q} a={item.a} />
      ))}
    </div>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/[0.055]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-4 text-left group"
      >
        <span className="text-[14px] text-cream/75 group-hover:text-cream transition-colors font-display">{q}</span>
        <span className={`flex-shrink-0 w-5 h-5 border border-white/[0.18] rounded flex items-center justify-center text-cream/35 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && <p className="pb-4 text-[13px] text-cream/45 leading-relaxed">{a}</p>}
    </div>
  )
}
