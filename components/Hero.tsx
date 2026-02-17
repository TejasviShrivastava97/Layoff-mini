import React from 'react';
import { CHECKOUT_URL } from '../App';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-56 md:pb-40 overflow-hidden">
      {/* Background technical elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-red-100 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[150px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.25em] mb-12 animate-reveal shadow-2xl shadow-slate-900/20">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            Edition 2026: Operational Audit Logic
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[9.5rem] font-serif font-extrabold text-slate-950 mb-10 leading-[0.85] tracking-tighter animate-reveal delay-100">
            Audit Your <br />
            <span className="text-red-700 italic relative inline-block">
              Role Security
              <div className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-1.5 bg-red-700/10 rounded-full -z-10"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-16 leading-relaxed font-medium animate-reveal delay-200">
            A structural diagnostic tool designed to help you think about your role the way organizations often do during cost or structure changes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-reveal delay-300">
            <a 
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-12 py-6 bg-slate-950 text-white font-extrabold text-xl rounded-full hover:bg-red-700 transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.15)] text-center group flex items-center justify-center gap-3"
            >
              Access The Scorecard — $7
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="#about" 
              className="w-full sm:w-auto px-12 py-6 bg-white text-slate-600 font-bold text-xl rounded-full border border-slate-200 hover:border-slate-950 hover:text-slate-950 transition-all shadow-sm text-center"
            >
              The Framework
            </a>
          </div>
          
          <div className="mt-24 md:mt-32 pt-16 border-t border-slate-100 max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 animate-reveal delay-400">
            {[
              { label: "6 Metrics", sub: "Structural Audit" },
              { label: "2026 Edition", sub: "Current Logic" },
              { label: "Digital", sub: "Instant Access" },
              { label: "Self-Serve", sub: "Private Manual" }
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-default">
                <div className="text-2xl md:text-3xl font-serif font-black text-slate-950 group-hover:text-red-700 transition-colors duration-500">{stat.label}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] font-black text-slate-400 mt-2 group-hover:text-slate-600 transition-colors">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;