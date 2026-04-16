import React, { useState } from 'react';

const FAQS = [
  {
    q: 'How is this different from a regular career quiz?',
    a: 'Most career quizzes measure skill or fit. This measures structural replaceability — how your role is perceived from a leadership perspective during restructuring decisions. It\'s diagnostic, not motivational.'
  },
  {
    q: 'Is the assessment really free?',
    a: 'Yes — completely free. No credit card required. You take the 10-question assessment, enter your email to see your full results and dimension breakdown, and that\'s it. The Layoff-Proof Playbook is a separate $27 product.'
  },
  {
    q: 'What if I score high? Do I still need the playbook?',
    a: 'Yes — especially if you score high. The professionals who get caught off guard in a reorg weren\'t the obvious cuts. They were the ones who felt secure and stopped actively protecting their position. The playbook shows you how to lock in what you\'ve built.'
  },
  {
    q: 'What is the Layoff-Proof Playbook exactly?',
    a: 'It\'s a PDF guide with a 90-day action plan, dimension-by-dimension repositioning steps, weekly visibility templates, manager communication scripts, and an early warning checklist. It\'s designed to work in any industry and at any role level.'
  },
  {
    q: 'What\'s your refund policy?',
    a: '14-day money-back guarantee. If you\'re not satisfied for any reason, email us and we\'ll refund you in full. No questions asked.'
  }
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#f5f0eb] py-20" id="faq">
      <div className="max-w-2xl mx-auto px-6">
        <p className="text-red-600 font-black text-[10px] uppercase tracking-[0.3em] mb-3 text-center">FAQ</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-950 mb-3 text-center">Common questions</h2>
        <p className="text-slate-500 text-base mb-12 text-center">Everything you need to know before you take the assessment.</p>
        <div className="flex flex-col gap-2">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-semibold text-slate-900">{faq.q}</span>
                <svg className={`w-4 h-4 text-red-600 flex-shrink-0 transition-transform ${open === i ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
