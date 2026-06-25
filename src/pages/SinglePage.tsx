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
/* Face mesh node positions — maps to a realistic face layout (200×260 viewBox) */
const MESH_NODES = [
  // Jawline
  { x: 38,  y: 200, g: 'jaw'    }, { x: 50,  y: 218, g: 'jaw' },
  { x: 70,  y: 228, g: 'jaw'    }, { x: 100, y: 232, g: 'jaw' },
  { x: 130, y: 228, g: 'jaw'    }, { x: 150, y: 218, g: 'jaw' },
  { x: 162, y: 200, g: 'jaw'    },
  // Cheekbones
  { x: 28,  y: 160, g: 'cheek'  }, { x: 172, y: 160, g: 'cheek' },
  // Temples
  { x: 30,  y: 110, g: 'temple' }, { x: 170, y: 110, g: 'temple' },
  // Forehead
  { x: 60,  y: 52,  g: 'brow'   }, { x: 100, y: 44,  g: 'brow' }, { x: 140, y: 52, g: 'brow' },
  // Left eyebrow
  { x: 56,  y: 100, g: 'lbrow'  }, { x: 72,  y: 94,  g: 'lbrow' }, { x: 88,  y: 96, g: 'lbrow' },
  // Right eyebrow
  { x: 112, y: 96,  g: 'rbrow'  }, { x: 128, y: 94,  g: 'rbrow' }, { x: 144, y: 100, g: 'rbrow' },
  // Left eye
  { x: 66,  y: 116, g: 'leye'   }, { x: 76,  y: 112, g: 'leye' },
  { x: 86,  y: 116, g: 'leye'   }, { x: 76,  y: 122, g: 'leye' },
  // Right eye
  { x: 114, y: 116, g: 'reye'   }, { x: 124, y: 112, g: 'reye' },
  { x: 134, y: 116, g: 'reye'   }, { x: 124, y: 122, g: 'reye' },
  // Nose bridge + tip
  { x: 100, y: 110, g: 'nose'   }, { x: 96,  y: 136, g: 'nose' },
  { x: 100, y: 150, g: 'nose'   }, { x: 104, y: 136, g: 'nose' },
  { x: 88,  y: 152, g: 'nose'   }, { x: 112, y: 152, g: 'nose' },
  // Mouth
  { x: 74,  y: 180, g: 'mouth'  }, { x: 88,  y: 175, g: 'mouth' },
  { x: 100, y: 178, g: 'mouth'  }, { x: 112, y: 175, g: 'mouth' },
  { x: 126, y: 180, g: 'mouth'  }, { x: 100, y: 190, g: 'mouth' },
  // Chin
  { x: 100, y: 222, g: 'chin'   }, { x: 84,  y: 215, g: 'chin' }, { x: 116, y: 215, g: 'chin' },
];

/* Mesh triangulation edges (pairs of node indices) */
const MESH_EDGES: [number, number][] = [
  // Jaw outline
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],
  // Jaw to cheek
  [0,7],[6,8],[7,9],[8,10],
  // Forehead arc
  [9,11],[11,12],[12,13],[13,10],
  // Left brow to temple/jaw
  [9,14],[14,15],[15,16],[16,21],[14,21],
  // Right brow
  [10,17],[17,18],[18,19],[19,24],[17,24],
  // Brow cross
  [15,28],[18,28],
  // Left eye
  [20,21],[21,22],[22,23],[23,20],
  // Right eye
  [24,25],[25,26],[26,27],[27,24],
  // Nose
  [28,29],[29,30],[30,31],[28,31],[29,32],[31,33],[30,32],[30,33],
  // Nose to mouth
  [32,34],[33,38],[30,37],
  // Mouth
  [34,35],[35,36],[36,37],[37,38],[38,39],[36,39],
  // Chin
  [3,40],[40,41],[40,42],[41,3],[42,3],
  // Cheek to jaw/brow fill
  [7,0],[7,14],[8,6],[8,19],[7,34],[8,38],
  [0,14],[6,19],[2,41],[4,42],
];

type VGPhase = 0 | 1 | 2 | 3;

