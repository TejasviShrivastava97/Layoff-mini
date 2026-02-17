
import React from 'react';

const CustomerSupport: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-6">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 mb-12">Customer Support</h1>
        <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed space-y-12">
          
          <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
            <h2 className="text-2xl font-serif font-bold text-slate-950 mb-4">How to Contact Us</h2>
            <p className="mb-6 text-lg">For billing questions, technical access issues, or refund requests, please reach out to our team.</p>
            <a href="mailto:billing.ev@zohomail.in" className="inline-block px-8 py-4 bg-slate-950 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all">
              billing.ev@zohomail.in
            </a>
            <p className="mt-6 text-sm text-slate-400">We aim to respond within standard business hours.</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-slate-950">Product Access Issues</h2>
            <p>If you experience difficulty accessing your purchase, please contact us within 7 days so we can resolve the issue promptly. We will ensure you receive the digital manual via a secure secondary method if necessary.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-slate-950">Refund Policy (14-Day Guarantee)</h2>
            <p>We offer a no-questions-asked 14-day money back guarantee. If the Scorecard doesn't provide you with the clarity or value you expected, email us for a full refund of your $7. Beyond 14 days, refunds are reviewed individually for technical or access failures.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-slate-950">Delivery Method</h2>
            <p>Products are delivered via secure online access and an automated email containing your download link. No physical goods are shipped. No live services are included.</p>
          </section>

          <section className="space-y-4 border-t border-slate-100 pt-8">
            <p className="text-sm font-bold text-slate-950">Elemental Ventures LLC</p>
            <p className="text-xs text-slate-400">Wyoming, United States</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
