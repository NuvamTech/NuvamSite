import { useState, useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { siteCopy } from '../content/siteCopy';

/* ════════════════════════════════════════════════════════════════════════════
   SHARED HELPERS
   ════════════════════════════════════════════════════════════════════════════ */

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs uppercase tracking-[0.35em] brand-grad-text">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-none md:text-6xl">{title}</h2>
      {body && <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{body}</p>}
    </div>
  );
}

/** Thin horizontal rule between major sections */
function Divider() {
  return <div className="border-t border-hairline/30" />;
}

/* ════════════════════════════════════════════════════════════════════════════
   VISIONGATE — FACE SCAN DEMO
   Phases: 0 idle → 1 scanning → 2 matching → 3 verified → loop
   ════════════════════════════════════════════════════════════════════════════ */
const LANDMARKS = [
  { top: 19, left: 48, label: 'forehead' },
  { top: 35, left: 29, label: 'eye-l'    },
  { top: 35, left: 67, label: 'eye-r'    },
  { top: 36, left: 38, label: 'brow-l'   },
  { top: 36, left: 58, label: 'brow-r'   },
  { top: 50, left: 40, label: 'nose-l'   },
  { top: 50, left: 56, label: 'nose-r'   },
  { top: 58, left: 47, label: 'nose-tip' },
  { top: 67, left: 33, label: 'mouth-l'  },
  { top: 67, left: 63, label: 'mouth-r'  },
  { top: 75, left: 47, label: 'chin'     },
];

type VGPhase = 0 | 1 | 2 | 3;

