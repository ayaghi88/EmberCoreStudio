/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  Mic2, 
  Laptop, 
  ChevronRight, 
  Star, 
  Menu, 
  X, 
  Ghost, 
  Shirt, 
  Lamp, 
  MonitorPlay,
  ArrowUpRight,
  Instagram,
  Clapperboard,
  Mail,
  Phone,
  GlassWater,
  Palette
} from 'lucide-react';

// --- Constants & Types ---

const NAVIGATION = [
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Book Now', href: '#contact' },
];

const SERVICES = [
  {
    id: 'equipment',
    title: 'Media Rentals',
    icon: <Camera className="w-6 h-6" />,
    description: 'Professional grade filming equipment. The industry standard at your fingertips.',
    details: ['Lighting Kits', 'Microphones', 'Camera Support', 'Grip & Stands'],
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'props',
    title: 'Props & Wardrobe',
    icon: <Shirt className="w-6 h-6" />,
    description: 'Unique props and clothing rentals for filming and photography shoots.',
    details: ['Period Wardrobe', 'Unique Props', 'Styling Consultation', 'Photography Assets'],
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'bar',
    title: 'Portable Bar & Service',
    icon: <GlassWater className="w-6 h-6" />,
    description: 'Mobile bar setups and beverage equipment for movie sets and events.',
    details: ['Portable Bars', 'Glassware Rentals', 'Bar Back Equipment', 'Stylized Drink Props'],
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'lifestyle',
    title: 'On-Set Glam & Lifestyle',
    icon: <Palette className="w-6 h-6" />,
    description: 'Professional makeup tool sets, industrial hair styling tools, and on-set lifestyle essentials.',
    details: ['Makeup Set Kits', 'Hair Styling Tools', 'Director Chairs', 'On-Set Vanity Lights'],
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
  },
];

