import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import AdminShell from '@/components/admin/AdminShell'

export const metadata: Metadata = {
  title: 'Admin — BRE Builders',
  robots: { index: false, follow: false },
}

// Simple cookie-based auth check
async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get('bre_admin_token')?.value
  return token === process.env.ADMIN_PASSWORD
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const authed = await isAuthenticated()
  if (!authed) {
    redirect('/admin/login')
  }

  return <AdminShell>{children}</AdminShell>
}
