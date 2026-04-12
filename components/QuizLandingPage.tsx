import React from 'react';
import QuizSection from './QuizSection';

const QuizLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fdfcfb]">
      {/* Minimal header -- no navigation, no distractions */}
      <div className="py-6 px-6 flex items-center justify-center border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-slate-950 rounded-xl flex items-center justify-center text-white font-bold text-sm">
            RS
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-serif font-black tracking-tight text-slate-950 uppercase">Scorecard</span>
            <span className="text-[10px] font-bold text-red-600 uppercase tracking-[0.2em]">Edition 2026</span>
          </div>
        </div>
      </div>

      {/* Hero -- minimal, punchy, above the quiz */}
      <div className="py-12 px-6 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.25em] mb-6">
          <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
          Free Assessment
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-950 mb-4 leading-tight">
          How replaceable do you look<br />
          <span className="text-red-700 italic">to leadership?</span>
        </h1>
        <p className="text-lg text-slate-500 font-medium">
          6 dimensions. 5 minutes. Find out exactly where you stand.
        </p>
      </div>

      {/* Quiz -- full component */}
      <div>
        <QuizSection />
      </div>

      {/* Minimal footer */}
      <div className="py-8 px-6 text-center border-t border-slate-100">
        <p className="text-xs text-slate-400 font-medium">
          © 2026 Elemental Ventures LLC · <a href="/" className="hover:text-slate-600 transition-colors">Home</a> · <a href="/privacy" className="hover:text-slate-600 transition-colors">Privacy</a> · <a href="/support" className="hover:text-slate-600 transition-colors">Support</a>
        </p>
      </div>
    </div>
  );
};

export default QuizLandingPage;
