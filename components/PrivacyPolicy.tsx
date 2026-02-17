import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="pt-40 pb-32 px-6">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 mb-12">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed space-y-8">
          <p className="text-sm font-black uppercase tracking-widest text-red-600">Effective Date: {today}</p>
          
          <p>Elemental Ventures LLC respects your privacy and is committed to protecting your information.</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-slate-950">1. Information We Collect</h2>
            <p>We collect only the information necessary to process purchases and provide access: Name, Email address, and Payment-related metadata (processed securely via Stripe). We do not store card details.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-slate-950">2. How We Use Information</h2>
            <p>Your information is used to deliver purchased products, provide customer support, and send transactional emails related to access or billing. We do not sell or rent personal information.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-slate-950">3. Payment Processing</h2>
            <p>All payments are processed by Stripe. Their privacy practices govern financial data handling.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-slate-950">4. Your Rights</h2>
            <p>You may request deletion of your data by contacting <a href="mailto:billing.ev@zohomail.in" className="text-red-700 underline">billing.ev@zohomail.in</a>.</p>
          </section>

          <section className="space-y-4 border-t border-slate-100 pt-8">
            <p className="text-xs italic">© Elemental Ventures LLC. All rights reserved.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;