import { SEO } from '../../components/SEO';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export function AutomationService() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface">
      <SEO
        title="Process & Workflow Automation Services | Custom Software Company"
        description="Eliminate manual bottlenecks with automated workflows. We develop custom RPA, automated document processing, and cloud logic triggers."
        keywords="workflow automation, process automation company, custom RPA, automated approvals, business automation"
      />
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent-2)]/5 pointer-events-none" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-6">
              Software & Engineering
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-8 leading-tight">
              Automation
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Autonomous background tasks, scheduled scripts, and workflow approvals to save hours of manual labor every week.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-hairline/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
                Free Your Teams From Repetitive Work
              </h2>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Manual data entry, repetitive approvals, and copy-paste workflows drain productivity and introduce errors. NUVAM's automation solutions replace these bottlenecks with intelligent, reliable automated processes that run 24/7.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                From simple task scheduling to multi-step approval workflows powered by AI, our automation engineers design solutions that integrate seamlessly into your existing tools.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Power Automate cloud flow development',
                  'Scheduled batch jobs and cron scripts',
                  'Email and document processing automation',
                  'Multi-level approval workflow systems',
                  'RPA (Robotic Process Automation) with UI.Path',
                  'Automated reporting and data pipeline triggers'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="h-3 w-3 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-ink">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] rounded-2xl blur-2xl opacity-10" />
              <div className="relative bg-gradient-to-br from-surface to-bg border border-hairline/50 rounded-2xl p-8 shadow-xl">
                <h3 className="font-bold text-ink mb-6 pb-3 border-b border-hairline/50">Automation Platforms</h3>
                <div className="space-y-5">
                  {[
                    { label: 'Low-Code', value: 'Microsoft Power Automate, Logic Apps' },
                    { label: 'RPA Tools', value: 'UI.Path, Power Automate Desktop' },
                    { label: 'Scripting', value: 'Python, PowerShell, Azure Functions' },
                    { label: 'AI Integration', value: 'GPT-4 AI Builder, Azure Cognitive Services' }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-start gap-4 py-2 border-b border-hairline/30 last:border-0">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted">{row.label}</span>
                      <span className="text-sm font-medium text-ink text-right">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-hairline/40 bg-gradient-to-br from-[var(--accent)]/5 via-[var(--accent-2)]/5 to-[var(--accent-gold)]/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-6">
            Automate Your Most Repetitive Processes
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            Book a free automation audit to identify your highest-value automation opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/#contact" className="w-full sm:w-auto px-8 py-4 text-base">
              Get Automation Audit
            </Button>
            <a href="mailto:nuvam.com@gmail.com" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-hairline bg-surface px-8 py-4 text-base font-semibold text-ink hover:border-[var(--accent)] hover:bg-surface/50 transition-all">
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AutomationService;
