import type { PropsWithChildren } from 'react';

type ButtonVariant = 'primary' | 'ghost';

interface ButtonProps {
  /** Anchor hash (#services), mailto:, or external https:// */
  to?: string;
  variant?: ButtonVariant;
  external?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Button({
  to = '#',
  children,
  variant = 'primary',
  external = false,
  onClick,
  className: customClassName = '',
}: PropsWithChildren<ButtonProps>) {
  const primaryClass =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white ' +
    'btn-primary transition-all duration-300 hover:-translate-y-0.5';

  const ghostClass =
    'inline-flex items-center justify-center rounded-full border border-hairline px-5 py-3 text-sm font-semibold text-ink ' +
    'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-[var(--accent)] hover:text-[var(--accent)]';

  const baseClassName = variant === 'primary' ? primaryClass : ghostClass;
  const mergedClassName = `${baseClassName} ${customClassName}`.trim();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
      return;
    }
    // Smooth scroll for anchor links
    if (to.startsWith('#')) {
      e.preventDefault();
      const id = to.slice(1);
      if (id) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <a
      href={to}
      className={mergedClassName}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
