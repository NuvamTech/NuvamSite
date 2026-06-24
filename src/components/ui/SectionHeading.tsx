export function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs uppercase tracking-[0.3em] brand-grad-text">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-none md:text-6xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{body}</p>
    </div>
  );
}
