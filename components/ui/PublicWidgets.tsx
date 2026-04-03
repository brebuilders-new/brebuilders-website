'use client'
import { usePathname } from 'next/navigation'
import CursorTracker from '@/components/ui/CursorTracker'
import ChatWidget from '@/components/ui/ChatWidget'

export default function PublicWidgets() {
  const path = usePathname()
  if (path.startsWith('/admin')) return null
  return (
    <>
      <CursorTracker />
      <ChatWidget />
    </>
  )
}
