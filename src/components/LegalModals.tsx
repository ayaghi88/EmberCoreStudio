import React from 'react';
import { X } from 'lucide-react';

interface LegalModalsProps {
  activeModal: 'terms' | 'refunds' | null;
  onClose: () => void;
}

export default function LegalModals({ activeModal, onClose }: LegalModalsProps) {
  if (!activeModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        onClick={onClose}
        className="fixed inset-0 bg-ink-950/65 backdrop-blur-[2px]"
      />

      <div className="relative z-10 w-full max-w-2xl bg-paper-50 border border-paper-300 shadow-2xl overflow-hidden">
        <div className="px-6 sm:px-8 py-6 border-b border-paper-200 flex items-start justify-between gap-4 bg-paper-100/70">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-ember-700">
              {activeModal === 'terms' ? 'Publishing Service Agreement' : 'Author Assurance'}
            </p>
            <h3
              id="legal-modal-title"
              className="text-2xl sm:text-3xl font-serif font-semibold text-ink-950 mt-1"
            >
              {activeModal === 'terms'
                ? 'Terms & Conditions'
                : 'Refund & Production Guarantee Policy'}
            </h3>
            <p className="text-xs text-ink-500 mt-1">
              Ember Core Studio (Est. 2025 · Atlanta, Georgia) — $3,000 One-Time Flat-Fee Publishing
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close legal dialog"
            className="p-2 text-ink-500 hover:text-ink-950 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {activeModal === 'terms' ? (
          <div className="px-6 sm:px-8 py-6 max-h-[62vh] overflow-y-auto space-y-5 text-sm text-ink-700 leading-relaxed">
            <p className="text-ink-800">
              Welcome to <strong>Ember Core Studio</strong> (&ldquo;Studio,&rdquo; &ldquo;we,&rdquo;
              or &ldquo;our&rdquo;), an independent publishing house established in 2025 and
              headquartered in <strong>Atlanta, Georgia</strong>. These Terms &amp; Conditions
              govern your use of <span className="font-mono text-xs">embercorestudio.org</span>,
              our literary imprint catalog, and enrollment in our exclusive{' '}
              <strong>$3,000 One-Time Flat-Fee Independent Publishing Program</strong>.
            </p>

            <div className="space-y-2 pt-2 border-t border-paper-200">
              <h4 className="font-serif text-lg font-semibold text-ink-950">
                1. Exclusive Service Scope — Single $3,000 One-Time Flat Fee
              </h4>
              <p>
                Ember Core Studio offers one clear, all-inclusive client service directly through
                this website: turnkey independent book publishing for a single one-time flat fee of{' '}
                <strong>$3,000 USD</strong>. We do not offer tiered publishing upsells,
                royalty-splitting hybrid contracts, or software/app creation services. Included
                deliverables comprise: (a) custom print-ready Paperback and Hardcover interior
                typesetting and reflowable ePub conversion for completed manuscripts up to standard
                trade length (80,000 words; custom quote only if exceeding length); (b) bespoke
                full-wrap print jacket and digital eBook cover design with up to three collaborative
                revision rounds; (c) independent 13-digit Bowker ISBN and custom imprint setup
                guidance; (d) retail metadata, BISAC subject categories, and search keyword
                architecture; and (e) a dedicated 1-on-1 distribution upload and launch walkthrough.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-paper-200">
              <h4 className="font-serif text-lg font-semibold text-ink-950">
                2. 100% Author Ownership, Copyright &amp; Royalties
              </h4>
              <p>
                The Author retains <strong>100% of all literary copyrights, intellectual property,
                ISBN imprint registration, retail distribution accounts, and net book sales
                royalties</strong> across every global channel. Ember Core Studio claims{' '}
                <strong>0%</strong> of your ongoing book royalties, subsidiary rights, or retail
                proceeds. Upon settlement of the final balance, all master print-ready PDFs,
                validated ePub files, and final cover production files are delivered directly to the
                Author.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-paper-200">
              <h4 className="font-serif text-lg font-semibold text-ink-950">
                3. Two-Milestone Payment Structure
              </h4>
              <p>
                The $3,000 flat fee is payable in two equal milestones:{' '}
                <strong>50% ($1,500 USD) commencement deposit</strong> upon enrollment acceptance to
                reserve dedicated production scheduling, and{' '}
                <strong>50% ($1,500 USD) final balance</strong> upon presentation of completed
                interior and cover digital proofs prior to final retail publication. Direct
                third-party statutory or printer charges—such as physical author proof copies
                ordered from printers or direct Bowker/Ingram account fees paid inside the
                Author&rsquo;s own account—remain inside the Author&rsquo;s direct control so
                ownership never leaves the Author&rsquo;s name.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-paper-200">
              <h4 className="font-serif text-lg font-semibold text-ink-950">
                4. Author Warranties &amp; Manuscript Readiness
              </h4>
              <p>
                The Author warrants that the submitted manuscript is their original work, does not
                infringe upon any third-party copyright, trademark, or privacy right, and contains
                no unlawful or defamatory material. Manuscripts submitted for production should be
                complete and proofread in final text form; substantive manuscript rewrites
                submitted after interior layout has already been typeset may require an updated
                production schedule.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-paper-200">
              <h4 className="font-serif text-lg font-semibold text-ink-950">
                5. Technical Retail Acceptance Guarantee
              </h4>
              <p>
                We guarantee that all formatted interior and cover files delivered by Ember Core
                Studio will pass technical ingestion specifications on Amazon KDP, IngramSpark, and
                standard print-on-demand distributors. Should any technical trim, margin, spine, or
                bleed adjustment be flagged during ingestion, Ember Core Studio will correct and
                re-supply the production file promptly at zero additional charge. Final sign-off on
                text accuracy and physical print proof inspection rests with the Author prior to
                approving public release.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-paper-200">
              <h4 className="font-serif text-lg font-semibold text-ink-950">
                6. House Imprint Titles &amp; Intellectual Property
              </h4>
              <p>
                All Ember Core Studio brand marks, colophon emblems, website copy, and house
                publications—including <em>Mind Bending: The Quantum Reality Strategist</em> (2025)
                and the forthcoming 2027 title <em>The Accidental Groupie</em> by Amber Yaghi—are
                protected by United States and international copyright and trademark laws. Client
                books published through our $3,000 flat-fee service are published independently
                under the Author&rsquo;s own name or chosen imprint unless otherwise mutually agreed
                in writing.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-paper-200">
              <h4 className="font-serif text-lg font-semibold text-ink-950">
                7. Confidentiality &amp; Governing Law (State of Georgia)
              </h4>
              <p>
                All unpublished manuscripts, synopses, and enrollment materials submitted to Ember
                Core Studio are treated with strict editorial confidentiality and are never sold or
                shared with third parties. These Terms &amp; Conditions are governed by and
                construed in accordance with the laws of the <strong>State of Georgia</strong>,
                with exclusive venue in Fulton County / Atlanta, Georgia. Direct inquiries may be
                sent to <strong className="font-mono text-xs">contact@embercorestudio.org</strong>.
              </p>
            </div>
          </div>
        ) : (
          <div className="px-6 sm:px-8 py-6 max-h-[62vh] overflow-y-auto space-y-5 text-sm text-ink-700 leading-relaxed">
            <p className="text-ink-800">
              Ember Core Studio stands behind the craftsmanship of every book produced under our{' '}
              <strong>$3,000 One-Time Flat-Fee Independent Publishing Program</strong>.
            </p>

            <div className="space-y-2 pt-2 border-t border-paper-200">
              <h4 className="font-serif text-lg font-semibold text-ink-950">
                1. 100% Retail Platform Technical Acceptance Guarantee
              </h4>
              <p>
                Every interior PDF, ePub, and full-wrap cover jacket we produce is engineered to
                meet exact print and digital ingestion specifications for Amazon KDP, IngramSpark,
                and major global book distributors. If a distributor flags any mechanical layout,
                bleed, spine-width, or font-embedding error, we repair the file free of charge. If
                we are unable to deliver technically accepted production files after active
                revisions, we issue a <strong>100% refund of your milestone balance</strong>.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-paper-200">
              <h4 className="font-serif text-lg font-semibold text-ink-950">
                2. Commencement Deposit ($1,500) Allocation
              </h4>
              <p>
                Because Ember Core Studio reserves dedicated design, typesetting, and 1-on-1
                editorial production capacity for each author, the initial 50% ($1,500) commencement
                deposit becomes non-refundable once interior typesetting prototypes or custom cover
                design concepts have commenced. If an author cancels in writing prior to production
                work commencing, the deposit is refunded minus any payment-processor transaction
                charges.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-paper-200">
              <h4 className="font-serif text-lg font-semibold text-ink-950">
                3. Final Milestone ($1,500) &amp; Proof Approval
              </h4>
              <p>
                The remaining $1,500 balance is due only when your formatted interior and cover
                proofs are presented for review. Once final master production files have been
                approved and released to the Author, the engagement is complete and final milestone
                payments are non-refundable.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-paper-200">
              <h4 className="font-serif text-lg font-semibold text-ink-950">
                4. Direct Studio Resolution
              </h4>
              <p>
                For any billing, scheduling, or production guarantee inquiry, contact our Atlanta,
                Georgia studio directly at{' '}
                <strong className="font-mono text-xs">contact@embercorestudio.org</strong>. All
                written inquiries receive a personal response within 1–2 business days.
              </p>
            </div>
          </div>
        )}

        <div className="px-6 sm:px-8 py-4 border-t border-paper-200 bg-paper-100/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-mono text-ink-500 tabular-nums">
            Est. 2025  ·  Atlanta, Georgia  ·  Updated November 2026
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-ink-950 hover:bg-ember-700 text-paper-50 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}
