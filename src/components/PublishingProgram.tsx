import React, { useState } from 'react';
import { Check, Copy, Download, Mail } from 'lucide-react';

const DELIVERABLES = [
  {
    index: '01',
    title: 'Print & eBook Interior Typesetting',
    detail:
      'Bespoke interior book design and page layout crafted to industry trim standards—delivering press-ready PDFs for Paperback and Hardcover editions alongside validated reflowable ePub files for Kindle, Apple Books, Barnes & Noble, and Kobo.'
  },
  {
    index: '02',
    title: 'Custom Full-Wrap & Digital Cover Design',
    detail:
      'Original front cover art paired with exact spine-width, bleed, and ISBN barcode engineering for full-wrap Paperback and Hardcover jackets, including up to three collaborative author revision rounds.'
  },
  {
    index: '03',
    title: 'Independent ISBN & Custom Imprint Setup',
    detail:
      'Guided 13-digit Bowker ISBN registration and imprint configuration so your own name or publishing company—never a vanity press or locked retail platform—is permanently listed as Publisher of Record.'
  },
  {
    index: '04',
    title: 'Global Retail & Physical Bookstore Access',
    detail:
      'Complete production setup across Amazon KDP and global wholesale print-on-demand catalogs (IngramSpark, Barnes & Noble, Walmart, Books-A-Million, independent bookstores, and library ordering systems).'
  },
  {
    index: '05',
    title: 'Retail Metadata, BISAC & Sales Copy',
    detail:
      'High-converting retail book description formatting, strategic BISAC category placement, and search keyword architecture engineered so readers, retail buyers, and librarians find your book.'
  },
  {
    index: '06',
    title: '1-on-1 Launch Session & Master File Handover',
    detail:
      'Direct guided account configuration and publication walkthrough with Amber Yaghi, concluding with complete delivery of every print-ready PDF, ePub, and cover master file into your sole possession.'
  }
];

const PRODUCTION_PHASES = [
  {
    step: 'Phase 01  ·  Week 1',
    title: 'Manuscript Intake & Imprint Strategy',
    summary:
      'We audit your final manuscript, select optimal trim dimensions and paper stock, establish your independent imprint identity, and map your cover direction.'
  },
  {
    step: 'Phase 02  ·  Weeks 2–4',
    title: 'Interior Typesetting & Custom Cover Art',
    summary:
      'Your chapters are typeset with custom running headers, drop caps, and balanced margins while bespoke front and full-wrap print jacket concepts are crafted.'
  },
  {
    step: 'Phase 03  ·  Weeks 5–6',
    title: 'ISBN Barcodes, Metadata & Proof Sign-Off',
    summary:
      'We integrate your 13-digit ISBN barcode, finalize BISAC categories and retail sales copy, and present full digital interior and jacket proofs for your review.'
  },
  {
    step: 'Phase 04  ·  Weeks 7–8',
    title: 'Global Distribution & 1-on-1 Launch',
    summary:
      'Together in a guided 1-on-1 launch session, we configure your direct retail accounts so 100% of book royalties deposit straight into your bank account.'
  }
];

interface PublishingProgramProps {
  onOpenTerms: () => void;
}

