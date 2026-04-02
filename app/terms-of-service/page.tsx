import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Terms of Service | Blue Reef Builders (BRE Builders) Reno NV',
  description: 'Terms of service for Blue Reef Builders (BRE Builders), licensed general contractor in Reno, NV. Website use, estimates, contracts, and project terms.',
  alternates: { canonical: `${SITE_URL}/terms-of-service/` },
  robots: { index: true, follow: false },
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-6 bg-void">
          <div className="container max-w-[800px]">
            <nav className="flex items-center gap-2 mb-6 font-mono text-[11px] text-white/30">
              <Link href="/" className="hover:text-teal transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/50">Terms of Service</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-teal" />
              <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Legal</span>
            </div>
            <h1 className="font-display font-light text-[clamp(32px,5vw,60px)] leading-tight text-cream mb-2">Terms of Service</h1>
            <p className="font-mono text-[11px] text-cream/30">Blue Reef Enterprises, LLC (BRE Builders) · Reno, NV · Effective: January 2026</p>
          </div>
        </section>

        <section className="py-14 bg-void">
          <div className="container max-w-[800px]">
            <div className="space-y-10 text-[14px] text-cream/60 leading-[1.8]">

              <div>
                <h2 className="font-display text-[22px] text-cream mb-4">1. Company Information</h2>
                <p>These Terms of Service govern your use of the website located at https://brebuilders.com and your engagement of construction services provided by Blue Reef Enterprises, LLC, doing business as BRE Builders and Blue Reef Builders.</p>
                <div className="mt-3 p-4 bg-panel rounded-xl border border-white/[0.06] font-mono text-[12px] text-cream/50">
                  <p>Blue Reef Enterprises, LLC</p>
                  <p>Reno, NV 89502</p>
                  <p>Email: brebuilders@gmail.com</p>
                  <p>Phone: (775) 391-4517</p>
                  <p className="mt-2">Nevada Contractor License #0085999</p>
                  <p>California Contractor License #1093798</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-cream mb-4">2. Website Use</h2>
                <p className="mb-3">By accessing brebuilders.com, you agree to use the website for lawful purposes only. You may not use the site to transmit harmful, fraudulent, or abusive content, or to attempt unauthorized access to any part of the site.</p>
                <p>All content on this website — including text, images, and project photos — is the property of Blue Reef Enterprises, LLC. Reproduction or redistribution without written permission is prohibited.</p>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-cream mb-4">3. Estimates and Quotes</h2>
                <p className="mb-3">BRE Builders provides free, no-obligation written estimates. An estimate represents our good-faith assessment of project scope and cost at a specific point in time. Estimates are not binding contracts.</p>
                <p className="mb-3">Estimates may change if the project scope changes, if unforeseen site conditions are discovered during work (e.g., hidden rot, structural damage, code violations requiring remediation), or if material costs change substantially between estimate and project start.</p>
                <p>All estimates expire 30 days from the date issued unless otherwise specified in writing.</p>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-cream mb-4">4. Project Contracts</h2>
                <p className="mb-3">All construction work is performed under a written contract signed by both parties. The contract governs the specific project scope, timeline, pricing, payment schedule, and terms. These Terms of Service apply to website use and general engagement; the signed project contract governs the specific construction relationship.</p>
                <p>No work will begin without a signed contract and required deposit.</p>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-cream mb-4">5. Payment Terms</h2>
                <p className="mb-3">BRE Builders accepts payment by check, bank transfer, and credit card. Payment schedules are milestone-based and specified in the project contract. A deposit is required upon contract signing.</p>
                <p className="mb-3">Payment milestones are typically: deposit at contract signing, progress payment(s) at defined project milestones, and final payment upon substantial completion.</p>
                <p>Late payments may result in work stoppage. BRE Builders reserves the right to file a mechanics lien on properties with outstanding balances in accordance with Nevada and California law.</p>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-cream mb-4">6. Warranty</h2>
                <p className="mb-3">BRE Builders provides a 1-year workmanship warranty on all completed construction projects from the date of substantial completion. This warranty covers defects in workmanship performed by BRE Builders.</p>
                <p className="mb-3">Manufacturer warranties on materials, appliances, and equipment are passed through to the client and governed by the respective manufacturer&apos;s terms.</p>
                <p>The workmanship warranty does not cover: normal wear and tear, damage caused by the client or third parties, damage resulting from improper maintenance, damage from events outside normal conditions (floods, earthquakes, fires), or pre-existing conditions not disclosed at the time of contract.</p>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-cream mb-4">7. Licensing and Insurance</h2>
                <p>BRE Builders is fully licensed, bonded, and insured in Nevada and California. Nevada Contractor License #0085999. California Contractor License #1093798. Certificate of insurance available upon request.</p>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-cream mb-4">8. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, BRE Builders&apos; liability to any client is limited to the amount paid for the specific project. BRE Builders is not liable for indirect, consequential, or punitive damages arising from construction work or website use.</p>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-cream mb-4">9. Governing Law</h2>
                <p>These Terms of Service are governed by the laws of the State of Nevada. For projects performed in California, California law governs the construction contract. Any disputes shall be resolved in the appropriate courts of Washoe County, Nevada, or the applicable California jurisdiction.</p>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-cream mb-4">10. Changes to These Terms</h2>
                <p>BRE Builders may update these Terms of Service at any time. The updated effective date will be noted at the top of this page. Continued use of the website after changes constitutes acceptance of the updated terms.</p>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-cream mb-4">11. Contact</h2>
                <p>Questions about these terms: brebuilders@gmail.com or (775) 391-4517.</p>
              </div>

            </div>
            <div className="mt-12 pt-8 border-t border-white/[0.06] flex gap-3">
              <Link href="/contact" className="btn-primary">Contact Us →</Link>
              <Link href="/privacy-policy" className="btn-ghost">Privacy Policy</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
