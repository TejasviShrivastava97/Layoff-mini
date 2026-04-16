import React, { useState, useEffect, useCallback } from 'react';
import Hero from './components/Hero';
import OpeningSection from './components/OpeningSection';
import WhatYouGet from './components/WhatYouGet';
import AudienceSection from './components/AudienceSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import CustomerSupport from './components/CustomerSupport';
import SuccessPage from './components/SuccessPage';
import QuizSection from './components/QuizSection';
import QuizLandingPage from './components/QuizLandingPage';

// Playbook upsell checkout link
export const PLAYBOOK_URL = "https://buy.stripe.com/6oUfZggVP8bt8PlaiFdAk03";

export type ViewState = 'home' | 'terms' | 'privacy' | 'support' | 'success' | 'quiz';

const PATH_MAP: Record<string, ViewState> = {
  '/': 'home',
  '/success': 'success',
  '/terms': 'terms',
  '/privacy': 'privacy',
  '/support': 'support',
  '/quiz': 'quiz'
};

const ScoreInterpretation: React.FC = () => {
  const tiers = [
    { range: "34–40", tier: "Tier 1", title: "Structurally Embedded", badgeClass: "bg-emerald-100 text-emerald-800", desc: "Your role is genuinely hard to remove. You hold institutional knowledge, cross-functional dependency, and leadership visibility. The risk: complacency. One reorg can change everything if you stop protecting your position." },
    { range: "25–33", tier: "Tier 2", title: "Moderately Anchored", badgeClass: "bg-blue-100 text-blue-800", desc: "You have real value and some visibility — but specific gaps exist. This is the most dangerous tier: safe enough to feel comfortable, exposed enough to be cut when budgets tighten. Most people here assume they're fine." },
    { range: "15–24", tier: "Tier 3", title: "Functionally Replaceable", badgeClass: "bg-orange-100 text-orange-800", desc: "Your role exists on paper. Your value to leadership doesn't — not yet. You're doing the work, but the structural factors that protect a role during restructuring aren't in place. This is the most common result." },
    { range: "Below 15", tier: "Tier 4", title: "Highly Exposed", badgeClass: "bg-red-100 text-red-800", desc: "Your role is defined by tasks, not by value. Working harder won't fix this — intentional repositioning will. This is the tier that sees the most dramatic improvement with the right framework." }
  ];

  return (
    <section className="py-20 bg-[#fdfcfb]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-red-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">Your Score Ranges</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-950 mb-3">What your score actually means</h2>
        <p className="text-slate-500 text-base mb-12 max-w-xl">This scorecard doesn't measure performance — it measures <strong>positioning</strong>. Where you land determines what you need to do next.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tiers.map((t, i) => (
            <div key={i} className="p-7 border border-slate-200 rounded-2xl bg-white">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-black uppercase px-3 py-1 rounded-lg ${t.badgeClass}`}>{t.range}</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.tier}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-950 mb-2">{t.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{t.desc}</p>
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

  const syncViewWithLocation = useCallback(() => {
    const path = window.location.pathname;
    const matchedView = PATH_MAP[path] || 'home';
    setView(matchedView);
  }, []);

  useEffect(() => {
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

      {view !== 'quiz' && <Navigation scrolled={scrolled} setView={navigateTo} />}

      <main className="relative z-10 pt-[68px]">
        {view === 'home' && (
          <>
            <Hero />
            <div id="about">
              <OpeningSection />
            </div>
            <ScoreInterpretation />
            <div id="quiz">
              <QuizSection />
            </div>
            <div id="contents">
              <WhatYouGet />
            </div>
            <AudienceSection />
            <div id="faq">
              <FAQ />
            </div>
            {/* Bottom CTA */}
            <section className="py-24 md:py-40 bg-[#0a0a0a] relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
              <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
                <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8 text-white leading-[1.1]">
                  The best time to assess your value was <span className="italic text-red-500 underline decoration-red-900/50 underline-offset-8">yesterday.</span>
                </h2>
                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Take the free assessment. Understand your position. Get the playbook to fix it.
                </p>
                <a
                  href="#quiz"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold text-xl rounded-full transition-all hover:scale-105 active:scale-95 group shadow-2xl shadow-white/10"
                >
                  Take The Free Assessment
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
        {view === 'quiz' && <QuizLandingPage />}
      </main>

      {view !== 'quiz' && <Footer setView={navigateTo} />}
    </div>
  );
};

export default App;
