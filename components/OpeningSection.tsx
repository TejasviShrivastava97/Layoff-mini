import React from 'react';

const OpeningSection: React.FC = () => {
  const points = [
    { 
      title: "Absorbability", 
      text: "How easily your daily output can be absorbed by remaining team members without a breakdown in service.",
      icon: "A"
    },
    { 
      title: "Visibility", 
      text: "How measurable and undeniable your direct impact is to executives who don't see your work daily.",
      icon: "V"
    },
    { 
      title: "Dependency", 
      text: "How much tribal knowledge or niche system access resides solely within your brain.",
      icon: "D"
    },
    { 
      title: "Operational Cost", 
      text: "Whether the cost of keeping you exceeds the immediate pain of losing your specific bandwidth.",
      icon: "C"
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 sticky top-32">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 mb-8 leading-[1.1]">
              Decisions aren't made on <span className="text-red-700 italic">feelings.</span>
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-10">
              When a company restructures, the spreadsheet is cold. Leadership evaluates roles based on structural variables you rarely hear mentioned in performance reviews.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-red-600 font-bold text-sm uppercase tracking-widest">
                <span className="w-8 h-[1px] bg-red-600"></span>
                The 4 Pillar Diagnostic
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {points.map((p, i) => (
              <div key={i} className="group p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
                <div className="w-12 h-12 bg-slate-950 text-white rounded-xl flex items-center justify-center font-serif italic text-xl mb-6 group-hover:bg-red-600 transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-slate-950 mb-3">{p.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{p.text}</p>
              </div>
            ))}
            
            <div className="md:col-span-2 p-10 bg-slate-950 rounded-[2.5rem] mt-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-[60px]"></div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">The Truth Manual</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                This Scorecard gives you the methodology to audit yourself before the auditors do. It’s an objective lens for high-stakes environments.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black text-white uppercase tracking-widest">Not Career Advice</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black text-white uppercase tracking-widest">Analytical Framework</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningSection;