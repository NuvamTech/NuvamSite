import type { PropsWithChildren } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function PageShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen text-ink">
      <Header />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
}
