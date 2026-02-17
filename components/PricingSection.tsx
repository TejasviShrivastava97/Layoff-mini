import React from 'react';
import { CHECKOUT_URL } from '../App';

const PricingSection: React.FC = () => {
  return (
    <section className="container mx-auto px-6 max-w-6xl">
      <div className="relative group">
        <div className="absolute inset-0 bg-red-600/5 blur-[120px] rounded-[5rem]"></div>
        
        <div className="relative glass border border-slate-200 rounded-[4rem] p-8 md:p-20 flex flex-col lg:flex-row items-center gap-16 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)]">
          <div className="flex-1">
            <div className="mb-6 flex items-center gap-2">
              <span className="w-10 h-1 bg-red-600 rounded-full"></span>
              <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">Pricing</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-extrabold text-slate-950 mb-8 leading-tight">Invest in <br /><span className="italic text-red-700">Self-Knowledge.</span></h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium max-w-xl">
              The cost of being caught unprepared is exponentially higher than $7. Gain the clarity you need to navigate your next 6 months with confidence.
            </p>
            <div className="space-y-6">
              {[
                "The Full Replaceability Scorecard (Digital PDF)",
                "Interactive Self-Diagnostic Formulas",
                "Strategic Positioning Recommendations",
                "14-Day No-Questions-Asked Guarantee"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 group/item">
                  <div className="w-7 h-7 rounded-full bg-slate-950 text-white flex items-center justify-center text-[10px] font-black shadow-lg">
                    ✓
                  </div>
                  <span className="text-slate-800 font-bold text-lg">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-16 flex items-center gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100 max-w-md">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-slate-100">
                 <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                 </svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-950 uppercase tracking-widest">100% Risk Free</p>
                <p className="text-base text-slate-500 font-bold">14 Day Money Back Guarantee</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[400px] bg-slate-950 rounded-[3.5rem] p-12 text-white text-center shadow-[0_50px_80px_-15px_rgba(0,0,0,0.3)] border border-white/5 relative overflow-hidden group/card">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[80px] -mr-20 -mt-20 group-hover/card:scale-125 transition-transform duration-1000"></div>
            
            <span className="inline-block px-5 py-2 bg-white/5 text-white/40 text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-10 border border-white/10">
              ONE-TIME PAYMENT
            </span>
            <div className="flex items-center justify-center gap-2 mb-12">
              <span className="text-5xl font-serif font-bold text-red-500 mt-4">$</span>
              <span className="text-[10rem] font-serif font-black text-white leading-none tracking-tighter">7</span>
            </div>
            <a 
              href={CHECKOUT_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-6 bg-red-600 text-white font-black text-2xl rounded-2xl transition-all hover:bg-red-500 hover:scale-[1.03] active:scale-95 shadow-2xl shadow-red-900/30 text-center"
            >
              Access Now
            </a>
            <div className="mt-10 flex flex-col items-center gap-3">
              <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.25em] flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Secure Encrypted Checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;