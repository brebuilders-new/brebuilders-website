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

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      {NAV.map(item => {
        const active = path === item.href || (item.href !== '/admin' && path.startsWith(item.href))
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClick}
            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg mb-0.5 text-sm transition-all duration-150 border ${
              active
                ? 'bg-teal/10 text-teal border-teal/20'
                : 'text-cream/50 border-transparent hover:text-cream/80 hover:bg-white/5'
            }`}
          >
            <span className="w-4 text-center text-base leading-none">{item.icon}</span>
            {item.label}
          </Link>
        )
      })}
    </>
  )

  const SidebarContent = ({ onClick }: { onClick?: () => void }) => (
    <div className="flex flex-col h-full">
      <div className="px-4 py-4 border-b border-white/[0.06]">
        <p className="font-mono text-[9px] tracking-[3px] text-teal uppercase mb-0.5">BRE Builders</p>
        <p className="text-[12px] text-cream/40">Admin Dashboard</p>
      </div>
      <nav className="flex-1 p-2 overflow-y-auto">
        <NavLinks onClick={onClick} />
      </nav>
      <div className="p-2 border-t border-white/[0.06]">
        <button
          onClick={handleSignOut}
          disabled={signingOut}
          className="w-full px-3 py-2.5 rounded-lg text-left text-[13px] font-mono text-cream/30 hover:text-cream/50 transition-colors"
        >
          {signingOut ? 'Signing out...' : '← Sign out'}
        </button>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen" style={{ background: '#060d14', color: '#e8e4dc', fontFamily: 'system-ui, sans-serif' }}>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-[200px] flex-shrink-0 sticky top-0 h-screen border-r border-white/[0.06]">
        <SidebarContent />
      </aside>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 py-3 border-b border-white/[0.06]"
        style={{ background: '#060d14' }}>
        <p className="font-mono text-[9px] tracking-[3px] text-teal uppercase">BRE Builders · Admin</p>
        <button
          onClick={() => setMobileOpen(true)}
          className="px-3 py-1.5 rounded-lg text-cream/60 text-sm border border-white/10 hover:border-white/20"
        >
          ☰ Menu
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          <div className="md:hidden fixed inset-0 bg-black/60 z-40" onClick={() => setMobileOpen(false)} />
          <aside className="md:hidden fixed top-0 left-0 bottom-0 w-[220px] z-50 border-r border-white/[0.06]"
            style={{ background: '#060d14' }}>
            <SidebarContent onClick={() => setMobileOpen(false)} />
          </aside>
        </>
      )}

      {/* Main */}
      <main className="flex-1 min-w-0 md:overflow-auto pt-[52px] md:pt-0">
        {children}
      </main>
    </div>
  )
}
