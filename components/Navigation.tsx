import React from 'react';
import { CHECKOUT_URL, ViewState } from '../App';

interface NavigationProps {
  scrolled: boolean;
  setView: (view: ViewState) => void;
}

const Navigation: React.FC<NavigationProps> = ({ scrolled, setView }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${scrolled ? 'py-4 glass border-b border-slate-200/50 shadow-sm' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 group cursor-pointer" 
          onClick={() => setView('home')}
        >
          <div className="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center text-white font-bold text-sm transition-transform group-hover:scale-110 shadow-lg shadow-slate-900/20">
            RS
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-serif font-black tracking-tight text-slate-950 uppercase">Scorecard</span>
            <span className="text-[10px] font-bold text-red-600 uppercase tracking-[0.2em] mt-0.5">Edition 2026</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6 sm:gap-10">
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => setView('home')} className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-red-600 transition-colors">Home</button>
            <a href="/#about" onClick={() => setView('home')} className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-red-600 transition-colors">The Process</a>
            <button onClick={() => setView('support')} className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-red-600 transition-colors">Support</button>
          </div>
          <a 
            href={CHECKOUT_URL} 
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all active:scale-95 shadow-sm text-center ${scrolled ? 'bg-red-600 text-white shadow-xl shadow-red-200 hover:bg-red-700' : 'bg-slate-950 text-white hover:bg-slate-800'}`}
          >
            Access - $7
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;