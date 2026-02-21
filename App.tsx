import React, { useState, useEffect, useCallback } from 'react';
import Hero from './components/Hero';
import OpeningSection from './components/OpeningSection';
import WhatYouGet from './components/WhatYouGet';
import AudienceSection from './components/AudienceSection';
import FAQ from './components/FAQ';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import CustomerSupport from './components/CustomerSupport';
import SuccessPage from './components/SuccessPage';

// CENTRALIZED STRIPE CHECKOUT LINK
export const CHECKOUT_URL = "https://buy.stripe.com/28E4gyaxr2R92qX1M9dAk02";

export type ViewState = 'home' | 'terms' | 'privacy' | 'support' | 'success';

// Simple mapping of paths to views
const PATH_MAP: Record<string, ViewState> = {
  '/': 'home',
  '/success': 'success',
  '/terms': 'terms',
  '/privacy': 'privacy',
  '/support': 'support'
};

const ScoreInterpretation: React.FC = () => {
  const ranges = [
    { range: "24-30", title: "Structurally Embedded", color: "bg-emerald-600", desc: "Your role is integrated into operations in a way that requires deliberate planning to alter. You hold meaningful institutional dependency." },
    { range: "17-23", title: "Moderately Anchored", color: "bg-blue-600", desc: "Your role provides clear value, but certain elements may be transferable without major disruption. Specific areas worth strengthening." },
    { range: "10-16", title: "Functionally Replaceable", color: "bg-orange-500", desc: "Your responsibilities may be important, yet structurally easy to redistribute. This is the most common range, and where improvement is possible." },
    { range: "Below 10", title: "Highly Transferable", color: "bg-red-600", desc: "Your role may currently be defined more by tasks than by organizational dependency. This is a signal to reposition intentionally." }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-red-500 font-black text-[10px] uppercase tracking-[0.3em]">The Outcome</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mt-4 leading-tight">Interpreting Your Score</h2>
            <p className="text-slate-400 mt-6 text-lg">
              This scorecard doesn't measure performance, it measures <strong>positioning</strong>. 
              Clarity on where you stand is the first step toward intentional change.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ranges.map((r, i) => (
            <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
              <div className="flex items-center gap-6 mb-6">
                <div className={`px-4 py-2 ${r.color} text-white font-black text-sm rounded-xl`}>{r.range}</div>
                <h3 className="text-xl font-serif font-bold">{r.title}</h3>
              </div>
              <p className="text-slate-400 font-medium leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<ViewState>('home');

  // Sync state with URL path
  const syncViewWithLocation = useCallback(() => {
    const path = window.location.pathname;
    const matchedView = PATH_MAP[path] || 'home';
    setView(matchedView);

  }, []);

  useEffect(() => {
    // Initial sync
    syncViewWithLocation();

    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handlePopState = () => syncViewWithLocation();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [syncViewWithLocation]);

  const navigateTo = (newView: ViewState) => {
    const path = Object.keys(PATH_MAP).find(key => PATH_MAP[key] === newView) || '/';
    window.history.pushState({}, '', path);
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    
    
  };

  return (
    <div className="relative min-h-screen selection:bg-red-100 selection:text-red-900 bg-[#fdfcfb]">
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-40">
           <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-red-50 rounded-full blur-[120px]" />
           <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-slate-100 rounded-full blur-[100px]" />
        </div>
      </div>

      <Navigation scrolled={scrolled} setView={navigateTo} />
      
      <main className="relative z-10">
        {view === 'home' && (
          <>
            <Hero />
            <div id="about">
              <OpeningSection />
            </div>
            <ScoreInterpretation />
            <div className="py-20 md:py-32" id="pricing">
              <PricingSection />
            </div>
            <div id="contents">
              <WhatYouGet />
            </div>
            <AudienceSection />
            <div id="faq">
              <FAQ />
            </div>
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
                  Don't wait for the calendar invite. Join 1,200+ professionals who have already secured their copy.
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
              </div>
            </section>
          </>
        )}

        {view === 'terms' && <TermsOfService />}
        {view === 'privacy' && <PrivacyPolicy />}
        {view === 'support' && <CustomerSupport />}
        {view === 'success' && <SuccessPage setView={navigateTo} />}
      </main>

      <Footer setView={navigateTo} />
    </div>
  );
};

export default App;