import React from 'react';

const AudienceSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Card: For You */}
          <div className="p-12 md:p-16 rounded-[4rem] bg-[#faf9f6] border border-slate-200/60 shadow-xl shadow-slate-200/20 group">
            <div className="mb-12 flex items-center gap-6">
              <div className="w-16 h-16 rounded-[2rem] bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                ✓
              </div>
              <h3 className="text-3xl font-serif font-bold text-slate-950">This is for you if...</h3>
            </div>
            <ul className="space-y-10">
              {[
                "You are mid-to-senior level in a corporate hierarchy.",
                "Your organization is undergoing 'optimization' or leadership changes.",
                "You feel your value is high but perhaps poorly documented.",
                "You want to audit your role's resilience before the next town hall."
              ].map((item, i) => (
                <li key={i} className="flex gap-5 text-slate-600 font-medium text-lg leading-relaxed">
                  <span className="text-emerald-500 font-bold tracking-tighter">0{i+1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card: Not For You */}
          <div className="p-12 md:p-16 rounded-[4rem] bg-slate-950 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] pointer-events-none"></div>
            <div className="mb-12 flex items-center gap-6 relative z-10">
              <div className="w-16 h-16 rounded-[2rem] bg-white/5 text-slate-500 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                ✗
              </div>
              <h3 className="text-3xl font-serif font-bold text-white">Not for you if...</h3>
            </div>
            <ul className="space-y-10 relative z-10">
              {[
                "You are looking for generic motivational 'career coaching'.",
                "You are a junior individual contributor with 0-1 years of experience.",
                "You are a solo-entrepreneur or purely contract freelancer.",
                "You are seeking legal advice regarding labor laws."
              ].map((item, i) => (
                <li key={i} className="flex gap-5 text-slate-400 font-medium text-lg leading-relaxed">
                  <span className="text-white/20 font-bold tracking-tighter">0{i+1}</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-16 p-6 bg-white/5 border border-white/10 rounded-3xl text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">Self-honesty is required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;