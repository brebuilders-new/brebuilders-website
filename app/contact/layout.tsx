import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Free Estimates & Project Requests',
  description:
    'Request a free estimate from BRE Builders. ADU construction, repairs, kitchen & bath, additions, commercial. NV #0085999 · CA #1009219. Response within 24 hours.',
  alternates: { canonical: 'https://brebuilders.com/contact/' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
