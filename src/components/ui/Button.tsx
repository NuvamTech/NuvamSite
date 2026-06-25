import type { PropsWithChildren } from 'react';

type ButtonVariant = 'primary' | 'ghost';

interface ButtonProps {
  /** Anchor hash (#services), mailto:, or external https:// */
  to: string;
  variant?: ButtonVariant;
  external?: boolean;
  onClick?: () => void;
}

export function Button({
  to,
  children,
  variant = 'primary',
  external = false,
  onClick,
}: PropsWithChildren<ButtonProps>) {
  const primaryClass =
    'inline-flex items-center rounded-full px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,109,59,0.35)]'
    + ' bg-[#ff6d3b]';

  const ghostClass =
    'inline-flex items-center rounded-full border border-hairline px-5 py-3 text-sm text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]';

  const className = variant === 'primary' ? primaryClass : ghostClass;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
      return;
    }
    // Smooth scroll for anchor links
    if (to.startsWith('#')) {
      e.preventDefault();
      const id = to.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={to}
      className={className}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
