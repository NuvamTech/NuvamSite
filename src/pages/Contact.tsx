import { useState } from 'react';
import { siteCopy } from '../content/siteCopy';

const budgetOptions = [
  'Under ₹2L',
  '₹2L – ₹5L',
  '₹5L – ₹15L',
  '₹15L – ₹50L',
  '₹50L+',
  'Not sure yet',
];

const serviceOptions = [
  'AI & ML Engineering',
  'Automation',
  'SaaS Product Engineering',
  'Web & App Development',
  'Cloud Infrastructure',
  'Integration & APIs',
  'VisionGate (product)',
  'NUVAM Commerce (product)',
];

export function Contact() {
  const { contact } = siteCopy;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">

      {/* ── Page Hero ────────────────────────────────────────────────── */}
      <section className="pb-16 border-b border-hairline">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] brand-grad-text motion-safe:animate-fade-up">Contact</p>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.0] tracking-tight md:text-7xl motion-safe:animate-fade-up">
          {contact.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted motion-safe:animate-fade-up [animation-delay:100ms]">
          {contact.subheadline}
        </p>
      </section>

      {/* ── Form + Sidebar ────────────────────────────────────────────── */}
      <section className="mt-16 grid gap-12 lg:grid-cols-[1fr_340px]">

        {/* Form */}
        <div className="rounded-[2rem] border border-hairline bg-surface p-8 md:p-10">
          {submitted ? (
            <div className="flex flex-col items-start gap-4 py-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent)] brand-grad-text text-2xl">✓</div>
              <h2 className="font-display text-3xl">Message sent.</h2>
              <p className="text-base leading-7 text-muted">
                Thank you — we have received your message and will reply within 24 hours. We look forward to reading about your project.
              </p>
              <button
                type="button"
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', service: '', budget: '', message: '' }); }}
                className="mt-4 text-sm brand-grad-text underline-offset-4 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs uppercase tracking-[0.2em] text-muted">Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="rounded-full border border-hairline bg-transparent px-4 py-3 text-sm placeholder:text-muted/50"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs uppercase tracking-[0.2em] text-muted">Email *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="rounded-full border border-hairline bg-transparent px-4 py-3 text-sm placeholder:text-muted/50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-company" className="text-xs uppercase tracking-[0.2em] text-muted">Company / Organisation</label>
                <input
                  id="contact-company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Where do you work?"
                  className="rounded-full border border-hairline bg-transparent px-4 py-3 text-sm placeholder:text-muted/50"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-service" className="text-xs uppercase tracking-[0.2em] text-muted">Area of interest</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="rounded-full border border-hairline bg-surface px-4 py-3 text-sm text-ink appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a service</option>
                    {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-budget" className="text-xs uppercase tracking-[0.2em] text-muted">Budget range</label>
                  <select
                    id="contact-budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="rounded-full border border-hairline bg-surface px-4 py-3 text-sm text-ink appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a range</option>
                    {budgetOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-xs uppercase tracking-[0.2em] text-muted">Project description *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what you are building or trying to solve. More context means a better reply."
                  className="rounded-[1.5rem] border border-hairline bg-transparent px-4 py-3 text-sm placeholder:text-muted/50 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  Send message
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-hairline bg-surface p-6">
            <p className="text-xs uppercase tracking-[0.3em] brand-grad-text">Email</p>
            <a
              href={`mailto:${contact.details.email}`}
              className="mt-2 block text-base font-medium hover:brand-grad-text transition-colors duration-200"
            >
              {contact.details.email}
            </a>
          </div>

          <div className="rounded-[2rem] border border-hairline bg-surface p-6">
            <p className="text-xs uppercase tracking-[0.3em] brand-grad-text">Location</p>
            <p className="mt-2 text-base">{contact.details.location}</p>
          </div>

          <div className="rounded-[2rem] border border-hairline bg-surface p-6">
            <p className="text-xs uppercase tracking-[0.3em] brand-grad-text">Response time</p>
            <p className="mt-2 text-base">{contact.details.responseTime}</p>
            <p className="mt-1 text-xs text-muted">Mon – Fri, including most holidays</p>
          </div>

          <div className="rounded-[2rem] border border-hairline bg-surface p-6">
            <p className="text-xs uppercase tracking-[0.3em] brand-grad-text">What happens next</p>
            <ol className="mt-4 space-y-3">
              {[
                'We read your message carefully.',
                'We reply with questions or a proposal.',
                'If it is a fit, we schedule a call.',
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-hairline text-[10px] brand-grad-text">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </aside>

      </section>
    </div>
  );
}
