'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

const NAV = [
  { href: '/admin',          label: 'Dashboard', icon: '◈' },
  { href: '/admin/projects', label: 'Projects',  icon: '📁' },
  { href: '/admin/leads',    label: 'Leads',     icon: '◎' },
  { href: '/admin/photos',   label: 'Photos',    icon: '📷' },
  { href: '/admin/pipeline', label: 'Pipeline',  icon: '⋯' },
]

const STATUS_COLORS: Record<string, string> = {
  new:        'bg-blue-50 text-blue-700 border-blue-200',
  contacted:  'bg-yellow-50 text-yellow-800 border-yellow-200',
  site_visit: 'bg-purple-50 text-purple-700 border-purple-200',
  quoted:     'bg-orange-50 text-orange-700 border-orange-200',
  won:        'bg-green-50 text-green-700 border-green-200',
  lost:       'bg-red-50 text-red-700 border-red-200',
  archived:   'bg-gray-50 text-gray-500 border-gray-200',
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
                : 'text-stone-500 border-transparent hover:text-stone-800 hover:bg-stone-100'
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
      <div className="px-4 py-4 border-b border-stone-200">
        <img src="/brelogo.webp" alt="BRE Builders" style={{ height: 28, width: 'auto', marginBottom: 6 }} />
        <p className="font-mono text-[9px] tracking-[2px] text-stone-400 uppercase">Admin Dashboard</p>
      </div>
      <nav className="flex-1 p-2 overflow-y-auto">
        <NavLinks onClick={onClick} />
      </nav>
      <div className="p-2 border-t border-stone-200">
        <button
          onClick={handleSignOut}
          disabled={signingOut}
          className="w-full px-3 py-2.5 rounded-lg text-left text-[13px] font-mono text-stone-400 hover:text-stone-600 transition-colors"
        >
          {signingOut ? 'Signing out...' : '← Sign out'}
        </button>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen" style={{ background: '#f1f0ee', color: '#1a1a1a', fontFamily: 'system-ui, sans-serif' }}>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-[200px] flex-shrink-0 sticky top-0 h-screen border-r border-stone-200">
        <SidebarContent />
      </aside>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 py-3 border-b border-stone-200"
        style={{ background: '#ffffff' }}>
        <img src="/brelogo.webp" alt="BRE Builders" style={{ height: 24, width: 'auto' }} />
        <button
          onClick={() => setMobileOpen(true)}
          className="px-3 py-1.5 rounded-lg text-stone-500 text-sm border border-stone-200 hover:border-stone-300"
        >
          ☰ Menu
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          <div className="md:hidden fixed inset-0 bg-black/60 z-40" onClick={() => setMobileOpen(false)} />
          <aside className="md:hidden fixed top-0 left-0 bottom-0 w-[220px] z-50 border-r border-stone-200"
            style={{ background: '#ffffff' }}>
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

