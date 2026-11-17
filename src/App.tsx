import React, { useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  Copy,
  Download,
  Mail,
  Menu,
  X
} from 'lucide-react';
import accidentalGroupieImg from './assets/images/accidental_groupie_teaser_1794882145646.jpg';
import { EmberColophon, MindBendingHardcover } from './components/BrandMark';
import PublishingProgram from './components/PublishingProgram';
import LegalModals from './components/LegalModals';

const AUTHOR_FAQS = [
  {
    q: 'Are there really no add-ons or hidden fees beyond the $3,000 flat fee?',
    a: 'Correct. Ember Core Studio charges one transparent $3,000 flat fee for our complete publishing suite—covering Paperback, Hardcover, and eBook interior typesetting, bespoke full-wrap and digital cover design (with up to three revision rounds), independent ISBN setup guidance, retail metadata/BISAC positioning, and your 1-on-1 launch walkthrough. The only separate expenses are optional physical author copies or direct statutory Bowker/printer account registrations paid inside your own account so ownership stays 100% in your name.'
  },
  {
    q: 'Do I keep 100% of my copyright, ISBN ownership, and book royalties?',
    a: 'Yes—100%. Unlike vanity or hybrid publishers that place your book under their account and deduct 50% or more of your royalties, we set up your retail and wholesale distribution directly in your name and your bank account. Ember Core Studio claims 0% of your sales forever.'
  },
  {
    q: 'How do payments work when I enroll on this site?',
    a: 'Your $3,000 investment is split into two equal milestones: a 50% ($1,500) commencement deposit to lock in your dedicated production slot and begin Week 1 onboarding, and the remaining 50% ($1,500) only when your formatted interior and custom cover proofs are ready for review prior to launch.'
  },
  {
    q: 'Will physical bookstores and libraries be able to order my book?',
    a: 'Yes. Because we guide you through registering an independent 13-digit Bowker ISBN under your own publishing imprint and configure wholesale distribution alongside Amazon KDP, independent bookstores, national chains, and libraries can order your book directly through global wholesale catalogs.'
  },
  {
    q: 'What condition should my manuscript be in before starting?',
    a: 'Your manuscript should be written and proofread in final text form (such as a clean Microsoft Word or Google Docs file up to 80,000 words for standard trade scope). Once submitted through our on-site enrollment portal, our Atlanta studio handles all visual book architecture, typography, and cover design from start to finish.'
  },
  {
    q: 'Who is listed as the Publisher of Record on Amazon and bookstore listings?',
    a: 'You are—under your own custom publishing imprint name. While Mind Bending: The Quantum Reality Strategist and our forthcoming 2027 release The Accidental Groupie are published under our house imprint, client titles are registered under the author’s own independent imprint so you control your literary brand.'
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<'terms' | 'refunds' | null>(null);
  const [teaserImgError, setTeaserImgError] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // 2027 Release Notification Form State
  const [readerName, setReaderName] = useState('');
  const [readerEmail, setReaderEmail] = useState('');
  const [notifyError, setNotifyError] = useState('');
  const [notifySubmitted, setNotifySubmitted] = useState(false);

  // Direct email clipboard helper
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyStudioEmail = async () => {
    try {
      await navigator.clipboard.writeText('contact@embercorestudio.org');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Clipboard fallback ignored
    }
  };

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = readerEmail.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      setNotifyError('Please enter a valid email address to receive the 2027 release announcement.');
      return;
    }

    setNotifyError('');

    try {
      const formData = new URLSearchParams();
      formData.append('form-name', 'accidental-groupie-2027');
      formData.append('readerName', readerName.trim());
      formData.append('email', cleanEmail);

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString()
      });
    } catch {
      // Preview environment gracefully falls back to local confirmation
    }

    setNotifySubmitted(true);
  };

  return (
    <div className="min-h-screen bg-paper-50 text-ink-950 flex flex-col">
      {/* STRICT 3-ZONE TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-paper-50/95 backdrop-blur-sm border-b border-paper-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Lockup */}
          <a
            href="#"
            className="inline-flex items-center gap-2.5 text-ink-950 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-ember-700"
          >
            <EmberColophon className="w-8 h-8 shrink-0" />
            <span className="font-serif text-xl font-semibold tracking-tight">
              Ember Core Studio
            </span>
          </a>

          {/* Zone 2: Concise Single-Line Navigation Links */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-ink-700"
          >
            <a
              href="#books"
              className="hover:text-ink-950 underline-offset-4 hover:underline transition-colors whitespace-nowrap shrink-0"
            >
              Our Books
            </a>
            <a
              href="#coming-2027"
              className="hover:text-ink-950 underline-offset-4 hover:underline transition-colors whitespace-nowrap shrink-0"
            >
              Coming 2027
            </a>
            <a
              href="#publishing"
              className="hover:text-ink-950 underline-offset-4 hover:underline transition-colors whitespace-nowrap shrink-0"
            >
              $3,000 Package
            </a>
            <a
              href="#faq"
              className="hover:text-ink-950 underline-offset-4 hover:underline transition-colors whitespace-nowrap shrink-0"
            >
              FAQ
            </a>
            <a
              href="#terms"
              className="hover:text-ink-950 underline-offset-4 hover:underline transition-colors whitespace-nowrap shrink-0"
            >
              Terms
            </a>
          </nav>

          {/* Zone 3: Single Primary Conversion CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#enroll"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-ember-700 hover:bg-ink-950 text-paper-50 text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              Start Your Book
            </a>
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-ink-800 hover:text-ink-950 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-paper-200 bg-paper-50 px-6 py-5 space-y-3">
            <div className="flex flex-col space-y-2.5 text-sm font-medium text-ink-800">
              <a
                href="#books"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-ember-700"
              >
                Our Books
              </a>
              <a
                href="#coming-2027"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-ember-700"
              >
                Coming 2027: The Accidental Groupie
              </a>
              <a
                href="#publishing"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-ember-700"
              >
                $3,000 Flat-Fee Publishing
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-ember-700"
              >
                Author FAQ &amp; Studio
              </a>
              <a
                href="#terms"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-ember-700"
              >
                Terms &amp; Conditions
              </a>
            </div>
            <div className="pt-2 border-t border-paper-200">
              <a
                href="#enroll"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-2.5 bg-ember-700 text-paper-50 text-xs font-semibold"
              >
                Start Your Book — $3,000 Flat Fee
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* HIGH-CONVERTING HERO SECTION */}
        <section className="pt-14 pb-16 sm:pt-20 sm:pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              {/* Left Column: Direct Conversion Value Proposition */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <p className="text-xs font-sans uppercase tracking-[0.2em] text-ember-700 font-semibold">
                    Independent Publishing House  ·  Est. 2025  ·  Atlanta, Georgia
                  </p>

                  <h1 className="font-serif font-semibold text-ink-950 leading-[1.05] text-[clamp(2.5rem,4.3vw,4.1rem)]">
                    Publish Your Book Everywhere Books Are Sold. Keep 100% of Your Royalties.
                  </h1>

                  <p className="text-base sm:text-lg text-ink-700 leading-relaxed max-w-2xl">
                    <strong>Ember Core Studio</strong> turns your finished manuscript into a
                    bookstore-caliber Hardcover, Paperback, and eBook—handling interior
                    typesetting, custom cover design, independent ISBN registration, and worldwide
                    launch for a{' '}
                    <strong className="text-ink-950">single $3,000 one-time flat fee</strong>. No
                    royalty splits, no upsell tiers, and every step managed right here with our
                    Atlanta publishing team.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap items-center gap-6">
                    <a
                      href="#enroll"
                      className="px-7 py-4 bg-ember-700 hover:bg-ink-950 text-paper-50 text-sm font-semibold transition-colors whitespace-nowrap"
                    >
                      Start Your $3,000 Book Launch
                    </a>
                    <a
                      href="#publishing"
                      className="text-sm font-medium text-ink-800 hover:text-ember-700 underline underline-offset-4 transition-colors whitespace-nowrap"
                    >
                      See All 6 Deliverables &amp; Royalty Math
                    </a>
                  </div>
                  <p className="text-xs text-ink-500 font-mono tabular-nums">
                    $1,500 Commencement Deposit  ·  $1,500 at Proof Approval  ·  100% File Acceptance Guarantee
                  </p>
                </div>
              </div>

              {/* Right Column: Contiguous Offer & Imprint Proof Card */}
              <div className="lg:col-span-5 bg-ink-950 text-paper-50 p-7 sm:p-9 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 pb-5 border-b border-paper-50/15">
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-foil-400">
                        Turnkey Author Package
                      </p>
                      <p className="font-serif text-4xl font-semibold text-paper-50 mt-1 tabular-nums">
                        $3,000{' '}
                        <span className="text-base font-sans font-normal text-paper-300/80">
                          one-time flat fee
                        </span>
                      </p>
                    </div>
                    <EmberColophon inverted className="w-12 h-12 shrink-0" />
                  </div>

                  <ul className="py-6 space-y-3 text-sm text-paper-200 border-b border-paper-50/15">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-foil-400 shrink-0 mt-0.5" />
                      <span>Hardcover, Paperback &amp; eBook interior typesetting</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-foil-400 shrink-0 mt-0.5" />
                      <span>Custom full-wrap print jacket &amp; digital cover design</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-foil-400 shrink-0 mt-0.5" />
                      <span>Independent Bowker ISBN under your own imprint</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-foil-400 shrink-0 mt-0.5" />
                      <span>Amazon, Ingram wholesale &amp; physical bookstore setup</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-foil-400 shrink-0 mt-0.5" />
                      <span>100% author rights, accounts &amp; ongoing royalties</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-5 space-y-3">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-foil-400">
                    Published House Slate
                  </p>
                  <div className="text-xs text-paper-200 space-y-1.5">
                    <a
                      href="#books"
                      className="flex items-center justify-between hover:text-foil-400 transition-colors"
                    >
                      <span>01. Mind Bending: The Quantum Reality Strategist</span>
                      <span className="font-mono text-[11px] text-foil-400 shrink-0 ml-2">
                        1ST RELEASE
                      </span>
                    </a>
                    <a
                      href="#coming-2027"
                      className="flex items-center justify-between hover:text-foil-400 transition-colors"
                    >
                      <span>02. The Accidental Groupie</span>
                      <span className="font-mono text-[11px] text-paper-300/75 shrink-0 ml-2">
                        COMING 2027
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Full-Width 4-Column Conversion Metrics Bar */}
            <div className="mt-14 pt-8 pb-2 border-t border-paper-200 grid grid-cols-2 lg:grid-cols-4 gap-8 tabular-nums">
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-semibold text-ink-950">
                  $3,000
                </p>
                <p className="text-xs text-ink-500 mt-1">
                  One-time flat fee  ·  Zero upsell tiers
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-semibold text-ember-700">
                  100%
                </p>
                <p className="text-xs text-ink-500 mt-1">
                  Author copyright &amp; net royalties retained
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-semibold text-ink-950">
                  6–8 Wks
                </p>
                <p className="text-xs text-ink-500 mt-1">
                  Guided production from manuscript to launch
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-semibold text-ink-950">
                  Est. 2025
                </p>
                <p className="text-xs text-ink-500 mt-1">
                  Headquartered in Atlanta, Georgia
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: HOUSE PROOF — OUR 1ST BOOK PUBLISHED INDEPENDENTLY UNDER EMBER CORE STUDIO */}
        <section
          id="books"
          className="py-24 sm:py-28 border-t border-paper-200 bg-paper-100/50 scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Tactile Hardcover Monograph Display */}
              <div className="lg:col-span-5">
                <figure className="bg-paper-50 border border-paper-200 p-8 sm:p-12">
                  <MindBendingHardcover />
                  <figcaption className="mt-6 pt-4 border-t border-paper-200 text-center text-xs font-serif italic text-ink-500">
                    Fig. 01 — Our 1st Book Published Independently Under Ember Core Studio.
                  </figcaption>
                </figure>
              </div>

              {/* Editorial & Commercial Proof Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2 text-xs text-ember-700 font-semibold uppercase tracking-[0.16em]">
                  <span>House Catalog No. 01</span>
                  <span aria-hidden="true">·</span>
                  <span>1st Book Published Independently Under Ember Core Studio</span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-ink-950 leading-[1.08]">
                  Mind Bending: The Quantum Reality Strategist
                </h2>

                <p className="text-base text-ink-700 leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-semibold first-letter:text-ink-950 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                  Released in 2025 as the inaugural independent publication of Ember Core Studio,{' '}
                  <em>Mind Bending: The Quantum Reality Strategist</em> by founder Amber Yaghi
                  blends quantum strategy, subconscious reprogramming, and real-world resilience.
                  Distributed across major national booksellers while retaining 100% independent
                  rights and royalties, this title is the exact blueprint behind the $3,000 turnkey
                  publishing system we deliver for our authors.
                </p>

                <blockquote className="py-5 border-y border-paper-200 font-serif italic text-xl sm:text-2xl text-ink-900 leading-snug">
                  &ldquo;We do not ask authors to trust a theory. Every formatting standard, cover
                  specification, and global distribution channel we build for your book was proven
                  first on our own inaugural release.&rdquo;
                </blockquote>

                <dl className="divide-y divide-paper-200 text-sm border-b border-paper-200 tabular-nums">
                  <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1">
                    <dt className="text-ink-500 font-medium">Author</dt>
                    <dd className="sm:col-span-2 text-ink-950 font-medium">Amber Yaghi</dd>
                  </div>
                  <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1">
                    <dt className="text-ink-500 font-medium">Imprint Milestone</dt>
                    <dd className="sm:col-span-2 text-ink-950">
                      1st Book Published Independently Under Ember Core Studio (2025)
                    </dd>
                  </div>
                  <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1">
                    <dt className="text-ink-500 font-medium">Retail Footprint</dt>
                    <dd className="sm:col-span-2 text-ink-700">
                      Hardcover, Paperback &amp; eBook  ·  Amazon, Walmart, Books-A-Million &amp; Global Wholesale
                    </dd>
                  </div>
                </dl>

                <div className="pt-2 flex flex-wrap items-center gap-5">
                  <a
                    href="https://www.amazon.com/stores/Amber-Yaghi/author/B0FKZ4T8V8/allbooks?"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-ink-950 hover:bg-ember-700 text-paper-50 text-xs font-semibold transition-colors whitespace-nowrap"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>View Published Edition on Amazon</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#enroll"
                    className="text-xs font-semibold text-ember-700 hover:text-ink-950 underline underline-offset-4 whitespace-nowrap"
                  >
                    Publish Your Book to This Standard →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: FORTHCOMING 2027 HOUSE ANNOUNCEMENT */}
        <section
          id="coming-2027"
          className="py-24 sm:py-28 bg-ink-950 text-paper-50 scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Announcement Copy & On-Site Reader Signup */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-foil-400 tabular-nums">
                  <span>House Catalog No. 02</span>
                  <span aria-hidden="true">·</span>
                  <span>Coming in 2027!</span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-paper-50 leading-[1.06]">
                  The Accidental Groupie
                </h2>

                <p className="text-xl sm:text-2xl font-serif italic text-foil-400">
                  Coming in 2027 — Published independently under Ember Core Studio.
                </p>

                <p className="text-base text-paper-200/90 leading-relaxed max-w-xl">
                  Following the global release of <em>Mind Bending: The Quantum Reality Strategist</em>,
                  Ember Core Studio proudly announces our second house publication:{' '}
                  <strong className="text-paper-50">The Accidental Groupie</strong>, arriving in{' '}
                  <strong className="text-paper-50">2027</strong>. Stepping behind the stage lights
                  into an unforgettable world of music culture, unexpected detours, and candid
                  transformation, Amber Yaghi&rsquo;s next book continues our commitment to bold,
                  100% independent publishing.
                </p>

                <div className="pt-4 border-t border-paper-50/15 max-w-xl">
                  {!notifySubmitted ? (
                    <form onSubmit={handleNotifySubmit} className="space-y-3" noValidate>
                      <p className="text-xs uppercase tracking-[0.16em] text-foil-400 font-semibold">
                        Get Notified When The Accidental Groupie Launches in 2027
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <input
                          type="text"
                          value={readerName}
                          onChange={(e) => setReaderName(e.target.value)}
                          placeholder="First name (optional)"
                          aria-label="First name"
                          className="sm:w-44 bg-ink-900 border border-paper-50/20 px-3.5 py-2.5 text-sm text-paper-50 placeholder:text-ink-400 focus:outline-none focus:border-foil-400 transition-colors"
                        />
                        <input
                          type="email"
                          required
                          value={readerEmail}
                          onChange={(e) => setReaderEmail(e.target.value)}
                          placeholder="Enter your email address"
                          aria-label="Email address for 2027 release updates"
                          className="flex-1 bg-ink-900 border border-paper-50/20 px-3.5 py-2.5 text-sm text-paper-50 placeholder:text-ink-400 focus:outline-none focus:border-foil-400 transition-colors"
                        />
                        <button
                          type="submit"
                          className="px-5 py-2.5 bg-foil-500 hover:bg-foil-400 text-ink-950 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
                        >
                          Notify Me
                        </button>
                      </div>
                      {notifyError && (
                        <p role="alert" className="text-xs text-foil-400">
                          {notifyError}
                        </p>
                      )}
                    </form>
                  ) : (
                    <div className="py-3 px-4 bg-ink-900 border border-foil-500/40 space-y-1.5">
                      <p className="text-sm font-medium text-paper-50">
                        You are on the 2027 First-Edition List
                        {readerName.trim() ? `, ${readerName.trim()}` : ''}!
                      </p>
                      <p className="text-xs text-paper-300 leading-relaxed">
                        We have registered <strong>{readerEmail.trim()}</strong> for cover-reveal
                        and pre-order updates for <em>The Accidental Groupie</em>.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Teaser Hardcover Photography */}
              <div className="lg:col-span-5">
                <figure className="border border-paper-50/15 bg-ink-900 p-4 sm:p-5">
                  {!teaserImgError ? (
                    <img
                      src={accidentalGroupieImg}
                      alt="Burgundy cloth hardcover teaser edition of The Accidental Groupie on a walnut studio table under warm stage lighting"
                      referrerPolicy="no-referrer"
                      onError={() => setTeaserImgError(true)}
                      className="w-full aspect-[3/4] object-cover"
                    />
                  ) : (
                    <div className="w-full aspect-[3/4] bg-ink-950 border border-foil-500/30 flex flex-col items-center justify-center p-8 text-center">
                      <EmberColophon inverted className="w-16 h-16 mb-4" />
                      <p className="font-serif text-2xl text-paper-50">The Accidental Groupie</p>
                      <p className="text-xs font-mono uppercase tracking-widest text-foil-400 mt-2">
                        Coming 2027  ·  Ember Core Studio
                      </p>
                    </div>
                  )}
                  <figcaption className="mt-3 flex items-center justify-between text-xs font-serif italic text-paper-300/80">
                    <span>Fig. 02 — Advance Edition Preview</span>
                    <span className="not-italic font-mono text-[11px] text-foil-400 tabular-nums">
                      COMING 2027
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 & 4: $3,000 PACKAGE, TIMELINE, ROYALTY CALCULATOR & ON-SITE ENROLLMENT */}
        <PublishingProgram onOpenTerms={() => setActiveLegalModal('terms')} />

        {/* SECTION 5: AUTHOR FAQ & ATLANTA STUDIO ETHOS */}
        <section
          id="faq"
          className="py-24 sm:py-28 border-t border-paper-200 bg-paper-50 scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto px-6 space-y-24">
            {/* Author FAQ Accordion */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-4">
                <p className="text-xs font-sans uppercase tracking-[0.2em] text-ember-700 font-semibold">
                  Author Questions Answered
                </p>
                <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-ink-950 leading-tight">
                  Everything You Should Know Before Enrolling.
                </h2>
                <p className="text-sm text-ink-700 leading-relaxed">
                  Have a specific question about your manuscript before starting? Reach our
                  Atlanta, Georgia studio directly at{' '}
                  <strong className="text-ink-950 font-mono text-xs">
                    contact@embercorestudio.org
                  </strong>
                  .
                </p>
                <div className="pt-2">
                  <a
                    href="#enroll"
                    className="inline-flex items-center px-6 py-3 bg-ink-950 hover:bg-ember-700 text-paper-50 text-xs font-semibold transition-colors whitespace-nowrap"
                  >
                    Reserve Your $3,000 Publishing Slot
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 divide-y divide-paper-200 border-y border-paper-200">
                {AUTHOR_FAQS.map((item, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={item.q}>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full py-5 flex items-center justify-between gap-4 text-left cursor-pointer group"
                      >
                        <span className="font-serif text-xl font-semibold text-ink-950 group-hover:text-ember-700 transition-colors">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-ink-500 shrink-0 transition-transform duration-150 ${
                            isOpen ? 'rotate-180 text-ember-700' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="pb-5 pr-6 text-sm text-ink-700 leading-relaxed">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Founder & Atlanta Studio Identity + Brand Kit */}
            <div id="about" className="pt-16 border-t border-paper-200 space-y-16 scroll-mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5 space-y-2">
                  <p className="text-xs font-sans uppercase tracking-[0.2em] text-ember-700 font-semibold">
                    Established 2025  ·  Atlanta, Georgia
                  </p>
                  <h3 className="text-3xl font-serif font-semibold text-ink-950 leading-tight">
                    Founded by Author &amp; Publisher Amber Yaghi
                  </h3>
                </div>

                <div className="lg:col-span-7 space-y-4 text-base text-ink-700 leading-relaxed">
                  <p>
                    Established in <strong>2025 in Atlanta, Georgia</strong>,{' '}
                    <strong className="text-ink-950">Ember Core Studio</strong> was built by author
                    and publisher Amber Yaghi to give independent writers a dignified, high-craft
                    alternative to predatory hybrid presses.
                  </p>
                  <p>
                    After independently publishing{' '}
                    <strong className="text-ink-950">
                      Mind Bending: The Quantum Reality Strategist
                    </strong>{' '}
                    and preparing our forthcoming 2027 house title{' '}
                    <strong className="text-ink-950">The Accidental Groupie</strong>, our studio
                    focuses on one mission: delivering uncompromising print and digital book
                    production for a single $3,000 flat fee so authors own their work outright.
                  </p>
                </div>
              </div>

              {/* Official Studio Logo & Site Thumbnail Assets */}
              <div className="bg-paper-100/70 border border-paper-200 p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-paper-200">
                  <div>
                    <p className="text-xs font-sans uppercase tracking-[0.18em] text-ink-500 font-semibold">
                      Official Brand Identity
                    </p>
                    <h4 className="text-2xl font-serif font-semibold text-ink-950 mt-0.5">
                      Ember Core Studio Colophon Logo &amp; Site Thumbnail
                    </h4>
                  </div>
                  <p className="text-xs text-ink-500">
                    Est. 2025  ·  Atlanta, Georgia
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  <div className="lg:col-span-4 bg-paper-50 border border-paper-200 p-6 flex flex-col justify-between">
                    <div className="py-5 flex flex-col items-center justify-center text-center border-b border-paper-200">
                      <EmberColophon className="w-20 h-20" />
                      <p className="mt-3 font-serif text-lg font-semibold text-ink-950">
                        Ember Core Studio
                      </p>
                      <p className="text-xs text-ink-500">Est. 2025 · Atlanta, GA</p>
                    </div>
                    <div className="pt-4 flex items-center justify-between gap-3 text-xs">
                      <a
                        href="/logo.svg"
                        download="ember-core-studio-logo.svg"
                        className="inline-flex items-center gap-1.5 font-medium text-ink-950 hover:text-ember-700 transition-colors whitespace-nowrap"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Logo SVG</span>
                      </a>
                      <a
                        href="/logo.png"
                        download="ember-core-studio-logo.png"
                        className="inline-flex items-center gap-1.5 font-medium text-ink-700 hover:text-ember-700 transition-colors whitespace-nowrap"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Logo PNG</span>
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-8 bg-paper-50 border border-paper-200 p-6 flex flex-col justify-between gap-4">
                    <div className="border border-paper-200 overflow-hidden bg-paper-100">
                      <img
                        src="/og-image.png"
                        alt="Ember Core Studio official 1200 by 630 site social preview thumbnail"
                        referrerPolicy="no-referrer"
                        className="w-full aspect-[1200/630] object-cover"
                      />
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                      <span className="text-ink-500 tabular-nums">
                        Site Social Preview Thumbnail (1200 × 630 PNG)
                      </span>
                      <a
                        href="/og-image.png"
                        download="ember-core-studio-thumbnail.png"
                        className="inline-flex items-center gap-1.5 font-medium text-ink-950 hover:text-ember-700 transition-colors whitespace-nowrap"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Thumbnail</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: TERMS & CONDITIONS BAR */}
        <section
          id="terms"
          className="py-16 border-t border-paper-200 bg-paper-100/60 scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-ember-700">
                Legal Transparency  ·  State of Georgia
              </p>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-ink-950">
                Author-First Terms &amp; Production Guarantees.
              </h2>
              <p className="text-sm text-ink-700 leading-relaxed">
                Review our complete Terms &amp; Conditions governing our single{' '}
                <strong>$3,000 one-time flat-fee publishing package</strong>, 100% author rights
                and royalty retention, and retail platform technical acceptance guarantee.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setActiveLegalModal('terms')}
                className="px-5 py-3 bg-ink-950 hover:bg-ember-700 text-paper-50 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                Read Terms &amp; Conditions
              </button>
              <button
                type="button"
                onClick={() => setActiveLegalModal('refunds')}
                className="px-5 py-3 bg-paper-50 hover:bg-paper-200/70 border border-paper-300 text-ink-950 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                Refund &amp; Guarantee Policy
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* QUIET EDITORIAL FOOTER */}
      <footer className="border-t border-paper-200 bg-paper-50 py-12 text-ink-700">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <EmberColophon className="w-8 h-8 shrink-0" />
              <div>
                <p className="font-serif text-lg font-semibold text-ink-950 leading-none">
                  Ember Core Studio
                </p>
                <p className="text-xs text-ink-500 mt-1 tabular-nums">
                  Established 2025  ·  Atlanta, Georgia  ·  Independent Publishing House
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs">
              <button
                type="button"
                onClick={handleCopyStudioEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-paper-100 border border-paper-300 hover:border-ink-950 text-ink-950 font-mono transition-colors cursor-pointer whitespace-nowrap"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-ember-700" />
                    <span>Copied: contact@embercorestudio.org</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-ember-700" />
                    <span>contact@embercorestudio.org</span>
                    <Copy className="w-3 h-3 text-ink-400 ml-1" />
                  </>
                )}
              </button>

              <a
                href="#enroll"
                className="inline-flex items-center px-4 py-2 bg-ember-700 hover:bg-ink-950 text-paper-50 font-semibold transition-colors whitespace-nowrap"
              >
                Enroll Manuscript ($3,000 Flat)
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-paper-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-500">
            <p className="tabular-nums">
              © 2025–{new Date().getFullYear()} Ember Core Studio · Atlanta, Georgia. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a href="#books" className="hover:text-ink-950 underline-offset-4 hover:underline">
                Our Books
              </a>
              <a
                href="#publishing"
                className="hover:text-ink-950 underline-offset-4 hover:underline"
              >
                $3,000 Publishing
              </a>
              <button
                type="button"
                onClick={() => setActiveLegalModal('terms')}
                className="hover:text-ink-950 underline underline-offset-4 cursor-pointer whitespace-nowrap"
              >
                Terms &amp; Conditions
              </button>
              <button
                type="button"
                onClick={() => setActiveLegalModal('refunds')}
                className="hover:text-ink-950 underline underline-offset-4 cursor-pointer whitespace-nowrap"
              >
                Refund Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      <LegalModals
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
}