function VisionGateDemo() {
  const [cycle,    setCycle]    = useState(0);
  const [phase,    setPhase]    = useState<VGPhase>(0);
  const [progress, setProgress] = useState(0);
  const [scanY,    setScanY]    = useState(0);
  const [meshReveal, setMeshReveal] = useState(0); // 0–1 fraction of nodes visible

  useEffect(() => {
    setPhase(0);
    setProgress(0);
    setScanY(0);
    setMeshReveal(0);

    const timers: ReturnType<typeof setTimeout>[] = [];
    let rafScan: number;
    let rafMatch: number;
    let rafMesh: number;

    // 0.5 s → phase 1: scan line sweeps top-to-bottom
    timers.push(setTimeout(() => {
      setPhase(1);
      const t0 = performance.now();
      const sweep = (now: number) => {
        const frac = Math.min((now - t0) / 2800, 1);
        setScanY(frac);
        if (frac < 1) rafScan = requestAnimationFrame(sweep);
      };
      rafScan = requestAnimationFrame(sweep);
    }, 500));

    // 3.5 s → phase 2: mesh nodes light up progressively
    timers.push(setTimeout(() => {
      setPhase(2);
      const t0 = performance.now();
      const meshAnim = (now: number) => {
        const p = Math.min((now - t0) / 1800, 1);
        setMeshReveal(p);
        if (p < 1) rafMesh = requestAnimationFrame(meshAnim);
      };
      rafMesh = requestAnimationFrame(meshAnim);
      // progress bar
      const p0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(Math.round(((now - p0) / 2000) * 98), 98);
        setProgress(p);
        if (p < 98) rafMatch = requestAnimationFrame(tick);
      };
      rafMatch = requestAnimationFrame(tick);
    }, 3500));

    // 6.0 s → phase 3: verified
    timers.push(setTimeout(() => setPhase(3), 6000));

    // 8.8 s → restart
    timers.push(setTimeout(() => setCycle(c => c + 1), 8800));

    return () => {
      timers.forEach(clearTimeout);
      if (rafScan)  cancelAnimationFrame(rafScan);
      if (rafMatch) cancelAnimationFrame(rafMatch);
      if (rafMesh)  cancelAnimationFrame(rafMesh);
    };
  }, [cycle]);

  const C = '#5299FF'; // primary scan blue
  const CP = '#9B5FDE'; // purple accent
  const scanPx = scanY * 260; // 0–260 in SVG coords

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-[#1a1830] bg-[#07060f] h-[340px]">

      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(82,153,255,1) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Top status bar */}
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-[#1a1830]/80 flex items-center justify-between px-5 z-10">
        <div className="flex items-center gap-2">
          <span
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${phase >= 1 ? 'bg-[#5299FF]' : 'bg-white/20'}`}
            style={phase >= 1 ? { boxShadow: '0 0 6px 3px rgba(82,153,255,0.6)', animation: 'pulse 2s infinite' } : {}}
          />
          <span className="text-[9px] uppercase tracking-[0.28em] text-white/35">
            {phase === 0 ? 'Initialising…'
              : phase === 1 ? 'Scanning face…'
              : phase === 2 ? `Mapping landmarks — ${progress}%`
              : 'Identity verified'}
          </span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">VisionGate™</span>
      </div>

      {/* Main SVG canvas */}
      <div className="absolute inset-0 top-10 flex items-center justify-center">
        <svg
          viewBox="0 0 200 270"
          width="160"
          height="215"
          fill="none"
          style={{ overflow: 'visible' }}
        >
          {/* ── Face silhouette ─────────────────────────────────────── */}
          {/* Head shape */}
          <ellipse
            cx="100" cy="130" rx="72" ry="90"
            stroke={phase >= 3 ? 'rgba(82,153,255,0.9)' : phase >= 1 ? 'rgba(82,153,255,0.5)' : 'rgba(82,153,255,0.15)'}
            strokeWidth="1.4"
            strokeDasharray={phase >= 3 ? 'none' : '6 3'}
            style={{ transition: 'stroke 0.6s ease' }}
          />

          {/* Left eye almond */}
          <path
            d="M58 116 Q66 108 76 116 Q66 124 58 116Z"
            stroke={phase >= 1 ? 'rgba(82,153,255,0.5)' : 'rgba(82,153,255,0.1)'}
            strokeWidth="1.2"
            style={{ transition: 'stroke 0.5s' }}
          />
          {/* Left iris */}
          <circle cx="68" cy="116" r="4.5"
            stroke={phase >= 1 ? 'rgba(82,153,255,0.45)' : 'rgba(82,153,255,0.08)'}
            strokeWidth="1" style={{ transition: 'stroke 0.5s' }} />
          {/* Left eye tracking box */}
          {phase >= 1 && (
            <rect x="50" y="104" width="38" height="24" rx="3"
              stroke={phase >= 3 ? 'rgba(82,153,255,0.9)' : 'rgba(82,153,255,0.35)'}
              strokeWidth="0.8" strokeDasharray="3 2"
              style={{ transition: 'stroke 0.4s' }} />
          )}

          {/* Right eye almond */}
          <path
            d="M124 116 Q132 108 142 116 Q132 124 124 116Z"
            stroke={phase >= 1 ? 'rgba(82,153,255,0.5)' : 'rgba(82,153,255,0.1)'}
            strokeWidth="1.2"
            style={{ transition: 'stroke 0.5s' }}
          />
          {/* Right iris */}
          <circle cx="133" cy="116" r="4.5"
            stroke={phase >= 1 ? 'rgba(82,153,255,0.45)' : 'rgba(82,153,255,0.08)'}
            strokeWidth="1" style={{ transition: 'stroke 0.5s' }} />
          {/* Right eye tracking box */}
          {phase >= 1 && (
            <rect x="116" y="104" width="38" height="24" rx="3"
              stroke={phase >= 3 ? 'rgba(82,153,255,0.9)' : 'rgba(82,153,255,0.35)'}
              strokeWidth="0.8" strokeDasharray="3 2"
              style={{ transition: 'stroke 0.4s' }} />
          )}

          {/* Nose bridge */}
          <path d="M92 100 L88 148 Q100 155 112 148 L108 100"
            stroke={phase >= 1 ? 'rgba(82,153,255,0.3)' : 'rgba(82,153,255,0.06)'}
            strokeWidth="1" strokeLinecap="round"
            style={{ transition: 'stroke 0.5s' }} />

          {/* Mouth */}
          <path d="M76 180 Q88 172 100 175 Q112 172 124 180"
            stroke={phase >= 1 ? 'rgba(82,153,255,0.35)' : 'rgba(82,153,255,0.07)'}
            strokeWidth="1.2" strokeLinecap="round"
            style={{ transition: 'stroke 0.5s' }} />
          <path d="M82 180 Q100 194 118 180"
            stroke={phase >= 1 ? 'rgba(82,153,255,0.25)' : 'rgba(82,153,255,0.05)'}
            strokeWidth="1" strokeLinecap="round"
            style={{ transition: 'stroke 0.5s' }} />

          {/* Eyebrows */}
          <path d="M54 100 Q68 92 84 96"
            stroke={phase >= 1 ? 'rgba(82,153,255,0.3)' : 'rgba(82,153,255,0.07)'}
            strokeWidth="1.2" strokeLinecap="round"
            style={{ transition: 'stroke 0.5s' }} />
          <path d="M116 96 Q132 92 146 100"
            stroke={phase >= 1 ? 'rgba(82,153,255,0.3)' : 'rgba(82,153,255,0.07)'}
            strokeWidth="1.2" strokeLinecap="round"
            style={{ transition: 'stroke 0.5s' }} />

          {/* ── Facial mesh edges ────────────────────────────────────── */}
          {(phase === 2 || phase === 3) && MESH_EDGES.map(([a, b], i) => {
            const na = MESH_NODES[a], nb = MESH_NODES[b];
            const revealed = meshReveal > i / MESH_EDGES.length;
            return (
              <line
                key={i}
                x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                stroke={phase === 3 ? `rgba(82,153,255,0.22)` : `rgba(82,153,255,0.14)`}
                strokeWidth="0.6"
                style={{ opacity: revealed ? 1 : 0, transition: 'opacity 0.15s' }}
              />
            );
          })}

          {/* ── Mesh nodes ───────────────────────────────────────────── */}
          {(phase === 2 || phase === 3) && MESH_NODES.map((n, i) => {
            const revealed = meshReveal > i / MESH_NODES.length;
            const isKey = ['leye','reye','nose','mouth'].includes(n.g);
            return (
              <circle
                key={i}
                cx={n.x} cy={n.y}
                r={isKey ? 1.8 : 1.2}
                fill={phase === 3 ? C : `rgba(82,153,255,0.8)`}
                style={{
                  opacity: revealed ? 1 : 0,
                  filter: isKey ? `drop-shadow(0 0 3px ${C})` : undefined,
                  transition: 'opacity 0.12s',
                }}
              />
            );
          })}

          {/* ── Scan laser line (phase 1) ─────────────────────────────── */}
          {phase === 1 && (
            <>
              {/* Laser beam */}
              <line
                x1="18" y1={scanPx} x2="182" y2={scanPx}
                stroke="url(#scanGrad)"
                strokeWidth="1.8"
              />
              {/* Soft glow below */}
              <rect x="18" y={scanPx} width="164" height="10"
                fill="url(#scanGlow)" opacity="0.3" />
              <defs>
                <linearGradient id="scanGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="25%" stopColor={C} />
                  <stop offset="50%" stopColor={CP} />
                  <stop offset="75%" stopColor={C} />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
                <linearGradient id="scanGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={C} stopOpacity="0.5" />
                  <stop offset="100%" stopColor={C} stopOpacity="0" />
                </linearGradient>
              </defs>
            </>
          )}

          {/* ── Corner brackets ───────────────────────────────────────── */}
          {/* Top-left */}
          <path d="M22 50 L22 40 L32 40" stroke={phase >= 1 ? 'rgba(82,153,255,0.7)' : 'rgba(82,153,255,0.15)'} strokeWidth="1.5" strokeLinecap="round" style={{ transition: 'stroke 0.5s' }} />
          {/* Top-right */}
          <path d="M168 50 L168 40 L158 40" stroke={phase >= 1 ? 'rgba(82,153,255,0.7)' : 'rgba(82,153,255,0.15)'} strokeWidth="1.5" strokeLinecap="round" style={{ transition: 'stroke 0.5s' }} />
          {/* Bottom-left */}
          <path d="M22 228 L22 238 L32 238" stroke={phase >= 1 ? 'rgba(82,153,255,0.7)' : 'rgba(82,153,255,0.15)'} strokeWidth="1.5" strokeLinecap="round" style={{ transition: 'stroke 0.5s' }} />
          {/* Bottom-right */}
          <path d="M168 228 L168 238 L158 238" stroke={phase >= 1 ? 'rgba(82,153,255,0.7)' : 'rgba(82,153,255,0.15)'} strokeWidth="1.5" strokeLinecap="round" style={{ transition: 'stroke 0.5s' }} />

          {/* ── Verified overlay (phase 3) ────────────────────────────── */}
          {phase >= 3 && (
            <g style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 0.6s' }}>
              <circle cx="100" cy="130" r="30"
                fill="rgba(82,153,255,0.07)"
                stroke="rgba(82,153,255,0.8)"
                strokeWidth="1.5" />
              <text x="100" y="138" textAnchor="middle"
                fontSize="20" fontWeight="bold"
                fill={C}
                style={{ filter: `drop-shadow(0 0 8px ${C})` }}>
                ✓
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Eye glow blobs (ambient, phases 2–3) */}
      {(phase === 2 || phase === 3) && (
        <>
          <div className="absolute pointer-events-none rounded-full"
            style={{ width: 30, height: 14, background: `radial-gradient(ellipse,rgba(82,153,255,0.25),transparent 70%)`,
              top: 'calc(50% - 32px)', left: 'calc(50% - 68px)', transform: 'translate(-50%,-50%)' }} />
          <div className="absolute pointer-events-none rounded-full"
            style={{ width: 30, height: 14, background: `radial-gradient(ellipse,rgba(82,153,255,0.25),transparent 70%)`,
              top: 'calc(50% - 32px)', left: 'calc(50% + 24px)', transform: 'translate(-50%,-50%)' }} />
        </>
      )}

      {/* Bottom status */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-3 border-t border-[#1a1830]/60 space-y-2">
        <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.22em]">
          <span className="text-white/35">
            {phase <= 1 ? 'Face detection active' : phase === 2 ? `Landmark mapping: ${progress}%` : 'Identity verified — access granted'}
          </span>
          {phase === 3 && <span className="text-[#5299FF] font-medium">✓ Authorised</span>}
        </div>
        <div className="h-[3px] rounded-full overflow-hidden bg-white/[0.07]">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: phase === 0 ? '3%' : phase === 1 ? `${Math.round(scanY * 40)}%` : phase === 2 ? `${progress}%` : '100%',
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
    <div className="mx-auto max-w-7xl px-6 pb-10">
      <HomeSection />
      <ServicesSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   #home — HERO + FEATURE STRIP  (redesigned)
   ════════════════════════════════════════════════════════════════════════════ */
const homeStats = [
  { value: '6',           label: 'Service areas',          icon: '◈' },
  { value: '2',           label: 'Products in production',  icon: '◉' },
  { value: 'AI-native',   label: 'Core capability',         icon: '◆' },
  { value: 'India-first', label: 'Studio origin',           icon: '◇' },
];

function HomeSection() {
  return (
    <section id="home" className="scroll-mt-20 pt-0">

      {/* ── HERO CARD ─────────────────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-[2rem] bg-surface md:rounded-[2.5rem]"
        style={{ boxShadow: '0 40px 100px color-mix(in srgb, var(--accent) 8%, transparent), 0 2px 0 color-mix(in srgb, var(--hairline) 60%, transparent)' }}
      >
        {/* ── Animated gradient orbs ─────────────────────────────── */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Orb 1 — blue, top-right */}
          <div className="absolute -top-32 -right-24 h-[480px] w-[480px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(41,121,255,0.18) 0%, rgba(41,121,255,0.06) 40%, transparent 70%)',
              animation: 'heroOrb1 9s ease-in-out infinite',
            }}
          />
          {/* Orb 2 — purple, center */}
          <div className="absolute top-1/3 left-1/4 h-[380px] w-[380px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(123,47,190,0.14) 0%, rgba(123,47,190,0.05) 45%, transparent 70%)',
              animation: 'heroOrb2 12s ease-in-out infinite',
            }}
          />
          {/* Orb 3 — pink, bottom-left */}
          <div className="absolute -bottom-24 -left-16 h-[340px] w-[340px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(233,30,140,0.13) 0%, rgba(233,30,140,0.04) 45%, transparent 70%)',
              animation: 'heroOrb3 10s ease-in-out infinite',
            }}
          />
          {/* Orb 4 — gold, bottom-right */}
          <div className="absolute bottom-0 right-8 h-[220px] w-[220px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,185,0,0.08) 0%, transparent 70%)',
              animation: 'heroOrb1 14s ease-in-out infinite reverse',
            }}
          />
        </div>

        {/* ── Content ───────────────────────────────────────────────── */}
        <div className="relative px-6 pt-6 pb-0 sm:px-10 md:px-16 md:pt-10">

          {/* Eyebrow badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-hairline/60 bg-bg/60 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--brand-grad)' }} />
            <span className="text-[10px] uppercase tracking-[0.45em] font-medium text-muted">NUVAM Tech Hub</span>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-[4.5rem] lg:text-[5.25rem]">
            {siteCopy.heroTitle}
          </h1>

          {/* Subheadline */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:mt-7 sm:text-lg sm:leading-8">
            {siteCopy.heroSubtitle}
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button to="#services" variant="primary">Explore Services</Button>
            <Button to="#products" variant="ghost">See Products</Button>
            {/* Trusted-by text */}
            <p className="text-xs text-muted/60 sm:ml-2">
              <span className="font-medium text-ink/70">India-built</span> · globally shipped
            </p>
          </div>

          {/* Stats row */}
          <div className="mt-10 grid grid-cols-2 gap-3 border-t border-hairline/40 pt-8 sm:grid-cols-4 md:gap-4">
            {homeStats.map((s) => (
              <div key={s.label} className="group flex flex-col gap-1">
                <p className="font-display text-2xl font-medium text-ink sm:text-3xl">{s.value}</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative bottom fade */}
        <div className="pointer-events-none h-8" />

        {/* ── Dynamic gradient border ─────────────────────────────── */}
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] md:rounded-[2.5rem]" style={{ border: '1px solid transparent', backgroundImage: 'var(--brand-grad)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   #services — COLLAPSIBLE SERVICE CARDS + PROCESS TIMELINE
   ════════════════════════════════════════════════════════════════════════════ */
function ServicesSection() {
  const { services, process } = siteCopy;
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="services" className="scroll-mt-20 pt-12 md:pt-16">
      <SectionHeading
        eyebrow="Services"
        title="A wider set of capabilities."
        body="AI, software, cloud, and automation — delivered as one cohesive system, not disconnected parts."
      />

      {/* Collapsible service cards */}
      <div className="mt-8 grid gap-3 md:grid-cols-2 md:gap-4">
        {services.map((svc) => {
          const isOpen = openId === svc.id;
          return (
            <article
              key={svc.id}
              className={`relative overflow-hidden rounded-[1.75rem] border bg-surface transition-all duration-400 sm:rounded-[2rem] ${
                isOpen
                  ? 'border-[color-mix(in_srgb,var(--accent)_55%,var(--hairline))] shadow-[0_20px_60px_color-mix(in_srgb,var(--accent)_9%,transparent)]'
                  : 'border-hairline hover:border-[var(--accent)/50] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_color-mix(in_srgb,var(--accent)_5%,transparent)] cursor-pointer'
              }`}
            >
              {/* Ambient glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_srgb,var(--accent)_5%,transparent),transparent_60%)]" />

              {/* Service image */}
              {svc.image && (
                <div className="relative h-40 w-full overflow-hidden">
                  <img src={svc.image} alt={svc.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
                </div>
              )}

              {/* Always-visible header — click to toggle */}
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : svc.id)}
                className="relative w-full text-left px-6 pt-6 pb-5 sm:px-8 sm:pt-7 sm:pb-6"
                aria-expanded={isOpen}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="mb-2 font-display text-3xl brand-grad-text opacity-35 leading-none">{svc.label}</p>
                    <h3 className="font-display text-xl leading-tight">{svc.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted line-clamp-2">{svc.summary}</p>
                  </div>
                  {/* Expand chevron */}
                  <span
                    className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline text-muted transition-all duration-300"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', borderColor: isOpen ? 'var(--accent)' : undefined, color: isOpen ? 'var(--accent)' : undefined }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M2 4l4 4 4-4" />
                    </svg>
                  </span>
                </div>

                {/* Tags / pill row */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {svc.bullets.slice(0, 2).map((b) => (
                    <span key={b} className="rounded-full border border-hairline px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-muted">
                      {b.split(' ').slice(0, 3).join(' ')}
                    </span>
                  ))}
                  {!isOpen && svc.bullets.length > 2 && (
                    <span className="rounded-full border border-hairline px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] brand-grad-text">
                      +{svc.bullets.length - 2} more
                    </span>
                  )}
                </div>
              </button>

              {/* Expandable bullets */}
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }}
              >
                <div className="border-t border-hairline/50 px-6 pt-5 pb-6 sm:px-8 sm:pb-7">
                  <ul className="space-y-2.5">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-muted">
                        <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full brand-grad" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex gap-3">
                    <Button to="#contact" variant="primary">Get in touch</Button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-4 flex flex-col gap-4 rounded-[1.5rem] border border-hairline bg-surface px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8 sm:py-5 sm:rounded-[2rem]">
        <div>
          <h3 className="font-display text-xl">Ready to get started?</h3>
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
    <section id="products" className="scroll-mt-20 pt-12 md:pt-16">
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
    <section id="about" className="scroll-mt-20 pt-12 md:pt-16">
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
    <section id="contact" className="scroll-mt-20 pt-12 md:pt-16">
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
