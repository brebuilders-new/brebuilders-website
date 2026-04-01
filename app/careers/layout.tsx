import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | Join BRE Builders Reno NV',
  description:
    'Join BRE Builders — licensed general contractor in Reno, NV. We are hiring carpenters, laborers, project managers, and trades. Apply online.',
  alternates: { canonical: 'https://brebuilders.com/careers/' },
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
