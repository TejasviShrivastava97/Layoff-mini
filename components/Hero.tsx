import React from 'react';

const SARAH_PHOTO = "data:image/jpeg;base64,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";

const Hero: React.FC = () => {
  const scrollToQuiz = () => {
    const el = document.getElementById('quiz');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Social proof strip — clean bar below nav */}
      <div className="border-b border-slate-200 bg-[#f5f0eb] px-6 py-2">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 flex-wrap">
          <span className="text-red-600 text-xs tracking-widest">★★★★★</span>
          <span className="text-xs font-semibold text-slate-700">4.9 rating</span>
          <span className="text-slate-300 text-xs">·</span>
          <span className="text-xs font-semibold text-slate-700">500+ professionals assessed</span>
          <span className="text-slate-300 text-xs hidden md:inline">·</span>
          <span className="text-xs text-slate-500 italic hidden md:inline">"Finally understood why I was at risk — before the reorg happened"</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#fdfcfb] py-8 md:py-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white border border-red-200 rounded-full px-3 py-1 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-red-600">Free Assessment · 10 Questions · Instant Results</span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-[52px] font-bold text-slate-950 leading-[1.08] tracking-tight mb-4">
                Find out how replaceable your role looks to{' '}
                <span className="text-red-600 italic">leadership.</span>
              </h1>

              <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-5 font-medium max-w-lg">
                Most professionals assume their value is obvious to leadership.{' '}
                <span className="text-slate-800 font-semibold">It isn't.</span>{' '}
                Organizations cut based on replaceability, not performance. Take the free 10-question diagnostic and find out exactly where you stand.
              </p>

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

              {/* Score card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Sample Result</span>
                  <span className="text-[9px] font-black uppercase text-orange-600 bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full tracking-wide">
                    Functionally Replaceable
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-serif text-5xl font-black text-slate-950">17</span>
                  <span className="text-lg font-bold text-slate-300">/ 40</span>
                </div>
                <p className="text-xs text-slate-500 font-medium mb-3">Your role exists. Your value to leadership doesn't — not yet.</p>
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
              <div className="bg-slate-950 rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 blur-2xl pointer-events-none" />
                <p className="font-serif text-sm italic text-slate-300 leading-relaxed mb-4 relative z-10">
                  "I had no idea I was in the replaceable zone. This changed how I{' '}
                  <span className="text-red-400">position myself at work</span>{' '}
                  — before anyone made a decision about my role."
                </p>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-red-600 flex-shrink-0">
                    <img
                      src={SARAH_PHOTO}
                      alt="Sarah M."
                      className="w-full h-full object-cover"
                      style={{ objectPosition: '50% 15%' }}
                    />
                  </div>
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
    </>
  );
};

export default Hero;