const GALLERY_ITEMS = [
  { id: 1, type: 'Filming', title: 'Midnight Echo Music Video', image: 'https://images.unsplash.com/photo-1512733596533-7b00ccf8ebaf?auto=format&fit=crop&q=80&w=600' },
  { id: 2, type: 'Prop Rental', title: 'Vintage Noir Shoot', image: 'https://images.unsplash.com/photo-1514860010041-3b85350711cc?auto=format&fit=crop&q=80&w=600' },
  { id: 3, type: 'Mobile Bar', title: 'Sunset Wrap Party', image: 'https://images.unsplash.com/photo-1536935338213-d2c2536b8a63?auto=format&fit=crop&q=80&w=600' },
  { id: 4, type: 'Equipment', title: 'Indie Feature: Drifted', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=600' },
];

const TESTIMONIALS = [
  {
    author: 'Sarah Jenkins',
    role: 'Music Producer',
    content: 'Ember Core is a lifesaver. Their mics and lighting kits took our last shoot from amateur to professional instantly.',
    stars: 5,
  },
  {
    author: 'David Rivera',
    role: 'Event Director',
    content: 'The portable bar setup was the highlight of our wrap party. Professional, stylish, and exactly what we needed.',
    stars: 5,
  },
];

// --- Components ---

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-base-950/80 backdrop-blur-md border-b border-clarity-50/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-ember-600 flex items-center justify-center">
            <Ghost className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl uppercase tracking-tighter text-clarity-50">
            Ember <span className="text-ember-500">Core</span> <span className="text-prosperity-500">Studio</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium hover:text-ember-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass-panel absolute top-20 left-0 w-full p-6 flex flex-col gap-4"
          >
            {NAVIGATION.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1920"
          className="w-full h-full object-cover opacity-30 grayscale"
          alt="Studio Background"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base-950 via-base-950/40 to-base-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ember-gradient blur-[120px] opacity-20 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ember-500/30 bg-ember-500/10 text-ember-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Clapperboard className="w-3 h-3" /> One Stop Rental Shop
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-none mb-8">
            Fuel Your <br />
            <span className="text-gradient">Creative Fire</span>
          </h1>
          <p className="max-w-2xl mx-auto text-clarity-300 text-lg md:text-xl mb-10 font-light">
            Ember Core Studio provides industry-standard film gear, clothing rentals, and portable bar setups to help you fuel your production.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#services"
              className="px-8 py-4 bg-ember-600 hover:bg-ember-500 text-white font-bold rounded-full transition-all flex items-center gap-2 group shadow-lg shadow-ember-600/30"
            >
              Explore Services <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 bg-royal-600 hover:bg-royal-500 text-white font-bold rounded-full transition-all shadow-lg shadow-royal-600/30"
            >
              Book a Consultation
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-ember-600 to-transparent" />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-sm font-bold uppercase tracking-widest text-prosperity-500 mb-4 tracking-tighter">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-clarity-50">Solutions for high-performance creatives.</h3>
        </div>
        <p className="text-clarity-300 max-w-sm">From the first chapter to the final frame, we provide the tools and guidance you need.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-clarity-100">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative h-[500px] rounded-3xl overflow-hidden border border-clarity-50/10 hover:border-royal-500/50 transition-colors"
          >
            <div className="absolute inset-0">
              <img 
                src={service.image}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                alt={service.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-950 via-base-950/40 to-transparent" />
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="w-12 h-12 rounded-xl bg-royal-600/20 backdrop-blur-md border border-royal-500/30 flex items-center justify-center mb-6 text-royal-400">
                {service.icon}
              </div>
              <h4 className="text-2xl font-display font-bold mb-3 text-white">{service.title}</h4>
              <p className="text-clarity-200 text-sm mb-6 line-clamp-2">{service.description}</p>
              
              <ul className="space-y-2 mb-8 invisible group-hover:visible translate-y-4 group-hover:translate-y-0 transition-all opacity-0 group-hover:opacity-100">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2 text-xs text-clarity-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-prosperity-500" />
                    {detail}
                  </li>
                ))}
              </ul>

              <button className="flex items-center gap-2 text-prosperity-400 font-bold text-sm uppercase tracking-widest group/btn">
                Inquire Now <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-base-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-royal-500 mb-12 text-center">Past Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="relative group aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer">
              <img 
                src={item.image} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt={item.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-base-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-royal-600 text-white px-2 py-0.5 rounded-sm w-fit mb-2">
                  {item.type}
                </span>
                <h5 className="font-display font-medium text-white">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-sm font-bold uppercase tracking-widest text-prosperity-500 mb-16">Client Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {TESTIMONIALS.map((t, idx) => (
          <div key={idx} className="relative p-12 glass-panel rounded-[40px] text-left">
            <div className="flex gap-1 mb-6 text-prosperity-500">
              {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-xl md:text-2xl font-display leading-relaxed italic text-clarity-50 mb-8">
              "{t.content}"
            </p>
            <div>
              <p className="font-bold text-white uppercase tracking-tighter">{t.author}</p>
              <p className="text-clarity-300 text-sm uppercase tracking-widest">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
      <div className="glass-panel p-8 md:p-20 rounded-[60px] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 ember-gradient blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-royal-500 mb-6 text-white text-clarity-200">Ready to start?</h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white">Let's build your legacy together.</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-clarity-300">
                <div className="w-10 h-10 rounded-full bg-clarity-50/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-ember-500" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-50">Email Us</p>
                  <p className="font-medium text-white">hello@embercorestudio.org</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-clarity-300">
                <div className="w-10 h-10 rounded-full bg-clarity-50/10 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-prosperity-500" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-50">Follow Us</p>
                  <p className="font-medium text-white">@embercorestudio</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50 text-clarity-200">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Wick"
                  className="w-full bg-clarity-50/5 border border-clarity-50/10 rounded-2xl p-4 focus:ring-2 focus:ring-ember-500 transition-all outline-none text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50 text-clarity-200">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@studio.com"
                  className="w-full bg-clarity-50/5 border border-clarity-50/10 rounded-2xl p-4 focus:ring-2 focus:ring-ember-500 transition-all outline-none text-white"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest opacity-50 text-clarity-200">Service Interest</label>
              <select className="w-full bg-clarity-50/5 border border-clarity-50/10 rounded-2xl p-4 focus:ring-2 focus:ring-ember-500 transition-all outline-none appearance-none cursor-pointer text-clarity-100">
                <option>Equipment Rental</option>
                <option>Portable Bar Setup</option>
                <option>Prop & Wardrobe</option>
                <option>On-Set Glam & Lifestyle</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest opacity-50 text-clarity-200">Message</label>
              <textarea 
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full bg-clarity-50/5 border border-clarity-50/10 rounded-2xl p-4 focus:ring-2 focus:ring-ember-500 transition-all outline-none resize-none text-white"
              />
            </div>

            <button className="w-full py-5 bg-prosperity-600 hover:bg-prosperity-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-prosperity-600/20 active:scale-95">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-clarity-50/10 text-clarity-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-ember-600 flex items-center justify-center">
            <Ghost className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl uppercase tracking-tighter text-clarity-50">
            Ember <span className="text-ember-500">Core</span> <span className="text-prosperity-500">Studio</span>
          </span>
        </div>
        
        <p className="text-xs uppercase tracking-widest text-clarity-300">
          © 2025 Ember Core Studio. built for the industry.
        </p>

        <div className="flex gap-6">
          <Instagram className="w-5 h-5 hover:text-ember-500 cursor-pointer transition-colors" />
          <Phone className="w-5 h-5 hover:text-prosperity-500 cursor-pointer transition-colors" />
          <Mail className="w-5 h-5 hover:text-royal-500 cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="selection:bg-ember-500 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
