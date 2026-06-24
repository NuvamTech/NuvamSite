# NUVAM Website — Build Plan (White-Theme Rebuild)

**Stack:** Vite + React + TypeScript + Tailwind CSS v4 + React Three Fiber
**Scope:** Fresh rebuild, 6 pages, white-primary theme, R3F 3D hero retained and re-skinned
**Brand basis:** நுவல் ("to speak into existence") · "Where Innovation Meets Momentum"

---

## 0. Design Stance — Why This Isn't a Template

Every AI-native "services company" brief produces near-identical output right now: a gradient progress line, geometric-sans headlines, rounded-corner card grids, glassmorphism on hover. That was the direction of the first pass of this plan, and it's wrong for NUVAM specifically — not because it's bad design, but because it's *anyone's* design.

**The one fact that makes NUVAM different from every other AI/automation company:** the name நுவல் means *to speak, to utter into existence*. Almost no brief in this space is rooted in language and voice rather than circuitry and gradients. That fact is the brief. Everything below derives from it.

**Explicitly rejected, and why:**
- Uniform-width gradient line as the signature → replaced with a **calligraphic ink-stroke** of variable width, because the brand is about utterance taking form, not data flowing through a pipe.
- Rounded-corner card grids as the default layout unit → replaced with an **asymmetric, baseline-driven layout** that breaks from a strict grid the way handwriting breaks from ruled paper.
- Geometric sans as the "modern tech" display face → replaced with a **serif-led display pairing** with real editorial weight, because this is a brand about words first.
- Glassmorphism / blur / glow as the materiality → replaced with **paper grain + ink-bleed edges**, the literal material of "something written."
- 3D scene as the hero's main event → demoted to **support**, not lead. Typography is the hero. The 3D scene sets atmosphere behind it.

---

## 1. Design System — "The Trace" (Ink-Stroke, Not Gradient Bar)

### Token system

| Role | Value | Notes |
|---|---|---|
| Base (bg) | `#FAF8F3` (warm, slightly warm-grey paper) | Not stark white — has tooth, like uncoated paper |
| Surface (elevated panels) | `#FFFFFF` | Reserved for content that needs to "lift" — used sparingly, not as the default card treatment |
| Ink (primary text + Trace stroke) | `#15140F` | Near-black with a warm cast — literally "ink," used for both text and the signature stroke |
| Accent (used only for live/interactive state, never decoration) | `#C8472E` (terracotta-red, like a wax seal or correction mark) | One accent only. No gradient. Appears on active nav state, link hover, form focus, key CTA fill |
| Hairline (structure) | `#DCD6C9` | Dividers, table rules — drawn, not styled |

This is a **two-tone system with one accent** — ink-on-paper plus a single seal-red — deliberately not a multi-stop gradient palette. Restraint here is what lets the ink-stroke signature read as bold rather than competing with itself.

### Typography

- **Display:** A high-contrast editorial serif with real personality in the italics (e.g. in the *Fraunces* / *Canela* character family) — set large, often in lowercase, sometimes with a single word in italic mid-headline for emphasis, the way you'd underline a word when speaking it aloud. This is the personality carrier.
- **Body:** A quiet, humanist sans (e.g. *Inter* / *Public Sans* class) — kept deliberately neutral so it never competes with the display face. Body copy is the "speaking voice," plain and direct, per the writing principles below.
- **Utility/mono:** Reserved *only* for the Process page step markers and VisionGate technical specs — not sprinkled everywhere as faux-technical decoration.

### The Trace — signature element, rebuilt

The Trace is no longer a vertical gradient div. It is rendered as an **SVG path with variable stroke-width**, generated to look like a single continuous pen/brush stroke — thicker at the "press," thinner at the "lift," with a slightly irregular, hand-drawn wobble (small randomized jitter on the path, not a perfect Bézier).

