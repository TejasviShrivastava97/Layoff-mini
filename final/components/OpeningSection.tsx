import React from 'react';

const OpeningSection: React.FC = () => {
  const dimensions = [
    { 
      title: "Skill Uniqueness", 
      text: "How specialized are your skills? Could they be found on the open market within 30-60 days?",
      icon: "01"
    },
    { 
      title: "Operational Visibility", 
      text: "How clearly do leadership and adjacent teams see the concrete impact of your daily work?",
      icon: "02"
    },
    { 
      title: "Revenue Proximity", 
      text: "How closely is your work tied to revenue generation or essential business operations?",
      icon: "03"
    },
    { 
      title: "Replacement Ease", 
      text: "If you left tomorrow, how quickly could your responsibilities be reassigned or absorbed?",
      icon: "04"
    },
    { 
      title: "Institutional Knowledge", 
      text: "Do you hold relationships, context, or history that isn't easily documented or transferred?",
      icon: "05"
    },
    { 
      title: "Cross-Team Dependency", 
      text: "How many workflows, projects, or teams rely directly on your specific role to function?",
      icon: "06"
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative block overflow-visible">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-950 mb-6 md:mb-8 leading-[1.1]">
              Decisions aren't made on <span className="text-red-700 italic">feelings.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8 md:mb-10">
              When organizations evaluate positions during restructuring, they ask operational questions, not performance questions. This distinction is the difference between survival and exposure.
            </p>
            
            <div className="p-8 bg-slate-950 rounded-[2.5rem] relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-[60px]"></div>
              <p className="text-xl md:text-2xl font-serif italic text-white leading-tight">
                "Performance keeps you employed. <span className="text-red-500">Perceived impact</span> keeps you protected."
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {dimensions.map((d, i) => (
              <div key={i} className="group p-6 md:p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500">
                <div className="text-xs font-black text-red-600 mb-4 tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
                  DIMENSION {d.icon}
                </div>
                <h3 className="text-base font-black uppercase tracking-tight text-slate-950 mb-3">{d.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningSection;