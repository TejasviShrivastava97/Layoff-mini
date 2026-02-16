import React, { useState } from 'react';

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={`text-xl font-serif font-bold transition-all duration-300 ${open ? 'text-red-700 translate-x-2' : 'text-slate-950 group-hover:text-red-800'}`}>{q}</span>
        <div className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-500 ${open ? 'bg-slate-950 border-slate-950 text-white rotate-45' : 'bg-white text-slate-400 group-hover:border-slate-400 group-hover:text-slate-950'}`}>
          <span className="text-xl">+</span>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-96 pb-10 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-2xl">{a}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    { q: "Is this specific to tech roles?", a: "No. While the examples use corporate terminology, the structural logic applies to any hierarchical organization with mid-to-senior management layers." },
    { q: "How is it delivered?", a: "Immediately after your $7 payment through Stripe, you will be redirected to a download page, and a link will be sent to your email address." },
    { q: "Is it a recurring subscription?", a: "Absolutely not. One payment, lifetime access to the PDF and any future version updates." },
    { q: "What if I'm not satisfied?", a: "Due to the nature of digital goods, we don't offer standard refunds, but if you truly feel the $7 wasn't worth the insight, email us and we'll make it right." },
    { q: "Is this HR advice?", a: "This is a diagnostic logic framework. It is not legal or HR advice. It is a mental model for personal strategic planning." },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <span className="text-red-600 font-black text-[10px] uppercase tracking-[0.3em]">Support</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 mt-4 tracking-tight">Questions</h2>
        </div>
        <div className="bg-slate-50 rounded-[4rem] p-10 md:p-20 border border-slate-100 shadow-sm">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;