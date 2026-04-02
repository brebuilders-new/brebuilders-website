'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'

// ─── Portfolio images for inline display ──────────────────────────────────────
const BASE = 'https://brebuilders.com/wp-content/uploads'
const PORTFOLIO = {
  kitchen:    `${BASE}/c1b0cbef-a25d-4690-9d95-0cc0bab05513.jpg`,
  exterior:   `${BASE}/03368773-da7c-4798-8693-4b3cfefd3615.jpg`,
  foyer:      `${BASE}/5e87f057-a867-4094-9529-636cd4f1e1ac.jpg`,
  laundry:    `${BASE}/b58dbd32-e5b2-4d1e-b225-72bb916a6379.jpg`,
  adu:        `${BASE}/pool-house.jpg`,
  deck_lt:    `${BASE}/Lake-Tahoe-Deck-Reinforcement-\u2013-Steel-Angle-Bracket-System-600x403.jpg`,
  repairs:    `${BASE}/Foundation-Repair-and-Foundation-Issues-in-Reno-NV-min.jpg`,
  commercial: `${BASE}/Image_fx-9-600x403.jpg`,
}

// ─── Types ────────────────────────────────────────────────────────────────────
type Role = 'bot' | 'user'
interface Msg {
  id: string
  role: Role
  text?: string
  image?: string
  imageAlt?: string
  imageCaption?: string
  options?: { label: string; value: string }[]
  link?: { label: string; href: string }
  delay?: number
}

// ─── Conversation script ──────────────────────────────────────────────────────
// Each step returns messages based on user input. Rule-based, instant, no API.
type StepId =
  | 'start' | 'service' | 'adu_detail' | 'repairs_detail'
  | 'kitchen_detail' | 'newhome_detail' | 'decks_detail'
  | 'commercial_detail' | 'other_detail'
  | 'qualify_owner' | 'qualify_timeline' | 'qualify_bids'
  | 'collect_contact' | 'done'

interface Step {
  messages: Msg[]
  next?: StepId
}

