import React from 'react';

const Hero: React.FC = () => {
  const scrollToQuiz = () => {
    const el = document.getElementById('quiz');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Social proof strip */}
      <div className="bg-[#f5f0eb] border-b border-slate-200 px-6 py-2.5">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 flex-wrap">
          <span className="text-red-600 text-xs tracking-widest">★★★★★</span>
          <span className="text-xs font-semibold text-slate-700">4.9 rating</span>
          <span className="text-slate-300 text-xs">·</span>
          <span className="text-xs font-semibold text-slate-700">2,300+ professionals assessed</span>
          <span className="text-slate-300 text-xs hidden sm:inline">·</span>
          <span className="text-xs text-slate-500 italic hidden sm:inline">"Finally understood why I was at risk — before the reorg happened"</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#fdfcfb] pt-16 pb-10 md:pt-20 md:pb-14 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT */}
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-white border border-red-200 rounded-full px-4 py-1.5 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600">Free Assessment · 10 Questions · Instant Results</span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-slate-950 leading-[1.08] tracking-tight mb-6">
                Find out how<br />
                replaceable your<br />
                role looks to<br />
                <span className="text-red-600 italic">leadership.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg font-medium">
                Most professionals assume their value is obvious to leadership.{' '}
                <span className="text-slate-800 font-semibold">It isn't.</span>{' '}
                Organizations don't cut based on performance — they cut based on replaceability.
                Take the free 10-question diagnostic and see exactly where you stand.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                <button
                  onClick={scrollToQuiz}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-black text-base rounded-full hover:bg-red-700 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-red-200"
                >
                  Take The Free Assessment
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <span className="text-sm text-slate-400 font-medium">No account needed</span>
              </div>

              {/* FUD reducers */}
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {['Free', 'No credit card', 'Instant results', '10 minutes'].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-4">

              {/* Score preview card */}
              <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Sample Result</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
                    Functionally Replaceable
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-serif text-7xl font-black text-slate-950">17</span>
                  <span className="text-xl font-bold text-slate-300">/ 40</span>
                </div>

                <p className="text-sm text-slate-500 font-medium mb-6 leading-snug">
                  Your role exists. Your value to leadership doesn't — not yet.
                </p>

                <div className="space-y-2.5">
                  {[
                    { name: 'Skill Uniqueness', score: 3, max: 4 },
                    { name: 'Operational Visibility', score: 2, max: 4 },
                    { name: 'Revenue Proximity', score: 4, max: 4 },
                    { name: 'Replacement Ease', score: 2, max: 4 },
                    { name: 'Institutional Knowledge', score: 3, max: 4 },
                    { name: 'Cross-Team Dependency', score: 3, max: 4 },
                  ].map((d) => (
                    <div key={d.name} className="flex items-center gap-3">
                      <span className="text-[11px] text-slate-400 font-medium w-40 truncate flex-shrink-0">{d.name}</span>
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-orange-500 rounded-full"
                          style={{ width: `${(d.score / d.max) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs font-black text-slate-700 w-8 text-right">{d.score}/4</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-slate-950 rounded-[2rem] p-7 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-3xl pointer-events-none" />
                <p className="font-serif text-base italic text-slate-300 leading-relaxed mb-5 relative z-10">
                  "I had no idea I was in the replaceable zone. This changed how I{' '}
                  <span className="text-red-400">position myself at work</span>{' '}
                  — before anyone made a decision about my role."
                </p>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">SM</div>
                  <div>
                    <p className="text-xs font-semibold text-white">Sarah M.</p>
                    <p className="text-xs text-slate-500">Senior Product Manager, Fortune 500</p>
                  </div>
                  <span className="ml-auto text-red-500 text-xs tracking-widest">★★★★★</span>
                </div>
              </div>

              {/* Proof numbers */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { num: '2,300+', label: 'Professionals assessed' },
                  { num: '10', label: 'Diagnostic questions' },
                  { num: '4', label: 'Risk tiers' },
                ].map((s) => (
                  <div key={s.label} className="bg-[#f5f0eb] rounded-2xl p-4 text-center">
                    <div className="font-serif text-2xl font-bold text-slate-950 mb-1">{s.num}</div>
                    <div className="text-[10px] text-slate-500 font-medium leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
