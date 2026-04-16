import React from 'react';
import { PLAYBOOK_URL } from '../App';

const WhatYouGet: React.FC = () => {
  return (
    <section className="bg-[#0f0f0f] py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-red-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4">The Playbook</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-[1.1] mb-4">The Layoff-Proof Playbook</h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Your score tells you where you stand. The playbook tells you exactly what to do about it — dimension by dimension, step by step, in 90 days.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { title: '90-Day Anti-Layoff Action Plan', desc: 'A week-by-week roadmap to shift your positioning before the next restructuring cycle.' },
                { title: 'Dimension-by-Dimension Repositioning Guide', desc: 'Exactly what to do for each of the 6 dimensions where you\'re exposed.' },
                { title: 'Weekly Visibility Templates', desc: 'Copy-paste updates that make your value impossible for leadership to ignore.' },
                { title: 'Manager Communication Scripts', desc: 'Word-for-word language to position yourself as essential without playing politics.' },
                { title: 'Early Warning Signal Checklist', desc: '12 signs a restructuring is coming before anyone says a word.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-0.5">{item.title}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Buy card */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-3xl p-8">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">The Layoff-Proof Playbook</h3>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-serif text-5xl font-black text-white">$27</span>
              <span className="text-lg text-slate-500 line-through">$47</span>
            </div>
            <div className="flex flex-col gap-3 mb-6">
              {['Instant PDF download','One-time payment — no subscription','14-day money-back guarantee','Works for any industry or role level'].map((f,i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-slate-400 font-medium">
                  <svg className="w-3.5 h-3.5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                  {f}
                </div>
              ))}
            </div>
            <a
              href={PLAYBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('track', 'InitiateCheckout', { content_name: 'Layoff-Proof Playbook', value: 27, currency: 'USD' });
                }
              }}
              className="block w-full py-4 bg-red-600 text-white font-black text-base rounded-2xl hover:bg-red-500 hover:scale-[1.02] active:scale-95 transition-all text-center shadow-xl shadow-red-900/30"
            >
              Get The Playbook — $27 →
            </a>
            <p className="text-[10px] text-slate-600 text-center mt-3 uppercase tracking-widest font-bold">One-time payment · 14-day guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
