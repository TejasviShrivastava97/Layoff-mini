import React from 'react';

const AudienceSection: React.FC = () => {
  return (
    <section className="bg-[#fdfcfb] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-red-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">What People Are Saying</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-950 mb-3">500+ professionals have taken the assessment</h2>
        <p className="text-slate-500 text-base mb-12">Helping professionals understand their actual position — before a decision is made about them.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              initials: 'JK',
              name: 'James K.',
              role: 'Operations Manager, Tech',
              text: '"I scored 14 and thought the quiz was broken. Then I read the breakdown and realized every single blind spot it identified was real. Got the playbook. Worth every penny."',
              hl: 'every single blind spot it identified was real.'
            },
            {
              initials: 'RM',
              name: 'Rachel M.',
              role: 'Senior Analyst, Finance',
              text: '"My company did a reorg 3 months after I took this. I had already started implementing the visibility strategy from the playbook. My role was protected. Three colleagues weren\'t so lucky."',
              hl: 'My role was protected.'
            },
            {
              initials: 'DL',
              name: 'David L.',
              role: 'Product Director, SaaS',
              text: '"I\'ve been in my role for 8 years and scored \'Moderately Anchored\'. I assumed I\'d be Tier 1. The wake-up call was exactly what I needed. The playbook gave me a clear plan."',
              hl: 'The wake-up call was exactly what I needed.'
            }
          ].map((t, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-[1.5rem] p-6">
              <div className="text-red-600 text-xs tracking-widest mb-3">★★★★★</div>
              <p className="font-serif text-base italic text-slate-700 leading-relaxed mb-5">{t.text}</p>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#f5f0eb] flex items-center justify-center text-[10px] font-black text-red-600 flex-shrink-0">{t.initials}</div>
                <div>
                  <p className="text-xs font-bold text-slate-900">{t.name}</p>
                  <p className="text-[10px] text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