function getStep(id: StepId, userVal?: string): Step {
  const id9 = () => Math.random().toString(36).slice(2, 11)

  switch (id) {
    case 'start':
      return {
        messages: [
          {
            id: id9(), role: 'bot', delay: 300,
            text: "Hi! I'm the BRE Builders assistant. Steve's team has been building in Reno and Northern Nevada since 1989. 👋",
          },
          {
            id: id9(), role: 'bot', delay: 1000,
            text: 'What can we help you with?',
            options: [
              { label: '🏠 ADU / Guest House', value: 'adu' },
              { label: '🔧 Structural Repairs', value: 'repairs' },
              { label: '🪵 Kitchen & Bath Remodel', value: 'kitchen' },
              { label: '🏗️ New Home Build', value: 'newhome' },
              { label: '🌲 Deck / Outdoor', value: 'decks' },
              { label: '🏢 Commercial / TI', value: 'commercial' },
              { label: '📐 Addition / Expansion', value: 'other' },
            ],
          },
        ],
      }

    case 'service':
      switch (userVal) {
        case 'adu':
          return {
            messages: [
              {
                id: id9(), role: 'bot', delay: 400,
                image: PORTFOLIO.adu,
                imageAlt: 'Pool House ADU built by BRE Builders Reno NV',
                imageCaption: 'Pool House ADU — Reno, NV · BRE Builders',
              },
              {
                id: id9(), role: 'bot', delay: 800,
                text: "ADUs are one of our most in-demand services. We've built studio to 2-bedroom units from $75K–$300K across Reno and Northern Nevada.",
              },
              {
                id: id9(), role: 'bot', delay: 400,
                text: 'What type of ADU are you thinking about?',
                options: [
                  { label: 'Detached backyard unit', value: 'detached' },
                  { label: 'Garage conversion', value: 'garage' },
                  { label: 'In-law / guest suite', value: 'inlaw' },
                  { label: "Not sure yet — exploring options", value: 'unsure' },
                ],
              },
            ],
            next: 'adu_detail',
          }
        case 'repairs':
          return {
            messages: [
              {
                id: id9(), role: 'bot', delay: 400,
                image: PORTFOLIO.repairs,
                imageAlt: 'Foundation repair work in Reno NV by BRE Builders',
                imageCaption: 'Foundation repair — Reno, NV · BRE Builders',
              },
              {
                id: id9(), role: 'bot', delay: 900,
                text: "Structural repairs are time-sensitive. We respond within 24 hours and can usually schedule a site visit within 48–72 hours.",
              },
              {
                id: id9(), role: 'bot', delay: 400,
                text: "What's the main issue?",
                options: [
                  { label: '🧱 Foundation cracks or settling', value: 'foundation' },
                  { label: '💧 Water intrusion or moisture', value: 'water' },
                  { label: '🪵 Dry rot or wood damage', value: 'rot' },
                  { label: '📐 Structural framing issue', value: 'framing' },
                  { label: '🤔 Not sure — needs inspection', value: 'unsure' },
                ],
              },
            ],
            next: 'repairs_detail',
          }
        case 'kitchen':
          return {
            messages: [
              {
                id: id9(), role: 'bot', delay: 400,
                image: PORTFOLIO.kitchen,
                imageAlt: "Chef's kitchen custom cabinetry marble backsplash Ripon CA BRE Builders",
                imageCaption: "Chef's Kitchen — Ripon, CA · Custom cabinetry & marble",
              },
              {
                id: id9(), role: 'bot', delay: 900,
                text: "We've done full gut-and-rebuilds to targeted updates. What's in scope for your project?",
                options: [
                  { label: 'Full kitchen remodel', value: 'full_kitchen' },
                  { label: 'Bathroom remodel', value: 'bathroom' },
                  { label: 'Both kitchen and bath', value: 'both' },
                  { label: 'Custom cabinetry only', value: 'cabinets' },
                ],
              },
            ],
            next: 'kitchen_detail',
          }
        case 'newhome':
          return {
            messages: [
              {
                id: id9(), role: 'bot', delay: 400,
                image: PORTFOLIO.exterior,
                imageAlt: 'Mediterranean custom home front elevation Ripon California BRE Builders',
                imageCaption: 'Ripon Estate, CA — ground-up custom home build',
              },
              {
                id: id9(), role: 'bot', delay: 900,
                text: "We're a licensed design-build contractor — one team from plans to keys. We hold NV License #0085999 and CA License #1093798.",
              },
              {
                id: id9(), role: 'bot', delay: 400,
                text: 'Where are you in the process?',
                options: [
                  { label: '🏡 I own a lot, ready to build', value: 'has_lot' },
                  { label: '📋 I have plans, need a builder', value: 'has_plans' },
                  { label: '💭 Still in planning / exploring', value: 'exploring' },
                ],
              },
            ],
            next: 'newhome_detail',
          }
        case 'decks':
          return {
            messages: [
              {
                id: id9(), role: 'bot', delay: 400,
                image: PORTFOLIO.deck_lt,
                imageAlt: 'Lake Tahoe deck reinforcement steel bracket system BRE Builders',
                imageCaption: 'Deck reinforcement — Lake Tahoe, NV · BRE Builders',
              },
              {
                id: id9(), role: 'bot', delay: 900,
                text: "We build and repair decks throughout Reno, Sparks, and Lake Tahoe. Hillside builds and Tahoe snow-load specs are our specialty.",
              },
              {
                id: id9(), role: 'bot', delay: 400,
                text: 'What do you need?',
                options: [
                  { label: 'New deck build', value: 'new_deck' },
                  { label: 'Deck repair or reinforcement', value: 'repair_deck' },
                  { label: 'Replace existing deck', value: 'replace_deck' },
                ],
              },
            ],
            next: 'decks_detail',
          }
        case 'commercial':
          return {
            messages: [
              {
                id: id9(), role: 'bot', delay: 400,
                image: PORTFOLIO.commercial,
                imageAlt: 'Commercial construction tenant improvement BRE Builders Reno NV',
                imageCaption: 'Commercial construction — Reno, NV · BRE Builders',
              },
              {
                id: id9(), role: 'bot', delay: 900,
                text: "We handle tenant improvements, office build-outs, retail, warehouse, and commercial new construction across Northern Nevada.",
              },
              {
                id: id9(), role: 'bot', delay: 400,
                text: 'What type of commercial work?',
                options: [
                  { label: 'Tenant improvement (TI)', value: 'ti' },
                  { label: 'Office build-out', value: 'office' },
                  { label: 'Retail / storefront', value: 'retail' },
                  { label: 'Warehouse / industrial', value: 'warehouse' },
                  { label: 'Other commercial', value: 'other_comm' },
                ],
              },
            ],
            next: 'commercial_detail',
          }
        default: // 'other' = additions
          return {
            messages: [
              {
                id: id9(), role: 'bot', delay: 400,
                text: "Home additions are one of our most popular services — room additions, second stories, garage conversions, and full suite expansions.",
              },
              {
                id: id9(), role: 'bot', delay: 400,
                text: 'What kind of addition?',
                options: [
                  { label: 'Bedroom / bath addition', value: 'bedroom' },
                  { label: 'Second story', value: 'second_story' },
                  { label: 'Garage addition', value: 'garage_add' },
                  { label: 'Sunroom / enclosed patio', value: 'sunroom' },
                  { label: 'Full suite / in-law', value: 'suite' },
                ],
              },
            ],
            next: 'other_detail',
          }
      }

    case 'adu_detail':
    case 'repairs_detail':
    case 'kitchen_detail':
    case 'newhome_detail':
    case 'decks_detail':
    case 'commercial_detail':
    case 'other_detail':
      return {
        messages: [
          {
            id: id9(), role: 'bot', delay: 500,
            text: 'Good to know. A couple of quick questions so we can give you an accurate estimate.',
          },
          {
            id: id9(), role: 'bot', delay: 400,
            text: 'Do you own the property?',
            options: [
              { label: 'Yes, I own it', value: 'yes' },
              { label: "In escrow / buying it", value: 'escrow' },
              { label: 'No / renting', value: 'no' },
            ],
          },
        ],
        next: 'qualify_owner',
      }

    case 'qualify_owner':
      return {
        messages: [
          {
            id: id9(), role: 'bot', delay: 500,
            text: "Got it. What's your timeline?",
            options: [
              { label: '🔥 Ready to start now', value: 'now' },
              { label: '📅 Within 1–3 months', value: '3mo' },
              { label: '🗓️ 3–6 months out', value: '6mo' },
              { label: '💭 Just exploring for now', value: 'exploring' },
            ],
          },
        ],
        next: 'qualify_timeline',
      }

    case 'qualify_timeline':
      return {
        messages: [
          {
            id: id9(), role: 'bot', delay: 500,
            text: 'Are you getting estimates from other contractors?',
            options: [
              { label: "No — BRE is my first call", value: 'no' },
              { label: 'Getting 2–3 bids', value: 'bids' },
              { label: 'Not yet', value: 'not_yet' },
            ],
          },
        ],
        next: 'qualify_bids',
      }

    case 'qualify_bids':
      return {
        messages: [
          {
            id: id9(), role: 'bot', delay: 600,
            text: "Perfect. The best next step is a free on-site estimate — Steve or a member of his team comes to your property, reviews the scope, and gives you a real number.",
          },
          {
            id: id9(), role: 'bot', delay: 800,
            text: "You can submit a detailed quote request online (takes about 2 minutes) or call us directly at (775) 391-4517.",
            options: [
              { label: '📋 Submit a quote request', value: 'form' },
              { label: '📞 I\'ll call instead', value: 'call' },
            ],
          },
        ],
        next: 'collect_contact',
      }

    case 'collect_contact':
      if (userVal === 'call') {
        return {
          messages: [
            {
              id: id9(), role: 'bot', delay: 400,
              text: "Great. Call us at (775) 391-4517 — Monday–Saturday, 7am–6pm PT. Steve or his team will answer.",
              link: { label: '📞 Call (775) 391-4517', href: 'tel:7753914517' },
            },
            {
              id: id9(), role: 'bot', delay: 600,
              text: 'Or if you prefer, you can also submit online and we\'ll call you within 24 hours.',
              link: { label: 'Submit a quote request →', href: '/contact' },
            },
          ],
          next: 'done',
        }
      }
      return {
        messages: [
          {
            id: id9(), role: 'bot', delay: 400,
            text: "The full quote form has detailed questions that help Steve prepare before visiting your property. Takes about 2 minutes.",
            link: { label: '📋 Start your free quote →', href: '/contact' },
          },
          {
            id: id9(), role: 'bot', delay: 700,
            text: 'Or call us directly: (775) 391-4517',
            link: { label: '📞 Call now', href: 'tel:7753914517' },
          },
        ],
        next: 'done',
      }

    case 'done':
      return {
        messages: [
          {
            id: id9(), role: 'bot', delay: 400,
            text: "Is there anything else I can help with?",
            options: [
              { label: 'Ask another question', value: 'restart' },
              { label: 'View completed projects', value: 'projects' },
            ],
          },
        ],
      }

    default:
      return { messages: [] }
  }
}

