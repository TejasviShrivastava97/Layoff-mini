import React, { useState } from 'react';
import { PLAYBOOK_URL } from '../App';

const QUESTIONS = [
  {
    id: 1,
    dimension: "Skill Uniqueness",
    question: "How specialized are the skills required for your role? Could they be found on the open market within 30-60 days?",
    low: "Easily replaceable",
    high: "Highly specialized"
  },
  {
    id: 2,
    dimension: "Operational Visibility",
    question: "How clearly do leadership and adjacent teams see the concrete impact of your daily work?",
    low: "Mostly invisible",
    high: "Clearly visible"
  },
  {
    id: 3,
    dimension: "Revenue Proximity",
    question: "How closely is your work tied to revenue generation or essential business operations?",
    low: "Indirect / support",
    high: "Core to revenue"
  },
  {
    id: 4,
    dimension: "Replacement Ease",
    question: "If you left tomorrow, how quickly could your responsibilities be reassigned or absorbed?",
    low: "Very easily absorbed",
    high: "Extremely difficult"
  },
  {
    id: 5,
    dimension: "Institutional Knowledge",
    question: "Do you hold relationships, context, or history that isn't easily documented or transferred?",
    low: "Easily transferred",
    high: "Deeply embedded"
  },
  {
    id: 6,
    dimension: "Cross-Team Dependency",
    question: "How many workflows, projects, or teams rely directly on your role to function?",
    low: "Minimal dependency",
    high: "High dependency"
  }
];

const getResult = (score: number) => {
  if (score >= 24) return {
    label: "Structurally Embedded",
    colorClass: "bg-emerald-600",
    textClass: "text-emerald-600",
    borderClass: "border-emerald-200",
    bgClass: "bg-emerald-50",
    desc: "Your role is integrated into operations in a way that requires deliberate planning to remove. You hold meaningful institutional dependency — this is a strong position.",
    upsell: "To maintain and expand this advantage, the Layoff-Proof Playbook gives you a 90-day plan to deepen your positioning further."
  };
  if (score >= 17) return {
    label: "Moderately Anchored",
    colorClass: "bg-blue-600",
    textClass: "text-blue-600",
    borderClass: "border-blue-200",
    bgClass: "bg-blue-50",
    desc: "Your role provides clear value, but certain elements may be transferable without major disruption. There are specific areas worth strengthening before the next restructuring cycle.",
    upsell: "The Layoff-Proof Playbook shows you exactly which dimensions to strengthen and how to do it in 60-90 days."
  };
  if (score >= 10) return {
    label: "Functionally Replaceable",
    colorClass: "bg-orange-500",
    textClass: "text-orange-600",
    borderClass: "border-orange-200",
    bgClass: "bg-orange-50",
    desc: "Your responsibilities may be important, yet structurally easy to redistribute. This is the most common range — and the most actionable. Positioning changes can shift this significantly.",
    upsell: "Most people in this range see measurable improvement within 30 days with the right framework. The Layoff-Proof Playbook was built for exactly this position."
  };
  return {
    label: "Highly Transferable",
    colorClass: "bg-red-600",
    textClass: "text-red-600",
    borderClass: "border-red-200",
    bgClass: "bg-red-50",
    desc: "Your role may currently be defined more by tasks than by organizational dependency. This is a signal to reposition intentionally — not to panic. Structural changes are available to you.",
    upsell: "The Layoff-Proof Playbook gives you a step-by-step repositioning plan designed specifically for this situation. This is the most important investment you can make right now."
  };
};

type Step = 'quiz' | 'email' | 'results';