function VisionGateDemo() {
  const [cycle,    setCycle]    = useState(0);
  const [phase,    setPhase]    = useState<VGPhase>(0);
  const [progress, setProgress] = useState(0);
  const [scanKey,  setScanKey]  = useState(0); // remounts scan-line to restart CSS anim

  useEffect(() => {
    setPhase(0);
    setProgress(0);

    const timers: ReturnType<typeof setTimeout>[] = [];
    let rafId: number;

    // 0.6 s → phase 1: scanning starts, scan line sweeps
    timers.push(setTimeout(() => {
      setPhase(1);
      setScanKey(k => k + 1);
    }, 600));

    // 3.6 s → phase 2: matching, progress bar animates
    timers.push(setTimeout(() => {
      setPhase(2);
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(Math.round(((now - t0) / 2200) * 98), 98);
        setProgress(p);
        if (p < 98) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    }, 3600));

    // 6.0 s → phase 3: verified
    timers.push(setTimeout(() => setPhase(3), 6000));

    // 8.4 s → restart
    timers.push(setTimeout(() => setCycle(c => c + 1), 8400));

    return () => {
      timers.forEach(clearTimeout);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [cycle]);

  const dotVisible = (lm: typeof LANDMARKS[0]) =>
    phase === 2 || phase === 3;

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-[#1a1830] bg-[#07060f] h-[320px]">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(82,153,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(82,153,255,1) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-[#1a1830]/80 flex items-center justify-between px-5">
        <div className="flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${phase >= 1 ? 'bg-[#5299FF]' : 'bg-white/20'}`}
            style={phase >= 1 ? { boxShadow: '0 0 6px 3px rgba(82,153,255,0.6)', animation: 'pulse 2s infinite' } : {}} />
          <span className="text-[9px] uppercase tracking-[0.28em] text-white/35">
            {phase === 0 ? 'Standby' : phase === 1 ? 'Face detected — scanning' : phase === 2 ? 'Matching identity' : 'Access granted'}
          </span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">VisionGate™</span>
      </div>

      {/* Face detection area */}
      <div className="absolute inset-0 top-10 flex items-center justify-center">
        <div className="relative" style={{ width: 128, height: 166 }}>

          {/* Face oval SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 128 166" fill="none">
            <ellipse
              cx="64" cy="83" rx="58" ry="77"
              stroke={phase >= 3 ? 'rgba(82,153,255,0.9)' : phase >= 1 ? 'rgba(82,153,255,0.45)' : 'rgba(82,153,255,0.12)'}
              strokeWidth="1.5"
              strokeDasharray="5 3.5"
              className={phase >= 3 ? 'animate-vg-ring' : ''}
              style={{ transition: 'stroke 0.6s ease' }}
            />
            {/* Landmark connector lines (visible in phases 2-3) */}
            {(phase === 2 || phase === 3) && (
              <>
                {/* Eye line */}
                <line x1="37" y1="58" x2="86" y2="58" stroke="rgba(82,153,255,0.18)" strokeWidth="1" />
                {/* Nose bridge */}
                <line x1="51" y1="58" x2="51" y2="77" stroke="rgba(82,153,255,0.15)" strokeWidth="1" />
                <line x1="77" y1="58" x2="77" y2="77" stroke="rgba(82,153,255,0.15)" strokeWidth="1" />
                {/* Mouth */}
                <line x1="42" y1="111" x2="81" y2="111" stroke="rgba(82,153,255,0.18)" strokeWidth="1" />
                {/* Chin to eye */}
                <line x1="60" y1="31" x2="60" y2="58"  stroke="rgba(82,153,255,0.12)" strokeWidth="1" />
              </>
            )}
          </svg>

          {/* Corner brackets — appear at phase 1 */}
          {[
            'top-0 left-0 border-t-2 border-l-2',
            'top-0 right-0 border-t-2 border-r-2',
            'bottom-0 left-0 border-b-2 border-l-2',
            'bottom-0 right-0 border-b-2 border-r-2',
          ].map((cls) => (
            <div
              key={cls}
              className={`absolute w-5 h-5 border-[#5299FF] ${cls} transition-all duration-500`}
              style={{ opacity: phase >= 1 ? 1 : 0, transform: phase >= 1 ? 'scale(1)' : 'scale(0.7)' }}
            />
          ))}

          {/* Scan line — remounts each cycle to re-trigger CSS animation */}
          {phase === 1 && (
            <div
              key={scanKey}
              className="absolute left-[-10%] right-[-10%] h-[2px] animate-vg-scan"
              style={{
                background: 'linear-gradient(90deg, transparent, #5299FF 30%, #9B5FDE 50%, #5299FF 70%, transparent)',
                boxShadow: '0 0 14px 4px rgba(82,153,255,0.55)',
              }}
            />
          )}

          {/* Landmark dots */}
          {LANDMARKS.map((lm) => (
            <div
              key={lm.label}
              className="absolute"
              style={{ top: `${lm.top}%`, left: `${lm.left}%`, transform: 'translate(-50%, -50%)' }}
            >
              <div
                className="h-1.5 w-1.5 rounded-full transition-all duration-300"
                style={{
                  background: phase === 3 ? '#5299FF' : 'rgba(82,153,255,0.8)',
                  boxShadow: dotVisible(lm) ? '0 0 6px 2px rgba(82,153,255,0.65)' : 'none',
                  opacity: dotVisible(lm) ? 1 : 0,
                  transform: dotVisible(lm) ? 'scale(1)' : 'scale(0)',
                }}
              />
            </div>
          ))}

          {/* Verified checkmark overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-all duration-600"
            style={{ opacity: phase === 3 ? 1 : 0, transform: phase === 3 ? 'scale(1)' : 'scale(0.75)' }}
          >
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#5299FF] text-2xl font-bold text-[#5299FF]"
              style={{ boxShadow: '0 0 28px rgba(82,153,255,0.55)', background: 'rgba(82,153,255,0.08)' }}
            >
              ✓
            </div>
          </div>
        </div>
      </div>

      {/* Bottom status */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-3 border-t border-[#1a1830]/60 space-y-2">
        <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.22em]">
          <span className="text-white/35">
            {phase <= 1 ? 'Scanning…' : phase === 2 ? `Identity match: ${progress}%` : 'Identity verified — access granted'}
          </span>
          {phase === 3 && (
            <span className="text-[#5299FF] font-medium">✓ Authorised</span>
          )}
        </div>
        <div className="h-[3px] rounded-full overflow-hidden bg-white/[0.07]">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: phase === 0 ? '4%' : phase === 1 ? '38%' : phase === 2 ? `${progress}%` : '98%',
              background: 'linear-gradient(90deg, #2979FF, #7B2FBE, #5299FF)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   NUVAM COMMERCE — STOREFRONT DEMO
   Phases: 0 loading → 1 browse → 2 cart → 3 checkout → 4 white-label reveal → loop
   ════════════════════════════════════════════════════════════════════════════ */

const PARTNERS = ['Aura Mart', 'Nexus Shop', 'Vega Store'] as const;
const PRODUCTS = [
  { name: 'Wireless Pro',  price: '₹2,499', emoji: '🎧', delay: '0ms'   },
  { name: 'Smart Case',    price: '₹899',   emoji: '📱', delay: '300ms' },
  { name: 'USB Hub 4-in-1',price: '₹1,299', emoji: '🔌', delay: '600ms' },
];

type CMPhase = 0 | 1 | 2 | 3 | 4;

function CommerceDemo() {
  const [cycle,      setCycle]      = useState(0);
  const [phase,      setPhase]      = useState<CMPhase>(0);
  const [cartCount,  setCartCount]  = useState(0);
  const [partnerIdx, setPartnerIdx] = useState(0);

  useEffect(() => {
    setPhase(0);
    setCartCount(0);

    const timers: ReturnType<typeof setTimeout>[] = [];

    // 0.5 s → products appear
    timers.push(setTimeout(() => setPhase(1), 500));

    // 3.0 s → cart fills item by item
    timers.push(setTimeout(() => {
      setPhase(2);
      timers.push(setTimeout(() => setCartCount(1), 150));
      timers.push(setTimeout(() => setCartCount(2), 600));
      timers.push(setTimeout(() => setCartCount(3), 1050));
    }, 3000));

    // 5.5 s → checkout / order confirmed
    timers.push(setTimeout(() => setPhase(3), 5500));

    // 7.2 s → white-label reveal (partner switch)
    timers.push(setTimeout(() => {
      setPhase(4);
      setPartnerIdx(i => (i + 1) % PARTNERS.length);
    }, 7200));

    // 9.5 s → restart
    timers.push(setTimeout(() => setCycle(c => c + 1), 9500));

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  const partner = PARTNERS[partnerIdx % PARTNERS.length];
  const nextPartner = PARTNERS[(partnerIdx + 1) % PARTNERS.length];

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-[#26102e] bg-[#0b0611] h-[320px]">

      {/* Storefront header bar */}
      <div className="absolute top-0 left-0 right-0 h-11 border-b border-[#26102e] bg-[#110920] flex items-center gap-2.5 px-4">
        {/* Brand dot */}
        <div className="h-5 w-5 rounded-full shrink-0"
             style={{ background: 'linear-gradient(135deg, #9B5FDE, #F04FA0)' }} />

        {/* Partner name — switches on phase 4 */}
        <span
          className="text-xs font-medium transition-all duration-500"
          style={{ color: phase === 4 ? 'transparent' : 'white',
                   backgroundImage: phase === 4 ? 'linear-gradient(90deg,#9B5FDE,#F04FA0)' : 'none',
                   backgroundClip: phase === 4 ? 'text' : 'unset',
                   WebkitBackgroundClip: phase === 4 ? 'text' : 'unset' }}
        >
          {phase === 4 ? nextPartner : partner}
        </span>

        {/* White-label badge */}
        {phase === 4 && (
          <span className="animate-badge-pop rounded-full border border-[#9B5FDE]/50 px-2 py-0.5 text-[8px] uppercase tracking-widest text-[#9B5FDE]">
            White-label ✓
          </span>
        )}

        {/* Cart icon + badge */}
        <div className="ml-auto relative">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" strokeLinecap="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          {cartCount > 0 && (
            <span
              className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full text-[8px] font-bold text-white flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,#9B5FDE,#F04FA0)' }}
            >
              {cartCount}
            </span>
          )}
        </div>
      </div>

      {/* Product grid */}
      <div className="absolute left-0 right-0 px-3 pt-2 grid grid-cols-3 gap-2" style={{ top: 44 }}>
        {PRODUCTS.map((p, i) => (
          <div
            key={p.name}
            className="rounded-xl border bg-[#160c23] p-2 transition-all duration-500"
            style={{
              borderColor: phase >= 2 && cartCount > i ? 'rgba(240,79,160,0.45)' : '#26102e',
              opacity: phase >= 1 ? 1 : 0,
              transform: phase >= 1 ? 'translateY(0)' : 'translateY(14px)',
              transitionDelay: phase === 1 ? p.delay : '0ms',
            }}
          >
            {/* Product icon area */}
            <div className="h-8 rounded-lg bg-[#1f1135] flex items-center justify-center text-base mb-2">
              {p.emoji}
            </div>
            <p className="text-[8px] leading-tight text-white/55 truncate">{p.name}</p>
            <p className="text-[9px] font-semibold mt-0.5"
               style={{ color: phase >= 2 && cartCount > i ? '#F04FA0' : 'rgba(255,255,255,0.4)' }}>
              {p.price}
            </p>
            {/* "Added" indicator */}
            {phase >= 2 && cartCount > i && (
              <div className="mt-1.5 h-[2px] rounded-full"
                   style={{ background: 'linear-gradient(90deg,#9B5FDE,#F04FA0)' }} />
            )}
          </div>
        ))}
      </div>

      {/* Order total row */}
      <div
        className="absolute left-3 right-3 rounded-xl border border-[#26102e] bg-[#160c23] px-3 py-2 transition-all duration-500 flex items-center justify-between"
        style={{ bottom: 44, opacity: phase >= 2 ? 1 : 0, transform: phase >= 2 ? 'translateY(0)' : 'translateY(8px)' }}
      >
        <span className="text-[9px] text-white/35 uppercase tracking-widest">Order total</span>
        <span className="text-[10px] font-semibold text-white/80">₹4,697</span>
        <div
          className="rounded-full px-3 py-1 text-[9px] font-medium text-white"
          style={{ background: 'linear-gradient(90deg,#9B5FDE,#F04FA0)' }}
        >
          {phase >= 3 ? '✓ Confirmed' : 'Checkout'}
        </div>
      </div>

      {/* Confirmed overlay */}
      {phase >= 3 && (
        <div
          className="absolute inset-0 flex items-center justify-center backdrop-blur-[2px] transition-all duration-500"
          style={{ background: 'rgba(11,6,17,0.85)', opacity: phase >= 3 ? 1 : 0 }}
        >
          <div className="text-center px-6">
            <div
              className="mx-auto mb-3 h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold text-white"
              style={{ background: 'linear-gradient(135deg,#9B5FDE,#F04FA0)', boxShadow: '0 0 24px rgba(155,95,222,0.5)' }}
            >
              ✓
            </div>
            <p className="text-sm font-medium text-white">Order confirmed</p>
            <p className="mt-1 text-[10px] text-white/35">3 items · ₹4,697</p>

            {phase === 4 && (
              <div className="mt-4 space-y-1">
                <p className="text-[8px] uppercase tracking-widest text-white/25">Powered by</p>
                <p className="text-xs font-medium brand-grad-text">NUVAM Commerce</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bottom status */}
      <div className="absolute bottom-0 left-0 right-0 h-11 border-t border-[#26102e] flex items-center justify-between px-5 text-[9px] uppercase tracking-[0.22em]">
        <span className="text-white/25">
          {phase === 0 ? 'Loading store' : phase === 1 ? 'Browsing' : phase === 2 ? 'Adding to cart' : phase === 3 ? 'Processing order' : 'Brand applied'}
        </span>
        <span style={{ color: 'rgba(155,95,222,0.5)' }}>NUVAM Commerce</span>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   MAIN PAGE EXPORT
   ════════════════════════════════════════════════════════════════════════════ */
export function SinglePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-16">
      <HomeSection />

      <div className="mt-10 md:mt-14 space-y-10 md:space-y-14">
        <Divider />
        <ServicesSection />
        <Divider />
        <ProductsSection />
        <Divider />
        <AboutSection />
        <Divider />
        <ContactSection />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   #home — HERO + FEATURE STRIP
   ════════════════════════════════════════════════════════════════════════════ */
const homeStats = [
  { value: '6',           label: 'Service areas'         },
  { value: '2',           label: 'Products in production' },
  { value: 'AI-native',   label: 'Core capability'        },
  { value: 'India-first', label: 'Studio origin'          },
];

const homeFeatures = [
  {
    label: 'AI Systems',
    body: 'LLM integrations, RAG pipelines, and prediction models built for real workflows.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M16.9 16.9l2.1 2.1M4.9 19.1l2.1-2.1M16.9 7.1l2.1-2.1" />
      </svg>
    ),
  },
  {
    label: 'Automation',
    body: 'Replace repetitive ops with reliable systems that run without supervision.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" /><path d="M17 14v2m0 4v-2m0 0h-2m4 0h-2" />
      </svg>
    ),
  },
  {
    label: 'Product Engineering',
    body: 'Full-stack SaaS with auth, billing, dashboards, and design systems.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
];

function HomeSection() {
  return (
    <section id="home" className="scroll-mt-20 pt-8 md:pt-14">
      {/* Hero card */}
      <div className="relative overflow-hidden rounded-[2rem] border border-hairline/80 bg-surface px-5 py-10 shadow-[0_30px_80px_color-mix(in_srgb,var(--ink)_5%,transparent)] sm:px-6 md:rounded-[2.5rem] md:px-14 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_srgb,var(--accent-3)_10%,transparent),transparent_50%),radial-gradient(ellipse_at_bottom_left,color-mix(in_srgb,var(--accent-2)_7%,transparent),transparent_45%)]" />
        <p className="relative mb-5 text-xs uppercase tracking-[0.4em] brand-grad-text motion-safe:animate-fade-up">NUVAM</p>
        <h1 className="relative max-w-4xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-7xl motion-safe:animate-fade-up">
          {siteCopy.heroTitle}
        </h1>
        <p className="relative mt-4 max-w-2xl text-base leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8 motion-safe:animate-fade-up [animation-delay:100ms]">
          {siteCopy.heroSubtitle}
        </p>
        <div className="relative mt-6 flex flex-col gap-3 sm:flex-row motion-safe:animate-fade-up [animation-delay:200ms]">
          <Button to="#services" variant="primary">Explore Services</Button>
          <Button to="#products" variant="ghost">See Products</Button>
        </div>
        {/* Stats */}
        <div className="relative mt-8 grid grid-cols-2 gap-3 border-t border-hairline/50 pt-6 sm:gap-4 sm:pt-8 md:grid-cols-4">
          {homeStats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-2xl brand-grad-text">{s.value}</p>
              <p className="mt-1.5 text-xs uppercase tracking-[0.2em] text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feature strip */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {homeFeatures.map((f) => (
          <div
            key={f.label}
            className="group rounded-[1.5rem] border border-hairline bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_16px_40px_color-mix(in_srgb,var(--accent)_10%,transparent)] sm:p-6"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-hairline bg-bg text-muted transition-colors duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
              {f.icon}
            </div>
            <h3 className="font-display text-xl">{f.label}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   #services — SERVICE CARDS + PROCESS TIMELINE
   ════════════════════════════════════════════════════════════════════════════ */
function ServicesSection() {
  const { services, process } = siteCopy;

  return (
    <section id="services" className="scroll-mt-20">
      <SectionHeading
        eyebrow="Services"
        title="A wider set of capabilities."
        body="AI, software, cloud, and automation — delivered as one cohesive system, not disconnected parts."
      />

      {/* Service cards */}
      <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-5">
        {services.map((svc) => (
          <article
            key={svc.id}
            className="group rounded-[2rem] border border-hairline bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_20px_50px_color-mix(in_srgb,var(--accent)_8%,transparent)]"
          >
            <p className="mb-4 font-display text-4xl brand-grad-text opacity-40">{svc.label}</p>
            <h3 className="font-display text-2xl leading-tight">{svc.title}</h3>
            <p className="mt-3 text-base leading-7 text-muted">{svc.summary}</p>
            <ul className="mt-6 space-y-2.5 border-t border-hairline pt-5">
              {svc.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full brand-grad" />
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* How we work */}
      <div className="mt-16 rounded-[2rem] border border-hairline bg-surface p-8 md:p-12">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] brand-grad-text">How we work</p>
        <h3 className="font-display text-3xl md:text-4xl">A delivery flow that actually works.</h3>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">Numbered phases. Real milestones. Working software at every checkpoint — not documentation.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-4 md:gap-10">
          {process.map((step, i) => (
            <div key={step.step} className="relative">
              {i < process.length - 1 && (
                <div className="absolute left-[calc(2.5rem+8px)] top-5 hidden h-[1px] w-[calc(100%-2.5rem-8px)] bg-hairline/60 md:block" />
              )}
              <div className="relative z-10 mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-bg text-xs font-medium brand-grad-text">
                {step.step}
              </div>
              <h4 className="font-display text-lg">{step.title}</h4>
              <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6 flex flex-col gap-4 rounded-[1.5rem] border border-hairline bg-surface px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8 sm:py-6 sm:rounded-[2rem]">
        <div>
          <h3 className="font-display text-2xl">Ready to get started?</h3>
          <p className="mt-1 text-sm text-muted">Tell us about your project and let's find the right fit.</p>
        </div>
        <Button to="#contact" variant="primary">Talk to us</Button>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   #products — COMPACT CARDS THAT EXPAND ON CLICK
   ════════════════════════════════════════════════════════════════════════════ */

function FeatureGrid({ features }: { features: { title: string; body: string }[] }) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
      {features.map((f) => (
        <div key={f.title} className="rounded-[1.25rem] border border-hairline bg-bg p-4 transition-all duration-200 hover:border-[var(--accent)] hover:bg-surface">
          <h4 className="text-sm font-medium">{f.title}</h4>
          <p className="mt-1.5 text-sm leading-6 text-muted">{f.body}</p>
        </div>
      ))}
    </div>
  );
}

type ProductId = 'visiongate' | 'commerce';

function ProductsSection() {
  const { visiongate, commerce } = siteCopy.products;
  const [expanded, setExpanded] = useState<ProductId | null>(null);

  const toggle = (id: ProductId) =>
    setExpanded((prev) => (prev === id ? null : id));

  const vgOpen = expanded === 'visiongate';
  const cmOpen = expanded === 'commerce';

  return (
    <section id="products" className="scroll-mt-20">
      <SectionHeading
        eyebrow="Products"
        title="Built in-house. Ready for yours."
        body="Two production-grade products. Click a card to explore the full feature set."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">

        {/* ── VisionGate card ───────────────────────────────────────── */}
        <div
          className={`group relative overflow-hidden rounded-[1.5rem] border bg-surface transition-all duration-500 sm:rounded-[2rem] ${
            vgOpen
              ? 'border-[color-mix(in_srgb,var(--accent-3)_60%,var(--hairline))]'
              : 'border-hairline hover:border-[var(--accent)] cursor-pointer hover:-translate-y-0.5'
          }`}
          style={{ boxShadow: vgOpen ? '0 24px 60px color-mix(in srgb,var(--accent-3) 12%,transparent)' : undefined }}
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_srgb,var(--accent-3)_8%,transparent),transparent_55%)]" />

          {/* ── COLLAPSED header (always visible) ──────────────────── */}
          <button
            type="button"
            onClick={() => toggle('visiongate')}
            className="relative w-full text-left"
            aria-expanded={vgOpen}
          >
            <div className="flex items-start justify-between gap-3 p-5 pb-4 sm:gap-4 sm:p-6 sm:pb-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] brand-grad-text">{visiongate.tag}</p>
                <h3 className="mt-2 font-display text-xl leading-tight">{visiongate.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted line-clamp-2">{visiongate.summary}</p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-2">
                <span className="rounded-full border border-[var(--accent)] px-3 py-1 text-[9px] uppercase tracking-[0.25em] brand-grad-text">
                  {visiongate.status}
                </span>
                {/* Chevron */}
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-hairline text-muted transition-all duration-300"
                  style={{ transform: vgOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M2 4l4 4 4-4" />
                  </svg>
                </span>
              </div>
            </div>
          </button>

          {/* ── Live demo (always visible) ──────────────────────────── */}
          <div className="px-5 pb-4 sm:px-6 sm:pb-5">
            <VisionGateDemo />
          </div>

          {/* ── EXPANDED details ────────────────────────────────────── */}
          <div
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: vgOpen ? '900px' : '0px', opacity: vgOpen ? 1 : 0 }}
          >
            <div className="border-t border-hairline/50 px-5 pt-5 pb-5 sm:px-6 sm:pb-6">
              {/* Progress stat */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1.5 w-32 overflow-hidden rounded-full bg-hairline">
                  <div className="h-full w-[72%] rounded-full brand-grad" />
                </div>
                <span className="text-xs text-muted">72% adoption across pilot orgs</span>
              </div>
              <FeatureGrid features={visiongate.features} />
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="#contact" variant="primary">Request a demo</Button>
                <Button to="#contact" variant="ghost">Ask a question</Button>
              </div>
            </div>
          </div>
        </div>

        {/* ── NUVAM Commerce card ───────────────────────────────────── */}
        <div
          className={`group relative overflow-hidden rounded-[1.5rem] border bg-surface transition-all duration-500 sm:rounded-[2rem] ${
            cmOpen
              ? 'border-[color-mix(in_srgb,var(--accent-2)_60%,var(--hairline))]'
              : 'border-hairline hover:border-[var(--accent)] cursor-pointer hover:-translate-y-0.5'
          }`}
          style={{ boxShadow: cmOpen ? '0 24px 60px color-mix(in srgb,var(--accent-2) 12%,transparent)' : undefined }}
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_srgb,var(--accent-2)_7%,transparent),transparent_55%)]" />

          {/* ── COLLAPSED header ───────────────────────────────────── */}
          <button
            type="button"
            onClick={() => toggle('commerce')}
            className="relative w-full text-left"
            aria-expanded={cmOpen}
          >
            <div className="flex items-start justify-between gap-3 p-5 pb-4 sm:gap-4 sm:p-6 sm:pb-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] brand-grad-text">{commerce.tag}</p>
                <h3 className="mt-2 font-display text-xl leading-tight">{commerce.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted line-clamp-2">{commerce.summary}</p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-2">
                <span className="rounded-full border border-hairline px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-muted">
                  {commerce.status}
                </span>
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-hairline text-muted transition-all duration-300"
                  style={{ transform: cmOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M2 4l4 4 4-4" />
                  </svg>
                </span>
              </div>
            </div>
          </button>

          {/* ── Live demo ──────────────────────────────────────────── */}
          <div className="px-5 pb-4 sm:px-6 sm:pb-5">
            <CommerceDemo />
          </div>

          {/* ── EXPANDED details ────────────────────────────────────── */}
          <div
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: cmOpen ? '900px' : '0px', opacity: cmOpen ? 1 : 0 }}
          >
            <div className="border-t border-hairline/50 px-5 pt-5 pb-5 sm:px-6 sm:pb-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1.5 w-32 overflow-hidden rounded-full bg-hairline">
                  <div className="h-full w-[85%] rounded-full brand-grad" />
                </div>
                <span className="text-xs text-muted">Partner onboarding in under 2 hours</span>
              </div>
              <FeatureGrid features={commerce.features} />
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="#contact" variant="primary">Become a partner</Button>
                <Button to="#contact" variant="ghost">Get in touch</Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   #about — FOUNDER + VALUES + STUDIO DNA
   ════════════════════════════════════════════════════════════════════════════ */
function AboutSection() {
  const { about } = siteCopy;

  return (
    <section id="about" className="scroll-mt-20">
      <SectionHeading eyebrow="About" title={about.headline} body={about.subheadline} />

      {/* Stats */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-4">
        {about.stats.map((s) => (
          <div key={s.label} className="rounded-[1.5rem] border border-hairline bg-surface p-6">
            <p className="font-display text-2xl brand-grad-text">{s.value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Founder */}
      <div className="mt-6 relative overflow-hidden rounded-[1.5rem] border border-hairline bg-surface p-5 sm:p-8 md:rounded-[2.5rem] md:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_srgb,var(--accent-3)_7%,transparent),transparent_50%)]" />
        <div className="relative grid gap-8 md:grid-cols-[auto_1fr] md:gap-14 md:items-start">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-hairline bg-bg">
            <span className="font-display text-2xl brand-grad-text select-none">N</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] brand-grad-text">{about.founder.role}</p>
            <h3 className="mt-2 font-display text-3xl">{about.founder.name}</h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{about.founder.bio}</p>
            <blockquote className="mt-6 border-l-2 border-[var(--accent)] pl-5 font-display text-xl leading-snug italic text-ink/80">
              "Great technology should feel inevitable — not complicated."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mt-6 grid gap-4 md:grid-cols-2 md:gap-5">
        {about.values.map((v) => (
          <div
            key={v.label}
            className="group rounded-[1.5rem] border border-hairline bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_16px_40px_color-mix(in_srgb,var(--accent)_8%,transparent)] sm:rounded-[2rem] sm:p-8"
          >
            <h3 className="font-display text-xl brand-grad-text">{v.label}</h3>
            <p className="mt-3 text-base leading-7 text-muted">{v.body}</p>
          </div>
        ))}
      </div>

      {/* Studio DNA */}
      <div className="mt-6 rounded-[1.5rem] border border-hairline bg-surface p-5 sm:rounded-[2rem] sm:p-8 md:p-12">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] brand-grad-text">Studio DNA</p>
        <h3 className="font-display text-3xl">Quiet confidence. Lasting work.</h3>
        <div className="mt-8 grid gap-5 md:grid-cols-2 md:gap-8">
          {[
            { title: 'No noise.', body: 'We do not chase trends. We pick the right tools for the right problem and execute without theatre.' },
            { title: 'Everything connected.', body: 'Every service composes — AI into automation, automation into product, product into cloud. One studio, every layer.' },
            { title: 'Skin in the game.', body: 'We built VisionGate and NUVAM Commerce using the same stack and process we bring to clients. We know what works.' },
            { title: 'India-first, globally standard.', body: 'Built for the velocity of the Indian market — designed to compete at any global standard without compromise.' },
          ].map((item) => (
            <div key={item.title} className="border-l-2 border-hairline pl-5 hover:border-[var(--accent)] transition-colors duration-300">
              <h4 className="font-display text-xl">{item.title}</h4>
              <p className="mt-2 text-base leading-7 text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   #contact — FORM + SIDEBAR
   ════════════════════════════════════════════════════════════════════════════ */
const BUDGET_OPTIONS  = ['Under ₹2L', '₹2L – ₹5L', '₹5L – ₹15L', '₹15L – ₹50L', '₹50L+', 'Not sure yet'];
const SERVICE_OPTIONS = ['AI & ML Engineering', 'Automation', 'SaaS Product Engineering', 'Web & App Development', 'Cloud Infrastructure', 'Integration & APIs', 'VisionGate (product)', 'NUVAM Commerce (product)'];

function ContactSection() {
  const { contact } = siteCopy;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const inputCls = 'w-full rounded-full border border-hairline bg-transparent px-4 py-3 text-sm placeholder:text-muted/40 focus:border-[var(--accent)] outline-none transition-colors';
  const selectCls = 'w-full rounded-full border border-hairline bg-surface px-4 py-3 text-sm text-ink appearance-none cursor-pointer focus:border-[var(--accent)] outline-none transition-colors';
  const labelCls = 'block mb-1.5 text-xs uppercase tracking-[0.2em] text-muted';

  return (
    <section id="contact" className="scroll-mt-20 pb-6">
      <SectionHeading eyebrow="Contact" title={contact.headline} body={contact.subheadline} />

      <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_300px] lg:gap-6">
        {/* Form */}
        <div className="rounded-[1.5rem] border border-hairline bg-surface p-5 sm:p-6 md:rounded-[2rem] md:p-10">
          {submitted ? (
            <div className="flex flex-col gap-4 py-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent)] text-xl font-bold brand-grad-text">✓</div>
              <h3 className="font-display text-3xl">Message sent.</h3>
              <p className="text-base leading-7 text-muted">Thank you — we will reply within 24 hours.</p>
              <button
                type="button"
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', service: '', budget: '', message: '' }); }}
                className="mt-2 w-fit text-sm brand-grad-text underline-offset-4 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div><label htmlFor="c-name" className={labelCls}>Name *</label><input id="c-name" name="name" required value={form.name} onChange={onChange} placeholder="Your name" className={inputCls} /></div>
                <div><label htmlFor="c-email" className={labelCls}>Email *</label><input id="c-email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="your@email.com" className={inputCls} /></div>
              </div>
              <div><label htmlFor="c-company" className={labelCls}>Company</label><input id="c-company" name="company" value={form.company} onChange={onChange} placeholder="Where do you work?" className={inputCls} /></div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-service" className={labelCls}>Area of interest</label>
                  <select id="c-service" name="service" value={form.service} onChange={onChange} className={selectCls}><option value="" disabled>Select a service</option>{SERVICE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}</select>
                </div>
                <div>
                  <label htmlFor="c-budget" className={labelCls}>Budget range</label>
                  <select id="c-budget" name="budget" value={form.budget} onChange={onChange} className={selectCls}><option value="" disabled>Select a range</option>{BUDGET_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}</select>
                </div>
              </div>
              <div><label htmlFor="c-msg" className={labelCls}>Project description *</label><textarea id="c-msg" name="message" required rows={5} value={form.message} onChange={onChange} placeholder="Tell us what you are building or trying to solve." className="w-full rounded-[1.5rem] border border-hairline bg-transparent px-4 py-3 text-sm placeholder:text-muted/40 resize-none focus:border-[var(--accent)] outline-none transition-colors" /></div>
              <button type="submit" className="btn-primary inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5">Send message</button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          {[
            { label: 'Email',         node: <a href={`mailto:${contact.details.email}`} className="block text-sm font-medium hover:underline underline-offset-4 transition-colors">{contact.details.email}</a> },
            { label: 'Location',      node: <p className="text-sm">{contact.details.location}</p> },
            { label: 'Response time', node: <><p className="text-sm">{contact.details.responseTime}</p><p className="mt-1 text-xs text-muted/60">Mon – Fri, including most holidays</p></> },
          ].map(({ label, node }) => (
            <div key={label} className="rounded-[1.75rem] border border-hairline bg-surface p-5">
              <p className="mb-2 text-xs uppercase tracking-[0.3em] brand-grad-text">{label}</p>
              {node}
            </div>
          ))}

          <div className="rounded-[1.75rem] border border-hairline bg-surface p-5">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] brand-grad-text">What happens next</p>
            <ol className="space-y-3">
              {['We read your message carefully.', 'We reply with questions or a proposal.', 'If it is a fit, we schedule a call.'].map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-hairline text-[10px] brand-grad-text">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Gradient border CTA */}
          <div className="relative overflow-hidden rounded-[1.75rem] p-px">
            <div className="absolute inset-0 brand-grad rounded-[1.75rem]" />
            <div className="relative rounded-[calc(1.75rem-1px)] bg-surface p-5">
              <p className="font-display text-lg">Ready to build?</p>
              <p className="mt-1 text-sm text-muted">We take on a small number of new projects each quarter.</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
