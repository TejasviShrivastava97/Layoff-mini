
import React from 'react';
import { ViewState } from '../App';

interface FooterProps {
  setView: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="py-16 bg-[#faf9f6] text-slate-400 border-t border-slate-200/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('home')}>
            <div className="w-8 h-8 bg-slate-950 rounded-lg flex items-center justify-center text-[10px] font-bold text-white">RS</div>
            <span className="font-serif font-black text-slate-950 uppercase tracking-tighter">Scorecard</span>
          </div>
          
          <div className="flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.2em]">
            <button onClick={() => setView('home')} className="hover:text-red-700 transition-colors">Home</button>
            <button onClick={() => setView('terms')} className="hover:text-red-700 transition-colors">Terms</button>
            <button onClick={() => setView('privacy')} className="hover:text-red-700 transition-colors">Privacy</button>
            <button onClick={() => setView('support')} className="hover:text-red-700 transition-colors">Support</button>
          </div>

          <p className="text-xs font-medium">&copy; {new Date().getFullYear()} Elemental Ventures LLC.</p>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-[10px] max-w-2xl mx-auto leading-relaxed opacity-50 font-medium">
            Disclaimer: The Replaceability Scorecard is an educational diagnostic tool. It is not a guarantee of employment, legal advice, or a predictive model for organizational changes. Use objectively.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
