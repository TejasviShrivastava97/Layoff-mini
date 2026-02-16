import React from 'react';

const WhatYouGet: React.FC = () => {
  const items = [
    { 
      title: "Diagnostic Matrix", 
      desc: "A 12-point weighted assessment system used by high-tier consultants.", 
      size: "md:col-span-2",
      tag: "CORE TOOL"
    },
    { 
      title: "Case Studies", 
      desc: "Real-world examples of roles that survived vs. those that didn't.", 
      size: "md:col-span-1",
      tag: "ANALYSIS"
    },
    { 
      title: "Scoring Guide", 
      desc: "Instructions on how to calculate and interpret your structural score.", 
      size: "md:col-span-1",
      tag: "GUIDE"
    },
    { 
      title: "Red Flag Audit", 
      desc: "Identify the top 5 behaviors that signal your role is at risk.", 
      size: "md:col-span-2",
      tag: "CHECKLIST"
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-20">
          <span className="text-red-600 font-black text-[10px] uppercase tracking-[0.3em]">Contents</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 mt-4 tracking-tight">What You Receive</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className={`${item.size} group p-10 bg-white rounded-[3rem] border border-slate-200/50 hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-500 flex flex-col justify-between`}>
              <div>
                <span className="inline-block px-3 py-1 bg-slate-50 text-slate-400 text-[9px] font-black tracking-widest rounded-full mb-8 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                  {item.tag}
                </span>
                <h3 className="text-2xl font-serif font-bold mb-4 text-slate-950">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
              <div className="mt-12 flex justify-end">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-red-600 group-hover:border-red-100 transition-all">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white border border-slate-200/80 rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 group">
           <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-slate-950 rounded-[2rem] flex items-center justify-center text-white font-serif text-3xl font-bold italic rotate-[-5deg] group-hover:rotate-0 transition-transform">
                RS
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-slate-950">Instant Digital Delivery</p>
                <p className="text-slate-500 font-medium">32-Page Actionable PDF Manual</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Updated</p>
                <p className="text-sm font-bold text-slate-950">January 2025</p>
              </div>
              <div className="w-[1px] h-10 bg-slate-200 hidden sm:block"></div>
              <span className="px-6 py-3 bg-red-600 text-white rounded-full font-bold text-sm shadow-lg shadow-red-200">
                DRM-FREE
              </span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;