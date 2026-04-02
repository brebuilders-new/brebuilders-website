'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

const NAV = [
  { href: '/admin',          label: 'Dashboard', icon: '◈' },
  { href: '/admin/leads',    label: 'Leads',     icon: '◎' },
  { href: '/admin/pipeline', label: 'Pipeline',  icon: '⋯' },
]

const STATUS_COLORS: Record<string, string> = {
  new:        'bg-blue-500/15 text-blue-300 border-blue-500/30',
  contacted:  'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
  site_visit: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
  quoted:     'bg-orange-500/15 text-orange-300 border-orange-500/30',
  won:        'bg-green-500/15 text-green-300 border-green-500/30',
  lost:       'bg-red-500/15 text-red-300 border-red-500/30',
  archived:   'bg-gray-500/15 text-gray-400 border-gray-500/30',
}

export { STATUS_COLORS }

const S = {
  shell:   { display: 'flex', minHeight: '100vh', background: '#060d14', color: '#e8e4dc', fontFamily: 'system-ui, sans-serif' } as React.CSSProperties,
  sidebar: { width: '200px', flexShrink: 0, borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', position: 'sticky', top: 0, height: '100vh' } as React.CSSProperties,
  logo:    { padding: '18px 16px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)' } as React.CSSProperties,
  nav:     { flex: 1, padding: '10px 8px', overflowY: 'auto' } as React.CSSProperties,
  signout: { padding: '10px 8px', borderTop: '1px solid rgba(255,255,255,0.06)' } as React.CSSProperties,
  main:    { flex: 1, overflow: 'auto', minWidth: 0 } as React.CSSProperties,
  // Mobile top bar
  topbar:  { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: '#060d14' } as React.CSSProperties,
  // Mobile nav overlay
  overlay: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 40 } as React.CSSProperties,
  drawer:  { position: 'fixed', top: 0, left: 0, bottom: 0, width: '240px', background: '#060d14', borderRight: '1px solid rgba(255,255,255,0.06)', zIndex: 50, display: 'flex', flexDirection: 'column' } as React.CSSProperties,
}

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  const router = useRouter()
  const [signingOut, setSigningOut] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleSignOut = async () => {
    setSigningOut(true)
    await fetch('/api/admin/auth', { method: 'DELETE' })
    router.push('/admin/login')
  }

  const navLink = (item: typeof NAV[0], onClick?: () => void) => {
    const active = path === item.href || (item.href !== '/admin' && path.startsWith(item.href))
    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={onClick}
        style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '10px 12px', borderRadius: '8px', marginBottom: '2px',
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
  }

  const signOutBtn = (
    <button
      onClick={handleSignOut}
      disabled={signingOut}
      style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: 'none', background: 'transparent', color: 'rgba(232,228,220,0.35)', cursor: 'pointer', fontSize: '13px', textAlign: 'left', fontFamily: 'monospace' }}
    >
      {signingOut ? 'Signing out...' : '← Sign out'}
    </button>
  )

  return (
    <>
      {/* ── DESKTOP layout ─────────────────────────────────────────── */}
      <div style={{ ...S.shell, display: 'flex' }} className="admin-shell">
        <style>{`
          @media (max-width: 768px) {
            .admin-sidebar { display: none !important; }
            .admin-topbar  { display: flex !important; }
          }
          @media (min-width: 769px) {
            .admin-sidebar { display: flex !important; }
            .admin-topbar  { display: none !important; }
          }
        `}</style>

        {/* Desktop sidebar */}
        <aside className="admin-sidebar" style={S.sidebar}>
          <div style={S.logo}>
            <p style={{ fontFamily: 'monospace', fontSize: '9px', letterSpacing: '3px', color: '#1cb8b3', textTransform: 'uppercase', margin: '0 0 2px' }}>BRE Builders</p>
            <p style={{ fontSize: '13px', color: 'rgba(232,228,220,0.5)', margin: 0 }}>Admin</p>
          </div>
          <nav style={S.nav}>{NAV.map(item => navLink(item))}</nav>
          <div style={S.signout}>{signOutBtn}</div>
        </aside>

        {/* Mobile top bar */}
        <div className="admin-topbar" style={{ ...S.topbar, display: 'none', position: 'sticky', top: 0, zIndex: 30 }}>
          <div>
            <p style={{ fontFamily: 'monospace', fontSize: '9px', letterSpacing: '3px', color: '#1cb8b3', textTransform: 'uppercase', margin: 0 }}>BRE Builders</p>
          </div>
          <button
            onClick={() => setMobileOpen(true)}
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#e8e4dc', padding: '8px 12px', cursor: 'pointer', fontSize: '18px', lineHeight: 1 }}
          >
            ☰
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <>
            <div style={S.overlay} onClick={() => setMobileOpen(false)} />
            <aside style={S.drawer}>
              <div style={{ ...S.logo, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontFamily: 'monospace', fontSize: '9px', letterSpacing: '3px', color: '#1cb8b3', textTransform: 'uppercase', margin: '0 0 2px' }}>BRE Builders</p>
                  <p style={{ fontSize: '13px', color: 'rgba(232,228,220,0.5)', margin: 0 }}>Admin</p>
                </div>
                <button onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none', color: 'rgba(232,228,220,0.4)', cursor: 'pointer', fontSize: '20px', padding: '4px' }}>✕</button>
              </div>
              <nav style={S.nav}>{NAV.map(item => navLink(item, () => setMobileOpen(false)))}</nav>
              <div style={S.signout}>{signOutBtn}</div>
            </aside>
          </>
        )}

        {/* Main content */}
        <main style={S.main}>{children}</main>
      </div>
    </>
  )
}
