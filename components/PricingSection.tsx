
import React from 'react';
import { CHECKOUT_URL } from '../App';

const PricingSection: React.FC = () => {
  return (
    <section className="container mx-auto px-6 max-w-5xl">
      <div className="relative group">
        <div className="absolute inset-0 bg-red-600 blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
        
        <div className="relative glass border border-white/50 rounded-[4rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-16 overflow-hidden shadow-2xl">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-950 mb-6">Invest in <br /><span className="italic text-red-700">Self-Knowledge.</span></h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
              The cost of being caught unprepared is exponentially higher than $7. Gain the clarity you need to navigate your next 6 months with confidence.
            </p>
            <div className="space-y-5">
              {[
                "The Full Replaceability Scorecard (Digital PDF)",
                "Interactive Self-Diagnostic Formulas",
                "Strategic Positioning Recommendations",
                "14-Day No-Questions-Asked Guarantee"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group/item">
                  <div className="w-6 h-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-[10px] font-black group-hover/item:bg-red-600 group-hover/item:text-white transition-all">
                    ✓
                  </div>
                  <span className="text-slate-700 font-bold text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                 <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                 </svg>
              </div>
              <div>
                <p className="text-xs font-black text-slate-950 uppercase tracking-widest">100% Risk Free</p>
                <p className="text-sm text-slate-500 font-medium">14 Day Money Back Guarantee</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[360px] bg-slate-950 rounded-[3rem] p-10 text-white text-center shadow-2xl shadow-slate-900/40 border border-white/5">
            <span className="inline-block px-4 py-1.5 bg-white/5 text-white/50 text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-8">
              ONE-TIME PAYMENT
            </span>
            <div className="flex items-center justify-center gap-2 mb-10">
              <span className="text-4xl font-serif font-bold text-red-500 mt-2">$</span>
              <span className="text-9xl font-serif font-bold text-white tracking-tighter">7</span>
            </div>
            <a 
              href={CHECKOUT_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-5 bg-red-600 text-white font-black text-xl rounded-2xl transition-all hover:bg-red-500 hover:scale-[1.03] active:scale-95 shadow-xl shadow-red-900/20 text-center"
            >
              Access Now
            </a>
            <p className="mt-8 text-[11px] font-bold text-white/30 uppercase tracking-[0.2em] flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Encrypted Checkout
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
