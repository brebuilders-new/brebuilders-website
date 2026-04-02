import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Cancellation Policy | Blue Reef Builders (BRE Builders) Reno NV',
  description: 'Cancellation and change order policy for BRE Builders (Blue Reef Builders), licensed general contractor in Reno, NV. Deposits, timelines, and project changes.',
  alternates: { canonical: `${SITE_URL}/cancellation-policy/` },
  robots: { index: true, follow: false },
}

export default function CancellationPolicyPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-6 bg-void">
          <div className="container max-w-[800px]">
            <nav className="flex items-center gap-2 mb-6 font-mono text-[11px] text-white/30">
              <Link href="/" className="hover:text-teal transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/50">Cancellation Policy</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-teal" />
              <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Legal</span>
            </div>
            <h1 className="font-display font-light text-[clamp(32px,5vw,60px)] leading-tight text-cream mb-2">Cancellation Policy</h1>
            <p className="font-mono text-[11px] text-cream/30">Blue Reef Enterprises, LLC (BRE Builders) · Reno, NV · Effective: January 2026</p>
          </div>
        </section>

        <section className="py-14 bg-void">
          <div className="container max-w-[800px]">
            <div className="space-y-10 text-[14px] text-cream/60 leading-[1.8]">

              <div>
                <p className="text-[15px] text-cream/70">This policy explains the terms for canceling or modifying a project with BRE Builders. We understand circumstances change, and we aim to be fair and transparent about how cancellations and project changes are handled.</p>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-cream mb-4">1. Estimates — No Cancellation Required</h2>
                <p>Requesting and receiving an estimate from BRE Builders creates no obligation on your part. Estimates are free and non-binding. You may decline or not respond to an estimate at any time with no cost or obligation.</p>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-cream mb-4">2. Cancellation Before Work Begins</h2>
                <p className="mb-3">If you cancel a signed project contract before any work has begun:</p>
                <ul className="space-y-2 pl-4">
                  {[
                    { cond: 'Cancellation within 3 business days of signing', result: 'Full deposit refund, no fees.' },
                    { cond: 'Cancellation 4–14 days after signing, before work begins', result: 'Deposit refunded minus any costs already incurred (permits applied for, materials ordered, subcontractors scheduled). BRE Builders will provide an itemized accounting of costs incurred.' },
                    { cond: 'Cancellation 15+ days after signing, before work begins', result: 'Deposit non-refundable. BRE Builders has reserved schedule time and incurred planning costs. Any materials ordered are billed at cost.' },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-teal flex-shrink-0 mt-0.5">✓</span>
                      <div>
                        <span className="text-cream/80 font-medium">{item.cond}:</span>{' '}
                        <span>{item.result}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-cream mb-4">3. Cancellation After Work Has Begun</h2>
                <p className="mb-3">If you cancel after work has started:</p>
                <p className="mb-3">You are responsible for payment for all work completed to the date of cancellation, all materials purchased or ordered for your project, reasonable demobilization costs, and any subcontractor fees already committed.</p>
                <p>BRE Builders will provide a detailed accounting of all work performed and costs incurred. Payment is due within 14 days of invoice for work-in-progress cancellations.</p>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-cream mb-4">4. Change Orders</h2>
                <p className="mb-3">Changes to project scope during construction are handled through written change orders. A change order specifies the additional or modified work, updated price, and any timeline impact. No scope change will begin without a signed change order.</p>
                <p>Change orders that reduce scope are handled case-by-case. Credit for reduced scope depends on whether materials have been ordered and labor scheduled.</p>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-cream mb-4">5. Project Delays by Client</h2>
                <p className="mb-3">If the project is delayed due to client actions — including delayed decisions, failure to provide site access, or failure to meet payment milestones — BRE Builders reserves the right to reschedule the project start date and adjust the project timeline accordingly.</p>
                <p>Extended delays (30+ days attributable to the client) may result in a price adjustment to reflect changes in material costs and labor availability.</p>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-cream mb-4">6. Cancellation by BRE Builders</h2>
                <p className="mb-3">BRE Builders reserves the right to cancel or pause a project in the following circumstances: non-payment at any milestone, site conditions that create safety risks, discovery of pre-existing conditions that materially change the scope, or client behavior that prevents reasonable project execution.</p>
                <p>If BRE Builders cancels the contract for reasons other than client fault, any unused portion of the deposit will be refunded.</p>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-cream mb-4">7. How to Cancel</h2>
                <p className="mb-3">To cancel or modify a project, contact BRE Builders in writing:</p>
                <div className="p-4 bg-panel rounded-xl border border-white/[0.06] font-mono text-[12px] text-cream/50">
                  <p>Email: brebuilders@gmail.com</p>
                  <p>Phone: (775) 391-4517</p>
                  <p className="mt-2">Written notice is required for all cancellations. Phone calls alone do not constitute formal cancellation notice.</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-cream mb-4">8. Disputes</h2>
                <p>In the event of a dispute regarding this policy, both parties agree to first attempt resolution through direct communication. If unresolved, disputes are subject to the governing law and jurisdiction specified in the project contract and the Terms of Service.</p>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-cream mb-4">Questions</h2>
                <p>Questions about this cancellation policy: brebuilders@gmail.com or (775) 391-4517. BRE Builders aims to be fair and transparent — if you have questions about your specific project situation, call us directly.</p>
              </div>

            </div>
            <div className="mt-12 pt-8 border-t border-white/[0.06] flex gap-3 flex-wrap">
              <Link href="/contact" className="btn-primary">Contact Us →</Link>
              <Link href="/terms-of-service" className="btn-ghost">Terms of Service</Link>
              <Link href="/privacy-policy" className="btn-ghost">Privacy Policy</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