- On page load, the stroke **draws itself** using `stroke-dashoffset` animation — literally "writing" the brand into existence, tying motion directly to நுவல்'s meaning instead of being a generic reveal animation.
- It runs through the page as a connective thread between sections (Home → Services → Products → Process), thickening slightly at each section anchor like a pause in handwriting.
- Color: solid ink (`#15140F`), not a gradient — its boldness comes from form (the variable width, the wobble) rather than from color.
- This is the one place the design spends its boldness — execution has to be precise: the jitter must look intentional/calligraphic, not like a CSS bug. Build it as a generated SVG path (small seeded-noise offset per anchor point), not hand-coded coordinates.

### 3D Hero — demoted to atmosphere, not lead

- The 3D scene (particle network, PBR objects, camera fly-through) sits **behind** the typographic hero, slightly blurred/desaturated, like a watermark or the texture behind handwriting on textured paper — not a competing focal point.
- **Lighting:** soft, flat, overcast studio HDRI — objects should look like pencil-shaded technical sketches, not glossy product renders. Slight desaturation keeps them from pulling focus from the type.
- **Particle network:** thinned further than the original plan — should read as faint construction-lines/schematic marks at the edge of vision, not a focal starfield.
- Camera fly-through stays, but slowed — it's ambient motion now, not a showcase.
- **Carried-over fix, non-negotiable in this rebuild:** canvas-mount-level `prefers-reduced-motion` gate with a static SVG fallback (the Trace stroke alone, fully drawn, no particles) — since the 3D layer is now atmosphere, the fallback actually looks *better* on this design, not like a degraded experience.

### Layout principle — asymmetry over grid

- Section content is **not** centered in symmetric card grids. Text blocks sit off-axis, anchored to where the Trace stroke passes, the way marginalia sits beside a manuscript line.
- Service/product listings use a **list-with-annotation** structure (like footnotes or a glossary) rather than uniform icon-card tiles — each entry gets unequal visual weight based on what it needs to say, not a forced equal grid cell.
- Numbered markers are used **only** on the Process page, where sequence is real — everywhere else, structure comes from the Trace stroke's position and from typographic hierarchy, not from decorative numerals.

### Motion principles

- One orchestrated load sequence on Home: the Trace stroke draws itself, then headline type fades up word-by-word (not character-scramble — restrained, not gimmicky), then the 3D atmosphere fades in behind.
- Scroll reveals: minimal, 8–10px translate + opacity — the Trace stroke thickening at section anchors *is* the primary scroll feedback, so individual elements don't need their own competing animation.
- Hover: ink-accent underline draw (left-to-right stroke, echoing the signature) instead of card lift/shadow-bloom.

---

## 2. Site Architecture — 6 Pages

```
/                  Home
/services          Services
/products          Products (VisionGate + White-Label E-Commerce)
/about             About / Company
/process           Process & Methodology
/contact           Contact
```

### Home
- Hero: R3F scene + headline + sub + dual CTA ("Explore Services" / "See Products")
- Trace-anchored section preview strip (Services / Products / Process teasers)
- Proof/credibility band (hackathons, programs — ISRO Hackathon, Google Cloud Gen AI Academy — framed as capability signals, not vanity badges)
- Closing CTA → Contact

### Services
- AI & ML engineering
- Automation (workflow/process automation)
- SaaS product engineering
- Web & app development
- Cloud infrastructure
- Presented as a list-with-annotation (glossary-style), each entry getting space proportional to what it needs to say — not five equal icon tiles. Written from the client's side of the problem, not feature-speak.

### Products
- **VisionGate** — AI-powered computer vision attendance management: problem framing, how it works, who it's for
- **White-label e-commerce platform** — positioning for partners/resellers
- Each product sits off-axis against the Trace stroke rather than in a side-by-side card pair; uses the existing PBR object library (camera object for VisionGate, cloud/commerce iconography for the e-commerce platform) as quiet supporting imagery, not the focal point

### About
- Brand story: நுவல் origin, "Where Innovation Meets Momentum"
- India-first, AI-native positioning
- Team/founder framing (Nithin as founder)

