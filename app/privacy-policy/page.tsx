import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Privacy Policy | BRE Builders — Blue Reef Builders Reno NV',
  description: 'Privacy policy for BRE Builders (Blue Reef Enterprises, LLC), licensed general contractor in Reno, NV. Website address: brebuilders.com.',
  alternates: { canonical: `${SITE_URL}/privacy-policy/` },
  robots: { index: false },
}

// NOTE: This is the actual WP privacy policy content extracted word-for-word
// from the WordPress export (content_post project file, page_id=10177)
// Last updated by WP: Tue, 15 Jul 2025

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-6 bg-void border-b border-white/[0.05]">
          <div className="container max-w-[800px]">
            <nav className="flex items-center gap-2 mb-6 font-mono text-[11px] text-cream/30">
              <Link href="/" className="hover:text-teal transition-colors">Home</Link>
              <span>/</span>
              <span className="text-cream/50">Privacy Policy</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-teal" />
              <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Legal</span>
            </div>
            <h1 className="font-display font-light text-[clamp(32px,5vw,60px)] leading-tight text-cream mb-2">
              Privacy Policy
            </h1>
            <p className="font-mono text-[11px] text-cream/30">Blue Reef Enterprises, LLC (BRE Builders) · Last updated: July 15, 2025</p>
          </div>
        </section>

        <section className="py-14 bg-void">
          <div className="container max-w-[800px]">
            <div className="space-y-10 text-[14px] text-cream/65 leading-[1.8]">

              <div>
                <h2 className="font-display text-[20px] font-light text-cream mb-4 pb-2 border-b border-white/[0.07]">Who we are</h2>
                <p>Our website address is: <a href="https://brebuilders.com" className="text-teal hover:underline">https://brebuilders.com</a>.</p>
              </div>

              <div>
                <h2 className="font-display text-[20px] font-light text-cream mb-4 pb-2 border-b border-white/[0.07]">Comments</h2>
                <p className="mb-3">When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor&apos;s IP address and browser user agent string to help spam detection.</p>
                <p className="mb-3">An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: <a href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">https://automattic.com/privacy/</a>. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>
                <p>Visitor comments may be checked through an automated spam detection service.</p>
              </div>

              <div>
                <h2 className="font-display text-[20px] font-light text-cream mb-4 pb-2 border-b border-white/[0.07]">Media</h2>
                <p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>
              </div>

              <div>
                <h2 className="font-display text-[20px] font-light text-cream mb-4 pb-2 border-b border-white/[0.07]">Cookies</h2>
                <p className="mb-3">If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
                <p className="mb-3">If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
                <p className="mb-3">When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select &ldquo;Remember Me&rdquo;, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>
                <p>If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>
              </div>

              <div>
                <h2 className="font-display text-[20px] font-light text-cream mb-4 pb-2 border-b border-white/[0.07]">Embedded content from other websites</h2>
                <p className="mb-3">Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
                <p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>
              </div>

              <div>
                <h2 className="font-display text-[20px] font-light text-cream mb-4 pb-2 border-b border-white/[0.07]">Who we share your data with</h2>
                <p>If you request a password reset, your IP address will be included in the reset email.</p>
              </div>

              <div>
                <h2 className="font-display text-[20px] font-light text-cream mb-4 pb-2 border-b border-white/[0.07]">How long we retain your data</h2>
                <p className="mb-3">If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</p>
                <p>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>
              </div>

              <div>
                <h2 className="font-display text-[20px] font-light text-cream mb-4 pb-2 border-b border-white/[0.07]">What rights you have over your data</h2>
                <p>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
              </div>

              <div>
                <h2 className="font-display text-[20px] font-light text-cream mb-4 pb-2 border-b border-white/[0.07]">Where your data is sent</h2>
                <p>Visitor comments may be checked through an automated spam detection service.</p>
              </div>

              <div className="pt-6 border-t border-white/[0.06]">
                <p className="font-mono text-[11px] text-cream/30">Blue Reef Enterprises, LLC · NV Lic #0085999 · CA Lic #1093798</p>
                <p className="font-mono text-[11px] text-cream/30 mt-1">Contact: brebuilders@gmail.com · (775) 391-4517</p>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <Link href="/contact" className="btn-primary">Contact Us →</Link>
              <Link href="/" className="btn-ghost">Back to Home</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