// ─── Message bubble ───────────────────────────────────────────────────────────
function Bubble({ msg, onOption }: { msg: Msg; onOption?: (val: string, label: string) => void }) {
  const isBot = msg.role === 'bot'

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-3`}>
      <div className={`max-w-[85%] ${isBot ? '' : 'order-last'}`}>
        {/* Image card */}
        {msg.image && (
          <div className="mb-2 rounded-xl overflow-hidden border border-white/[0.08]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={msg.image}
              alt={msg.imageAlt || ''}
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            {msg.imageCaption && (
              <div className="px-3 py-2 bg-[#0a1525] border-t border-white/[0.06]">
                <p className="font-mono text-[10px] text-[#e8e4dc]/40 tracking-wide">{msg.imageCaption}</p>
              </div>
            )}
          </div>
        )}

        {/* Text bubble */}
        {msg.text && (
          <div
            className={`px-4 py-3 rounded-2xl text-[13px] leading-relaxed ${
              isBot
                ? 'bg-[#0c1a27] text-[#e8e4dc]/80 rounded-tl-sm border border-white/[0.07]'
                : 'bg-[#1cb8b3] text-[#050a0f] font-medium rounded-tr-sm'
            }`}
          >
            {msg.text}
          </div>
        )}

        {/* Link button */}
        {msg.link && (
          <div className="mt-2">
            <a
              href={msg.link.href}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#c8923a] text-[#050a0f] text-[12px] font-bold font-mono hover:bg-[#d4a040] transition-colors w-full justify-center"
            >
              {msg.link.label}
            </a>
          </div>
        )}

        {/* Option buttons */}
        {msg.options && onOption && (
          <div className="flex flex-col gap-1.5 mt-2">
            {msg.options.map(opt => (
              <button
                key={opt.value}
                onClick={() => onOption(opt.value, opt.label)}
                className="text-left px-4 py-2.5 rounded-xl border border-[#1cb8b3]/25 text-[#1cb8b3] text-[12px] hover:bg-[#1cb8b3]/10 hover:border-[#1cb8b3]/50 active:scale-[0.98] transition-all duration-150 font-mono"
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Typing indicator ─────────────────────────────────────────────────────────
function TypingIndicator() {
  return (
    <div className="flex justify-start mb-3">
      <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-[#0c1a27] border border-white/[0.07] flex items-center gap-1.5">
        {[0, 1, 2].map(i => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#1cb8b3]/50"
            style={{ animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Main chat widget ─────────────────────────────────────────────────────────
export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([])
  const [typing, setTyping] = useState(false)
  const [currentStep, setCurrentStep] = useState<StepId>('start')
  const [hasUnread, setHasUnread] = useState(false)
  const [optionsDisabled, setOptionsDisabled] = useState<Set<string>>(new Set())
  const [initiated, setInitiated] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const openedRef = useRef(false)

  const scrollToBottom = useCallback(() => {
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }), 100)
  }, [])

  // Queue messages with delays
  const queueMessages = useCallback((msgs: Msg[], nextStep?: StepId) => {
    let cumulativeDelay = 0

    msgs.forEach((msg, idx) => {
      const delay = msg.delay ?? 600
      cumulativeDelay += delay

      // Show typing before this message
      setTimeout(() => setTyping(true), cumulativeDelay - Math.min(delay, 500))

      setTimeout(() => {
        setTyping(false)
        setMessages(prev => [...prev, { ...msg, options: idx === msgs.length - 1 ? msg.options : undefined }])
        scrollToBottom()
        if (!openedRef.current) setHasUnread(true)
      }, cumulativeDelay)
    })

    if (nextStep) {
      setTimeout(() => setCurrentStep(nextStep), cumulativeDelay + 100)
    }
  }, [scrollToBottom])

  // Init on first open
  const initChat = useCallback(() => {
    if (initiated) return
    setInitiated(true)
    const step = getStep('start')
    queueMessages(step.messages)
  }, [initiated, queueMessages])

  // Pulse after 8s to draw attention
  useEffect(() => {
    const t = setTimeout(() => { if (!open) setHasUnread(true) }, 8000)
    return () => clearTimeout(t)
  }, [open])

  const handleOpen = () => {
    setOpen(true)
    setHasUnread(false)
    openedRef.current = true
    initChat()
  }

  const handleClose = () => {
    setOpen(false)
    openedRef.current = false
  }

  const handleOption = useCallback((value: string, label: string) => {
    // Disable options on the last bot message
    setOptionsDisabled(prev => new Set(Array.from(prev).concat(label)))

    // Add user message
    const userMsg: Msg = {
      id: Math.random().toString(36).slice(2),
      role: 'user',
      text: label,
    }
    setMessages(prev => {
      // Remove options from last bot message
      const updated = [...prev]
      for (let i = updated.length - 1; i >= 0; i--) {
        if (updated[i].role === 'bot' && updated[i].options) {
          updated[i] = { ...updated[i], options: undefined }
          break
        }
      }
      return [...updated, userMsg]
    })
    scrollToBottom()

    // Special cases
    if (value === 'restart') {
      setTimeout(() => {
        const step = getStep('start')
        queueMessages(step.messages)
        setCurrentStep('start')
      }, 400)
      return
    }

    if (value === 'projects') {
      const botMsg: Msg = {
        id: Math.random().toString(36).slice(2),
        role: 'bot',
        text: 'Here are our completed projects:',
        link: { label: 'View All Projects →', href: '/projects' },
      }
      setTimeout(() => {
        setMessages(prev => [...prev, botMsg])
        scrollToBottom()
      }, 400)
      return
    }

    // Determine next step based on current
    const nextStepMap: Partial<Record<StepId, StepId>> = {
      start: 'service',
      adu_detail: 'qualify_owner',
      repairs_detail: 'qualify_owner',
      kitchen_detail: 'qualify_owner',
      newhome_detail: 'qualify_owner',
      decks_detail: 'qualify_owner',
      commercial_detail: 'qualify_owner',
      other_detail: 'qualify_owner',
      qualify_owner: 'qualify_timeline',
      qualify_timeline: 'qualify_bids',
      qualify_bids: 'collect_contact',
      collect_contact: 'done',
    }

    const stepToLoad = currentStep === 'start' ? 'service' : nextStepMap[currentStep] || 'done'
    const step = getStep(stepToLoad as StepId, value)
    queueMessages(step.messages, step.next)
    setCurrentStep(stepToLoad as StepId)
  }, [currentStep, queueMessages, scrollToBottom])

  return (
    <>
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
        }
        @keyframes chat-slide-up {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>

      {/* ── CHAT WINDOW ── */}
      {open && (
        <div
          className="fixed bottom-24 right-4 md:right-6 z-[1000] w-[calc(100vw-32px)] md:w-[380px] max-w-[440px]"
          style={{ animation: 'chat-slide-up 0.25s cubic-bezier(0.22,1,0.36,1) forwards' }}
        >
          <div className="flex flex-col rounded-2xl overflow-hidden border border-white/[0.10] shadow-2xl shadow-black/60" style={{ height: '520px', background: '#060d14' }}>

            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.07] flex-shrink-0" style={{ background: '#0a1520' }}>
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-white/[0.12]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://brebuilders.com/wp-content/uploads/2026/01/brelogo.webp"
                    alt="BRE Builders"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-[#0a1520]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-[#e8e4dc] leading-tight">BRE Builders</p>
                <p className="text-[11px] text-[#1cb8b3] font-mono">Online · Usually replies instantly</p>
              </div>
              <button
                onClick={handleClose}
                className="w-7 h-7 flex items-center justify-center rounded-lg text-[#e8e4dc]/30 hover:text-[#e8e4dc]/70 hover:bg-white/[0.06] transition-all"
                aria-label="Close chat"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 scrollbar-none">
              {messages.map(msg => (
                <Bubble
                  key={msg.id}
                  msg={msg}
                  onOption={msg.options ? handleOption : undefined}
                />
              ))}
              {typing && <TypingIndicator />}
              <div ref={bottomRef} />
            </div>

            {/* Footer */}
            <div className="flex-shrink-0 px-4 py-3 border-t border-white/[0.06] flex items-center justify-between" style={{ background: '#070e1a' }}>
              <p className="font-mono text-[10px] text-[#e8e4dc]/20 tracking-wide">BRE Builders · NV #0085999 · CA #1093798</p>
              <a
                href="tel:7753914517"
                className="font-mono text-[11px] text-[#1cb8b3]/60 hover:text-[#1cb8b3] transition-colors"
              >
                (775) 391-4517
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── FAB BUTTON ── */}
      <div className="fixed bottom-5 right-4 md:right-6 z-[1000]">
        {/* Pulse ring when unread */}
        {hasUnread && !open && (
          <div
            className="absolute inset-0 rounded-full bg-[#1cb8b3]"
            style={{ animation: 'pulse-ring 1.5s cubic-bezier(0.4,0,0.6,1) infinite' }}
          />
        )}
        <button
          onClick={open ? handleClose : handleOpen}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-black/50 transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ background: open ? '#0a1520' : '#1cb8b3', border: open ? '1px solid rgba(255,255,255,0.12)' : 'none' }}
          aria-label={open ? 'Close chat' : 'Chat with BRE Builders'}
        >
          {open ? (
            <svg className="w-5 h-5 text-[#e8e4dc]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-[#050a0f]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
            </svg>
          )}

          {/* Unread badge */}
          {hasUnread && !open && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#c8923a] text-[#050a0f] text-[10px] font-bold flex items-center justify-center border-2 border-[#050a0f]">
              1
            </span>
          )}
        </button>
      </div>
    </>
  )
}