const QuizSection: React.FC = () => {
  const [step, setStep] = useState<Step>('quiz');
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const totalScore = scores.reduce((a, b) => a + b, 0);
  const result = getResult(totalScore);
  const progress = (current / QUESTIONS.length) * 100;

  const handleSelect = (val: number) => setSelected(val);

  const handleNext = () => {
    if (selected === null) return;
    const newScores = [...scores, selected];
    setScores(newScores);
    setSelected(null);
    if (current + 1 < QUESTIONS.length) {
      setCurrent(current + 1);
    } else {
      setStep('email');
    }
  };

  const handleEmailSubmit = async () => {
    if (!email.includes('@') || !email.includes('.')) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');
    setSubmitting(true);

    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          score: totalScore,
          scoreLabel: getResult(totalScore).label
        })
      });
    } catch (e) {
      // Silently fail -- don't block user from seeing results
      console.error('Mailchimp subscribe error:', e);
    }

    setSubmitting(false);
    setStep('results');
  };

  const q = QUESTIONS[current];

  return (
    <section className="py-24 md:py-32 bg-slate-50" id="quiz">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-14">
          <span className="text-red-600 font-black text-[10px] uppercase tracking-[0.3em]">Free Assessment</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 mt-4 tracking-tight">
            The Replaceability Scorecard
          </h2>
          <p className="text-slate-500 mt-4 text-lg font-medium max-w-xl mx-auto">
            6 dimensions. 5 minutes. An honest read on where you stand.
          </p>
        </div>

        {/* QUIZ STEP */}
        {step === 'quiz' && (
          <div className="bg-white rounded-[3rem] border border-slate-200 shadow-sm overflow-hidden">
            <div className="h-1.5 bg-slate-100">
              <div className="h-full bg-red-600 transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
            <div className="p-10 md:p-14">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">
                  Dimension {q.id} of {QUESTIONS.length}
                </span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  {q.dimension}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-950 mb-10 leading-snug">
                {q.question}
              </h3>

              <div className="space-y-4 mb-10">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    onClick={() => handleSelect(val)}
                    className={`w-full flex items-center gap-5 p-5 rounded-2xl border-2 transition-all font-bold text-left ${
                      selected === val
                        ? 'border-slate-950 bg-slate-950 text-white'
                        : 'border-slate-100 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 ${
                      selected === val ? 'bg-white text-slate-950' : 'bg-white border border-slate-200 text-slate-500'
                    }`}>
                      {val}
                    </span>
                    <span className="text-base">
                      {val === 1 && q.low}
                      {val === 2 && 'Slightly above low'}
                      {val === 3 && 'Moderate'}
                      {val === 4 && 'Fairly strong'}
                      {val === 5 && q.high}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 font-bold mb-10">
                <span>1 = {q.low}</span>
                <span>5 = {q.high}</span>
              </div>

              <button
                onClick={handleNext}
                disabled={selected === null}
                className={`w-full py-5 rounded-2xl font-black text-xl transition-all ${
                  selected !== null
                    ? 'bg-slate-950 text-white hover:bg-red-700 hover:scale-[1.02] active:scale-95 shadow-lg'
                    : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                }`}
              >
                {current + 1 < QUESTIONS.length ? 'Next Question' : 'See My Results'}
              </button>
            </div>
          </div>
        )}

        {/* EMAIL CAPTURE STEP */}
        {step === 'email' && (
          <div className="bg-white rounded-[3rem] border border-slate-200 shadow-sm p-10 md:p-14 text-center">
            <div className="w-16 h-16 bg-red-50 rounded-[1.5rem] flex items-center justify-center mx-auto mb-8">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-serif font-bold text-slate-950 mb-3">Assessment Complete</h3>
            <p className="text-slate-500 font-medium mb-10 text-lg max-w-md mx-auto">
              Enter your details below to see your score, full breakdown, and personalized recommendations.
            </p>

            <div className="space-y-4 max-w-md mx-auto text-left">
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-2">First Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your first name"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-950 font-medium focus:outline-none focus:border-slate-950 transition-colors text-base"
                />
              </div>
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setEmailError(''); }}
                  placeholder="your@email.com"
                  className={`w-full px-5 py-4 rounded-2xl border bg-slate-50 text-slate-950 font-medium focus:outline-none transition-colors text-base ${
                    emailError ? 'border-red-400 focus:border-red-600' : 'border-slate-200 focus:border-slate-950'
                  }`}
                />
                {emailError && <p className="text-red-600 text-sm font-bold mt-2">{emailError}</p>}
              </div>
              <p className="text-[11px] text-slate-400 font-medium">
                No spam. Your results + occasional career insights. Unsubscribe anytime.
              </p>
            </div>

            <button
              onClick={handleEmailSubmit}
              disabled={submitting}
              className="mt-8 w-full max-w-md mx-auto block py-5 bg-slate-950 text-white font-black text-xl rounded-2xl hover:bg-red-700 transition-all hover:scale-[1.02] active:scale-95 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? 'Loading your results...' : 'Show My Score'}
            </button>
          </div>
        )}

        {/* RESULTS STEP */}
        {step === 'results' && (
          <div className="space-y-6">
            <div className={`bg-white rounded-[3rem] border-2 ${result.borderClass} shadow-sm p-10 md:p-14`}>
              <div className="text-center mb-10">
                {name && <p className="text-slate-500 font-bold mb-2">{name}, here are your results</p>}
                <div className={`inline-flex items-center gap-3 px-6 py-3 ${result.bgClass} ${result.textClass} rounded-full font-black text-sm uppercase tracking-widest mb-6`}>
                  {result.label}
                </div>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-7xl md:text-8xl font-serif font-black text-slate-950">{totalScore}</span>
                  <span className="text-2xl font-bold text-slate-300 mt-4">/ 30</span>
                </div>
                <p className="text-slate-600 font-medium text-lg max-w-xl mx-auto leading-relaxed">{result.desc}</p>
              </div>

              <div className="space-y-3 mb-10">
                {QUESTIONS.map((q, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-xs font-black text-slate-400 w-40 truncate">{q.dimension}</span>
                    <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${result.colorClass} rounded-full transition-all duration-700`}
                        style={{ width: `${(scores[i] / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-black text-slate-950 w-6 text-right">{scores[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upsell */}
            <div className="bg-slate-950 rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[80px] pointer-events-none"></div>
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
                  Next Step
                </span>
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight">
                  The Layoff-Proof Playbook
                </h3>
                <p className="text-slate-400 font-medium text-lg mb-8 max-w-xl leading-relaxed">
                  {result.upsell}
                </p>
                <div className="space-y-3 mb-10">
                  {[
                    "90-Day Anti-Layoff Action Plan",
                    "Weekly Visibility Templates",
                    "Manager Communication Scripts",
                    "Role Repositioning Framework",
                    "Early Warning Signal Checklist"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                      <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <a
                    href={PLAYBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-red-600 text-white font-black text-xl rounded-2xl hover:bg-red-500 hover:scale-[1.03] active:scale-95 transition-all shadow-2xl shadow-red-900/30"
                  >
                    Get The Playbook — $27
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <div>
                    <p className="text-white font-black text-lg">$27 <span className="line-through text-slate-500 font-normal text-base ml-1">$47</span></p>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">One-time payment · 14-day guarantee</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => { setStep('quiz'); setCurrent(0); setScores([]); setSelected(null); setName(''); setEmail(''); }}
              className="w-full py-4 text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors"
            >
              Retake the assessment
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizSection;
