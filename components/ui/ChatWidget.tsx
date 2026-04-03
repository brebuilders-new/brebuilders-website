'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
  ts?: number
}

const GREETING: Message = {
  role: 'assistant',
  content: "Hey — what can I help you with? Whether it's a repair, ADU, remodel, or just figuring out what you need, ask away.",
  ts: Date.now(),
}

const QUICK_QUESTIONS = [
  'How much does an ADU cost?',
  'Do you do free estimates?',
  'Are you licensed in California?',
  'Foundation crack — is it serious?',
]

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([GREETING])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [sessionId] = useState(() => Math.random().toString(36).slice(2))
  const [showQuick, setShowQuick] = useState(true)
  const [unread, setUnread] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const hasAutoOpened = useRef(false)

  // Auto-open after 12s if not previously dismissed
  useEffect(() => {
    if (hasAutoOpened.current) return
    const dismissed = sessionStorage.getItem('bre_chat_dismissed')
    if (dismissed) return
    const t = setTimeout(() => {
      if (!open) {
        setUnread(1)
        hasAutoOpened.current = true
      }
    }, 12000)
    return () => clearTimeout(t)
  }, [open])

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setUnread(0)
      setTimeout(() => inputRef.current?.focus(), 200)
    }
  }, [open])

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || loading) return
    setShowQuick(false)

    const userMsg: Message = { role: 'user', content: text.trim(), ts: Date.now() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
          sessionId,
        }),
      })

      const data = await res.json() as { reply?: string; error?: string }

      if (data.reply) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply!, ts: Date.now() }])
      } else {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: "Sorry, having a little trouble on my end. Give us a call at (775) 391-4517 or fill out the form at brebuilders.com/contact/",
          ts: Date.now(),
        }])
      }
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Connection issue. You can reach us directly at (775) 391-4517.",
        ts: Date.now(),
      }])
    } finally {
      setLoading(false)
    }
  }, [messages, loading, sessionId])

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  const toggleOpen = () => {
    setOpen(prev => {
      if (!prev) setUnread(0)
      else sessionStorage.setItem('bre_chat_dismissed', '1')
      return !prev
    })
  }

  return (
    <>
      {/* ── LAUNCHER ── */}
      <button
        onClick={toggleOpen}
        aria-label="Chat with BRE Builders"
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 9998,
          width: 58, height: 58, borderRadius: '50%',
          background: open ? '#374151' : 'linear-gradient(135deg,#1d4ed8,#1e40af)',
          border: 'none', cursor: 'pointer',
          boxShadow: '0 8px 28px rgba(29,78,216,0.45)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'transform 0.25s cubic-bezier(.34,1.56,.64,1), background 0.2s',
          transform: open ? 'scale(0.95)' : 'scale(1)',
        }}
      >
        {open ? (
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        {unread > 0 && !open && (
          <span style={{
            position: 'absolute', top: -2, right: -2,
            width: 18, height: 18, borderRadius: '50%',
            background: '#ef4444', border: '2px solid white',
            fontSize: 10, fontWeight: 700, color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{unread}</span>
        )}
      </button>

      {/* ── PANEL ── */}
      <div style={{
        position: 'fixed', bottom: 96, right: 24, zIndex: 9997,
        width: 380, maxWidth: 'calc(100vw - 32px)',
        maxHeight: 580,
        background: '#ffffff',
        borderRadius: 16,
        boxShadow: '0 24px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)',
        border: '1px solid #e5e7eb',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden',
        transform: open ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(16px)',
        transformOrigin: 'bottom right',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'all' : 'none',
        transition: 'transform 0.28s cubic-bezier(.34,1.56,.64,1), opacity 0.2s ease',
      }}>

        {/* HEADER */}
        <div style={{
          background: '#111827', padding: '16px 20px',
          borderBottom: '3px solid #c8a96e',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 40, height: 40, borderRadius: '50%',
              background: 'linear-gradient(135deg,#c8a96e,#b8922a)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: 15, color: '#111827',
              flexShrink: 0,
            }}>BR</div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: '#ffffff' }}>BRE Builders</p>
              <p style={{ margin: 0, fontSize: 11, color: '#c8a96e' }}>Licensed GC · Reno NV &amp; Northern CA</p>
            </div>
            <div style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#22c55e',
              boxShadow: '0 0 0 2px rgba(34,197,94,0.25)',
            }} />
          </div>
        </div>

        {/* MESSAGES */}
        <div style={{
          flex: 1, overflowY: 'auto', padding: '16px',
          display: 'flex', flexDirection: 'column', gap: 12,
        }}>
          {messages.map((msg, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
              gap: 8, alignItems: 'flex-end',
            }}>
              {msg.role === 'assistant' && (
                <div style={{
                  width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg,#c8a96e,#b8922a)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, fontWeight: 700, color: '#111827',
                }}>BR</div>
              )}
              <div style={{
                maxWidth: '78%',
                padding: '10px 14px',
                borderRadius: msg.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                background: msg.role === 'user' ? '#1d4ed8' : '#f9fafb',
                border: msg.role === 'user' ? 'none' : '1px solid #e5e7eb',
                color: msg.role === 'user' ? '#ffffff' : '#111827',
                fontSize: 13, lineHeight: 1.6,
              }}>
                {msg.content.split('\n').map((line, j) => (
                  <span key={j}>{line}{j < msg.content.split('\n').length - 1 && <br/>}</span>
                ))}
              </div>
            </div>
          ))}

          {/* Quick questions */}
          {showQuick && messages.length === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingLeft: 36 }}>
              {QUICK_QUESTIONS.map(q => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  style={{
                    background: 'none', border: '1px solid #e5e7eb',
                    borderRadius: 8, padding: '7px 12px', textAlign: 'left',
                    fontSize: 12, color: '#374151', cursor: 'pointer',
                    transition: 'border-color 0.15s, background 0.15s',
                  }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = '#c8a96e'; (e.target as HTMLElement).style.background = '#fffbeb' }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = '#e5e7eb'; (e.target as HTMLElement).style.background = 'none' }}
                >{q}</button>
              ))}
            </div>
          )}

          {/* Typing indicator */}
          {loading && (
            <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                background: 'linear-gradient(135deg,#c8a96e,#b8922a)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 10, fontWeight: 700, color: '#111827',
              }}>BR</div>
              <div style={{
                padding: '10px 14px', borderRadius: '14px 14px 14px 4px',
                background: '#f9fafb', border: '1px solid #e5e7eb',
                display: 'flex', gap: 4, alignItems: 'center',
              }}>
                {[0, 0.18, 0.36].map((delay, i) => (
                  <span key={i} style={{
                    width: 6, height: 6, borderRadius: '50%', background: '#9ca3af',
                    animation: 'bre-bounce 1.1s infinite',
                    animationDelay: `${delay}s`,
                    display: 'inline-block',
                  }}/>
                ))}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* INPUT */}
        <div style={{
          padding: '12px 16px', borderTop: '1px solid #e5e7eb',
          background: '#ffffff', flexShrink: 0,
          display: 'flex', gap: 8,
        }}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask about services, pricing, your project..."
            rows={1}
            style={{
              flex: 1, resize: 'none', border: '1px solid #e5e7eb',
              borderRadius: 10, padding: '9px 13px',
              fontSize: 13, fontFamily: 'inherit',
              outline: 'none', lineHeight: 1.5,
              maxHeight: 100, color: '#111827',
              background: '#f9fafb',
              transition: 'border-color 0.15s',
            }}
            onFocus={e => (e.target.style.borderColor = '#1d4ed8')}
            onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
            onInput={e => {
              const t = e.target as HTMLTextAreaElement
              t.style.height = 'auto'
              t.style.height = Math.min(t.scrollHeight, 100) + 'px'
            }}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || loading}
            style={{
              width: 40, height: 40, borderRadius: 10, border: 'none',
              background: !input.trim() || loading ? '#e5e7eb' : '#1d4ed8',
              cursor: !input.trim() || loading ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, alignSelf: 'flex-end',
              transition: 'background 0.15s',
            }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* FOOTER */}
        <div style={{
          padding: '6px 16px 10px', background: '#f9fafb',
          borderTop: '1px solid #f3f4f6', textAlign: 'center',
        }}>
          <a href="/contact" style={{ fontSize: 11, color: '#9ca3af', textDecoration: 'none' }}>
            Get a free estimate → &nbsp;|&nbsp; (775) 391-4517
          </a>
        </div>
      </div>

      <style>{`
        @keyframes bre-bounce {
          0%,60%,100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </>
  )
}
