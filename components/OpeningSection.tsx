import React from 'react';

const OpeningSection: React.FC = () => {
  return (
    <section className="bg-[#0f0f0f] py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-red-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4">The Reality</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-[52px] font-bold leading-[1.1] mb-8">
              Decisions aren't made on{' '}
              <span className="text-red-500 italic">feelings.</span>
            </h2>
            <div className="border-l-[3px] border-red-600 pl-5 py-1">
              <p className="font-serif text-lg italic text-slate-400 leading-relaxed">
                "Performance keeps you employed.{' '}
                <span className="text-red-400">Perceived impact</span>{' '}
                keeps you protected."
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                title: "Your manager likes you. That's not enough.",
                desc: "Layoff decisions are made by people above your manager, based on org charts and headcount — not relationships.",
                icon: (
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                )
              },
              {
                title: "Most professionals are invisible above their direct manager.",
                desc: "If leadership doesn't know your name, they don't know your value. You're a line item, not a person.",
                icon: (
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                )
              },
              {
                title: "The decision is made 6–8 weeks before you're told.",
                desc: "By the time you find out, the list is already final. The window to protect yourself is now, not after.",
                icon: (
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                )
              }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white/[0.04] border border-white/[0.07] rounded-2xl">
                <div className="w-9 h-9 rounded-xl bg-red-600/15 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-white mb-1">{item.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningSection;
