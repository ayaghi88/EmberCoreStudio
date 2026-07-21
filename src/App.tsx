import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code, 
  Github, 
  Linkedin, 
  HeartHandshake, 
  BookOpen, 
  Zap, 
  Search, 
  Sparkles, 
  TrendingUp, 
  Globe, 
  Cpu, 
  GraduationCap, 
  DollarSign, 
  Award, 
  ArrowUpRight, 
  Menu, 
  X, 
  Mail, 
  Phone, 
  ExternalLink, 
  Eye, 
  Filter, 
  User, 
  BookOpenCheck,
  ShieldCheck,
  FileCheck,
  Lightbulb,
  Compass,
  Copy,
  Check,
  LifeBuoy,
  MessageSquare,
  Clock,
  HelpCircle,
  Send
} from 'lucide-react';
import { APPS_DATA, AppProject } from './data';
import PublishingLaunchpad from './components/PublishingLaunchpad';

// --- Types ---
type FilterCategory = 'All' | 'Highlighted' | 'Core Saas' | 'Niche Utility' | 'Community & Culture';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All');
  const [selectedApp, setSelectedApp] = useState<AppProject | null>(null);
  const [termsOpen, setTermsOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [supportTab, setSupportTab] = useState<'ticket' | 'faq' | 'status'>('ticket');
  
  // Support state fields
  const [ticketCategory, setTicketCategory] = useState('Software Engineering Scope');
  const [ticketEmail, setTicketEmail] = useState('');
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketMessage, setTicketMessage] = useState('');
  const [ticketIdInput, setTicketIdInput] = useState('');
  const [lastSubmittedId, setLastSubmittedId] = useState<string | null>(null);
  const [activeSearchedTicket, setActiveSearchedTicket] = useState<any | null>(null);
  const [ticketSearchError, setTicketSearchError] = useState('');
  
  const [submittedTickets, setSubmittedTickets] = useState<Array<{
    id: string;
    subject: string;
    category: string;
    message: string;
    email: string;
    status: string;
    date: string;
  }>>([
    {
      id: "ECS-7391",
      subject: "Stripe Subscription Callbacks",
      category: "Software Engineering Scope",
      message: "Need to verify that direct metadata mapping handles customer email mismatches.",
      email: "ceo.founder@ventures.com",
      status: "In Progress by Amber Yaghi",
      date: "2026-07-19"
    },
    {
      id: "ECS-9021",
      subject: "Bowker Registration Assistance",
      category: "Elite Self-Publishing Package",
      message: "Need help registering my single ISBN under my custom imprint.",
      email: "author.test@gmail.com",
      status: "Resolved",
      date: "2026-07-18"
    }
  ]);
  
  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketEmail.trim() || !ticketSubject.trim() || !ticketMessage.trim()) return;
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newId = `ECS-${randomNum}`;
    const newTicket = {
      id: newId,
      subject: ticketSubject,
      category: ticketCategory,
      message: ticketMessage,
      email: ticketEmail,
      status: 'In Progress by Amber Yaghi',
      date: new Date().toISOString().split('T')[0]
    };
    setSubmittedTickets([newTicket, ...submittedTickets]);
    setLastSubmittedId(newId);
    setTicketSubject('');
    setTicketMessage('');
    setSupportTab('status');
    setTicketIdInput(newId);
    setActiveSearchedTicket(newTicket);
    setTicketSearchError('');
  };

  const handleSearchTicket = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = ticketIdInput.trim().toUpperCase();
    const found = submittedTickets.find(t => t.id === cleanId);
    if (found) {
      setActiveSearchedTicket(found);
      setTicketSearchError('');
    } else {
      setActiveSearchedTicket(null);
      setTicketSearchError('Ticket ID not found. Verify the ID is in format ECS-XXXX');
    }
  };
  
  // Email-to-clipboard copy feature
  const [copied, setCopied] = useState(false);
  const handleCopyEmail = () => {
    try {
      navigator.clipboard.writeText('contact@embercorestudio.org');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.warn('Clipboard write fallback:', err);
    }
  };

  // Filter & Search Logic
  const filteredApps = useMemo(() => {
    return APPS_DATA.filter(app => {
      const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-base-950 text-clarity-100 selection:bg-ember-500 selection:text-white">
      
      {/* Dynamic Background Mesh Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-ember-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-royal-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-prosperity-600/10 rounded-full blur-[130px] animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-base-950/80 backdrop-blur-md border-b border-clarity-50/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-ember-500 via-royal-500 to-prosperity-500 p-[2px]">
              <div className="w-full h-full bg-base-950 rounded-[10px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-ember-400 group-hover:rotate-45 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg uppercase tracking-tight text-white leading-none">
                Ember <span className="text-ember-500">Core</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-prosperity-400 font-bold">Studio</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#publishing" className="text-sm font-semibold text-white hover:text-ember-400 transition-colors border-b-2 border-ember-500 pb-1">Studio Launchpad</a>
            <a href="#about" className="text-sm font-medium hover:text-royal-400 transition-colors">Origin Story</a>
            <a href="#flagship" className="text-sm font-medium hover:text-prosperity-400 transition-colors">Flagship App</a>
            <a href="#creations" className="text-sm font-medium hover:text-ember-400 transition-colors">Apps Showcase</a>
            <a href="#investors" className="text-sm font-medium hover:text-royal-400 transition-colors">SBA Prospectus</a>
            <button 
              onClick={() => { setSupportOpen(true); setSupportTab('ticket'); }}
              className="text-xs font-bold uppercase tracking-wider text-prosperity-400 hover:text-prosperity-300 transition-all bg-prosperity-500/10 border border-prosperity-500/20 px-3 py-1.5 rounded-xl cursor-pointer hover:scale-105 active:scale-95"
            >
              Support Desk
            </button>
            <a href="#connect" className="text-sm font-medium hover:text-prosperity-400 transition-colors">Get in Touch</a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/sponsors/ayaghi88" 
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-ember-500 to-royal-500 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              <HeartHandshake className="w-4 h-4" /> Sponsor on GitHub
            </a>
            <button 
              className="lg:hidden p-2 text-clarity-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden border-b border-t border-clarity-50/10 px-6 py-6 flex flex-col gap-4 absolute top-20 left-0 w-full bg-[#05070f] shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50"
            >
              <div className="flex flex-col gap-1">
                <a 
                  href="#publishing" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-clarity-50/5 text-base font-semibold text-white transition-all"
                >
                  <BookOpen className="w-5 h-5 text-ember-500 shrink-0" />
                  <span>Studio Launchpad (Apps & Books)</span>
                </a>
                <a 
                  href="#about" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-clarity-50/5 text-base font-medium text-clarity-200 hover:text-white transition-all"
                >
                  <Compass className="w-5 h-5 text-royal-400 shrink-0" />
                  <span>Origin Story</span>
                </a>
                <a 
                  href="#flagship" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-clarity-50/5 text-base font-medium text-clarity-200 hover:text-white transition-all"
                >
                  <Cpu className="w-5 h-5 text-prosperity-400 shrink-0" />
                  <span>Flagship App</span>
                </a>
                <a 
                  href="#creations" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-clarity-50/5 text-base font-medium text-clarity-200 hover:text-white transition-all"
                >
                  <Code className="w-5 h-5 text-ember-400 shrink-0" />
                  <span>Apps Showcase</span>
                </a>
                <a 
                  href="#investors" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-clarity-50/5 text-base font-medium text-clarity-200 hover:text-white transition-all"
                >
                  <TrendingUp className="w-5 h-5 text-royal-500 shrink-0" />
                  <span>SBA Prospectus</span>
                </a>
                <a 
                  href="#connect" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-clarity-50/5 text-base font-medium text-clarity-200 hover:text-white transition-all"
                >
                  <Mail className="w-5 h-5 text-prosperity-500 shrink-0" />
                  <span>Get in Touch</span>
                </a>
                <button 
                  onClick={() => { setSupportOpen(true); setSupportTab('ticket'); setMobileMenuOpen(false); }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-clarity-50/5 text-base font-semibold text-prosperity-400 hover:text-white transition-all w-full text-left"
                >
                  <LifeBuoy className="w-5 h-5 text-prosperity-400 shrink-0" />
                  <span>Customer Support Hub</span>
                </button>
              </div>
              <div className="pt-2 border-t border-clarity-50/5">
                <a 
                  href="https://github.com/sponsors/ayaghi88" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-ember-500 to-royal-500 text-white rounded-xl text-sm font-bold uppercase tracking-wider active:scale-[0.98] transition-all shadow-md"
                >
                  <HeartHandshake className="w-4 h-4 text-white" /> Sponsor Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-royal-500/30 bg-royal-500/10 text-royal-400 text-xs font-bold uppercase tracking-widest leading-none">
              <Sparkles className="w-3.5 h-3.5 animate-spin-pulse" /> Fullstack AI Engineering & Elite Self-Publishing
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-tight">
              We Turn Ideas <br />
              <span className="text-gradient">Into Apps & Books.</span>
            </h1>

            <p className="max-w-2xl text-clarity-300 text-base md:text-lg font-light leading-relaxed">
              At <strong className="text-white font-semibold">Ember Core Studio</strong>, we operate a premier venture incubator. 
              We engineer custom, high-performance web applications for CEOs and founders, and craft elite self-publishing solutions for independent authors. **You retain 100% of your rights, royalties, and codebase ownership.**
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#publishing"
                className="px-6 py-3.5 bg-gradient-to-r from-ember-500 via-royal-500 to-prosperity-600 text-white font-bold rounded-2xl transition-all shadow-xl hover:-translate-y-0.5 text-sm cursor-pointer"
              >
                Launch Studio Workspace
              </a>
              <a 
                href="#creations"
                className="px-6 py-3.5 bg-clarity-50/5 hover:bg-clarity-50/10 text-white border border-clarity-50/10 font-bold rounded-2xl transition-all text-sm cursor-pointer"
              >
                Explore Apps Portfolio
              </a>
            </div>

            {/* Social handles badges */}
            <div className="pt-6 flex flex-wrap gap-4 items-center border-t border-clarity-50/10">
              <span className="text-xs uppercase font-mono tracking-wider text-clarity-500">Developer Channels:</span>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://github.com/ayaghi88" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-base-900 border border-clarity-50/10 text-xs hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" /> ayaghi88
                </a>
                <a 
                  href="https://linkedin.com/in/amberyaghi" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-base-900 border border-clarity-50/10 text-xs hover:text-royal-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-royal-400" /> amberyaghi
                </a>
                <a 
                  href="https://lovable.dev/@amberyaghi" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-base-900 border border-clarity-50/10 text-xs hover:text-prosperity-400 transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-prosperity-500 rounded-full animate-pulse" /> Lovable: amberyaghi
                </a>
              </div>
            </div>
          </div>

          {/* Bento Stats Panel */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="glass-panel p-6 rounded-2xl card-gradient-ember flex flex-col justify-between">
              <div className="w-10 h-10 rounded-lg bg-ember-600/10 border border-ember-500/20 flex items-center justify-center text-ember-400 mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-display font-extrabold text-white">100%</p>
                <p className="text-[10px] text-clarity-400 uppercase tracking-widest font-mono mt-1 leading-tight">IP & Royalty Ownership Kept</p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl card-gradient-royal flex flex-col justify-between">
              <div className="w-10 h-10 rounded-lg bg-royal-600/10 border border-royal-500/20 flex items-center justify-center text-royal-400 mb-6">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-display font-extrabold text-white">40+</p>
                <p className="text-[10px] text-clarity-400 uppercase tracking-widest font-mono mt-1 leading-tight">SaaS Apps & Book Assets</p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl card-gradient-prosperity col-span-2 flex items-center justify-between">
              <div>
                <div className="inline-flex items-center gap-1 text-[10px] text-prosperity-400 font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm bg-prosperity-500/10 border border-prosperity-500/20 mb-2">
                  Launchpad Status
                </div>
                <h3 className="font-display font-bold text-lg text-white">Accepting Projects</h3>
                <p className="text-xs text-clarity-300">New App builds & Manuscript slots open for Q3 2026.</p>
              </div>
              <a 
                href="#publishing" 
                className="w-12 h-12 rounded-xl bg-prosperity-500 text-white flex items-center justify-center hover:scale-105 transition-transform"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* STUDIO LAUNCHPAD - PRIMARY FOCAL POINT */}
      <section id="publishing" className="py-24 relative max-w-7xl mx-auto px-6 border-b border-clarity-50/10 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-ember-400 font-mono bg-ember-600/10 border border-ember-500/20 px-3.5 py-1.5 rounded-full">
            Elite Tech Scoping & Launch Workspace
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white">
            Ember Core Studio Launchpad
          </h2>
          <p className="text-clarity-300 text-sm md:text-base leading-relaxed">
            An elegant, secure interactive workspace for visionary CEOs and self-publishing authors. Configure your bespoke SaaS engineering scope or book layout package, calculate complete pricing, and submit your secure project intake today.
          </p>
        </div>

        <PublishingLaunchpad />
      </section>

      {/* THE STORY / PROOF OF CONCEPT BLOCK */}
      <section id="about" className="py-20 border-y border-clarity-50/10 bg-base-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs text-ember-400 font-mono uppercase font-bold tracking-wider">
                <Lightbulb className="w-4 h-4" /> About the Founder & Engineer
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                Amber Yaghi — Solo Dev & Fullstack AI Engineer
              </h2>
              
              <div className="p-4 bg-gradient-to-r from-ember-950/20 to-royal-950/20 border border-royal-500/20 rounded-2xl">
                <p className="text-[9px] font-mono text-royal-400 font-bold leading-normal uppercase tracking-widest mb-1.5">
                  LinkedIn Biography Reference:
                </p>
                <p className="text-xs text-white leading-relaxed italic font-medium">
                  "Founder, Ember Core Studio | Solo dev | Fullstack AI Web App Engineer | I help CEOs turn ideas into apps | I Help Authors Launch & Keep 100% Rights & Royalties | Author of “Mind Bending: The Quantum Reality Strategist”."
                </p>
              </div>

              <p className="text-clarity-300 leading-relaxed text-sm">
                As a dedicated solo fullstack engineer, I design products born from practical necessity and extreme standards. Every application in our creations gallery represents tools I personally crafted and deployed to solve real-world challenges:
              </p>
              
              <ul className="space-y-4 text-xs">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-ember-600/20 text-ember-400 shrink-0 flex items-center justify-center text-xs font-bold font-mono">1</div>
                  <div>
                    <strong className="text-white">In Classrooms & Academic Studies:</strong> Tools built to compress dense lectures, translate complex curriculum contexts into digestible blocks, and provide bespoke tutoring models.
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-royal-600/20 text-royal-400 shrink-0 flex items-center justify-center text-xs font-bold font-mono">2</div>
                  <div>
                    <strong className="text-white">During Corporate Workplace Training:</strong> AI-augmented communication safeguards designed to filter workplace fatigue, format critical deliverables, and establish clear career matching guidelines.
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-prosperity-600/20 text-prosperity-400 shrink-0 flex items-center justify-center text-xs font-bold font-mono">3</div>
                  <div>
                    <strong className="text-white">While Self-Publishing "Mind Bending":</strong> As the author of <strong className="text-white">“Mind Bending: The Quantum Reality Strategist”</strong>, I personally engineered custom editing checkers and design previewers to bypass predatory vanity press gates—retaining 100% of my rights and royalties. We now extend this exact technical freedom to authors globally.
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-panel p-8 rounded-3xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-prosperity-500/15 rounded-full blur-[40px]" />
              <h3 className="font-display font-extrabold text-xl text-white mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-prosperity-400" /> Proof of Concept Certified
              </h3>
              <p className="text-sm text-clarity-300 mb-6 leading-relaxed">
                Developing over forty distinct, functioning code repositories serves as a clear proof-of-concept. It represents our extreme agility, robust tech architecture stack, and client delivery readiness. Rather than pitching hypothetical slideshows, we present live, operational products that real consumers can test immediately.
              </p>
              <div className="p-4 rounded-xl bg-base-950 border border-clarity-50/10 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-display font-bold text-white">41</div>
                  <div className="text-[10px] text-clarity-500 uppercase tracking-widest font-mono mt-1">Live Sub-domains</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-prosperity-400">100%</div>
                  <div className="text-[10px] text-clarity-500 uppercase tracking-widest font-mono mt-1">Responsive Design</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: FLAGSHIP IN-DEPTH HIGHLIGHT */}
      <section id="flagship" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-royal-400 font-mono bg-royal-600/10 border border-royal-500/20 px-3 py-1 rounded-full">
            Flagship Venture Target
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white">
            Presenting LovableLearner.com
          </h2>
          <p className="text-clarity-300 text-lg">
            Our premier interactive AI training model, custom-designed to bring educational equality to classrooms, homes, and corporate trainings globally.
          </p>
        </div>

        <div className="glass-panel p-8 md:p-14 rounded-[40px] relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-600/15 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
          
          <div className="lg:col-span-7 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-prosperity-500/10 border border-prosperity-500/20 text-prosperity-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-prosperity-500 animate-pulse" /> Highly Fundable EdTech Asset
            </div>
            
            <h3 className="text-3xl font-display font-bold text-white">
              The Interactive Student & Mentor Classroom Tool
            </h3>
            
            <p className="text-clarity-300 leading-relaxed md:text-lg">
              LovableLearner matches complex textbooks, curriculum milestones, or training outlines directly with the student's personalized sensory learning profile. By generating interactive practice models, conversational dialogue sandboxes, and visual tracking metrics, the assistant ensures high retention.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 text-sm">
              <div className="p-4 rounded-xl bg-base-950/70 border border-clarity-50/10">
                <h4 className="font-bold text-white mb-1 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-ember-400" /> Target User Group
                </h4>
                <p className="text-xs text-clarity-400">Primary/Middle educators, homeschool families, special needs processors, and corporate HR teams.</p>
              </div>
              <div className="p-4 rounded-xl bg-base-950/70 border border-clarity-50/10">
                <h4 className="font-bold text-white mb-1 flex items-center gap-1.5">
                  <BookOpenCheck className="w-4 h-4 text-royal-400" /> SBA Fit Strategy
                </h4>
                <p className="text-xs text-clarity-400">Fits public educational development grant allocations for high-impact regional literacy drives.</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-3.5 bg-clarity-50/5 text-clarity-400 font-mono text-xs rounded-xl border border-clarity-50/10">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" /> Live Site Private (Copyright Pending)
              </div>
              <a 
                href="#connect" 
                className="px-6 py-3.5 bg-gradient-to-r from-royal-600 to-ember-600 text-white font-bold rounded-xl transition-all"
              >
                Inquire For Partnership Term
              </a>
            </div>
          </div>

          {/* Interactive visual mockup card */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative rounded-2xl border border-clarity-50/10 bg-base-900 p-6 overflow-hidden shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-clarity-50/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-clarity-500">LOVABLELEARNER.COM</span>
              </div>
              
              <div className="space-y-3">
                <div className="text-xs text-royal-400 uppercase tracking-wider font-mono font-bold">Interactive Module Preview</div>
                <div className="p-3 bg-base-950 rounded-xl border border-clarity-50/10 text-xs">
                  <p className="font-bold text-white mb-1">Module: Solar System Orbit Mechanics</p>
                  <p className="text-clarity-400">"Explain Kepler's Second Law as if I am a gamer..."</p>
                </div>
                <div className="p-3 bg-royal-950/20 rounded-xl border border-royal-500/20 text-xs text-royal-300">
                  <p className="font-bold text-white mb-1">AI Companion Response:</p>
                  "Think of it like a speed-boost modifier. When your planet gets close to the sun, the gravity 'boost' gives it extreme orbital velocity..."
                </div>
              </div>

              <div className="pt-2 border-t border-clarity-50/10 text-[9px] font-mono text-clarity-500 text-center">
                SBA Proof of Concept — High Fidelity UI Model
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* OTHER PRIMARY HIGHLIGHTS GRID */}
      <section className="py-20 bg-base-900/40 border-y border-clarity-50/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-ember-500 mb-12 text-center">Featured Applications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Highlight 1: Shrinkandsend.com */}
            <div className="glass-panel p-6 rounded-2xl card-gradient-ember flex flex-col justify-between hover:border-ember-500/30 transition-all group">
              <div>
                <span className="text-[10px] font-mono font-bold text-ember-400 uppercase tracking-widest">Creator Utility</span>
                <h3 className="font-display font-bold text-xl text-white mt-1 mb-3 group-hover:text-ember-400 transition-colors">Shrinkandsend.com</h3>
                <p className="text-xs text-clarity-300 leading-relaxed">
                  Advanced video, image, and media asset optimizer rendering lightweight deliverables directly on layout timelines inside browsers. Ideal for rapid remote file transfers.
                </p>
              </div>
              <div className="pt-6 border-t border-clarity-50/10 mt-6 flex justify-between items-center">
                <span className="text-[10px] font-mono text-clarity-400">Mobile Compressor</span>
                <a href="https://shrinkandsend.com" target="_blank" rel="noreferrer" className="text-ember-400 hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Highlight 2: Textdetoxalchemy.com */}
            <div className="glass-panel p-6 rounded-2xl card-gradient-royal flex flex-col justify-between hover:border-royal-500/30 transition-all group">
              <div>
                <span className="text-[10px] font-mono font-bold text-royal-400 uppercase tracking-widest">Text Hygiene</span>
                <h3 className="font-display font-bold text-xl text-white mt-1 mb-3 group-hover:text-royal-400 transition-colors">Textdetoxalchemy.com</h3>
                <p className="text-xs text-clarity-300 leading-relaxed">
                  Advanced text hygiene engine designed to clean user text, stripping out special characters, blank spaces, and formatting anomalies so manuscripts are perfect and publishing-ready.
                </p>
              </div>
              <div className="pt-6 border-t border-clarity-50/10 mt-6 flex justify-between items-center">
                <span className="text-[10px] font-mono text-clarity-400">Formatting Sanitizer</span>
                <a href="https://textdetoxalchemy.com" target="_blank" rel="noreferrer" className="text-royal-400 hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Highlight 3: Authorslinguist.netlify.app */}
            <div className="glass-panel p-6 rounded-2xl card-gradient-prosperity flex flex-col justify-between hover:border-prosperity-500/30 transition-all group">
              <div>
                <span className="text-[10px] font-mono font-bold text-prosperity-400 uppercase tracking-widest">Seamless Translation</span>
                <h3 className="font-display font-bold text-xl text-white mt-1 mb-3 group-hover:text-prosperity-400 transition-colors">Authors Linguist</h3>
                <p className="text-xs text-clarity-300 leading-relaxed">
                  Surgical multi-language utility allowing authors and creators to translate dynamic text blocks into different languages seamlessly and with maximum semantic reliability.
                </p>
              </div>
              <div className="pt-6 border-t border-clarity-50/10 mt-6 flex justify-between items-center">
                <span className="text-[10px] font-mono text-clarity-400">Translation Suite</span>
                <a href="https://authorslinguist.netlify.app" target="_blank" rel="noreferrer" className="text-prosperity-400 hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Highlight 4: amberyaghi.org */}
            <div className="glass-panel p-6 rounded-2xl card-gradient-royal flex flex-col justify-between hover:border-royal-500/30 transition-all group">
              <div>
                <span className="text-[10px] font-mono font-bold text-royal-400 uppercase tracking-widest">Brand Director</span>
                <h3 className="font-display font-bold text-xl text-white mt-1 mb-3 group-hover:text-royal-400 transition-colors">AmberYaghi.org</h3>
                <p className="text-xs text-clarity-300 leading-relaxed">
                  The executive portfolio page hosting historical credentials, technology advocacy records, GitHub community linkages, and strategic plans.
                </p>
              </div>
              <div className="pt-6 border-t border-clarity-50/10 mt-6 flex justify-between items-center">
                <span className="text-[10px] font-mono text-clarity-400">Director Portfolio Site</span>
                <a href="https://amberyaghi.org" target="_blank" rel="noreferrer" className="text-royal-400 hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FILTERABLE LIST OF ALL CREATIONS */}
      <section id="creations" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-prosperity-400 font-mono">Unified Grid Directory</span>
            <h2 className="text-4xl font-display font-extrabold text-white mt-1">Ember Core Creations Hub</h2>
            <p className="text-clarity-300 max-w-xl mt-2">
              Browse through our full development stack of running solutions. Filter by application scope or type, and view clear descriptions, audience definitions, and technical identifiers.
            </p>
          </div>

          {/* Search Inputs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3.5 top-3.5 text-clarity-500 w-4.5 h-4.5" />
              <input 
                type="text" 
                placeholder="Search by name, tag, or tech..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-clarity-50/5 border border-clarity-50/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-ember-550"
              />
            </div>
            <div className="relative">
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value as FilterCategory)}
                className="w-full bg-base-900 border border-clarity-50/10 rounded-xl py-3 px-4 text-sm text-white appearance-none pr-10 cursor-pointer"
              >
                <option value="All">All Categories</option>
                <option value="Highlighted">Highlighted Only</option>
                <option value="Core Saas">Core SaaS Model</option>
                <option value="Niche Utility">Niche Utility</option>
                <option value="Community & Culture">Community & Culture</option>
              </select>
              <Filter className="absolute right-3 top-3.5 text-clarity-500 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredApps.map((app) => (
              <motion.div
                layout
                key={app.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-6 rounded-2xl glass-panel relative flex flex-col justify-between hover:border-clarity-50/20 transition-all group cursor-pointer"
                onClick={() => setSelectedApp(app)}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[9px] uppercase font-mono font-bold px-2 py-0.5 rounded ${
                      app.category === 'Highlighted' ? 'bg-ember-500/10 text-ember-400 border border-ember-500/20' :
                      app.category === 'Core Saas' ? 'bg-royal-500/10 text-royal-400 border border-royal-500/20' :
                      app.category === 'Niche Utility' ? 'bg-prosperity-500/10 text-prosperity-400 border border-prosperity-500/20' :
                      'bg-clarity-500/10 text-clarity-300 border border-clarity-500/10'
                    }`}>
                      {app.category}
                    </span>
                    <span className="text-[10px] font-mono text-clarity-500">
                      {app.isActive ? 'Live URL Profile' : 'Concept Blueprint'}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-ember-400 transition-colors mb-2">{app.name}</h3>
                  <p className="text-xs text-clarity-300 leading-relaxed line-clamp-3 mb-4">{app.description || "Details and application profile updating soon."}</p>
                  
                  {app.description && app.tags && app.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {app.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[9px] font-mono px-2 py-0.5 bg-clarity-50/5 text-clarity-400 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-clarity-50/5 flex items-center justify-between">
                  <span className={`text-[10px] flex items-center gap-1 ${app.isActive ? 'text-prosperity-400' : 'text-clarity-500'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${app.isActive ? 'bg-prosperity-500 animate-pulse' : 'bg-clarity-600'}`} />
                    {app.isActive ? 'Active Platform' : 'Acquisition Target'}
                  </span>
                  <div className="inline-flex items-center gap-1 text-xs text-clarity-500 hover:text-white font-medium transition-colors">
                    Analyze Deck <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredApps.length === 0 && (
          <div className="text-center py-16 text-clarity-400 font-display">
            No applications match your search filters. Try typing a different term.
          </div>
        )}
      </section>

      {/* DETAIL DRAWER / DIALOG (PORTALS REPLACEMENT) */}
      <AnimatePresence>
        {selectedApp && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedApp(null)}
              className="absolute inset-0 bg-base-950/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-base-900 border border-clarity-50/15 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <div className="p-8 border-b border-clarity-50/10 flex justify-between items-start">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-ember-500/10 border border-ember-500/20 text-ember-400 text-[10px] uppercase font-mono font-bold mb-2">
                    {selectedApp.category} Setup
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">{selectedApp.name}</h3>
                </div>
                <button 
                  onClick={() => setSelectedApp(null)} 
                  className="p-2 text-clarity-400 hover:text-white hover:bg-clarity-50/5 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>               <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-prosperity-400 font-mono font-bold mb-2">Summary Description</h4>
                  <p className="text-sm text-clarity-200 leading-relaxed">{selectedApp.description || "Details and application profile updating soon."}</p>
                </div>

                {(selectedApp.purpose || selectedApp.targetAudience) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-clarity-50/10">
                    {selectedApp.purpose && (
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-royal-400 font-mono font-bold mb-2">Operational Purpose</h4>
                        <p className="text-xs text-clarity-300 leading-relaxed">{selectedApp.purpose}</p>
                      </div>
                    )}
                    {selectedApp.targetAudience && (
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-ember-400 font-mono font-bold mb-2">Target Market Audience</h4>
                        <p className="text-xs text-clarity-300 leading-relaxed">{selectedApp.targetAudience}</p>
                      </div>
                    )}
                  </div>
                )}

                {selectedApp.developmentStory && (
                  <div className="pt-4 border-t border-clarity-50/10">
                    <h4 className="text-xs uppercase tracking-widest text-clarity-500 font-mono mb-2">Ideation Development Story</h4>
                    <p className="text-xs text-clarity-400 leading-relaxed whitespace-pre-line">{selectedApp.developmentStory}</p>
                  </div>
                )}

                {selectedApp.description && selectedApp.tags && selectedApp.tags.length > 0 && (
                  <div className="pt-4 flex flex-wrap gap-2">
                    {selectedApp.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono px-3 py-1 bg-clarity-50/5 text-clarity-300 rounded border border-clarity-50/10">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-8 border-t border-clarity-50/10 bg-base-950 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className={`text-xs flex items-center gap-1.5 ${selectedApp.isActive ? 'text-prosperity-400' : 'text-clarity-500'}`}>
                  <span className={`w-2 h-2 rounded-full ${selectedApp.isActive ? 'bg-prosperity-500 animate-pulse' : 'bg-clarity-600'}`} />
                  {selectedApp.isActive ? 'operational & tested' : 'concept sandbox / buyout target'}
                </div>
                <div className="flex w-full sm:w-auto gap-3">
                  <button 
                    onClick={() => setSelectedApp(null)}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-bold text-clarity-300 hover:text-white hover:bg-clarity-50/5 transition-all text-center"
                  >
                    Close Analysis
                  </button>
                  {selectedApp.isActive && selectedApp.url ? (
                    <a 
                      href={selectedApp.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-1 sm:flex-none px-6 py-2.5 bg-gradient-to-r from-ember-500 to-royal-600 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all hover:opacity-90"
                    >
                      Launch Live Site <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a 
                      href="#connect" 
                      onClick={() => setSelectedApp(null)}
                      className="flex-1 sm:flex-none px-6 py-2.5 bg-clarity-50/5 text-clarity-300 hover:text-white hover:bg-clarity-50/10 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all border border-clarity-50/10 text-center"
                    >
                      Inquire For Acquisition <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* TERMS OF SERVICE MODAL */}
      <AnimatePresence>
        {termsOpen && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setTermsOpen(false)}
              className="absolute inset-0 bg-base-950/85 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-base-900 border border-clarity-50/15 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <div className="p-8 border-b border-clarity-50/10 flex justify-between items-start">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-royal-500/10 border border-royal-500/20 text-royal-400 text-[10px] uppercase font-mono font-bold mb-2">
                    Legal Protection
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-white">Terms of Service</h3>
                  <p className="text-xs text-clarity-400 mt-1">Ember Core Studio — Custom Book Packaging & Self-Publishing Services</p>
                </div>
                <button 
                  onClick={() => setTermsOpen(false)} 
                  className="p-2 text-clarity-400 hover:text-white hover:bg-clarity-50/5 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8 space-y-6 max-h-[55vh] overflow-y-auto text-xs text-clarity-300 leading-relaxed">
                <p className="text-clarity-400">
                  Welcome to Ember Core Studio. Please read these terms carefully. By estimating, configuring, or submitting specifications through our dual-scope launchpad, you agree to these terms of service.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-white uppercase text-[10px] tracking-widest font-mono text-ember-400 mb-1">
                      1. 100% Royalty & Intellectual Property (IP) Transfer Guarantee
                    </h4>
                    <p>
                      Ember Core Studio operates on flat-rate, contract-based flat-fee models. For authors, we retain <strong>0% claim</strong> on your passive book sales or retail royalty splits. For software engineering clients, <strong>100% codebase intellectual property (IP) ownership</strong> and repository control are transferred directly to you upon final milestone invoice payment. No ongoing platform or developer fees are ever charged.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white uppercase text-[10px] tracking-widest font-mono text-royal-400 mb-1">
                      2. Technical Service Scope & Custom Deliverables
                    </h4>
                    <p>
                      For software projects, we deliver custom React frontend structures, Node/Express backend APIs, Stripe subscription billing models, and server-isolated Gemini AI pipelines as detailed in your scope estimator. For book launch agreements, we provide premium typesetting, eBook conversion, Bowker metadata layouts, and cover files.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white uppercase text-[10px] tracking-widest font-mono text-prosperity-400 mb-1">
                      3. Flat-Fee Payments & Commencement Deposits
                    </h4>
                    <p>
                      To allocate technical development resources and design slots, a 50% non-refundable commencement deposit is due upon contract scoping finalization. The remaining 50% payment is due only upon final platform deployment (web apps) or print layout delivery (manuscripts).
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white uppercase text-[10px] tracking-widest font-mono text-clarity-400 mb-1">
                      4. Custom ISBN & Bowker Registration Rights
                    </h4>
                    <p>
                      Any independent 13-digit ISBN purchased or registered through our services is legally purchased through Bowker and registered 100% under your own custom publishing house name/imprint. It remains your permanent corporate asset of record.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white uppercase text-[10px] tracking-widest font-mono text-ember-400 mb-1">
                      5. Strict Local Privacy & Zero Data Retention
                    </h4>
                    <p>
                      Ember Core Studio respects complete client data and concept privacy. All interactive selections, app idea specifications, manuscript parameters, and form inputs are processed 100% locally inside your browser. No drafts, proprietary source codes, or contact details are saved to secondary backend databases. Data is only transmitted directly to <strong>contact@embercorestudio.org</strong> when you voluntarily choose to copy or email your completed summaries.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white uppercase text-[10px] tracking-widest font-mono text-royal-400 mb-1">
                      6. Testing, Deployment & Revisions
                    </h4>
                    <p>
                      We guarantee platform file acceptance on Amazon KDP/Lulu and perfect responsive standards on web app codes. Clients are responsible for verifying final print proofs and performing initial testing. Post-deployment support or substantive feature scope additions requested after work has commenced are governed by custom scoping addendums.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 border-t border-clarity-50/10 bg-base-950 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <span className="text-[10px] font-mono text-clarity-500 uppercase tracking-wider">
                  Effective: July 17, 2026
                </span>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setTermsOpen(false)}
                    className="px-6 py-2.5 bg-gradient-to-r from-royal-600 to-ember-600 text-white font-bold rounded-xl text-xs flex items-center justify-center transition-all hover:opacity-95"
                  >
                    I Understand & Agree
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CUSTOMER SUPPORT HUB MODAL */}
      <AnimatePresence>
        {supportOpen && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSupportOpen(false)}
              className="absolute inset-0 bg-base-950/85 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-base-900 border border-clarity-50/15 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <div className="p-6 sm:p-8 border-b border-clarity-50/10 flex justify-between items-start bg-base-950/40">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-ember-500/10 border border-ember-500/20 text-ember-400 text-[10px] uppercase font-mono font-bold mb-2">
                    <LifeBuoy className="w-3 h-3 text-ember-400" /> Client Care Center
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-white">Customer Support Hub</h3>
                  <p className="text-xs text-clarity-400 mt-1">Ember Core Studio Support Desk & Ticket Resolution System</p>
                </div>
                <button 
                  onClick={() => setSupportOpen(false)} 
                  className="p-2 text-clarity-400 hover:text-white hover:bg-clarity-50/5 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-clarity-50/10 bg-base-950/20 px-4 sm:px-6">
                <button
                  onClick={() => setSupportTab('ticket')}
                  className={`flex items-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
                    supportTab === 'ticket' 
                      ? 'border-ember-500 text-white' 
                      : 'border-transparent text-clarity-400 hover:text-white'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Submit Ticket
                </button>
                <button
                  onClick={() => setSupportTab('status')}
                  className={`flex items-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
                    supportTab === 'status' 
                      ? 'border-royal-500 text-white' 
                      : 'border-transparent text-clarity-400 hover:text-white'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" /> Check Status
                </button>
                <button
                  onClick={() => setSupportTab('faq')}
                  className={`flex items-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
                    supportTab === 'faq' 
                      ? 'border-prosperity-500 text-white' 
                      : 'border-transparent text-clarity-400 hover:text-white'
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5" /> Support FAQ
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6 max-h-[50vh] overflow-y-auto">
                {supportTab === 'ticket' && (
                  <form onSubmit={handleSupportSubmit} className="space-y-4">
                    <p className="text-xs text-clarity-300 leading-relaxed">
                      Need custom support or code adjustments? Submit a priority ticket directly to our system. All tickets are automatically routed to Amber Yaghi with an under 24-hour response SLA guarantee.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-mono tracking-widest text-clarity-400 mb-1.5">
                          Support Category
                        </label>
                        <select
                          value={ticketCategory}
                          onChange={(e) => setTicketCategory(e.target.value)}
                          className="w-full px-4 py-2.5 bg-base-950 border border-clarity-50/10 rounded-xl text-xs text-white focus:outline-none focus:border-ember-500 transition-colors"
                        >
                          <option value="Software Engineering Scope">Software Engineering Scope</option>
                          <option value="Elite Self-Publishing Package">Elite Self-Publishing Package</option>
                          <option value="SBA Funding & Investment">SBA Funding & Investment</option>
                          <option value="Education Partnerships">Education Partnerships</option>
                          <option value="Intellectual Property (IP)">Intellectual Property (IP)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-mono tracking-widest text-clarity-400 mb-1.5">
                          Your Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="client@yourcompany.com"
                          value={ticketEmail}
                          onChange={(e) => setTicketEmail(e.target.value)}
                          className="w-full px-4 py-2.5 bg-base-950 border border-clarity-50/10 rounded-xl text-xs text-white placeholder-clarity-600 focus:outline-none focus:border-ember-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-widest text-clarity-400 mb-1.5">
                        Subject / Focus Area
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Critical API integration update or formatting revision"
                        value={ticketSubject}
                        onChange={(e) => setTicketSubject(e.target.value)}
                        className="w-full px-4 py-2.5 bg-base-950 border border-clarity-50/10 rounded-xl text-xs text-white placeholder-clarity-600 focus:outline-none focus:border-ember-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-widest text-clarity-400 mb-1.5">
                        Detailed Support Requirement
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Please specify exactly what needs adjustment or assistance, including relevant repository paths or book chapter files if applicable."
                        value={ticketMessage}
                        onChange={(e) => setTicketMessage(e.target.value)}
                        className="w-full px-4 py-2.5 bg-base-950 border border-clarity-50/10 rounded-xl text-xs text-white placeholder-clarity-600 focus:outline-none focus:border-ember-500 transition-colors resize-none"
                      />
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-gradient-to-r from-ember-500 to-royal-600 text-white font-bold rounded-xl text-xs flex items-center gap-2 hover:opacity-90 transition-all cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" /> Submit Intake Ticket
                      </button>
                    </div>
                  </form>
                )}

                {supportTab === 'status' && (
                  <div className="space-y-6">
                    <form onSubmit={handleSearchTicket} className="space-y-3">
                      <label className="block text-[10px] uppercase font-mono tracking-widest text-clarity-400">
                        Check Real-time Ticket Status
                      </label>
                      <p className="text-xs text-clarity-400 leading-normal">
                        Input your ECS support reference code (e.g., <strong className="text-white">ECS-9021</strong> or <strong className="text-white">ECS-7391</strong>) below to check triage updates.
                      </p>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="ECS-XXXX"
                          value={ticketIdInput}
                          onChange={(e) => setTicketIdInput(e.target.value)}
                          className="flex-1 px-4 py-2.5 bg-base-950 border border-clarity-50/10 rounded-xl text-xs text-white placeholder-clarity-600 focus:outline-none focus:border-royal-500 transition-colors uppercase"
                        />
                        <button
                          type="submit"
                          className="px-5 py-2.5 bg-royal-600 hover:bg-royal-500 text-white font-bold rounded-xl text-xs transition-all cursor-pointer"
                        >
                          Verify Status
                        </button>
                      </div>
                      {ticketSearchError && (
                        <p className="text-xs text-ember-400 font-mono mt-1">{ticketSearchError}</p>
                      )}
                    </form>

                    {activeSearchedTicket ? (
                      <div className="p-5 rounded-2xl bg-base-950 border border-clarity-50/10 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-clarity-50/10 pb-3">
                          <div>
                            <span className="text-[10px] font-mono text-royal-400 font-bold bg-royal-500/10 border border-royal-500/20 px-2 py-0.5 rounded mr-2">
                              {activeSearchedTicket.id}
                            </span>
                            <span className="text-xs font-semibold text-white">{activeSearchedTicket.subject}</span>
                          </div>
                          <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                            activeSearchedTicket.status.includes('Resolved')
                              ? 'bg-prosperity-500/10 border-prosperity-500/20 text-prosperity-400'
                              : 'bg-ember-500/10 border-ember-500/20 text-ember-400 animate-pulse'
                          }`}>
                            {activeSearchedTicket.status}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-[11px] text-clarity-400">
                          <div>
                            <span className="block text-[8px] uppercase tracking-widest text-clarity-500 font-mono mb-0.5">Assigned Group</span>
                            <span className="text-white font-medium">Amber Yaghi (Lead Dev)</span>
                          </div>
                          <div>
                            <span className="block text-[8px] uppercase tracking-widest text-clarity-500 font-mono mb-0.5">Category Class</span>
                            <span className="text-white font-medium">{activeSearchedTicket.category}</span>
                          </div>
                          <div>
                            <span className="block text-[8px] uppercase tracking-widest text-clarity-500 font-mono mb-0.5">Date Submitted</span>
                            <span className="font-mono">{activeSearchedTicket.date}</span>
                          </div>
                          <div>
                            <span className="block text-[8px] uppercase tracking-widest text-clarity-500 font-mono mb-0.5">Client ID Verification</span>
                            <span className="font-mono text-clarity-300">{activeSearchedTicket.email}</span>
                          </div>
                        </div>

                        <div className="bg-base-900 p-3.5 rounded-xl border border-clarity-50/5 text-xs text-clarity-300">
                          <span className="block text-[8px] uppercase tracking-widest text-clarity-500 font-mono mb-1">Issue Description</span>
                          {activeSearchedTicket.message}
                        </div>

                        {activeSearchedTicket.status.includes('Resolved') ? (
                          <div className="text-xs text-prosperity-400 bg-prosperity-500/5 border border-prosperity-500/20 p-3 rounded-xl flex items-start gap-2">
                            <Check className="w-4 h-4 shrink-0 mt-0.5" />
                            <div>
                              <strong className="block text-white">Status: Issue Resolved</strong>
                              Amber has successfully finalized this requirement. Deployment is active and assets are transferred.
                            </div>
                          </div>
                        ) : (
                          <div className="text-xs text-royal-400 bg-royal-500/5 border border-royal-500/20 p-3 rounded-xl flex items-start gap-2">
                            <Clock className="w-4 h-4 shrink-0 mt-0.5 animate-spin-pulse" />
                            <div>
                              <strong className="block text-white">Status: Triaged & Processing</strong>
                              Amber Yaghi has scheduled this adjustment. We will coordinate directly via {activeSearchedTicket.email}.
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="p-8 border border-dashed border-clarity-50/10 rounded-2xl text-center text-clarity-500 text-xs">
                        No ticket selected. Input a valid Ticket ID above to load details.
                      </div>
                    )}
                  </div>
                )}

                {supportTab === 'faq' && (
                  <div className="space-y-4">
                    <p className="text-xs text-clarity-300">
                      Explore detailed operational guarantees and SLA procedures directly designed to keep your venture running flawlessly.
                    </p>

                    <div className="space-y-3">
                      <div className="p-4 bg-base-950 border border-clarity-50/5 rounded-xl space-y-1">
                        <h4 className="text-xs font-semibold text-white">How fast is the support response time?</h4>
                        <p className="text-xs text-clarity-400 leading-relaxed">
                          Founder & Engineer Amber Yaghi personally triages and completes all tickets. Active contracts and deployed applications receive priority response SLAs of <strong className="text-white">under 24 hours</strong>, Monday through Friday.
                        </p>
                      </div>

                      <div className="p-4 bg-base-950 border border-clarity-50/5 rounded-xl space-y-1">
                        <h4 className="text-xs font-semibold text-white">What if a software bug occurs after my app is deployed?</h4>
                        <p className="text-xs text-clarity-400 leading-relaxed">
                          All software engineering milestone deliveries include a <strong className="text-white">90-day post-launch critical bug guarantee</strong>. If any code features, Stripe subscriptions, or server APIs malfunction, we patch it immediately at no additional cost.
                        </p>
                      </div>

                      <div className="p-4 bg-base-950 border border-clarity-50/5 rounded-xl space-y-1">
                        <h4 className="text-xs font-semibold text-white">Who owns the code and final book formatted assets?</h4>
                        <p className="text-xs text-clarity-400 leading-relaxed">
                          You do! We transfer 100% intellectual property (IP) and repository ownership directly upon milestone completion. No ongoing developer or platform fee divides are ever retained.
                        </p>
                      </div>

                      <div className="p-4 bg-base-950 border border-clarity-50/5 rounded-xl space-y-1">
                        <h4 className="text-xs font-semibold text-white">How do I submit an urgent manuscript revision?</h4>
                        <p className="text-xs text-clarity-400 leading-relaxed">
                          Simply use the "Submit Ticket" tab here and select the "Elite Self-Publishing Package" category. You can also write directly to <strong className="text-white">contact@embercorestudio.org</strong> for real-time file updates.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-8 border-t border-clarity-50/10 bg-base-950 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <span className="text-[10px] font-mono text-clarity-500 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-prosperity-500 animate-pulse" /> Support SLA Active (24 Hr response)
                </span>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setSupportOpen(false)}
                    className="px-6 py-2.5 bg-clarity-50/5 text-clarity-300 hover:text-white rounded-xl text-xs font-bold transition-all border border-clarity-50/10"
                  >
                    Close Hub
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SECTION: EDUCATIONAL TRAINING FOR STUDENTS & TEAMS */}
      <section id="education" className="py-24 border-t border-clarity-50/10 bg-base-900/10 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-prosperity-400 font-mono">Educational Outreach</span>
            <h2 className="text-4xl font-display font-extrabold text-white">
              Learn How We Build: Turn Your Ideas Into SaaS
            </h2>
            <p className="text-clarity-300 leading-relaxed text-base">
              At Ember Core, we are dedicated not just to exporting custom web directories, but to demystifying the framework design mechanics. 
              Our planned curriculum trains founders, self-publishers, students, and corporate managers on how to build their own functional platforms.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-ember-500/10 border border-ember-500/20 text-ember-400 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Self-Branded Portfolios</h4>
                  <p className="text-xs text-clarity-400 mt-1">Design, secure, and build direct personal profiles targeting maximum professional exposure.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-royal-500/10 border border-royal-500/20 text-royal-400 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Freemium to Paid SaaS</h4>
                  <p className="text-xs text-clarity-400 mt-1">Establish secure subscription parameters, localized document stores, and workflow triggers.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-prosperity-500/10 border border-prosperity-500/20 text-prosperity-400 flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Business Directories</h4>
                  <p className="text-xs text-clarity-400 mt-1">Deploy interactive inventory matrices, pricing arbiters, and automated lead responders.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-panel p-8 rounded-3xl border border-prosperity-500/20 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-prosperity-500/10 rounded-full blur-[30px]" />
              <h3 className="font-display font-extrabold text-xl text-white mb-6">Planned Educational Formats</h3>
              
              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-xl bg-base-950 border border-clarity-50/10">
                  <div className="font-bold text-white mb-1">Weekly Interactive Code Sprints</div>
                  <p className="text-clarity-400">Step-by-step video frameworks decomposing how we shipped Shrinkandsend, Textdetox, and more.</p>
                </div>
                <div className="p-4 rounded-xl bg-base-950 border border-clarity-50/10">
                  <div className="font-bold text-white mb-1">Cohort SaaS Blueprints</div>
                  <p className="text-clarity-400">Deep layout files, backend hooks, schema architectures, and user authorization structures ready for direct migration.</p>
                </div>
                <div className="p-4 rounded-xl bg-base-950 border border-clarity-50/10">
                  <div className="font-bold text-white mb-1">Angel / Funding Strategy Workshops</div>
                  <p className="text-clarity-400">Preparing complete proof-of-concept repositories, target metrics graphs, and visual decks for grant approvals.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: SBA INVESTOR ACCELERATOR HUB */}
      <section id="investors" className="py-24 max-w-7xl mx-auto px-6 border-t border-clarity-50/10">
        <div className="glass-panel rounded-[40px] px-8 py-12 md:p-16 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-ember-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-ember-400 font-mono bg-ember-500/10 border border-ember-500/20 px-3 py-1 rounded-md">
                Grant & SBA Prospectus
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                Operating Funding Pitch — Target Capital: $1,500,000+
              </h2>
              <p className="text-sm md:text-base text-clarity-300 leading-relaxed">
                Ember Core Studio represents a resilient, proven technology sandbox. 
                With 40+ functional web properties already delivered and hosted globally, we showcase mature software execution. 
                We are actively applying for <strong className="text-white">Grants, SBA business loans, and angel allocations up to $1,500,000+</strong> to fund our operations, scale our high-impact platforms, and expand the footprint of LovableLearner.com.
              </p>
              <p className="text-sm md:text-base text-clarity-300 leading-relaxed">
                Beyond incubating our own proprietary platforms, <strong className="text-white">we turn ideas into high-performance applications for clients</strong> and are actively <strong className="text-white">open to acquisition offers or strategic buyouts of our current assets</strong>.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 text-center">
                <div className="p-4 bg-base-950 rounded-xl border border-clarity-50/10">
                  <div className="text-xl font-display font-bold text-white">40+</div>
                  <div className="text-[9px] text-clarity-500 uppercase tracking-widest font-mono mt-1">Functional Proofs</div>
                </div>
                <div className="p-4 bg-base-950 rounded-xl border border-clarity-50/10">
                  <div className="text-xl font-display font-bold text-prosperity-400">Low</div>
                  <div className="text-[9px] text-clarity-500 uppercase tracking-widest font-mono mt-1">Burn-rate operations</div>
                </div>
                <div className="p-4 bg-base-950 rounded-xl border border-clarity-50/10">
                  <div className="text-xl font-display font-bold text-royal-400">EdTech</div>
                  <div className="text-[9px] text-clarity-500 uppercase tracking-widest font-mono mt-1">High-impact match</div>
                </div>
                <div className="p-4 bg-base-950 rounded-xl border border-clarity-50/10">
                  <div className="text-xl font-display font-bold text-white">Angel</div>
                  <div className="text-[9px] text-clarity-500 uppercase tracking-widest font-mono mt-1">Partnership Open</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center space-y-6 bg-base-950/80 p-8 rounded-3xl border border-clarity-50/10">
              <h3 className="font-display font-bold text-xl text-white">Sponsor Profiles Linkages</h3>
              <p className="text-xs text-clarity-300 leading-relaxed">
                We are committed to open communication, extreme delivery schedules, and clear financial oversight. Explore our developer profiles or sponsor us directly.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <a 
                  href="https://github.com/sponsors/ayaghi88" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full p-4 rounded-xl bg-gradient-to-r from-ember-600 to-royal-600 hover:from-ember-500 hover:to-royal-500 text-white font-bold tracking-wide flex justify-between items-center transition-all shadow"
                >
                  <span>1. GITHUB SPONSORSHIPS</span>
                  <ArrowUpRight className="w-4 h-4 animate-bounce" />
                </a>
                <a 
                  href="https://linkedin.com/in/amberyaghi" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full p-4 rounded-xl bg-base-900 border border-clarity-50/10 text-white flex justify-between items-center hover:bg-clarity-50/5 transition-all"
                >
                  <span>2. LINKEDIN DIALOGS</span>
                  <ExternalLink className="w-4 h-4 text-clarity-400" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* INQUIRY CONTACT INFO & TRACKS */}
      <section id="connect" className="py-24 max-w-7xl mx-auto px-6">
        <div className="glass-panel p-8 md:p-16 rounded-[40px] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-tr from-ember-500 to-royal-500 blur-[120px] opacity-15 -translate-y-1/2 translate-x-1/2 font-sans" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-prosperity-400 font-mono">Inquiry Routing Center</span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight">
                Get in Touch
              </h2>
              <p className="text-clarity-300 leading-relaxed text-sm">
                We streamline communication directly to ensure immediate attention is paid to all serious inquiries, funding arrangements, or educational partnerships. Reach out directly through official channels.
              </p>

              <div className="space-y-4 pt-4">
                <div className="p-4 rounded-xl bg-base-950 border border-clarity-50/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-ember-500/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-ember-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-clarity-500 font-mono">Official Routing Desk</p>
                      <p className="text-sm font-semibold text-white selection:bg-ember-500/20">contact@embercorestudio.org</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-clarity-50/10 hover:bg-clarity-50/20 font-mono text-white text-xs font-semibold transition-all self-start sm:self-center shrink-0 border border-clarity-50/5 active:scale-95"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-prosperity-400" />
                        <span className="text-prosperity-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-clarity-300" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-base-950 border border-clarity-50/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-royal-500/10 flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5 text-royal-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-clarity-500 font-mono">Executive LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/amberyaghi" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-sm font-semibold text-white hover:text-royal-400 transition-colors flex items-center gap-1"
                    >
                      <span>linkedin.com/in/amberyaghi</span>
                      <ArrowUpRight className="w-3 h-3 text-clarity-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-base-950/60 border border-clarity-50/5 hover:border-clarity-50/12 hover:bg-base-950/80 transition-all space-y-3">
                <div className="w-8 h-8 rounded-lg bg-ember-500/10 flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-ember-400" />
                </div>
                <h3 className="font-display font-bold text-white text-base">Capital Allocation & Grants</h3>
                <p className="text-xs text-clarity-400 leading-relaxed">
                  Dedicated response protocols for SBA programs, development administrators, and angel syndicate leads evaluating our target capital allocation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-base-950/60 border border-clarity-50/5 hover:border-clarity-50/12 hover:bg-base-950/80 transition-all space-y-3">
                <div className="w-8 h-8 rounded-lg bg-prosperity-500/10 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-prosperity-400" />
                </div>
                <h3 className="font-display font-bold text-white text-base">Education Partnerships</h3>
                <p className="text-xs text-clarity-400 leading-relaxed">
                  For school district administrators, educational officers, and instructors inquiring about custom learning pipelines and cohort spots.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-base-950/60 border border-clarity-50/5 hover:border-clarity-50/12 hover:bg-base-950/80 transition-all space-y-3">
                <div className="w-8 h-8 rounded-lg bg-royal-500/10 flex items-center justify-center">
                  <HeartHandshake className="w-4 h-4 text-royal-400" />
                </div>
                <h3 className="font-display font-bold text-white text-base">Venture & Incubator Alliances</h3>
                <p className="text-xs text-clarity-400 leading-relaxed">
                  If you represent a venture studio, accelerator, or workspace looking to establish joint-delivery partnerships or curriculum models.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-base-950/60 border border-clarity-50/5 hover:border-clarity-50/12 hover:bg-base-950/80 transition-all space-y-3">
                <div className="w-8 h-8 rounded-lg bg-clarity-50/10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-prosperity-400" />
                </div>
                <h3 className="font-display font-bold text-white text-base">Student Cohort Program</h3>
                <p className="text-xs text-clarity-400 leading-relaxed">
                  If you are a student or developer searching for early alpha curriculum access to upcoming LovableLearner cohorts and tools.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-clarity-50/10 bg-base-950 text-clarity-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-ember-500 to-royal-500 p-[1px]">
              <div className="w-full h-full bg-base-950 rounded-[7px] flex items-center justify-center">
                <Cpu className="w-4 h-4 text-white" />
              </div>
            </div>
            <span className="font-display font-bold text-base uppercase tracking-tighter text-clarity-50">
              Ember <span className="text-ember-500">Core</span> <span className="text-prosperity-500">Studio</span>
            </span>
          </div>
          
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <p className="text-xs uppercase tracking-widest text-clarity-300">
              © 2025 Ember Core Studio. Built as proof of concept.
            </p>
            <div className="flex gap-4 self-center md:self-start">
              <button 
                onClick={() => setTermsOpen(true)}
                className="text-[11px] text-royal-400 hover:text-royal-300 underline font-mono tracking-wide transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <span className="text-clarity-600 text-[11px] font-mono">•</span>
              <button 
                onClick={() => { setSupportOpen(true); setSupportTab('ticket'); }}
                className="text-[11px] text-prosperity-400 hover:text-prosperity-300 underline font-mono tracking-wide transition-colors cursor-pointer"
              >
                Customer Support Hub
              </button>
            </div>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/ayaghi88" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/amberyaghi" target="_blank" rel="noreferrer" className="hover:text-royal-400 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