export default function PublishingProgram({ onOpenTerms }: PublishingProgramProps) {
  // Interactive Author Royalty & Break-Even Calculator State
  const [retailPrice, setRetailPrice] = useState<number>(19.99);
  const [projectedCopies, setProjectedCopies] = useState<number>(1000);

  // Estimate realistic net author profit per paperback/eBook blended unit (~52% of list after print/retail fee)
  const netPerCopyFullOwnership = retailPrice * 0.52;
  const totalAuthorEarningsEmber = Math.round(netPerCopyFullOwnership * projectedCopies);
  const totalAuthorEarningsHybrid = Math.round(totalAuthorEarningsEmber * 0.5);
  const hybridRoyaltyLoss = totalAuthorEarningsEmber - totalAuthorEarningsHybrid;
  const copiesToRecoupFlatFee = Math.ceil(3000 / netPerCopyFullOwnership);

  // Self-Contained On-Site Enrollment State
  const [authorName, setAuthorName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [genre, setGenre] = useState('Non-Fiction / Personal Growth');
  const [wordCount, setWordCount] = useState('');
  const [manuscriptStatus, setManuscriptStatus] = useState('Completed & Proofread');
  const [trimSize, setTrimSize] = useState('6" × 9" Standard Trade');
  const [imprintName, setImprintName] = useState('');
  const [targetLaunch, setTargetLaunch] = useState('Next 60–90 Days');
  const [synopsis, setSynopsis] = useState('');
  const [agreedTerms, setAgreedTerms] = useState(false);

  const [formError, setFormError] = useState('');
  const [enrollmentRef, setEnrollmentRef] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  const formatEnrollmentAgreement = (refCode: string) => {
    return `EMBER CORE STUDIO — ON-SITE PUBLISHING ENROLLMENT & SCOPE SUMMARY
Established 2025  ·  Atlanta, Georgia  ·  embercorestudio.org
=================================================================
Enrollment Reference: ${refCode}
Date Generated: ${new Date().toLocaleDateString()}

AUTHOR & MANUSCRIPT DETAILS
-----------------------------------------------------------------
Author / Pen Name: ${authorName.trim()}
Email Address: ${email.trim()}
Phone Number: ${phone.trim() || 'Not provided'}
Book Title: ${bookTitle.trim()}${subtitle.trim() ? `: ${subtitle.trim()}` : ''}
Genre / Category: ${genre}
Approximate Word Count: ${wordCount.trim() || 'Standard trade length'}
Manuscript Status: ${manuscriptStatus}

PRODUCTION SPECIFICATIONS (INCLUDED IN $3,000 FLAT FEE)
-----------------------------------------------------------------
Included Formats: Hardcover + Paperback + Reflowable eBook (ePub)
Preferred Print Trim Size: ${trimSize}
Publisher Imprint Name: ${imprintName.trim() || 'Author Custom Imprint (Finalized in Week 1)'}
Target Release Window: ${targetLaunch}

FINANCIAL & OWNERSHIP TERMS
-----------------------------------------------------------------
Total Turnkey Publishing Fee: $3,000.00 USD (One-Time Flat Fee)
Milestone 1 — Commencement Deposit (50%): $1,500.00 USD
Milestone 2 — Proof Completion Balance (50%): $1,500.00 USD
Royalties Claimed by Ember Core Studio: 0%
Copyright, Accounts & Royalties Retained by Author: 100%

SYNOPSIS & COVER DIRECTION NOTES
-----------------------------------------------------------------
${synopsis.trim() || 'To be reviewed during Week 1 onboarding consultation.'}
`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!authorName.trim()) {
      setFormError('Please enter your full name or pen name.');
      return;
    }
    if (!emailRegex.test(trimmedEmail)) {
      setFormError('Please enter a valid email address to receive your enrollment confirmation.');
      return;
    }
    if (!bookTitle.trim()) {
      setFormError('Please enter your working book title.');
      return;
    }
    if (!agreedTerms) {
      setFormError('Please confirm that you agree to the $3,000 flat-fee Terms & Conditions.');
      return;
    }

    setFormError('');
    const generatedRef = `ECS-${Math.floor(100000 + Math.random() * 900000)}`;
    setEnrollmentRef(generatedRef);

    try {
      const formData = new URLSearchParams();
      formData.append('form-name', 'publishing-enrollment');
      formData.append('enrollmentRef', generatedRef);
      formData.append('authorName', authorName.trim());
      formData.append('email', trimmedEmail);
      formData.append('phone', phone.trim());
      formData.append('bookTitle', bookTitle.trim());
      formData.append('subtitle', subtitle.trim());
      formData.append('genre', genre);
      formData.append('wordCount', wordCount.trim());
      formData.append('manuscriptStatus', manuscriptStatus);
      formData.append('trimSize', trimSize);
      formData.append('imprintName', imprintName.trim());
      formData.append('targetLaunch', targetLaunch);
      formData.append('synopsis', synopsis.trim());

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString()
      });
    } catch {
      // Preview fallback handled seamlessly with downloadable/emailable confirmation
    }

    setSubmitted(true);
  };

  const handleDownloadAgreement = () => {
    const content = formatEnrollmentAgreement(enrollmentRef);
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${enrollmentRef}-Ember-Core-Publishing-Summary.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleEmailBrief = () => {
    const subject = encodeURIComponent(
      `Publishing Enrollment [${enrollmentRef}] — ${bookTitle.trim()}`
    );
    const body = encodeURIComponent(formatEnrollmentAgreement(enrollmentRef));
    window.location.href = `mailto:contact@embercorestudio.org?subject=${subject}&body=${body}`;
  };

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(formatEnrollmentAgreement(enrollmentRef));
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 2200);
    } catch {
      // Clipboard fallback ignored
    }
  };

  return (
    <>
      {/* DELIVERABLES, TIMELINE & ROYALTY CALCULATOR SECTION */}
      <section id="publishing" className="py-24 sm:py-28 border-t border-paper-200 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Clear Offer Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-paper-200 items-end">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-xs font-sans uppercase tracking-[0.2em] text-ember-700 font-semibold">
                All-Inclusive Turnkey Publishing  ·  Zero Royalty Splits
              </p>
              <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-ink-950 leading-[1.08]">
                One Transparent $3,000 Flat Fee. Everything Your Book Needs to Launch Globally.
              </h2>
              <p className="text-base sm:text-lg text-ink-700 leading-relaxed max-w-2xl">
                We replaced complicated publishing menus, surprise add-ons, and predatory royalty
                contracts with a single all-inclusive production partnership. You bring your
                finished manuscript—our Atlanta studio handles every design, typesetting, ISBN, and
                distribution step while you retain 100% ownership.
              </p>
            </div>

            <div className="lg:col-span-4 bg-paper-100 border border-paper-200 p-6 sm:p-7 space-y-4">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-xs uppercase tracking-[0.16em] text-ink-500 font-semibold">
                  Complete Package
                </span>
                <span className="text-xs font-mono text-ember-700 font-semibold">
                  0% ROYALTIES TAKEN
                </span>
              </div>
              <p className="text-5xl font-serif font-bold text-ink-950 tabular-nums">$3,000</p>
              <p className="text-xs text-ink-700 font-mono tabular-nums">
                $1,500 to Start  ·  $1,500 at Proof Approval
              </p>
              <a
                href="#enroll"
                className="block w-full text-center py-3 bg-ember-700 hover:bg-ink-950 text-paper-50 text-xs font-semibold transition-colors whitespace-nowrap"
              >
                Enroll Your Manuscript On-Site
              </a>
            </div>
          </div>

          {/* 6 Complete Deliverables */}
          <div className="py-16 border-b border-paper-200">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-10">
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-ink-950">
                What Is Included in Your $3,000 Publishing Suite
              </h3>
              <p className="text-xs text-ink-500 font-mono">
                Hardcover  ·  Paperback  ·  eBook  ·  Global Wholesale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
              {DELIVERABLES.map((item) => (
                <div key={item.index} className="space-y-3 pt-5 border-t border-paper-200">
                  <p className="text-xs font-mono font-semibold text-ember-700 tabular-nums">
                    {item.index}.
                  </p>
                  <h4 className="text-xl font-serif font-semibold text-ink-950 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm text-ink-700 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Step Production Roadmap */}
          <div className="py-16 border-b border-paper-200">
            <div className="max-w-2xl mb-10 space-y-2">
              <p className="text-xs font-sans uppercase tracking-[0.2em] text-ember-700 font-semibold">
                Structured 6–8 Week Turnaround
              </p>
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-ink-950">
                How Your Book Goes From Manuscript to Bookstore Shelves
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRODUCTION_PHASES.map((phase) => (
                <div key={phase.step} className="bg-paper-100/70 border border-paper-200 p-6 space-y-3">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-ember-700 tabular-nums">
                    {phase.step}
                  </p>
                  <h4 className="text-lg font-serif font-semibold text-ink-950 leading-snug">
                    {phase.title}
                  </h4>
                  <p className="text-xs text-ink-700 leading-relaxed">{phase.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Author Royalty & Break-Even Calculator */}
          <div className="py-16 border-b border-paper-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <p className="text-xs font-sans uppercase tracking-[0.2em] text-ember-700 font-semibold">
                    Author Economics Calculator
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-ink-950">
                    See Why Keeping 100% of Your Royalties Matters
                  </h3>
                  <p className="text-sm text-ink-700 leading-relaxed">
                    Hybrid and vanity presses take 50% or more of your net royalties for the life
                    of your copyright. Adjust your book price and sales goal below to see how fast
                    our one-time $3,000 flat fee pays for itself—and how much more you keep.
                  </p>
                </div>

                <div className="space-y-5 pt-2">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium text-ink-800 tabular-nums">
                      <label htmlFor="calc-price">Target Retail Book Price</label>
                      <span className="font-mono font-semibold text-ink-950">
                        ${retailPrice.toFixed(2)}
                      </span>
                    </div>
                    <input
                      id="calc-price"
                      type="range"
                      min="14.99"
                      max="34.99"
                      step="1"
                      value={retailPrice}
                      onChange={(e) => setRetailPrice(Number(e.target.value))}
                      className="w-full accent-ember-700 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] font-mono text-ink-500 tabular-nums">
                      <span>$14.99</span>
                      <span>$24.99</span>
                      <span>$34.99</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium text-ink-800 tabular-nums">
                      <label htmlFor="calc-copies">Projected Copies Sold</label>
                      <span className="font-mono font-semibold text-ink-950">
                        {projectedCopies.toLocaleString()} copies
                      </span>
                    </div>
                    <input
                      id="calc-copies"
                      type="range"
                      min="250"
                      max="5000"
                      step="250"
                      value={projectedCopies}
                      onChange={(e) => setProjectedCopies(Number(e.target.value))}
                      className="w-full accent-ember-700 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] font-mono text-ink-500 tabular-nums">
                      <span>250 copies</span>
                      <span>2,500 copies</span>
                      <span>5,000 copies</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-ink-950 text-paper-50 p-7 sm:p-9 space-y-6 tabular-nums">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-paper-50/15">
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-foil-400">
                      Your Net Royalties (100% Kept)
                    </p>
                    <p className="text-3xl sm:text-4xl font-serif font-semibold text-paper-50 mt-1">
                      ${totalAuthorEarningsEmber.toLocaleString()}
                    </p>
                    <p className="text-xs text-paper-300/80 mt-1">
                      Paid directly to your accounts
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-paper-300/70">
                      50% Hybrid Press Split
                    </p>
                    <p className="text-3xl sm:text-4xl font-serif font-semibold text-paper-300/75 mt-1">
                      ${totalAuthorEarningsHybrid.toLocaleString()}
                    </p>
                    <p className="text-xs text-foil-400 mt-1">
                      You save +${hybridRoyaltyLoss.toLocaleString()} in royalties
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-paper-200">
                      Estimated break-even on $3,000 investment:{' '}
                      <strong className="text-foil-400 font-mono">
                        ~{copiesToRecoupFlatFee.toLocaleString()} copies
                      </strong>
                    </p>
                    <p className="text-[11px] text-paper-300/70 mt-0.5">
                      Every copy sold afterward is 100% your ongoing author profit.
                    </p>
                  </div>
                  <a
                    href="#enroll"
                    className="px-5 py-2.5 bg-foil-500 hover:bg-foil-400 text-ink-950 text-xs font-semibold transition-colors whitespace-nowrap text-center shrink-0"
                  >
                    Start Enrollment
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Publishing Comparison Matrix */}
          <div className="pt-16">
            <div className="max-w-2xl mb-8 space-y-2">
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-ink-950">
                How Ember Core Studio Compares
              </h3>
              <p className="text-sm text-ink-700 leading-relaxed">
                Designed for authors who demand bookstore-caliber production without signing away
                ownership or navigating complex formatting specifications alone.
              </p>
            </div>

            <div className="overflow-x-auto border border-paper-200 bg-paper-100/50">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-paper-200 bg-paper-100 text-xs uppercase tracking-wider text-ink-500 font-sans">
                    <th className="py-4 px-5 font-semibold">Publishing Standard</th>
                    <th className="py-4 px-5 font-semibold">Vanity / Hybrid Press</th>
                    <th className="py-4 px-5 font-semibold">DIY Self-Upload</th>
                    <th className="py-4 px-5 font-semibold bg-paper-50 text-ink-950">
                      Ember Core Studio ($3,000 Flat)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-paper-200 tabular-nums">
                  <tr>
                    <td className="py-4 px-5 font-medium text-ink-950">Upfront Investment</td>
                    <td className="py-4 px-5 text-ink-700">$5,500 – $18,000+ with add-ons</td>
                    <td className="py-4 px-5 text-ink-700">Fragmented freelancers &amp; trial-and-error</td>
                    <td className="py-4 px-5 font-semibold text-ink-950 bg-paper-50">
                      $3,000 one-time flat fee (all-inclusive)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-medium text-ink-950">Author Net Royalties</td>
                    <td className="py-4 px-5 text-ink-700">15% – 50% after publisher cut</td>
                    <td className="py-4 px-5 text-ink-700">100% (if configured properly)</td>
                    <td className="py-4 px-5 font-semibold text-ember-700 bg-paper-50">
                      100% kept by the author forever
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-medium text-ink-950">Physical Bookstore Access</td>
                    <td className="py-4 px-5 text-ink-700">Controlled by press account</td>
                    <td className="py-4 px-5 text-ink-700">Blocked if using free platform ISBNs</td>
                    <td className="py-4 px-5 font-semibold text-ink-950 bg-paper-50">
                      Full Bowker ISBN &amp; Ingram wholesale setup
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-medium text-ink-950">Master Production Files</td>
                    <td className="py-4 px-5 text-ink-700">Withheld or locked behind release fees</td>
                    <td className="py-4 px-5 text-ink-700">Frequent trim/bleed rejection errors</td>
                    <td className="py-4 px-5 font-semibold text-ink-950 bg-paper-50">
                      100% guaranteed acceptance &amp; handed over to you
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SELF-CONTAINED ON-SITE ENROLLMENT & AGREEMENT PORTAL */}
      <section
        id="enroll"
        className="py-24 sm:py-28 border-t border-paper-200 bg-paper-100/60 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Sticky Summary Column */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs font-sans uppercase tracking-[0.2em] text-ember-700 font-semibold">
                On-Site Author Enrollment Portal
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-ink-950 leading-tight">
                Reserve Your Production Slot &amp; Configure Your Book Here.
              </h2>
              <p className="text-sm text-ink-700 leading-relaxed">
                Complete your publishing enrollment directly on this page. Once submitted, your
                project specifications are registered with our Atlanta studio and your personalized{' '}
                <strong>Publishing Scope &amp; Milestone Summary</strong> is generated immediately
                for your records.
              </p>

              <div className="bg-paper-50 border border-paper-200 p-6 space-y-3 text-sm tabular-nums">
                <p className="text-xs font-mono uppercase tracking-wider text-ember-700 font-semibold pb-2 border-b border-paper-200">
                  Order &amp; Milestone Summary
                </p>
                <div className="flex justify-between py-1.5 border-b border-paper-200">
                  <span className="text-ink-700">Turnkey Publishing Suite</span>
                  <span className="font-mono font-semibold text-ink-950">$3,000.00</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-paper-200">
                  <span className="text-ink-500">Formats Included</span>
                  <span className="text-ink-950 font-medium">Hardcover, Paperback &amp; eBook</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-paper-200">
                  <span className="text-ink-500">Due Upon Agreement (50%)</span>
                  <span className="font-mono text-ink-950">$1,500.00</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-paper-200">
                  <span className="text-ink-500">Due at Proof Approval (50%)</span>
                  <span className="font-mono text-ink-950">$1,500.00</span>
                </div>
                <div className="flex justify-between pt-1.5">
                  <span className="text-ink-500">Author Royalty Share</span>
                  <span className="font-mono font-semibold text-ember-700">100% Yours</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Enrollment Form / Instant Confirmation */}
            <div className="lg:col-span-7 bg-paper-50 border border-paper-300 p-6 sm:p-9">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="border-b border-paper-200 pb-3 flex items-center justify-between">
                    <h3 className="text-xl font-serif font-semibold text-ink-950">
                      Book Onboarding &amp; Publishing Application
                    </h3>
                    <span className="text-xs font-mono text-ink-500 tabular-nums">$3,000 Flat</span>
                  </div>

                  {/* Step 1: Author Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="enroll-name"
                        className="block text-xs font-medium text-ink-800 mb-1.5"
                      >
                        Author / Pen Name *
                      </label>
                      <input
                        id="enroll-name"
                        type="text"
                        required
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        placeholder="Full name"
                        className="w-full bg-paper-50 border border-paper-300 px-3.5 py-2.5 text-sm text-ink-950 placeholder:text-ink-400 focus:outline-none focus:border-ink-950 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="enroll-email"
                        className="block text-xs font-medium text-ink-800 mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="enroll-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full bg-paper-50 border border-paper-300 px-3.5 py-2.5 text-sm text-ink-950 placeholder:text-ink-400 focus:outline-none focus:border-ink-950 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="enroll-phone"
                        className="block text-xs font-medium text-ink-800 mb-1.5"
                      >
                        Phone (Optional)
                      </label>
                      <input
                        id="enroll-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(404) 555-0199"
                        className="w-full bg-paper-50 border border-paper-300 px-3.5 py-2.5 text-sm text-ink-950 placeholder:text-ink-400 focus:outline-none focus:border-ink-950 transition-colors tabular-nums"
                      />
                    </div>
                  </div>

                  {/* Step 2: Manuscript Title & Subtitle */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="enroll-title"
                        className="block text-xs font-medium text-ink-800 mb-1.5"
                      >
                        Working Book Title *
                      </label>
                      <input
                        id="enroll-title"
                        type="text"
                        required
                        value={bookTitle}
                        onChange={(e) => setBookTitle(e.target.value)}
                        placeholder="Primary book title"
                        className="w-full bg-paper-50 border border-paper-300 px-3.5 py-2.5 text-sm text-ink-950 placeholder:text-ink-400 focus:outline-none focus:border-ink-950 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="enroll-subtitle"
                        className="block text-xs font-medium text-ink-800 mb-1.5"
                      >
                        Subtitle (Optional)
                      </label>
                      <input
                        id="enroll-subtitle"
                        type="text"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        placeholder="Optional subtitle"
                        className="w-full bg-paper-50 border border-paper-300 px-3.5 py-2.5 text-sm text-ink-950 placeholder:text-ink-400 focus:outline-none focus:border-ink-950 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Step 3: Genre, Word Count & Readiness */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="enroll-genre"
                        className="block text-xs font-medium text-ink-800 mb-1.5"
                      >
                        Genre / Category
                      </label>
                      <select
                        id="enroll-genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        className="w-full bg-paper-50 border border-paper-300 px-3 py-2.5 text-sm text-ink-950 focus:outline-none focus:border-ink-950 transition-colors"
                      >
                        <option value="Non-Fiction / Personal Growth">Non-Fiction / Growth</option>
                        <option value="Memoir / Biography">Memoir / Biography</option>
                        <option value="Literary / Contemporary Fiction">Fiction / Novel</option>
                        <option value="Business / Leadership">Business / Leadership</option>
                        <option value="Spirituality / Philosophy">Spirituality / Mindset</option>
                        <option value="Poetry / Essays">Poetry / Essays</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="enroll-words"
                        className="block text-xs font-medium text-ink-800 mb-1.5"
                      >
                        Estimated Word Count
                      </label>
                      <input
                        id="enroll-words"
                        type="text"
                        value={wordCount}
                        onChange={(e) => setWordCount(e.target.value)}
                        placeholder="e.g., 55,000 words"
                        className="w-full bg-paper-50 border border-paper-300 px-3.5 py-2.5 text-sm text-ink-950 placeholder:text-ink-400 focus:outline-none focus:border-ink-950 transition-colors tabular-nums"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="enroll-status"
                        className="block text-xs font-medium text-ink-800 mb-1.5"
                      >
                        Manuscript Status
                      </label>
                      <select
                        id="enroll-status"
                        value={manuscriptStatus}
                        onChange={(e) => setManuscriptStatus(e.target.value)}
                        className="w-full bg-paper-50 border border-paper-300 px-3 py-2.5 text-sm text-ink-950 focus:outline-none focus:border-ink-950 transition-colors"
                      >
                        <option value="Completed & Proofread">Completed &amp; Ready</option>
                        <option value="Final Revisions in Progress">Final Polish Stage</option>
                        <option value="Completing Draft Soon">Finishing Draft Soon</option>
                      </select>
                    </div>
                  </div>

                  {/* Step 4: Trim, Imprint & Target Launch */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="enroll-trim"
                        className="block text-xs font-medium text-ink-800 mb-1.5"
                      >
                        Preferred Trim Size
                      </label>
                      <select
                        id="enroll-trim"
                        value={trimSize}
                        onChange={(e) => setTrimSize(e.target.value)}
                        className="w-full bg-paper-50 border border-paper-300 px-3 py-2.5 text-sm text-ink-950 focus:outline-none focus:border-ink-950 transition-colors"
                      >
                        <option value='6" × 9" Standard Trade'>6&quot; × 9&quot; Standard Trade</option>
                        <option value='5.5" × 8.5" Digest Trade'>5.5&quot; × 8.5&quot; Digest Trade</option>
                        <option value='5" × 8" Literary Compact'>5&quot; × 8&quot; Literary Compact</option>
                        <option value="Recommend During Onboarding">Advise Me in Week 1</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="enroll-imprint"
                        className="block text-xs font-medium text-ink-800 mb-1.5"
                      >
                        Desired Imprint Name
                      </label>
                      <input
                        id="enroll-imprint"
                        type="text"
                        value={imprintName}
                        onChange={(e) => setImprintName(e.target.value)}
                        placeholder="Your custom imprint (optional)"
                        className="w-full bg-paper-50 border border-paper-300 px-3.5 py-2.5 text-sm text-ink-950 placeholder:text-ink-400 focus:outline-none focus:border-ink-950 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="enroll-launch"
                        className="block text-xs font-medium text-ink-800 mb-1.5"
                      >
                        Target Launch Window
                      </label>
                      <select
                        id="enroll-launch"
                        value={targetLaunch}
                        onChange={(e) => setTargetLaunch(e.target.value)}
                        className="w-full bg-paper-50 border border-paper-300 px-3 py-2.5 text-sm text-ink-950 focus:outline-none focus:border-ink-950 transition-colors"
                      >
                        <option value="Immediate Start (6–8 Weeks)">Immediate (6–8 Weeks)</option>
                        <option value="Next 60–90 Days">Next 60–90 Days</option>
                        <option value="Later This Year">Later This Year</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="enroll-synopsis"
                      className="block text-xs font-medium text-ink-800 mb-1.5"
                    >
                      Book Synopsis &amp; Cover Vision Notes
                    </label>
                    <textarea
                      id="enroll-synopsis"
                      rows={3}
                      value={synopsis}
                      onChange={(e) => setSynopsis(e.target.value)}
                      placeholder="Briefly describe your book, target readers, and any cover aesthetic ideas..."
                      className="w-full bg-paper-50 border border-paper-300 px-3.5 py-2.5 text-sm text-ink-950 placeholder:text-ink-400 focus:outline-none focus:border-ink-950 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="flex items-start gap-3 cursor-pointer text-xs text-ink-700 leading-relaxed">
                      <input
                        type="checkbox"
                        checked={agreedTerms}
                        onChange={(e) => setAgreedTerms(e.target.checked)}
                        className="mt-0.5 h-4 w-4 accent-ember-700 shrink-0"
                      />
                      <span>
                        I confirm that I am applying for Ember Core Studio&rsquo;s{' '}
                        <strong>$3,000 one-time flat-fee independent publishing package</strong>{' '}
                        ($1,500 commencement deposit / $1,500 at proof completion, with 100% author
                        rights &amp; royalties retained) and agree to the{' '}
                        <button
                          type="button"
                          onClick={onOpenTerms}
                          className="text-ember-700 font-semibold underline underline-offset-2 hover:text-ink-950 cursor-pointer"
                        >
                          Terms &amp; Conditions
                        </button>
                        .
                      </span>
                    </label>
                  </div>

                  {formError && (
                    <p
                      role="alert"
                      className="text-xs font-medium text-ember-700 bg-ember-50 border border-ember-700/25 px-3.5 py-2.5"
                    >
                      {formError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-4 bg-ember-700 hover:bg-ink-950 text-paper-50 text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Complete Enrollment &amp; Generate Scope Agreement
                  </button>
                </form>
              ) : (
                <div className="space-y-6 py-2">
                  <div className="space-y-2 border-b border-paper-200 pb-5">
                    <p className="text-xs font-mono uppercase tracking-widest text-ember-700 tabular-nums">
                      Enrollment Registered  ·  Ref {enrollmentRef}
                    </p>
                    <h4 className="text-2xl font-serif font-semibold text-ink-950">
                      Welcome, {authorName}. Your $3,000 Publishing Scope Is Ready.
                    </h4>
                    <p className="text-sm text-ink-700 leading-relaxed">
                      Your onboarding dossier for <em>{bookTitle}</em> has been submitted to our
                      Atlanta studio. Download your official scope summary below or dispatch it
                      directly to <strong>contact@embercorestudio.org</strong> to receive your
                      $1,500 commencement invoice and Week 1 onboarding calendar.
                    </p>
                  </div>

                  <pre className="bg-paper-100 border border-paper-200 p-4 text-xs font-mono text-ink-800 whitespace-pre-wrap overflow-x-auto max-h-60 overflow-y-auto">
                    {formatEnrollmentAgreement(enrollmentRef)}
                  </pre>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={handleEmailBrief}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-ember-700 hover:bg-ink-950 text-paper-50 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send Priority Copy to Studio</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleDownloadAgreement}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-paper-50 hover:bg-paper-200/60 border border-paper-300 text-ink-950 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Summary (.txt)</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleCopyBrief}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-paper-50 hover:bg-paper-200/60 border border-paper-300 text-ink-950 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {copiedBrief ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-ember-700" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Summary</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-3 py-2.5 text-xs text-ink-500 hover:text-ink-950 underline underline-offset-4 cursor-pointer whitespace-nowrap"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
