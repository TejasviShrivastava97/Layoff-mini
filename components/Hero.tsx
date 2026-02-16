import React from 'react';
import { CHECKOUT_URL } from '../App';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-60 md:pb-40 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] mb-10 animate-reveal">
            <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
            Operational Status: Active
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-bold text-slate-950 mb-10 leading-[0.85] tracking-tighter animate-reveal delay-100">
            How Secure Is <br />
            <span className="text-red-700 italic relative">
              Your Role?
              <svg className="absolute -bottom-4 left-0 w-full h-4 text-red-100 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-14 leading-relaxed font-medium animate-reveal delay-200">
            A brutal, analytical self-assessment manual designed to reveal exactly how you'd be evaluated during a workforce reduction.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-reveal delay-300">
            <a 
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-slate-950 text-white font-bold text-lg rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-slate-900/20"
            >
              Get The Full Scorecard — $7
            </a>
            <a 
              href="#about" 
              className="w-full sm:w-auto px-10 py-5 bg-white text-slate-600 font-bold text-lg rounded-full border border-slate-200 hover:border-slate-400 hover:text-slate-900 transition-all flex items-center justify-center gap-2"
            >
              Learn The Methodology
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          
          <div className="mt-24 pt-16 border-t border-slate-100 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            <div className="text-center group">
              <div className="text-2xl font-serif font-bold text-slate-950 group-hover:text-red-700 transition-colors">20 min</div>
              <div className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-400 mt-1">To Complete</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl font-serif font-bold text-slate-950 group-hover:text-red-700 transition-colors">12 metrics</div>
              <div className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-400 mt-1">Weighted Logic</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl font-serif font-bold text-slate-950 group-hover:text-red-700 transition-colors">Instant</div>
              <div className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-400 mt-1">PDF Access</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl font-serif font-bold text-slate-950 group-hover:text-red-700 transition-colors">Digital</div>
              <div className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-400 mt-1">Ready Anywhere</div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-20 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
    </section>
  );
};

export default Hero;