import React from 'react';
import { CHECKOUT_URL } from '../App';

const PricingSection: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section id={id || 'checkout'} className="container mx-auto px-6 max-w-5xl">
      <div className="relative group">
        {/* Glow Effect */}
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
                "Immediate access via secure email link"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group/item">
                  <div className="w-6 h-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-[10px] font-black group-hover/item:bg-red-600 group-hover/item:text-white transition-all">
                    ✓
                  </div>
                  <span className="text-slate-700 font-bold text-sm md:text-base">{item}</span>
                </div>
              ))}
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
              className="block w-full py-5 bg-red-600 text-white font-black text-xl rounded-2xl transition-all hover:bg-red-500 hover:scale-[1.03] active:scale-95 shadow-xl shadow-red-900/20"
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