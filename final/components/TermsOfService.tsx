
import React from 'react';

const TermsOfService: React.FC = () => {
  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="pt-40 pb-32 px-6">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-950 mb-12">Terms of Service</h1>
        <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed space-y-8">
          <p className="text-sm font-black uppercase tracking-widest text-red-600">Effective Date: {today}</p>
          
          <p>Welcome to Elemental Ventures LLC. By accessing or purchasing our digital products, you agree to the following Terms of Service.</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-slate-950">1. Company Information</h2>
            <p>Elemental Ventures LLC is a Wyoming-registered United States company providing self-serve digital educational products focused on career development and professional skills. These products are informational and educational in nature only.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-slate-950">2. Nature of Products</h2>
            <p>All products are delivered digitally as self-paced educational materials. They do not include coaching, employment services, or consulting, and do not guarantee employment, interviews, or income outcomes. Purchase grants you a personal, non-transferable license to use the material.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-slate-950">3. Intellectual Property</h2>
            <p>All content, frameworks, text, and materials are owned by Elemental Ventures LLC and may not be reproduced, distributed, shared, or resold without written permission.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-slate-950">4. Payments</h2>
            <p>All payments are processed securely through Stripe. You agree to provide accurate billing information at checkout.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-slate-950">5. Refund Policy (14-Day Guarantee)</h2>
            <p>We stand behind the value of our frameworks. If you are not satisfied with your purchase, you may request a full refund within 14 days of purchase. To initiate a refund, contact us at <a href="mailto:billing.ev@zohomail.in" className="text-red-700 underline">billing.ev@zohomail.in</a>. After 14 days, all sales are final due to the immediate access nature of digital goods.</p>
          </section>

          <section className="space-y-4 border-t border-slate-100 pt-8">
            <p className="text-xs italic">© Elemental Ventures LLC. All rights reserved.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
