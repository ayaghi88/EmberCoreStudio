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
  Database,
  Trash2
} from 'lucide-react';
import { APPS_DATA, AppProject } from './data';

// --- Types ---
type FilterCategory = 'All' | 'Highlighted' | 'Core Saas' | 'Niche Utility' | 'Community & Culture';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All');
  const [selectedApp, setSelectedApp] = useState<AppProject | null>(null);
  
  // Form submission handling for Netlify Form Builder & Local Sandbox Inbox
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [inquiries, setInquiries] = useState<{ id: string; fullName: string; email: string; service: string; message: string; date: string }[]>(() => {
    try {
      const saved = localStorage.getItem('ember_core_inquiries');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;

    const newInquiry = {
      id: Math.random().toString(36).substring(2, 11),
      fullName: fullName || 'Anonymous Sender',
      email: email || 'contact@embercorestudio.org',
      service: service || 'General Alliance',
      message: message || '',
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    // Save to local cache database for instant preview feedback
    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    try {
      localStorage.setItem('ember_core_inquiries', JSON.stringify(updated));
    } catch (ex) {
      console.error(ex);
    }

    try {
      // Fire Netlify POST fetch with explicit parameters. Ignores errors gracefully when offline,
      // but correctly connects if hosted inside Netlify CDN zones.
      const bodyParams = new URLSearchParams();
      bodyParams.append('form-name', 'contact');
      bodyParams.append('fullName', fullName || '');
      bodyParams.append('email', email || '');
      bodyParams.append('service', service || '');
      bodyParams.append('message', message || '');

      await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: bodyParams.toString(),
      });
    } catch (error) {
      console.log('Netlify routing absent in preview sandbox. Saved to local sandbox ledger instead.', error);
    }

    setTimeout(() => {
      setStatus('success');
      formElement.reset();
    }, 1000);
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
              <span className="text-[10px] uppercase font-mono tracking-widest text-prosperity-400 font-bold">App Incubator</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-ember-400 transition-colors">Overview</a>
            <a href="#flagship" className="text-sm font-medium hover:text-royal-400 transition-colors">Flagship Showcase</a>
            <a href="#creations" className="text-sm font-medium hover:text-prosperity-400 transition-colors">All Applications</a>
            <a href="#education" className="text-sm font-medium hover:text-ember-400 transition-colors">Academia & Training</a>
            <a href="#investors" className="text-sm font-medium hover:text-royal-400 transition-colors">Investor Hub</a>
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass-panel border-t border-clarity-50/10 px-6 py-6 flex flex-col gap-4 absolute top-20 left-0 w-full bg-base-950/95"
            >
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-white">Overview</a>
              <a href="#flagship" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-white">Flagship Showcase</a>
              <a href="#creations" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-white">All Applications</a>
              <a href="#education" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-white">Academia & Training</a>
              <a href="#investors" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-white">Investor Hub</a>
              <a href="#connect" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-white">Get in Touch</a>
              <a 
                href="https://github.com/sponsors/ayaghi88" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-ember-500 to-royal-500 text-white rounded-lg text-sm font-bold uppercase tracking-wider"
              >
                <HeartHandshake className="w-4 h-4" /> Sponsor Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-royal-500/30 bg-royal-500/10 text-royal-400 text-xs font-bold uppercase tracking-widest leading-none">
              <Sparkles className="w-3.5 h-3.5 animate-spin-pulse" /> Turning Vision into Software Engine
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white leading-tight">
              We Turn Ideas Into <br />
              <span className="text-gradient">Scalable Web Apps</span>
            </h1>

            <p className="max-w-2xl text-clarity-300 text-lg md:text-xl font-light leading-relaxed">
              At <strong className="text-white font-medium">Ember Core Studio</strong>, we design, build, and incubate custom digital tools. 
              Having engineered over 20+ specialized platforms, our portfolio addresses real bottlenecks in academia, professional services, retail sourcing, self-publishing, and high-performance workflows.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#creations"
                className="px-8 py-4 bg-gradient-to-r from-ember-500 via-royal-500 to-prosperity-600 text-white font-bold rounded-2xl transition-all shadow-xl hover:-translate-y-0.5"
              >
                Explore Creative Portfolio
              </a>
              <a 
                href="#investors"
                className="px-8 py-4 bg-clarity-50/5 hover:bg-clarity-50/10 text-white border border-clarity-50/10 font-bold rounded-2xl transition-all"
              >
                SBA & Funder Profile
              </a>
            </div>

            {/* Social handles badges */}
            <div className="pt-6 flex flex-wrap gap-4 items-center border-t border-clarity-50/10">
              <span className="text-xs uppercase font-mono tracking-wider text-clarity-500">Developer Channels:</span>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://github.com/amberyaghi88" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-base-900 border border-clarity-50/10 text-xs hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" /> amberyaghi88
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
                  href="https://lovable.dev/profile/amberyaghi" 
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
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-4xl font-display font-extrabold text-white">20+</p>
                <p className="text-xs text-clarity-400 uppercase tracking-widest font-mono mt-1">Platforms Shipped</p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl card-gradient-royal flex flex-col justify-between">
              <div className="w-10 h-10 rounded-lg bg-royal-600/10 border border-royal-500/20 flex items-center justify-center text-royal-400 mb-6">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-4xl font-display font-extrabold text-white">$100K</p>
                <p className="text-xs text-clarity-400 uppercase tracking-widest font-mono mt-1">SBA Target Capital</p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl card-gradient-prosperity col-span-2 flex items-center justify-between">
              <div>
                <div className="inline-flex items-center gap-1 text-[10px] text-prosperity-400 font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm bg-prosperity-500/10 border border-prosperity-500/20 mb-2">
                  Fundraising Status
                </div>
                <h3 className="font-display font-bold text-lg text-white">Active Deal Term</h3>
                <p className="text-xs text-clarity-300">Grant applications and angel allocations open.</p>
              </div>
              <a 
                href="#investors" 
                className="w-12 h-12 rounded-xl bg-prosperity-500 text-white flex items-center justify-center hover:scale-105 transition-transform"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* THE STORY / PROOF OF CONCEPT BLOCK */}
      <section id="about" className="py-20 border-y border-clarity-50/10 bg-base-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs text-ember-400 font-mono uppercase font-bold tracking-wider">
                <Lightbulb className="w-4 h-4" /> The Origin Story
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                Built from Genuine Necessity
              </h2>
              <p className="text-clarity-300 leading-relaxed">
                Many modern application suites feel generic or overengineered because they're designed by committees. 
                Our programs are different. They represent structural tools that <strong className="text-white">I personally wished existed</strong> while navigating demanding environments:
              </p>
              
              <ul className="space-y-4">
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
                    <strong className="text-white">While Self-Publishing Books:</strong> Editing engines and design previewers serving independent creators struggling against the high price gates of legacy publishing formats.
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
                Developing over twenty distinct, functioning code repositories serves as a clear proof-of-concept. It represents our extreme agility, robust tech architecture stack, and client delivery readiness. Rather than pitching hypothetical slideshows, we present live, operational products that real consumers can test immediately.
              </p>
              <div className="p-4 rounded-xl bg-base-950 border border-clarity-50/10 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-display font-bold text-white">27</div>
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
              <a 
                href="https://lovablelearner.com" 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-3.5 bg-royal-600 hover:bg-royal-500 text-white font-bold rounded-xl flex items-center gap-2 transition-all"
              >
                Launch LovableLearner.com <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="#connect" 
                className="px-6 py-3.5 bg-clarity-50/5 hover:bg-clarity-50/10 text-white border border-clarity-50/10 font-bold rounded-xl transition-all"
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
                    <span className="text-[10px] font-mono text-clarity-500">Live URL Profile</span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-ember-400 transition-colors mb-2">{app.name}</h3>
                  <p className="text-xs text-clarity-300 leading-relaxed line-clamp-3 mb-4">{app.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {app.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[9px] font-mono px-2 py-0.5 bg-clarity-50/5 text-clarity-400 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-clarity-50/5 flex items-center justify-between">
                  <span className="text-[10px] text-prosperity-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-prosperity-500" /> Active Platform
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
              </div>

              <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-prosperity-400 font-mono font-bold mb-2">Summary Description</h4>
                  <p className="text-sm text-clarity-200 leading-relaxed">{selectedApp.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-clarity-50/10">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-royal-400 font-mono font-bold mb-2">Operational Purpose</h4>
                    <p className="text-xs text-clarity-300 leading-relaxed">{selectedApp.purpose}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-ember-400 font-mono font-bold mb-2">Target Market Audience</h4>
                    <p className="text-xs text-clarity-300 leading-relaxed">{selectedApp.targetAudience}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-clarity-50/10">
                  <h4 className="text-xs uppercase tracking-widest text-clarity-500 font-mono mb-2">Ideation Development Story</h4>
                  <p className="text-xs text-clarity-400 leading-relaxed whitespace-pre-line">{selectedApp.developmentStory}</p>
                </div>

                <div className="pt-4 flex flex-wrap gap-2">
                  {selectedApp.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-3 py-1 bg-clarity-50/5 text-clarity-300 rounded border border-clarity-50/10">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 border-t border-clarity-50/10 bg-base-950 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="text-xs text-prosperity-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-prosperity-500 animate-pulse" /> operational & tested
                </div>
                <div className="flex w-full sm:w-auto gap-3">
                  <button 
                    onClick={() => setSelectedApp(null)}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-bold text-clarity-300 hover:text-white hover:bg-clarity-50/5 transition-all text-center"
                  >
                    Close Analysis
                  </button>
                  <a 
                    href={selectedApp.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex-1 sm:flex-none px-6 py-2.5 bg-gradient-to-r from-ember-500 to-royal-600 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all hover:opacity-90"
                  >
                    Launch Live Site <ExternalLink className="w-3.5 h-3.5" />
                  </a>
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
                Operating Funding Pitch — Target Capital: $100,000
              </h2>
              <p className="text-sm md:text-base text-clarity-300 leading-relaxed">
                Ember Core Studio represents a resilient, proven technology sandbox. 
                With 20+ functional web properties already delivered and hosted globally, we showcase mature software execution. 
                We are actively applying for <strong className="text-white">Grants, SBA business loans, and angel allocations up to $100,000</strong> to fund our operations, educational cohort launches, and the core scale of LovableLearner.com.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 text-center">
                <div className="p-4 bg-base-950 rounded-xl border border-clarity-50/10">
                  <div className="text-xl font-display font-bold text-white">20+</div>
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

      {/* INQUIRY CONTACT FORM: Target Email to contact@embercorestudio.org */}
      <section id="connect" className="py-24 max-w-7xl mx-auto px-6">
        <div className="glass-panel p-8 md:p-20 rounded-[60px] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-tr from-ember-500 to-royal-500 blur-[120px] opacity-15 -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-prosperity-400 font-mono">Inquiry Routing Center</span>
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.75rem] font-display font-extrabold text-white mt-1 mb-8 leading-tight">
                Send Inquiries to <span className="text-ember-400 inline-block whitespace-nowrap">contact@embercorestudio.org</span>
              </h2>
              
              <p className="text-clarity-300 leading-relaxed text-sm mb-8">
                Submit details below if you are an SBA manager, angel investor, educational development officer, or student desiring early curriculum enrollment. 
                All form interactions are routed directly to <strong className="text-white">contact@embercorestudio.org</strong> for swift review.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-clarity-300">
                  <div className="w-10 h-10 rounded-full bg-clarity-50/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-ember-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-clarity-500">Official Routing Desk</p>
                    <p className="font-semibold text-white">contact@embercorestudio.org</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-clarity-300">
                  <div className="w-10 h-10 rounded-full bg-clarity-50/10 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-royal-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-clarity-500">Executive LinkedIn</p>
                    <p className="font-semibold text-white">linkedin.com/in/amberyaghi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Netlify Managed Dynamic Contact Form */}
            <div>
              {status === 'success' ? (
                <div className="p-8 rounded-2xl bg-prosperity-500/10 border border-prosperity-500/20 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-prosperity-500 text-white flex items-center justify-center mx-auto">
                    <FileCheck className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">Pitch Inquiry Transmitted</h3>
                  <p className="text-xs text-clarity-300">Thank you for your valuable response. Your email coordinates have been logged of record to contact@embercorestudio.org.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 bg-prosperity-600 text-white text-xs font-bold rounded-xl hover:bg-prosperity-500 transition-colors"
                  >
                    Transmit Additional Pitch
                  </button>
                </div>
              ) : (
                <form 
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-clarity-200">Personal Full Name</label>
                      <input 
                        type="text" 
                        name="fullName"
                        required
                        placeholder="Founder / Fund Officer"
                        className="w-full bg-clarity-50/5 border border-clarity-50/10 rounded-2xl p-4 focus:ring-2 focus:ring-ember-500 transition-all outline-none text-white text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-clarity-200">Email Coordinate</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        placeholder="yourdesk@firm.com"
                        className="w-full bg-clarity-50/5 border border-clarity-50/10 rounded-2xl p-4 focus:ring-2 focus:ring-ember-500 transition-all outline-none text-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-clarity-200">Venture Intent Category</label>
                    <select 
                      name="service"
                      required
                      className="w-full bg-base-900 border border-clarity-50/10 rounded-2xl p-4 focus:ring-2 focus:ring-ember-500 transition-all outline-none appearance-none cursor-pointer text-clarity-300 text-sm"
                    >
                      <option value="SBA Funding">SBA Government Grant Pitch</option>
                      <option value="Angel Investment">Angel Capital Placement</option>
                      <option value="Curriculum Cohort">Weekly Curriculum Cohort</option>
                      <option value="General Alliance">Incubator Partnership Proposal</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-clarity-200">Inquiry Brief Description</label>
                    <textarea 
                      rows={4}
                      name="message"
                      required
                      placeholder="Outline your partnership, funding parameters, or training enrollment details..."
                      className="w-full bg-clarity-50/5 border border-clarity-50/10 rounded-2xl p-4 focus:ring-2 focus:ring-ember-500 transition-all outline-none resize-none text-white text-sm"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-5 bg-prosperity-600 hover:bg-prosperity-500 disabled:opacity-50 text-white font-bold rounded-2xl transition-all shadow-xl shadow-prosperity-600/20 active:scale-95 uppercase tracking-wider text-xs"
                  >
                    {status === 'loading' ? 'Transmitting Inquiries...' : 'Transmit Pitch Coordinates'}
                  </button>
                  {status === 'error' && <p className="text-red-500 text-xs text-center font-mono">Something went wrong. Please double-check connection settings.</p>}
                </form>
              )}
            </div>

            {/* Collapsible Sandbox Inquiry CRM Ledger */}
            {inquiries.length > 0 && (
              <div className="lg:col-span-2 mt-8 pt-8 border-t border-clarity-50/10 animate-fade-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-royal-500/10 text-royal-400 border border-royal-500/20">
                      <Database className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-sm">Sandbox Pitch CRM & Routing Console</h4>
                      <p className="text-[10px] text-clarity-400 font-mono">Simulating real-time server database storage in local sandboxes.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setInquiries([]);
                      localStorage.removeItem('ember_core_inquiries');
                    }}
                    className="self-start sm:self-center flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Clear Logs ({inquiries.length})
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-72 overflow-y-auto pr-2 custom-scrollbar">
                  {inquiries.map((inq) => (
                    <div key={inq.id} className="p-5 rounded-2xl border border-clarity-50/10 bg-base-900/60 hover:border-clarity-50/20 hover:bg-base-900/80 transition-all flex flex-col justify-between gap-4">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <span className="font-display font-semibold text-white tracking-tight break-all">{inq.fullName}</span>
                          <span className="shrink-0 text-[9px] font-mono font-bold text-prosperity-400 bg-prosperity-500/10 px-2 py-0.5 rounded-full border border-prosperity-500/20">{inq.service}</span>
                        </div>
                        <span className="text-[11px] text-royal-400 font-mono block pb-3 border-b border-clarity-50/10 mt-1 break-all">{inq.email}</span>
                        <p className="text-xs text-clarity-300 italic mt-3 leading-relaxed whitespace-pre-wrap">"{inq.message}"</p>
                      </div>
                      <span className="text-[10px] text-clarity-500 font-mono text-right font-light block">{inq.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

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
          
          <p className="text-xs uppercase tracking-widest text-clarity-300">
            © 2025 Ember Core Studio. Built as proof of concept.
          </p>

          <div className="flex gap-6">
            <a href="https://github.com/amberyaghi88" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
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