### Process
- Methodology walkthrough — **only** use numbered steps here, since this is the one place where sequence is real information (per design-system guidance: numbered markers should encode something true, not decorate)

### Contact
- Direct contact form + company details
- Calm, low-motion page — Trace line terminates here visually (the arc's endpoint)

---

## 3. Technical Architecture

```
src/
├── components/
│   ├── trace/              # The Trace system: TraceLine, TraceProgress, useScrollTrace hook
│   ├── three/               # R3F scene, objects, lighting rigs, camera path
│   │   ├── scene/
│   │   ├── objects/         # microchip, server-rack, camera, satellite, laptop, cloud-globe
│   │   └── hooks/
│   ├── layout/               # Header, Footer, PageShell
│   └── ui/                   # Button, AnnotatedEntry (list-with-annotation unit), SectionHeading — no generic Card component
├── pages/
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── Products.tsx
│   ├── About.tsx
│   ├── Process.tsx
│   └── Contact.tsx
├── content/                   # Copy as data — keeps writing reviewable separately from layout
├── styles/
│   └── tokens.css             # Tailwind v4 @theme tokens — single source of truth for palette/type
├── lib/
│   └── reduced-motion.ts      # prefers-reduced-motion gate, used by 3D canvas + scroll reveals
└── App.tsx / main.tsx / router
```

### Key technical decisions (carried forward / fixed from last session)

1. **ESLint/R3F conflict** — isolate R3F component files under a dedicated lint override block (R3F's JSX intrinsic elements trip the default `react/no-unknown-property` rule); fix at config level once, not file-by-file.
2. **SVG/scroll bugs** — Trace line SVG path recalculation must be driven by a single `useScrollTrace` hook with rAF-throttled scroll listener, not per-component scroll listeners (this was the likely root cause last time).
3. **Section ID collisions** — centralize section IDs as exported constants used by both nav and section components, so there's one source of truth instead of duplicated string literals.
4. **`prefers-reduced-motion` gating** — implement at the canvas-mount level (don't mount the R3F `<Canvas>` at all if the preference is set; swap in a static SVG/image hero), not just by pausing animations within it. This is lighter and fully accessible.
5. **Performance budget** — lazy-load the R3F scene (route-level code splitting so Services/About/Process/Contact never pull Three.js into their bundle).

---

## 4. Build Sequence

| Phase | Work | Depends on |
|---|---|---|
| 1 | Project scaffold: Vite + TS + Tailwind v4 config, design tokens in CSS, routing | — |
| 2 | Design system components (Button, Card, SectionHeading, layout shell) built against tokens | Phase 1 |
| 3 | The Trace system (SVG line, scroll hook, progress sync) on a static page first, before 3D is involved | Phase 2 |
| 4 | R3F scene re-skin: lighting rig, re-import existing PBR objects, particle network rebuild for white | Phase 1 (parallel to 2–3) |
| 5 | `prefers-reduced-motion` gate + static fallback hero | Phase 4 |
| 6 | Home page assembly (hero + sections + Trace integration) | Phases 2, 3, 5 |
| 7 | Services, Products, About, Process, Contact — content-driven pages | Phase 2 |
| 8 | Nav/footer, route transitions, section-ID wiring | Phase 7 |
| 9 | Responsive pass (mobile-down audit), keyboard focus states, lint config fix | All above |
| 10 | Performance pass: route-level code splitting, Lighthouse check, final QA | Phase 9 |

---

## 5. Open Decisions to Confirm Before Coding

- Exact copy for Home hero headline/sub (brand voice: confident, India-first, not generic "AI-powered solutions" boilerplate)
- Whether VisionGate/e-commerce platform need dedicated sub-routes (`/products/visiongate`) or stay as sections on `/products`
- Contact form: static (mailto/form-action) vs. backend-connected — affects Phase 7/10 scope

---

*This plan supersedes the prior dark-theme build. Existing PBR object assets and the CatmullRom camera path logic are reusable; the particle system, lighting rig, and Trace rendering are being rebuilt for the white theme rather than ported.*
