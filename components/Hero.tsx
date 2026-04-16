import React from 'react';

const SARAH_PHOTO = "data:image/jpeg;base64,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";

const Hero: React.FC = () => {
  const scrollToQuiz = () => {
    const el = document.getElementById('quiz');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[#fdfcfb] pt-4 pb-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Social proof strip — sits cleanly below nav, above content */}
        <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap mb-6 py-2 px-4 bg-[#f5f0eb] rounded-xl border border-slate-200 text-center">
          <span className="text-red-600 text-[11px] tracking-widest">★★★★★</span>
          <span className="text-[11px] font-semibold text-slate-700">4.9 rating</span>
          <span className="text-slate-300 text-xs">·</span>
          <span className="text-[11px] font-semibold text-slate-700">500+ professionals assessed</span>
          <span className="text-slate-300 text-xs hidden md:inline">·</span>
          <span className="text-[11px] text-slate-500 italic hidden md:inline">"Finally understood why I was at risk — before the reorg happened"</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">

          {/* LEFT */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white border border-red-200 rounded-full px-3 py-1 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-red-600">Free Assessment · 10 Questions · Instant Results</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-950 leading-[1.08] tracking-tight mb-4">
              Find out how replaceable your role looks to{' '}
              <span className="text-red-600 italic">leadership.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-5 font-medium">
              Most professionals assume their value is obvious to leadership.{' '}
              <span className="text-slate-800 font-semibold">It isn't.</span>{' '}
              Organizations cut based on replaceability, not performance. Take the free 10-question diagnostic and find out exactly where you stand.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
              <button
                onClick={scrollToQuiz}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-red-600 text-white font-black text-sm rounded-full hover:bg-red-700 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-red-200"
              >
                Take The Free Assessment
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <span className="text-xs text-slate-400 font-medium">No account needed</span>
            </div>

            {/* FUD reducers */}
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {['Free', 'No credit card', 'Instant results', '10 minutes'].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2 h-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-3">

            {/* Score preview card */}
            <div className="bg-white rounded-[1.5rem] border border-slate-200 shadow-sm p-5">
              <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Sample Result</span>
                <span className="text-[9px] font-black uppercase tracking-[0.15em] text-orange-600 bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full">
                  Functionally Replaceable
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-0.5">
                <span className="font-serif text-5xl font-black text-slate-950">17</span>
                <span className="text-lg font-bold text-slate-300">/ 40</span>
              </div>

              <p className="text-xs text-slate-500 font-medium mb-3 leading-snug">
                Your role exists. Your value to leadership doesn't — not yet.
              </p>

              <div className="space-y-1.5">
                {[
                  { name: 'Skill Uniqueness', score: 3 },
                  { name: 'Operational Visibility', score: 2 },
                  { name: 'Revenue Proximity', score: 4 },
                  { name: 'Replacement Ease', score: 2 },
                  { name: 'Institutional Knowledge', score: 3 },
                  { name: 'Cross-Team Dependency', score: 3 },
                ].map((d) => (
                  <div key={d.name} className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 font-medium w-32 truncate flex-shrink-0">{d.name}</span>
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 rounded-full" style={{ width: `${(d.score / 4) * 100}%` }} />
                    </div>
                    <span className="text-[10px] font-black text-slate-700 w-7 text-right">{d.score}/4</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-slate-950 rounded-[1.5rem] p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 blur-2xl pointer-events-none" />
              <p className="font-serif text-sm italic text-slate-300 leading-relaxed mb-4 relative z-10">
                "I had no idea I was in the replaceable zone. This changed how I{' '}
                <span className="text-red-400">position myself at work</span>{' '}
                — before anyone made a decision about my role."
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <img
                  src={SARAH_PHOTO}
                  alt="Sarah M."
                  className="w-9 h-9 rounded-full object-cover object-top flex-shrink-0 border-2 border-red-600"
                  style={{ objectPosition: '50% 10%' }}
                />
                <div>
                  <p className="text-xs font-semibold text-white">Sarah M.</p>
                  <p className="text-[10px] text-slate-500">Senior Product Manager, Fortune 500</p>
                </div>
                <span className="ml-auto text-red-500 text-[10px] tracking-widest">★★★★★</span>
              </div>
            </div>

            {/* Proof numbers */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { num: '500+', label: 'Professionals assessed' },
                { num: '10', label: 'Diagnostic questions' },
                { num: '4', label: 'Risk tiers' },
              ].map((s) => (
                <div key={s.label} className="bg-[#f5f0eb] rounded-xl p-3 text-center">
                  <div className="font-serif text-xl font-bold text-slate-950 mb-0.5">{s.num}</div>
                  <div className="text-[9px] text-slate-500 font-medium leading-tight">{s.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
