import React, { useState } from 'react';
import { 
  Check, 
  HelpCircle, 
  ShieldCheck, 
  BookOpen, 
  Info, 
  Sparkles, 
  Copy, 
  ArrowRight,
  Calculator,
  FileText,
  DollarSign,
  AlertTriangle,
  ChevronRight,
  Award
} from 'lucide-react';

export default function PublishingLaunchpad() {
  // Service Estimator States
  const [services, setServices] = useState({
    corePackage: true, // Core Technical Package — $600
    customCover: false, // Full Custom Cover Design Add-On — $600
    coverAdjustment: false, // Existing Cover Adjustment & Fix Add-On — $150
    independentIsbn: false, // Custom Independent ISBN Registration Add-On — $175
    copyEditing: false, // Developmental/Copy Editing Add-On — $0.03 per word
  });
  const [wordCount, setWordCount] = useState<number>(50000);
  const [isProposalGenerated, setIsProposalGenerated] = useState<boolean>(false);
  const [copiedProposal, setCopiedProposal] = useState<boolean>(false);

  // Client Onboarding Intake Form States
  const [intakeName, setIntakeName] = useState<string>('');
  const [intakeTitle, setIntakeTitle] = useState<string>('');
  const [intakeStatus, setIntakeStatus] = useState<'raw' | 'editing' | 'ready'>('ready');
  const [intakeGoal, setIntakeGoal] = useState<'online' | 'bookstore'>('online');
  const [intakePlatform, setIntakePlatform] = useState<'kdp' | 'lulu'>('kdp');
  const [intakeRightsConsent, setIntakeRightsConsent] = useState<boolean>(false);
  const [intakeSubmitted, setIntakeSubmitted] = useState<boolean>(false);
  const [copiedIntake, setCopiedIntake] = useState<boolean>(false);

  // Onboarding Knowledge Base Tab State
  const [activeKbTab, setActiveKbTab] = useState<'matrix' | 'isbn_brick' | 'royalties'>('matrix');

  // Interactive calculations
  const CORE_PACKAGE_FEE = 600;
  const CUSTOM_COVER_FEE = 600;
  const COVER_ADJUSTMENT_FEE = 150;
  const ISBN_REGISTRATION_FEE = 175;
  const EDITING_RATE = 0.03;

  const coreCost = services.corePackage ? CORE_PACKAGE_FEE : 0;
  const customCoverCost = services.customCover ? CUSTOM_COVER_FEE : 0;
  const coverAdjustCost = services.coverAdjustment ? COVER_ADJUSTMENT_FEE : 0;
  const isbnCost = services.independentIsbn ? ISBN_REGISTRATION_FEE : 0;
  const editingCost = services.copyEditing ? wordCount * EDITING_RATE : 0;

  const totalContractValue = coreCost + customCoverCost + coverAdjustCost + isbnCost + editingCost;
  const depositValue = totalContractValue * 0.5;
  const finalPaymentValue = totalContractValue * 0.5;

  // Toggle checklist
  const handleServiceToggle = (key: keyof typeof services) => {
    setServices(prev => {
      const next = { ...prev, [key]: !prev[key] };
      // Mutual exclusion for cover options to keep estimation logical
      if (key === 'customCover' && next.customCover) {
        next.coverAdjustment = false;
      }
      if (key === 'coverAdjustment' && next.coverAdjustment) {
        next.customCover = false;
      }
      return next;
    });
  };

  // Compile Service Proposal Text
  const getProposalText = () => {
    return `Ember Core Studio - Self-Publishing Service Proposal
===================================================
Project Title: ${intakeTitle || 'Untitled Work'}
Author / Client: ${intakeName || 'Valued Author'}
Estimated Word Count: ${wordCount.toLocaleString()} words
Date: ${new Date().toLocaleDateString()}

Selected Service Scope & Deliverables:
${services.corePackage ? `- Core Technical Package ($${CORE_PACKAGE_FEE}): Interior manuscript layout optimized for eBook (ePub) + Print-Ready PDF. Retail-interface book description & keyword metadata optimization. Includes 1-on-1 video upload configuration session.` : ''}
${services.customCover ? `- Full Custom Cover Design Add-On ($${CUSTOM_COVER_FEE}): Bespoke eBook front + full-wrap print cover design (front, spine, back) precisely calculated to specifications. Includes 3 revision rounds.` : ''}
${services.coverAdjustment ? `- Existing Cover Adjustment & Fix ($${COVER_ADJUSTMENT_FEE}): Adjusting pre-existing files to solve platform bleed, margin, spine-width and bleed rejections.` : ''}
${services.independentIsbn ? `- Custom Independent ISBN Registration Add-On ($${ISBN_REGISTRATION_FEE}): Legally purchase and register a unique 13-digit ISBN through Bowker under your own custom imprint. Makes book eligible for physical bookstores.` : ''}
${services.copyEditing ? `- Developmental / Copy Editing ($${editingCost.toFixed(2)}): Line-by-line edit for grammar, flow, and sentence consistency prior to layout formatting.` : ''}

Financial Terms & Payment Schedule:
---------------------------------------------------
* Ember Core Studio claims 0% royalties. The Author retains 100% of proceeds.
* Total Estimated Contract Value: $${totalContractValue.toFixed(2)}
* 50% Non-refundable Commencement Deposit: $${depositValue.toFixed(2)}
* 50% Final Project Delivery Payment: $${finalPaymentValue.toFixed(2)}

Next Step: Email this proposal or your Client Intake summary to contact@embercorestudio.org to initiate.`;
  };

  const handleCopyProposal = () => {
    navigator.clipboard.writeText(getProposalText());
    setCopiedProposal(true);
    setTimeout(() => setCopiedProposal(false), 2000);
  };

  // Compile Intake Summary Text
  const getIntakeSummaryText = () => {
    return `Ember Core Studio - Completed Client Intake Form
===================================================
Author Name: ${intakeName || 'Not Provided'}
Manuscript Title: ${intakeTitle || 'Not Provided'}
Manuscript Word Count: ${wordCount.toLocaleString()} words
Manuscript Status: ${
      intakeStatus === 'ready' ? 'Fully edited, proofread, and ready for layout (Green Flag ✨)' :
      intakeStatus === 'editing' ? 'Currently being edited' : 'Raw / Un-edited'
    }
Primary Goal: ${
      intakeGoal === 'bookstore' ? 'Pitch to physical bookstores for shelf placement (Crucial screening question 🏬)' : 'Available online via Amazon KDP or Lulu'
    }
Platform Preference: ${intakePlatform === 'kdp' ? 'Amazon KDP (Maximized reach)' : 'Lulu (Premium distribution)'}
Rights Ownership Accepted: ${intakeRightsConsent ? 'Yes, Author understands they retain 100% royalties & ownership.' : 'No'}

Dynamic Consultant Tips Issued:
${intakeGoal === 'bookstore' && !services.independentIsbn ? '- NOTE: Physical bookstores require an Independent ISBN upgrade to order via global wholesalers. Consider selecting the ISBN Registration Add-On.' : '- Platform-branded Free ISBN is selected. Recommended for online-only retail.'}
${intakeStatus !== 'ready' && !services.copyEditing ? '- NOTE: It is highly recommended to finalize editing before formatting. Consider copy-editing add-on.' : '- Manuscript edit check cleared.'}
`;
  };

  const handleCopyIntake = () => {
    navigator.clipboard.writeText(getIntakeSummaryText());
    setCopiedIntake(true);
    setTimeout(() => setCopiedIntake(false), 2000);
  };

  const syncIntakeToServices = () => {
    // If user wants to pitch to physical bookstore, auto-recommend the ISBN add-on
    if (intakeGoal === 'bookstore') {
      setServices(prev => ({ ...prev, independentIsbn: true }));
    }
    // If user manuscript is not ready, recommend copy editing
    if (intakeStatus !== 'ready') {
      setServices(prev => ({ ...prev, copyEditing: true }));
    }
  };

  return (
    <div className="space-y-16 py-12">
      {/* SECTION ANCHOR LINKS */}
      <div className="flex flex-wrap gap-4 items-center justify-center pt-2">
        <a href="#onboarding-kb" className="text-xs font-mono px-4 py-2 rounded-xl bg-clarity-50/5 border border-clarity-50/10 hover:border-royal-500/30 text-clarity-300 hover:text-white transition-all">
          1. Platform Onboarding Knowledge
        </a>
        <a href="#estimator" className="text-xs font-mono px-4 py-2 rounded-xl bg-clarity-50/5 border border-clarity-50/10 hover:border-ember-500/30 text-clarity-300 hover:text-white transition-all">
          2. Interactive Pricing Estimator
        </a>
        <a href="#intake" className="text-xs font-mono px-4 py-2 rounded-xl bg-clarity-50/5 border border-clarity-50/10 hover:border-prosperity-500/30 text-clarity-300 hover:text-white transition-all">
          3. Guided Client Intake Form
        </a>
      </div>

      {/* SUB-SECTION 1: ONBOARDING KNOWLEDGE COMPARISON TABLE */}
      <section id="onboarding-kb" className="scroll-mt-24">
        <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-royal-500/10 rounded-full blur-[40px] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 pb-4 border-b border-clarity-50/10">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-royal-400">Essential Educational Blueprint</span>
              <h3 className="text-2xl font-display font-bold text-white mt-1">Client Onboarding Knowledge</h3>
              <p className="text-xs text-clarity-400 mt-1">De-mystifying self-publishing formats and legal metadata distribution structures prior to launching your title.</p>
            </div>

            {/* TAB SELECTORS */}
            <div className="flex gap-2 bg-base-950 p-1.5 rounded-xl border border-clarity-50/10">
              <button 
                onClick={() => setActiveKbTab('matrix')}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${activeKbTab === 'matrix' ? 'bg-royal-600 text-white font-bold' : 'text-clarity-400 hover:text-white'}`}
              >
                ISBN Comparison
              </button>
              <button 
                onClick={() => setActiveKbTab('isbn_brick')}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${activeKbTab === 'isbn_brick' ? 'bg-royal-600 text-white font-bold' : 'text-clarity-400 hover:text-white'}`}
              >
                Bookstore Restrictions
              </button>
              <button 
                onClick={() => setActiveKbTab('royalties')}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${activeKbTab === 'royalties' ? 'bg-royal-600 text-white font-bold' : 'text-clarity-400 hover:text-white'}`}
              >
                100% Royalties policy
              </button>
            </div>
          </div>

          {/* TAB 1: ISBN COMPARISON MATRIX */}
          {activeKbTab === 'matrix' && (
            <div className="space-y-6">
              {/* Responsive comparison table */}
              <div className="overflow-x-auto rounded-xl border border-clarity-50/10 bg-base-950/60">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-clarity-50/10 bg-base-950">
                      <th className="p-4 font-mono font-bold text-clarity-400 w-1/4">Feature</th>
                      <th className="p-4 font-mono font-bold text-ember-400 w-1/4">Amazon KDP (Free ISBN)</th>
                      <th className="p-4 font-mono font-bold text-royal-400 w-1/4">Lulu (Free ISBN)</th>
                      <th className="p-4 font-mono font-bold text-prosperity-400 w-1/4 bg-prosperity-500/5">Paid Independent ISBN ($175 Upgrade)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-clarity-50/10">
                    <tr>
                      <td className="p-4 font-bold text-white font-display">Where it is sold</td>
                      <td className="p-4 text-clarity-300">Online (Amazon store ecosystem exclusively).</td>
                      <td className="p-4 text-clarity-300">Online (Lulu bookstore and global online retail networks).</td>
                      <td className="p-4 text-white font-semibold bg-prosperity-500/5">Everywhere. Online, physical indie bookstores, national chains, and global libraries.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-white font-display">Can physical stores stock it?</td>
                      <td className="p-4 text-red-400 font-medium flex items-center gap-1.5 pt-6">
                        <span>❌ No. Wholesalers and local stores will not buy it.</span>
                      </td>
                      <td className="p-4 text-red-400 font-medium">
                        <span>❌ No. Online retail channels only.</span>
                      </td>
                      <td className="p-4 text-prosperity-400 font-bold bg-prosperity-500/5">
                        <span>Yes. Registers your book in the global Ingram wholesaler catalog so stores can physically order it.</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-white font-display">Who is the Publisher?</td>
                      <td className="p-4 text-clarity-300">Listed as "Independently Published" or "Amazon".</td>
                      <td className="p-4 text-clarity-300">Listed as "Lulu Press" in global retail metadata.</td>
                      <td className="p-4 text-white font-semibold bg-prosperity-500/5">You. Your custom publishing imprint/brand name is hardcoded in Bowker database forever.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-white font-display">Portability</td>
                      <td className="p-4 text-clarity-400">Locked to Amazon. Cannot be moved to another distributor.</td>
                      <td className="p-4 text-clarity-400">Locked to Lulu. Cannot be moved to another distributor.</td>
                      <td className="p-4 text-white font-semibold bg-prosperity-500/5">100% Portable. Use the exact same file layouts across multiple global channels simultaneously.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] font-mono text-clarity-500 text-center">
                * To remain eligible for physical bookstore placement consideration, the Author must purchase the Custom Independent ISBN Upgrade.
              </p>
            </div>
          )}

          {/* TAB 2: ISBN BRICK-AND-MORTAR RESTRICTION */}
          {activeKbTab === 'isbn_brick' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-sm">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
                  <AlertTriangle className="w-3.5 h-3.5" /> Distribution Addendum Check
                </div>
                <h4 className="text-lg font-display font-bold text-white">The ISBN Brick-and-Mortar Restriction</h4>
                <p className="text-clarity-300 leading-relaxed text-xs">
                  Selecting a **Free Platform ISBN** (provided on-the-fly by Amazon KDP or Lulu) legally locks that specific edition of your book to that platform's retail engine.
                </p>
                <p className="text-clarity-300 leading-relaxed text-xs">
                  Physical bookstores, independent sellers, and national library databases strictly **will not purchase or stock books** carrying a free platform-branded ISBN. They do not buy books published by their direct retail competitors (such as Amazon) and require access through specialized wholesale channels like **Ingram Content Group**.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-base-950 border border-clarity-50/10 space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 text-xs font-bold">1</div>
                  <p className="text-xs text-clarity-400">Free platform ISBNs tag your imprint as "Independently Published" or "Lulu Press" which physical store managers screen out immediately.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 text-xs font-bold">2</div>
                  <p className="text-xs text-clarity-400">Re-formatting a layout to match another platform's specifications down the line incurs a **$150 conversion fee** plus time delays.</p>
                </div>
                <div className="flex gap-3 items-start animate-pulse">
                  <div className="w-5 h-5 rounded-full bg-prosperity-500/10 text-prosperity-400 flex items-center justify-center shrink-0 text-xs font-bold">✓</div>
                  <p className="text-xs text-prosperity-400 font-semibold">An Independent ISBN lists your custom corporate or personal brand as the publisher of record, ensuring full retail access.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: 100% ROYALTIES POLICY */}
          {activeKbTab === 'royalties' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-sm">
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-prosperity-500/10 border border-prosperity-500/20 text-prosperity-400 text-xs font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" /> Absolute Freedom Policy
                </div>
                <h4 className="text-xl font-display font-bold text-white">100% Royalty Retention & Rights Control</h4>
                <p className="text-clarity-300 leading-relaxed text-xs">
                  We believe authors should retain complete fruits of their labor. Unlike legacy publishers or predatory vanity presses that charge high percentages on every retail sale, **Ember Core Studio charges flat fees only**.
                </p>
                <p className="text-clarity-300 leading-relaxed text-xs">
                  Ember Core Studio holds **0% claim** to your future sales, royalty pipelines, or passive income. You retain 100% copyright, final rights, and ownership of your accounts.
                </p>
              </div>

              <div className="md:col-span-5 p-6 rounded-2xl bg-gradient-to-tr from-prosperity-950/10 to-base-950 border border-prosperity-500/20 text-center space-y-4">
                <div className="text-4xl font-display font-extrabold text-white">0%</div>
                <p className="text-xs font-mono text-prosperity-400 uppercase tracking-widest font-bold">Royalties Claimed By Ember Core</p>
                <div className="h-[1px] bg-clarity-50/10 w-full" />
                <div className="text-2xl font-display font-bold text-white">100%</div>
                <p className="text-[10px] font-mono text-clarity-400 uppercase tracking-widest">Ownership & Account Control Retained By Author</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* DUAL GRID: ESTIMATOR & INTAKE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* SUB-SECTION 2: INTERACTIVE ESTIMATOR (8 COLS ON DESKTOP) */}
        <section id="estimator" className="lg:col-span-7 space-y-6 scroll-mt-24">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-ember-500/10 rounded-full blur-[40px] pointer-events-none" />
            
            <div className="border-b border-clarity-50/10 pb-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-ember-400">Interactive Flat-Fee Builder</span>
                <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-ember-400" /> Service Agreement & Estimator
                </h3>
              </div>
              <div className="text-[10px] bg-base-950 border border-clarity-50/10 rounded px-2.5 py-1 text-clarity-400 font-mono">
                No Royalties Split
              </div>
            </div>

            {/* Checkbox Service Options */}
            <div className="space-y-4">
              
              {/* Service 1: Core Package */}
              <div 
                onClick={() => handleServiceToggle('corePackage')}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex justify-between items-start gap-4 ${
                  services.corePackage 
                    ? 'bg-ember-500/5 border-ember-500/30' 
                    : 'bg-base-950 border-clarity-50/10 hover:border-clarity-50/20'
                }`}
              >
                <div className="flex gap-3 items-start">
                  <div className={`mt-1 w-4 h-4 rounded flex items-center justify-center border transition-all ${
                    services.corePackage ? 'bg-ember-500 border-ember-500 text-white' : 'border-clarity-50/30'
                  }`}>
                    {services.corePackage && <Check className="w-3 h-3" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs sm:text-sm">The Core Technical Package (Recommended)</h4>
                    <p className="text-[11px] text-clarity-400 mt-1 leading-relaxed">
                      Interior manuscript typesetting & layout optimized for eBook (ePub) + Print-Ready PDF. Retail metadata & keyword category optimization research. Blurb polishing. Includes 1-on-1 screen-share session to upload files to your dashboard.
                    </p>
                    <span className="inline-block mt-1.5 text-[10px] font-mono text-clarity-500">Covers up to 80,000 words.</span>
                  </div>
                </div>
                <div className="font-display font-bold text-white text-sm sm:text-base shrink-0">
                  $600
                </div>
              </div>

              {/* Service 2: Cover Design */}
              <div 
                onClick={() => handleServiceToggle('customCover')}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex justify-between items-start gap-4 ${
                  services.customCover 
                    ? 'bg-ember-500/5 border-ember-500/30' 
                    : 'bg-base-950 border-clarity-50/10 hover:border-clarity-50/20'
                }`}
              >
                <div className="flex gap-3 items-start">
                  <div className={`mt-1 w-4 h-4 rounded flex items-center justify-center border transition-all ${
                    services.customCover ? 'bg-ember-500 border-ember-500 text-white' : 'border-clarity-50/30'
                  }`}>
                    {services.customCover && <Check className="w-3 h-3" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs sm:text-sm">Full Custom Cover Design Add-On</h4>
                    <p className="text-[11px] text-clarity-400 mt-1 leading-relaxed">
                      Bespoke front eBook graphic design + full-wrap print cover layout (front, spine, back) precisely calculated to Amazon KDP/Lulu trim specs and page count. Up to 3 rounds of revisions.
                    </p>
                  </div>
                </div>
                <div className="font-display font-bold text-white text-sm sm:text-base shrink-0">
                  +$600
                </div>
              </div>

              {/* Service 3: Existing Cover adjustment */}
              <div 
                onClick={() => handleServiceToggle('coverAdjustment')}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex justify-between items-start gap-4 ${
                  services.coverAdjustment 
                    ? 'bg-ember-500/5 border-ember-500/30' 
                    : 'bg-base-950 border-clarity-50/10 hover:border-clarity-50/20'
                }`}
              >
                <div className="flex gap-3 items-start">
                  <div className={`mt-1 w-4 h-4 rounded flex items-center justify-center border transition-all ${
                    services.coverAdjustment ? 'bg-ember-500 border-ember-500 text-white' : 'border-clarity-50/30'
                  }`}>
                    {services.coverAdjustment && <Check className="w-3 h-3" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs sm:text-sm">Existing Cover Adjustment & Fix</h4>
                    <p className="text-[11px] text-clarity-400 mt-1 leading-relaxed">
                      Technical reconfiguration of pre-existing artwork files provided by you to solve platform bleed, margin, spine-width, or registration rejections.
                    </p>
                  </div>
                </div>
                <div className="font-display font-bold text-white text-sm sm:text-base shrink-0">
                  +$150
                </div>
              </div>

              {/* Service 4: ISBN registration */}
              <div 
                onClick={() => handleServiceToggle('independentIsbn')}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex justify-between items-start gap-4 ${
                  services.independentIsbn 
                    ? 'bg-ember-500/5 border-ember-500/30' 
                    : 'bg-base-950 border-clarity-50/10 hover:border-clarity-50/20'
                }`}
              >
                <div className="flex gap-3 items-start">
                  <div className={`mt-1 w-4 h-4 rounded flex items-center justify-center border transition-all ${
                    services.independentIsbn ? 'bg-ember-500 border-ember-500 text-white' : 'border-clarity-50/30'
                  }`}>
                    {services.independentIsbn && <Check className="w-3 h-3" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-white text-xs sm:text-sm">Custom Independent ISBN Registration</h4>
                      <span className="text-[9px] bg-prosperity-500/10 text-prosperity-400 font-bold px-1.5 py-0.5 rounded">Store Eligible</span>
                    </div>
                    <p className="text-[11px] text-clarity-400 mt-1 leading-relaxed">
                      We purchase & register a unique 13-digit ISBN through Bowker. Your custom imprint/publishing house name will be legally hardcoded into global book databases. Essential for brick-and-mortar stores.
                    </p>
                  </div>
                </div>
                <div className="font-display font-bold text-white text-sm sm:text-base shrink-0">
                  +$175
                </div>
              </div>

              {/* Service 5: Copy Editing */}
              <div 
                onClick={() => handleServiceToggle('copyEditing')}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex justify-between items-start gap-4 ${
                  services.copyEditing 
                    ? 'bg-ember-500/5 border-ember-500/30' 
                    : 'bg-base-950 border-clarity-50/10 hover:border-clarity-50/20'
                }`}
              >
                <div className="flex gap-3 items-start">
                  <div className={`mt-1 w-4 h-4 rounded flex items-center justify-center border transition-all ${
                    services.copyEditing ? 'bg-ember-500 border-ember-500 text-white' : 'border-clarity-50/30'
                  }`}>
                    {services.copyEditing && <Check className="w-3 h-3" />}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-white text-xs sm:text-sm">Developmental/Copy Editing Add-On</h4>
                    <p className="text-[11px] text-clarity-400 mt-1 leading-relaxed">
                      Line-by-line developmental edit for flow, vocabulary, sentence consistency, and strict formatting readiness. Charged flat at **$0.03 per word**.
                    </p>
                  </div>
                </div>
                <div className="font-display font-bold text-white text-sm sm:text-base shrink-0">
                  +$0.03/wd
                </div>
              </div>

              {/* Word Count Slider Input */}
              {(services.copyEditing || services.corePackage) && (
                <div className="p-4 rounded-xl bg-base-950 border border-clarity-50/10 space-y-3">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-clarity-400">Specify Manuscript Word Count:</span>
                    <span className="text-white font-bold">{wordCount.toLocaleString()} words</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="150000" 
                    step="500"
                    value={wordCount}
                    onChange={(e) => setWordCount(Number(e.target.value))}
                    className="w-full accent-ember-500 bg-clarity-50/10 rounded-lg appearance-none h-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-clarity-500 font-mono">
                    <span>1,000 words</span>
                    <span>80,000 words (Max package cap)</span>
                    <span>150,000 words</span>
                  </div>
                  {wordCount > 80000 && (
                    <div className="p-2.5 rounded bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-400 flex items-center gap-1.5 leading-relaxed">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      <span>Note: Our flat Core Tech package covers up to 80,000 words. Larger manuscripts require custom review for page-layout counts.</span>
                    </div>
                  )}
                </div>
              )}

            </div>

            {/* Calculations Summary Panel */}
            <div className="p-6 rounded-2xl bg-base-950 border border-clarity-50/10 space-y-4">
              <div className="flex justify-between items-center text-xs text-clarity-400 border-b border-clarity-50/5 pb-2.5">
                <span>Selected Flat-Fee Services Subtotal:</span>
                <span className="text-white font-semibold">${(coreCost + customCoverCost + coverAdjustCost + isbnCost).toLocaleString()}</span>
              </div>
              {services.copyEditing && (
                <div className="flex justify-between items-center text-xs text-clarity-400 border-b border-clarity-50/5 pb-2.5">
                  <span>Developmental Editing ({wordCount.toLocaleString()} words x $0.03):</span>
                  <span className="text-white font-semibold">${editingCost.toLocaleString()}</span>
                </div>
              )}
              
              {/* Dynamic Contract Pricing Totals */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3 rounded-xl bg-clarity-50/5 text-center">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-clarity-500">Total Contract Value</p>
                  <p className="text-lg font-display font-bold text-white mt-1">${totalContractValue.toLocaleString()}</p>
                </div>
                <div className="p-3 rounded-xl bg-ember-500/10 border border-ember-500/15 text-center">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-ember-400">50% Initial Deposit</p>
                  <p className="text-lg font-display font-bold text-ember-400 mt-1">${depositValue.toLocaleString()}</p>
                </div>
                <div className="p-3 rounded-xl bg-prosperity-500/10 border border-prosperity-500/15 text-center">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-prosperity-400">50% Final Payment</p>
                  <p className="text-lg font-display font-bold text-prosperity-400 mt-1">${finalPaymentValue.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Proposal Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => setIsProposalGenerated(!isProposalGenerated)}
                className="flex-1 px-5 py-3.5 bg-gradient-to-r from-ember-600 to-royal-600 hover:from-ember-500 hover:to-royal-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow"
              >
                <FileText className="w-4 h-4" /> 
                {isProposalGenerated ? 'Hide Service Agreement Proposal' : 'Generate Official Service Proposal'}
              </button>
            </div>

            {/* Copyable generated Proposal panel */}
            {isProposalGenerated && (
              <div className="p-5 rounded-2xl bg-base-950 border border-royal-500/20 space-y-4 animate-fadeIn">
                <div className="flex justify-between items-center border-b border-clarity-50/10 pb-3">
                  <span className="text-[10px] font-mono tracking-widest text-royal-400 font-bold uppercase">PROPOSAL DOCUMENT READY</span>
                  <button 
                    onClick={handleCopyProposal}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-clarity-50/10 text-white text-xs hover:bg-clarity-50/20 active:scale-95 transition-all"
                  >
                    {copiedProposal ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-prosperity-400" />
                        <span className="text-prosperity-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy To Clipboard</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-[10px] leading-relaxed text-clarity-400 font-mono bg-base-900 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap select-all max-h-72 overflow-y-auto">
                  {getProposalText()}
                </pre>
              </div>
            )}

          </div>
        </section>

        {/* SUB-SECTION 3: GUIDED INTAKE FORM (5 COLS ON DESKTOP) */}
        <section id="intake" className="lg:col-span-5 space-y-6 scroll-mt-24">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-prosperity-500/10 rounded-full blur-[40px] pointer-events-none" />
            
            <div className="border-b border-clarity-50/10 pb-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-prosperity-400">Pre-Publishing Verification</span>
              <h3 className="text-xl font-display font-bold text-white flex items-center gap-2 mt-1">
                <FileText className="w-5 h-5 text-prosperity-400" /> Client Intake Form
              </h3>
            </div>

            {!intakeSubmitted ? (
              <div className="space-y-4 text-xs">
                {/* Name and Title Inputs */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-clarity-400 font-mono text-[10px] uppercase mb-1.5">Author / Client Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Amber Yaghi" 
                      value={intakeName}
                      onChange={(e) => setIntakeName(e.target.value)}
                      className="w-full bg-base-950 border border-clarity-50/10 rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-prosperity-500"
                    />
                  </div>
                  <div>
                    <label className="block text-clarity-400 font-mono text-[10px] uppercase mb-1.5">Manuscript Provisionary Title</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Mind Bending: The Quantum Reality" 
                      value={intakeTitle}
                      onChange={(e) => setIntakeTitle(e.target.value)}
                      className="w-full bg-base-950 border border-clarity-50/10 rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-prosperity-500"
                    />
                  </div>
                </div>

                {/* Q1: Manuscript status */}
                <div className="space-y-2">
                  <label className="block text-clarity-400 font-mono text-[10px] uppercase">1. What is your manuscript's current status?</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2.5 p-2.5 rounded-lg bg-base-950/60 border border-clarity-50/5 cursor-pointer hover:border-clarity-50/15">
                      <input 
                        type="radio" 
                        name="intakeStatus" 
                        value="raw"
                        checked={intakeStatus === 'raw'}
                        onChange={() => {
                          setIntakeStatus('raw');
                          setServices(prev => ({ ...prev, copyEditing: true }));
                        }}
                        className="accent-prosperity-500"
                      />
                      <span className="text-clarity-300">It is raw/un-edited. (Recommend editing add-on)</span>
                    </label>
                    <label className="flex items-center gap-2.5 p-2.5 rounded-lg bg-base-950/60 border border-clarity-50/5 cursor-pointer hover:border-clarity-50/15">
                      <input 
                        type="radio" 
                        name="intakeStatus" 
                        value="editing"
                        checked={intakeStatus === 'editing'}
                        onChange={() => {
                          setIntakeStatus('editing');
                          setServices(prev => ({ ...prev, copyEditing: true }));
                        }}
                        className="accent-prosperity-500"
                      />
                      <span className="text-clarity-300">It is currently being edited.</span>
                    </label>
                    <label className="flex items-center gap-2.5 p-2.5 rounded-lg bg-base-950/60 border border-clarity-50/5 cursor-pointer hover:border-clarity-50/15">
                      <input 
                        type="radio" 
                        name="intakeStatus" 
                        value="ready"
                        checked={intakeStatus === 'ready'}
                        onChange={() => setIntakeStatus('ready')}
                        className="accent-prosperity-500"
                      />
                      <span className="text-prosperity-400 font-semibold flex items-center gap-1">
                        <span>It is fully edited, proofread, and ready for layout. (Green flag ✨)</span>
                      </span>
                    </label>
                  </div>
                </div>

                {/* Q3: Primary goal */}
                <div className="space-y-2">
                  <label className="block text-clarity-400 font-mono text-[10px] uppercase">2. What is your primary publishing goal?</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2.5 p-2.5 rounded-lg bg-base-950/60 border border-clarity-50/5 cursor-pointer hover:border-clarity-50/15">
                      <input 
                        type="radio" 
                        name="intakeGoal" 
                        value="online"
                        checked={intakeGoal === 'online'}
                        onChange={() => setIntakeGoal('online')}
                        className="accent-prosperity-500"
                      />
                      <span className="text-clarity-300 font-medium">I want my book available online via Amazon KDP or Lulu.</span>
                    </label>
                    <label className="flex items-center gap-2.5 p-2.5 rounded-lg bg-base-950/60 border border-clarity-50/5 cursor-pointer hover:border-clarity-50/15">
                      <input 
                        type="radio" 
                        name="intakeGoal" 
                        value="bookstore"
                        checked={intakeGoal === 'bookstore'}
                        onChange={() => {
                          setIntakeGoal('bookstore');
                          setServices(prev => ({ ...prev, independentIsbn: true }));
                        }}
                        className="accent-prosperity-500"
                      />
                      <span className="text-amber-400 font-semibold flex items-center gap-1">
                        <span>I want to pitch to physical bookstores for shelves. (Crucial screening 🏬)</span>
                      </span>
                    </label>
                  </div>
                  {intakeGoal === 'bookstore' && (
                    <div className="p-2 rounded bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-400 flex items-start gap-1.5 leading-normal">
                      <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>Warning: Physical brick-and-mortar bookstores require an Independent Bowker ISBN. Free KDP/Lulu platform ISBNs are strictly blocked from stock purchase.</span>
                    </div>
                  )}
                </div>

                {/* Q4: Leaning Platform */}
                <div className="space-y-2">
                  <label className="block text-clarity-400 font-mono text-[10px] uppercase">3. Which platform are you leaning toward?</label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className={`p-3 rounded-lg border cursor-pointer text-center flex flex-col items-center gap-1 ${intakePlatform === 'kdp' ? 'bg-ember-500/5 border-ember-500/30' : 'bg-base-950 border-clarity-50/5'}`}>
                      <input 
                        type="radio" 
                        name="intakePlatform" 
                        value="kdp"
                        checked={intakePlatform === 'kdp'}
                        onChange={() => setIntakePlatform('kdp')}
                        className="sr-only"
                      />
                      <span className="text-xs font-bold text-white">Amazon KDP</span>
                      <span className="text-[9px] text-clarity-400 leading-tight">Maximized Online Reach</span>
                    </label>
                    <label className={`p-3 rounded-lg border cursor-pointer text-center flex flex-col items-center gap-1 ${intakePlatform === 'lulu' ? 'bg-royal-500/5 border-royal-500/30' : 'bg-base-950 border-clarity-50/5'}`}>
                      <input 
                        type="radio" 
                        name="intakePlatform" 
                        value="lulu"
                        checked={intakePlatform === 'lulu'}
                        onChange={() => setIntakePlatform('lulu')}
                        className="sr-only"
                      />
                      <span className="text-xs font-bold text-white">Lulu</span>
                      <span className="text-[9px] text-clarity-400 leading-tight">Premium Paperbacks / Global Wholesaling</span>
                    </label>
                  </div>
                </div>

                {/* Q5: Rights Ownership Consent */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 p-3.5 rounded-xl bg-prosperity-500/5 border border-prosperity-500/20 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={intakeRightsConsent}
                      onChange={(e) => setIntakeRightsConsent(e.target.checked)}
                      className="accent-prosperity-500 mt-1"
                    />
                    <div>
                      <span className="text-xs font-semibold text-white">Who owns the final rights and royalties to your book?</span>
                      <p className="text-[10px] text-prosperity-400 mt-1 leading-normal">
                        I understand Ember Core Studio takes **0% royalties**, and I retain **100% ownership** and control of my publishing accounts.
                      </p>
                    </div>
                  </label>
                </div>

                {/* Apply Intake recommendations and submit */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      syncIntakeToServices();
                      setIntakeSubmitted(true);
                    }}
                    className="w-full py-3 bg-prosperity-600 hover:bg-prosperity-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow"
                  >
                    Generate Intake Package & Validate <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ) : (
              // Submitted feedback
              <div className="space-y-6 text-xs text-center py-4">
                <div className="w-12 h-12 rounded-full bg-prosperity-500/10 text-prosperity-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 animate-pulse" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-base font-display font-bold text-white">Intake Validation Package Compiled!</h4>
                  <p className="text-xs text-clarity-300 leading-relaxed">
                    Based on your answers, we have structured the recommendations and automatically recommended services in your Estimator panel.
                  </p>
                </div>

                {/* Dynamic Onboarding Consultation Tips */}
                <div className="text-left bg-base-950 p-4 rounded-xl border border-clarity-50/10 space-y-2.5">
                  <h5 className="font-bold text-white uppercase text-[9px] font-mono tracking-widest text-prosperity-400">Intake Analysis Advice:</h5>
                  {intakeGoal === 'bookstore' && (
                    <div className="flex gap-2 items-start text-[10px] text-clarity-400">
                      <span className="text-amber-400 font-bold">●</span>
                      <span>Your goal is brick-and-mortar stores. We registered your requirement for the Bowker ISBN Registration Add-On to enable catalog ordering.</span>
                    </div>
                  )}
                  {intakeStatus !== 'ready' && (
                    <div className="flex gap-2 items-start text-[10px] text-clarity-400">
                      <span className="text-amber-400 font-bold">●</span>
                      <span>Your manuscript is currently being polished. We've updated your estimator with our Developmental/Copy Editing package to safeguard quality.</span>
                    </div>
                  )}
                  <div className="flex gap-2 items-start text-[10px] text-clarity-400">
                    <span className="text-prosperity-400 font-bold">✓</span>
                    <span>Verified: **100% Royalty Retention Policy** applies. Amber Yaghi / Ember Core claims $0.00 from future sales.</span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="space-y-3 pt-2">
                  <button 
                    onClick={handleCopyIntake}
                    className="w-full py-3 bg-clarity-50/5 hover:bg-clarity-50/10 text-white font-bold rounded-xl border border-clarity-50/10 transition-all flex items-center justify-center gap-2"
                  >
                    {copiedIntake ? (
                      <>
                        <Check className="w-4 h-4 text-prosperity-400" />
                        <span className="text-prosperity-400">Copied Summary!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Intake Summary</span>
                      </>
                    )}
                  </button>
                  <button 
                    onClick={() => setIntakeSubmitted(false)}
                    className="text-clarity-500 hover:text-white transition-colors underline block mx-auto text-[10px]"
                  >
                    Modify Responses
                  </button>
                </div>
              </div>
            )}

          </div>
        </section>

      </div>
    </div>
  );
}
