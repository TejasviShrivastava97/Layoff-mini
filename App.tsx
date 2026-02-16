import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import OpeningSection from './components/OpeningSection';
import WhatYouGet from './components/WhatYouGet';
import AudienceSection from './components/AudienceSection';
import FAQ from './components/FAQ';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

// CENTRALIZED LINK
export const CHECKOUT_URL = "https://buy.stripe.com/28E8wO7lfezR8Pl9eBdAk01";

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-red-100 selection:text-red-900">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-40">
           <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-red-50 rounded-full blur-[120px]" />
           <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-slate-100 rounded-full blur-[100px]" />
        </div>
      </div>

      <Navigation scrolled={scrolled} />
      
      <main className="relative z-10">
        <Hero />
        
        <div id="about">
          <OpeningSection />
        </div>
        
        <div className="py-20 md:py-32">
          <PricingSection id="checkout-main" />
        </div>

        <WhatYouGet />
        
        <AudienceSection />
        
        <div id="faq">
          <FAQ />
        </div>
        
        {/* Urgent Final CTA */}
        <section className="py-24 md:py-40 bg-[#0a0a0a] relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          
          <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
            <span className="inline-block px-4 py-1.5 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-8">
              Limited Time Price: $7
            </span>
            <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8 text-white leading-[1.1]">
              The best time to assess your value was <span className="italic text-red-500 underline decoration-red-900/50 underline-offset-8">yesterday.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Don't wait for the calendar invite. Join 1,200+ professionals who have already secured their copy of the diagnostic framework.
            </p>
            <a 
              href={CHECKOUT_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold text-xl rounded-full transition-all hover:scale-105 active:scale-95 group shadow-2xl shadow-white/10"
            >
              Get Full Access Now
              <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 opacity-50">
              <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest">
                <span className="text-red-500">✦</span> SECURE CHECKOUT
              </div>
              <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest">
                <span className="text-red-500">✦</span> INSTANT PDF DELIVERY
              </div>
              <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest">
                <span className="text-red-500">✦</span> LIFETIME UPDATES
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;