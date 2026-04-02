'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

const NAV = [
  { href: '/admin',          label: 'Dashboard',  icon: '◈' },
  { href: '/admin/leads',    label: 'Leads',       icon: '◎' },
  { href: '/admin/pipeline', label: 'Pipeline',    icon: '⋯' },
  { href: '/admin/quotes',   label: 'Quotes',      icon: '◻' },
]

const STATUS_COLORS: Record<string, string> = {
  new:         'bg-blue-500/15 text-blue-300 border-blue-500/30',
  contacted:   'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
  site_visit:  'bg-purple-500/15 text-purple-300 border-purple-500/30',
  quoted:      'bg-orange-500/15 text-orange-300 border-orange-500/30',
  won:         'bg-green-500/15 text-green-300 border-green-500/30',
  lost:        'bg-red-500/15 text-red-300 border-red-500/30',
  archived:    'bg-gray-500/15 text-gray-400 border-gray-500/30',
}

export { STATUS_COLORS }

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  const router = useRouter()
  const [signingOut, setSigningOut] = useState(false)

  const handleSignOut = async () => {
    setSigningOut(true)
    await fetch('/api/admin/auth', { method: 'DELETE' })
    router.push('/admin/login')
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#060d14', color: '#e8e4dc', fontFamily: 'system-ui, sans-serif' }}>

      {/* Sidebar */}
      <aside style={{
        width: '220px', flexShrink: 0, borderRight: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', flexDirection: 'column', position: 'sticky', top: 0, height: '100vh',
      }}>
        {/* Logo */}
        <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '9px', letterSpacing: '3px', color: '#1cb8b3', textTransform: 'uppercase', margin: '0 0 2px' }}>BRE Builders</p>
          <p style={{ fontSize: '13px', color: 'rgba(232,228,220,0.5)', margin: 0 }}>Admin Dashboard</p>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '12px 10px' }}>
          {NAV.map(item => {
            const active = path === item.href || (item.href !== '/admin' && path.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '9px 12px', borderRadius: '8px', marginBottom: '2px',
                  fontSize: '14px', textDecoration: 'none', transition: 'all 0.15s',
                  background: active ? 'rgba(28,184,179,0.1)' : 'transparent',
                  color: active ? '#1cb8b3' : 'rgba(232,228,220,0.55)',
                  border: active ? '1px solid rgba(28,184,179,0.2)' : '1px solid transparent',
                }}
              >
                <span style={{ fontSize: '16px', width: '18px', textAlign: 'center', lineHeight: 1 }}>{item.icon}</span>
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Sign out */}
        <div style={{ padding: '12px 10px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <button
            onClick={handleSignOut}
            disabled={signingOut}
            style={{
              width: '100%', padding: '9px 12px', borderRadius: '8px', border: 'none',
              background: 'transparent', color: 'rgba(232,228,220,0.35)', cursor: 'pointer',
              fontSize: '13px', textAlign: 'left', fontFamily: 'monospace',
            }}
          >
            {signingOut ? 'Signing out...' : '← Sign out'}
          </button>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, overflow: 'auto' }}>
        {children}
      </main>
    </div>
  )
}
