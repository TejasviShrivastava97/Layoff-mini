import React from 'react';
import { ViewState } from '../App';
import { useEffect } from "react";


interface SuccessPageProps {
  setView: (view: ViewState) => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ setView }) => {
    useEffect(() => {
    // Fire Meta Purchase Event when success page loads
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', {
        value: 7.00,
        currency: 'USD',
        content_name: 'Replaceability Scorecard',
        content_type: 'product'
      });
    }
  }, []);

  // The file path relative to the domain root
  // This file MUST be placed in your project's /public folder
  const fileUrl = '/The-Replaceability-Scorecard-2026.pdf';
  const fileName = 'The-Replaceability-Scorecard-2026.pdf';

  return (
    <div className="pt-32 pb-32 px-6 flex items-center justify-center min-h-[80vh]">
      <div className="container mx-auto max-w-2xl text-center animate-reveal">
        <div className="mb-10 inline-flex items-center justify-center w-24 h-24 rounded-[2.5rem] bg-emerald-50 text-emerald-600 shadow-xl shadow-emerald-100/50 border border-emerald-100">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 mb-6">Access Secured.</h1>
        <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
          Your payment was successful. You now have full access to the 2026 Edition of <span className="text-slate-950 font-bold">The Replaceability Scorecard</span>.
        </p>

        {/* PRIMARY DOWNLOAD BOX */}
        <div className="mb-12 p-1 bg-slate-900 rounded-[3rem] shadow-2xl shadow-slate-900/40 group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="bg-white rounded-[2.8rem] p-8 md:p-12 relative z-10 border border-white/10">
            <div className="flex flex-col items-center">
              
              {/* DOCUMENT COVER THUMBNAIL */}
              <div className="relative mb-8 group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                {/* PDF Icon Badge */}
                <div className="absolute -top-3 -right-3 z-20 bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded shadow-lg">
                  PDF
                </div>
                
                {/* Cover Design */}
                <div className="w-32 h-44 md:w-40 md:h-56 bg-slate-950 rounded-lg overflow-hidden border border-slate-800 flex flex-col relative">
                  <div className="h-1 bg-red-600 w-full"></div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-white mb-4">
                        RS
                      </div>
                      <div className="space-y-1">
                        <div className="h-1.5 w-full bg-white/20 rounded"></div>
                        <div className="h-1.5 w-3/4 bg-white/10 rounded"></div>
                        <div className="h-1.5 w-1/2 bg-white/10 rounded"></div>
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-serif font-bold text-white leading-tight">THE REPLACEABILITY <br/>SCORECARD</p>
                      <p className="text-[6px] font-black text-red-500 uppercase tracking-widest mt-1">Edition 2026</p>
                    </div>
                  </div>
                  {/* Glass Reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                </div>
              </div>

              <h2 className="text-2xl font-serif font-bold text-slate-950 mb-2">The Replaceability Scorecard PDF</h2>
              <p className="text-sm text-slate-500 mb-8 font-medium">Version 4.2 • 2.4 MB • Secure Digital Document</p>
              
              <a 
                href={fileUrl}
                download={fileName}
                className="w-full py-5 bg-red-600 text-white font-black text-xl rounded-2xl transition-all hover:bg-red-700 hover:scale-[1.02] active:scale-95 shadow-xl shadow-red-600/20 flex items-center justify-center gap-3 group no-underline"
              >
                <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Scorecard Now
              </a>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 md:p-10 rounded-[3rem] border border-slate-200 shadow-sm mb-12 text-left">
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Email Confirmation</h2>
          <div className="flex gap-4 items-start">
            <div className="mt-1 w-5 h-5 text-emerald-600">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-slate-600 font-medium leading-relaxed">
              A backup copy and receipt have been sent to your email. If the button above doesn't trigger your download, please check your inbox for a message from <span className="text-slate-950 font-bold">Elemental Ventures</span>.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => setView('home')}
            className="w-full sm:w-auto px-10 py-5 bg-slate-950 text-white font-bold rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95"
          >
            Return to Homepage
          </button>
          <a 
            href="mailto:billing.ev@zohomail.in"
            className="w-full sm:w-auto px-10 py-5 bg-white text-slate-600 font-bold rounded-full border border-slate-200 hover:border-slate-400 transition-all"
          >
            Need Help?
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;