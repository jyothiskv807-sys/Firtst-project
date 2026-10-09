import React, { useEffect, useState } from 'react';
import { 
  Sparkles, 
  Microscope, 
  Zap, 
  Feather, 
  Award, 
  Shield, 
  ShieldCheck, 
  CheckCircle2, 
  Check, 
  Star, 
  ArrowRight, 
  ArrowDown, 
  ChevronDown, 
  PhoneCall, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  MessageSquare, 
  Send, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Menu, 
  X 
} from 'lucide-react';

export default function LuminaAesthetics() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Intersection Observer for silky smooth scroll reveals
    const elements = document.querySelectorAll('.reveal-init');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#F8F6F2] font-sans text-[#121417] antialiased selection:bg-[#C5A880] selection:text-[#121417] min-h-screen overflow-x-hidden">
      
      {/* Top Announcement Bar */}
      <aside aria-label="Announcement" className="bg-[#121417] text-[#F8F6F2] border-b border-[#2A2E37] text-xs tracking-wider uppercase py-2.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-[11px] font-medium gap-2">
          <div className="flex items-center space-x-3 text-[#C5A880]">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#C5A880] animate-pulse"></span>
            <span className="text-[#F8F6F2]/90 font-medium">Bespoke Medical Dermatology &bull; Mayfair, London &amp; DIFC, Dubai</span>
          </div>
          <div className="flex items-center space-x-4 text-[#7A7D84]">
            <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
            <span className="text-[#C5A880]/40">|</span>
            <a href="tel:+442079460192" className="hover:text-[#C5A880] transition-colors text-[#F8F6F2]/90 font-semibold flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#C5A880]" />
              <span>+44 20 7946 0192</span>
            </a>
          </div>
        </div>
      </aside>

      {/* 1. Header (Sticky Navigation) */}
      <header className="sticky top-0 z-40 w-full transition-all duration-300 bg-[#F8F6F2]/90 backdrop-blur-md border-b border-[#C5A880]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-9 h-9 rounded-lg bg-[#121417] flex items-center justify-center text-[#C5A880] shadow-sm group-hover:bg-[#C5A880] group-hover:text-[#121417] transition-all duration-300">
                <svg className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2L2 12l10 10 10-12L12 2z"/>
                  <path d="M12 6l-6 6 6 6 6-6-6-6z" strokeWidth="1.2" opacity="0.8"/>
                  <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#121417] leading-none">
                  LUMINA
                </span>
                <span className="text-[9px] tracking-[0.3em] font-semibold text-[#7A7D84] uppercase mt-0.5">
                  Aesthetics Clinic
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <a href="#services" className="text-[#121417] hover:text-[#C5A880] transition-colors duration-200 py-1">Treatments</a>
              <a href="#about" className="text-[#121417] hover:text-[#C5A880] transition-colors duration-200 py-1">The Clinic</a>
              <a href="#doctor" className="text-[#121417] hover:text-[#C5A880] transition-colors duration-200 py-1">Medical Director</a>
              <a href="#experience" className="text-[#121417] hover:text-[#C5A880] transition-colors duration-200 py-1">Experience</a>
              <a href="#reviews" className="text-[#121417] hover:text-[#C5A880] transition-colors duration-200 py-1">Reviews</a>
              <a href="#contact" className="text-[#121417] hover:text-[#C5A880] transition-colors duration-200 py-1">Contact</a>
            </nav>

            {/* Header CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#contact" className="px-6 py-2.5 rounded-full bg-[#121417] text-[#F8F6F2] text-sm font-semibold tracking-wide hover:bg-[#C5A880] hover:text-[#121417] transition-all duration-300 shadow-md hover:-translate-y-0.5 flex items-center gap-2">
                <span>Contact Concierge</span>
                <ArrowDown className="w-4 h-4 text-[#C5A880]" />
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <a href="#contact" className="px-3.5 py-1.5 rounded-full bg-[#C5A880] text-[#121417] text-xs font-bold uppercase tracking-wider shadow-sm">
                Contact
              </a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-lg text-[#121417] hover:text-[#C5A880] focus:outline-none" aria-label="Toggle Navigation Menu">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F8F6F2] border-b border-[#C5A880]/20 px-6 pt-3 pb-6 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-3 text-base font-medium">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-[#121417] hover:text-[#C5A880] py-2 border-b border-gray-100">Treatments</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-[#121417] hover:text-[#C5A880] py-2 border-b border-gray-100">The Clinic</a>
              <a href="#doctor" onClick={() => setMobileMenuOpen(false)} className="text-[#121417] hover:text-[#C5A880] py-2 border-b border-gray-100">Medical Director</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-[#121417] hover:text-[#C5A880] py-2 border-b border-gray-100">Experience</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-[#121417] hover:text-[#C5A880] py-2 border-b border-gray-100">Reviews</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-[#8C6F45] font-bold py-2 flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                <span>Direct Contact &amp; Concierge</span>
              </a>
            </nav>
            <div className="pt-2">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block w-full py-3 rounded-full bg-[#121417] text-[#F8F6F2] font-semibold text-center text-sm tracking-wide hover:bg-[#C5A880] hover:text-[#121417] transition-colors shadow-md">
                View Clinic Contact Details
              </a>
            </div>
          </div>
        )}
      </header>


      {/* 2. Hero Section */}
      <section className="relative bg-[#F8F6F2] overflow-hidden pt-10 pb-16 lg:pt-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 text-[#121417] text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-[#8C6F45]" />
                <span>Bespoke Clinical Skincare</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#121417] leading-[1.12] tracking-tight font-medium">
                Advanced Dermatology &amp; <span className="italic font-normal">Aesthetic Precision</span>
              </h1>

              <p className="font-sans text-[#7A7D84] text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
                Experience tailored clinical skincare, laser rejuvenation, and bespoke aesthetic treatments curated by board-certified dermatologists.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a href="#contact" className="px-8 py-4 rounded-full bg-[#C5A880] text-[#121417] font-semibold text-sm tracking-wider uppercase hover:bg-[#D0B78B] transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-md">
                  <span>Contact Clinic</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <a href="#services" className="px-8 py-4 rounded-full border border-[#121417] text-[#121417] font-semibold text-sm tracking-wider uppercase hover:bg-[#121417] hover:text-[#F8F6F2] transition-all duration-300 text-center flex items-center justify-center gap-2">
                  <span>Explore Treatments</span>
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-6 border-t border-[#C5A880]/20 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1 text-[#8C6F45]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
                  ))}
                  <span className="font-bold text-[#121417] text-sm ml-1.5">★ 4.9/5 Rating</span>
                </div>
                <p className="text-xs text-[#7A7D84] font-medium">Over 1,200+ private consultations across London &amp; Dubai</p>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#121417] aspect-[4/5] group">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85" 
                    alt="Lumina Aesthetics Clinic Interior" 
                    className="w-full h-full object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121417]/75 via-transparent to-black/10"></div>

                  <div className="absolute top-5 right-5 bg-white/85 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-3 border border-white/60">
                    <div className="p-2 rounded-lg bg-[#C5A880] text-[#121417]">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#7A7D84] font-semibold">Accreditation</p>
                      <p className="text-xs font-bold text-[#121417]">Board Certified Clinic</p>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 bg-white/85 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/60">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-serif font-bold text-[#121417]">Private Medical Suites</p>
                        <p className="text-[11px] text-[#7A7D84]">Confidential Care in Mayfair &amp; DIFC</p>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#C5A880]/30 text-[#121417]">
                        London &bull; Dubai
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. Treatments */}
      <section id="services" className="bg-[#121417] text-[#F8F6F2] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-[#C5A880] text-xs font-semibold tracking-[0.25em] uppercase inline-block">
              Signature Medical Offerings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F8F6F2] font-medium tracking-tight">
              Precision-Led Treatment Categories
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-2"></div>
            <p className="text-[#7A7D84] text-base sm:text-lg font-normal leading-relaxed">
              Every protocol begins with microscopic skin analysis and is customized to your unique dermal biology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-[#16191E] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between border border-[#C5A880]/20 hover:border-[#C5A880] group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-xl bg-[#1A1D22] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#121417] transition-all duration-300 shadow-md">
                    <Microscope className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-[#C5A880]/80 font-semibold px-2.5 py-1 rounded bg-[#C5A880]/10">Medical Grade</span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl text-[#F8F6F2] font-medium group-hover:text-[#C5A880] transition-colors">
                    Clinical Dermatology
                  </h3>
                  <p className="text-[#7A7D84] text-sm leading-relaxed">
                    Targeted acne, pigmentation, and barrier-repair treatments with medical-grade precision.
                  </p>
                </div>
                <ul className="space-y-2.5 text-xs text-[#F8F6F2]/80 pt-2 border-t border-[#2A2E37]">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C5A880]" /><span>Medical-grade chemical peels</span></li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C5A880]" /><span>Melasma &amp; hyperpigmentation cures</span></li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C5A880]" /><span>Cellular barrier restoration</span></li>
                </ul>
              </div>
              <div className="pt-8">
                <a href="#contact" className="w-full py-3 rounded-lg border border-[#C5A880]/40 text-[#C5A880] text-xs font-semibold uppercase tracking-wider hover:bg-[#C5A880] hover:text-[#121417] transition-all duration-200 flex items-center justify-center gap-2">
                  <span>Inquire on Protocol</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#16191E] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between border border-[#C5A880]/20 hover:border-[#C5A880] group relative">
              <div className="absolute -top-3 right-6 bg-[#C5A880] text-[#121417] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                Most Requested
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-xl bg-[#1A1D22] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#121417] transition-all duration-300 shadow-md">
                    <Zap className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-[#C5A880]/80 font-semibold px-2.5 py-1 rounded bg-[#C5A880]/10">FDA-Cleared</span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl text-[#F8F6F2] font-medium group-hover:text-[#C5A880] transition-colors">
                    Laser &amp; Rejuvenation
                  </h3>
                  <p className="text-[#7A7D84] text-sm leading-relaxed">
                    Non-invasive skin resurfacing, collagen boosting, and tone correction using FDA-cleared tech.
                  </p>
                </div>
                <ul className="space-y-2.5 text-xs text-[#F8F6F2]/80 pt-2 border-t border-[#2A2E37]">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C5A880]" /><span>Fractional picosecond laser</span></li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C5A880]" /><span>Morpheus8 RF collagen remodelling</span></li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C5A880]" /><span>Zero downtime photo-rejuvenation</span></li>
                </ul>
              </div>
              <div className="pt-8">
                <a href="#contact" className="w-full py-3 rounded-lg bg-[#C5A880] text-[#121417] text-xs font-semibold uppercase tracking-wider hover:bg-[#D0B78B] transition-all duration-200 flex items-center justify-center gap-2 shadow-md">
                  <span>Inquire on Protocol</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#16191E] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between border border-[#C5A880]/20 hover:border-[#C5A880] group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-xl bg-[#1A1D22] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#121417] transition-all duration-300 shadow-md">
                    <Feather className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-[#C5A880]/80 font-semibold px-2.5 py-1 rounded bg-[#C5A880]/10">Natural Artistry</span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl text-[#F8F6F2] font-medium group-hover:text-[#C5A880] transition-colors">
                    Injectables &amp; Sculpting
                  </h3>
                  <p className="text-[#7A7D84] text-sm leading-relaxed">
                    Natural anti-wrinkle micro-treatments and subtle contouring tailored to your facial anatomy.
                  </p>
                </div>
                <ul className="space-y-2.5 text-xs text-[#F8F6F2]/80 pt-2 border-t border-[#2A2E37]">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C5A880]" /><span>Baby-dose micro neuromodulators</span></li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C5A880]" /><span>Anatomical hyaluronic sculpting</span></li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C5A880]" /><span>Jawline &amp; mid-face harmonisation</span></li>
                </ul>
              </div>
              <div className="pt-8">
                <a href="#contact" className="w-full py-3 rounded-lg border border-[#C5A880]/40 text-[#C5A880] text-xs font-semibold uppercase tracking-wider hover:bg-[#C5A880] hover:text-[#121417] transition-all duration-200 flex items-center justify-center gap-2">
                  <span>Inquire on Protocol</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 4. Doctor Spotlight */}
      <section id="doctor" className="bg-[#F8F6F2] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#121417] aspect-[3/4]">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=85" 
                  alt="Dr. Elena Vance, MD" 
                  className="w-full h-full object-cover object-top filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121417]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/85 backdrop-blur-md p-4 rounded-xl border border-white/60">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8C6F45]">Clinical Leadership</span>
                  <h4 className="font-serif text-base font-bold text-[#121417]">Dr. Elena Vance, MD</h4>
                  <p className="text-[10px] text-[#7A7D84]">Chief Aesthetic Dermatologist &bull; 14+ Years in London &amp; Dubai</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6" id="about">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 text-[#121417] text-xs font-semibold uppercase tracking-widest">
                <Shield className="w-3.5 h-3.5 text-[#8C6F45]" />
                <span>Clinical Leadership &amp; Philosophy</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#121417] font-medium leading-tight">
                World-Class Expertise in Every Treatment
              </h2>

              <p className="font-sans text-[#7A7D84] text-base sm:text-lg leading-relaxed">
                With over 14 years of clinical experience across London and Dubai, Dr. Vance combines anatomical science with delicate aesthetic artistry.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#C5A880]/20">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#C5A880]/20 text-[#121417] shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#121417]">Fellow, Royal College of Physicians</h5>
                    <p className="text-[11px] text-[#7A7D84]">Advanced Clinical Dermatology</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#C5A880]/20 text-[#121417] shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#121417]">Harvard Medical Aesthetics</h5>
                    <p className="text-[11px] text-[#7A7D84]">Postgraduate Laser Therapeutics</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a href="#contact" className="px-6 py-3 rounded-full bg-[#121417] text-[#F8F6F2] font-semibold text-xs uppercase tracking-widest hover:bg-[#C5A880] hover:text-[#121417] transition-all duration-300 shadow-md flex items-center gap-2">
                  <span>Contact Doctor's Office</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 5. Testimonials */}
      <section id="reviews" className="bg-[#C5A880] text-[#121417] py-16 lg:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug italic">
            “The consultation was thorough and personalized. My skin texture transformed in just 3 sessions without downtime.”
          </blockquote>
          <div>
            <p className="font-sans text-base sm:text-lg font-bold tracking-wide">— Sarah K.</p>
            <p className="text-xs uppercase tracking-widest text-[#121417]/75 font-semibold">Verified Patient &bull; Laser Skin Resurfacing</p>
          </div>
        </div>
      </section>


      {/* 6. Experience & Metrics */}
      <section id="experience" className="bg-[#EFECE6]/40 py-16 border-t border-b border-[#C5A880]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-[#121417]">1,200+</p>
              <p className="text-xs uppercase tracking-wider text-[#7A7D84] font-medium">Bespoke Treatments</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-[#121417]">14+</p>
              <p className="text-xs uppercase tracking-wider text-[#7A7D84] font-medium">Years Experience</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-[#121417]">100%</p>
              <p className="text-xs uppercase tracking-wider text-[#7A7D84] font-medium">FDA-Cleared Tech</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-[#121417]">4.9 / 5</p>
              <p className="text-xs uppercase tracking-wider text-[#7A7D84] font-medium">Patient Satisfaction</p>
            </div>
          </div>
        </div>
      </section>


      {/* 7. Direct Contact & Concierge Information */}
      <section id="contact" className="bg-[#121417] text-[#F8F6F2] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[#C5A880] text-xs font-semibold tracking-[0.25em] uppercase inline-block">
              Direct Inquiries &amp; Consultations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F8F6F2] font-medium tracking-tight">
              Connect With Our Medical Concierge
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-2"></div>
            <p className="text-[#7A7D84] text-base sm:text-lg font-normal leading-relaxed">
              Reach our clinical coordination desk directly via phone, WhatsApp VIP concierge, or private medical email.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Direct Lines */}
            <div className="bg-[#16191E] rounded-2xl p-7 space-y-5 border border-[#C5A880]/20 hover:border-[#C5A880] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#1A1D22] border border-[#C5A880]/40 text-[#C5A880] flex items-center justify-center shadow-md">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A880]">Direct Lines</span>
                <h3 className="font-serif text-xl text-[#F8F6F2] font-medium mt-1">Telephone Inquiries</h3>
              </div>
              <div className="space-y-3 text-xs pt-2 border-t border-[#2A2E37]">
                <div>
                  <span className="text-[#7A7D84] block text-[10px] uppercase font-bold tracking-wider">London Mayfair Suite</span>
                  <a href="tel:+442079460192" className="text-[#F8F6F2] hover:text-[#C5A880] font-mono font-bold text-sm">+44 20 7946 0192</a>
                </div>
                <div>
                  <span className="text-[#7A7D84] block text-[10px] uppercase font-bold tracking-wider">Dubai DIFC Clinic</span>
                  <a href="tel:+97143128890" className="text-[#F8F6F2] hover:text-[#C5A880] font-mono font-bold text-sm">+971 4 312 8890</a>
                </div>
                <div>
                  <span className="text-[#7A7D84] block text-[10px] uppercase font-bold tracking-wider">US Toll-Free</span>
                  <a href="tel:+18005550199" className="text-[#F8F6F2] hover:text-[#C5A880] font-mono font-bold text-sm">+1 (800) 555-0199</a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-[#16191E] rounded-2xl p-7 space-y-5 border border-[#C5A880]/30 hover:border-[#C5A880] transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-md">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">Instant Messaging</span>
                <h3 className="font-serif text-xl text-[#F8F6F2] font-medium mt-1">WhatsApp VIP Concierge</h3>
              </div>
              <div className="space-y-3 pt-2 border-t border-[#2A2E37] text-xs">
                <p className="text-[#F8F6F2]/80 leading-relaxed">
                  Fast confidential inquiries, treatment questions, and consultation availability.
                </p>
                <a 
                  href="https://wa.me/442079460192?text=Hello%20Lumina%20Aesthetics%2C%20I%20would%20like%20to%20inquire%20about%20a%20private%20consultation%20with%20Dr.%20Elena%20Vance." 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#121417] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Written Inquiries */}
            <div className="bg-[#16191E] rounded-2xl p-7 space-y-5 border border-[#C5A880]/20 hover:border-[#C5A880] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#1A1D22] border border-[#C5A880]/40 text-[#C5A880] flex items-center justify-center shadow-md">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A880]">Written Inquiries</span>
                <h3 className="font-serif text-xl text-[#F8F6F2] font-medium mt-1">Email &amp; Location</h3>
              </div>
              <div className="space-y-3 text-xs pt-2 border-t border-[#2A2E37]">
                <div>
                  <span className="text-[#7A7D84] block text-[10px] uppercase font-bold tracking-wider">Patient Concierge Email</span>
                  <a href="mailto:concierge@luminaclinic.com" className="text-[#F8F6F2] hover:text-[#C5A880] font-medium text-xs break-all">concierge@luminaclinic.com</a>
                </div>
                <div>
                  <span className="text-[#7A7D84] block text-[10px] uppercase font-bold tracking-wider">London Mayfair Address</span>
                  <p className="text-[#F8F6F2]/90 text-xs">404 Royal Oak Blvd, Suite 200, Mayfair, London</p>
                </div>
                <div>
                  <span className="text-[#7A7D84] block text-[10px] uppercase font-bold tracking-wider">Dubai DIFC Address</span>
                  <p className="text-[#F8F6F2]/90 text-xs">Gate Precinct Building 4, Level 5, DIFC, Dubai</p>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-[#1A1D22] border border-[#C5A880]/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A880]">Consultation Hours</span>
              <h4 className="font-serif text-xl text-[#F8F6F2]">Appointments &amp; VIP Concierge Hours</h4>
              <p className="text-xs text-[#7A7D84]">Monday through Saturday: 9:00 AM – 7:00 PM (GMT &amp; GST). Sundays reserved for private treatments.</p>
            </div>
            <a href="mailto:concierge@luminaclinic.com" className="px-6 py-3 rounded-xl bg-[#C5A880] text-[#121417] font-bold text-xs uppercase tracking-widest hover:bg-[#D0B78B] transition-all shadow-md flex items-center gap-2">
              <Send className="w-4 h-4" />
              <span>Email Concierge</span>
            </a>
          </div>

        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-[#121417] text-[#7A7D84] pt-16 pb-12 border-t border-[#2A2E37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#2A2E37]">
            <div className="lg:col-span-5 space-y-5">
              <span className="font-serif text-xl font-bold tracking-[0.2em] text-[#F8F6F2]">LUMINA</span>
              <p className="text-sm text-[#7A7D84] max-w-sm">High-end dermatology and aesthetic clinic dedicated to medical precision, understated luxury, and natural transformation.</p>
            </div>
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-[#F8F6F2] font-serif text-base font-semibold">Treatments</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-[#C5A880]">Visia 3D Skin Complexion</a></li>
                <li><a href="#services" className="hover:text-[#C5A880]">Fractional Laser Resurfacing</a></li>
                <li><a href="#services" className="hover:text-[#C5A880]">Morpheus8 RF Remodelling</a></li>
                <li><a href="#services" className="hover:text-[#C5A880]">Micro-Neuromodulator Dosing</a></li>
              </ul>
            </div>
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-[#F8F6F2] font-serif text-base font-semibold">Clinic Contact</h4>
              <p className="text-xs">404 Royal Oak Blvd, Mayfair, London</p>
              <p className="text-xs font-mono text-[#F8F6F2]">+44 20 7946 0192</p>
              <p className="text-xs">concierge@luminaclinic.com</p>
            </div>
          {/* Clinic Member & Staff Access VIP Card */}
          <div className="my-8 bg-[#1A1D22]/60 border border-[#C5A880]/25 hover:border-[#C5A880]/50 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-5 backdrop-blur-sm">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-[#C5A880]/15 border border-[#C5A880]/40 text-[#C5A880] flex items-center justify-center shrink-0 shadow-lg shadow-[#C5A880]/10">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h5 className="text-sm font-bold text-[#F8F6F2] tracking-wider uppercase font-serif">Clinic Member &amp; Staff Portal</h5>
                  <span className="px-2 py-0.5 text-[9px] font-mono font-bold rounded bg-[#C5A880]/20 text-[#C5A880] border border-[#C5A880]/30">Staff Only</span>
                </div>
                <p className="text-xs text-[#7A7D84] mt-1">Authorized medical staff access to patient bookings, clinical triage, consultation schedules, and SMS dispatcher.</p>
              </div>
            </div>
            <a href="portal.html" className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#C5A880] text-[#121417] font-bold text-xs uppercase tracking-widest hover:bg-[#D0B78B] transition-all duration-200 shadow-lg shadow-[#C5A880]/20 shrink-0 group">
              <Shield className="w-4 h-4" />
              <span>Enter Clinic Portal</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs border-t border-[#2A2E37]/50">
            <p className="text-[#7A7D84]">&copy; 2026 Lumina Aesthetics. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-[#7A7D84]">
              <a href="#" className="hover:text-[#C5A880] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#C5A880] transition-colors">Terms of Treatment</a>
              <a href="portal.html" className="inline-flex items-center gap-1.5 text-[#C5A880] hover:text-[#D0B78B] font-semibold transition-colors">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Staff Portal Access</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
