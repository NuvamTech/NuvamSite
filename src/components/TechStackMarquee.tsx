
const TECH_STACK = [
  // Core Web / App Languages
  { name: 'HTML5', path: 'html5/html5-original.svg', color: '#E34F26' },
  { name: 'CSS3', path: 'css3/css3-original.svg', color: '#1572B6' },
  { name: 'JavaScript', path: 'javascript/javascript-original.svg', color: '#F7DF1E' },
  { name: 'TypeScript', path: 'typescript/typescript-original.svg', color: '#3178C6' },
  { name: 'Java', path: 'java/java-original.svg', color: '#EA2D2E' },
  { name: 'Kotlin', path: 'kotlin/kotlin-original.svg', color: '#7F52FF' },
  { name: 'Swift', path: 'swift/swift-original.svg', color: '#F05138' },
  { name: 'Python', path: 'python/python-original.svg', color: '#3776AB' },
  
  // Frameworks / Runtimes
  { name: 'React', path: 'react/react-original.svg', color: '#61DAFB' },
  { name: 'React Native', path: 'react/react-original.svg', color: '#61DAFB' },
  { name: 'Flutter', path: 'flutter/flutter-original.svg', color: '#02569B' },
  { name: 'Next.js', path: 'nextjs/nextjs-original.svg', color: '#888888', darkInvert: true },
  { name: 'Node.js', path: 'nodejs/nodejs-original.svg', color: '#339933' },
  { name: 'Tailwind', path: 'tailwindcss/tailwindcss-original.svg', color: '#38BDF8' },
  
  // Tools / AI / Databases / Cloud
  { name: 'PyTorch', path: 'pytorch/pytorch-original.svg', color: '#EE4C2C' },
  { name: 'TensorFlow', path: 'tensorflow/tensorflow-original.svg', color: '#FF6F00' },
  { name: 'Git', path: 'git/git-original.svg', color: '#F05032' },
  { name: 'Figma', path: 'figma/figma-original.svg', color: '#F24E1E' },
  { name: 'Docker', path: 'docker/docker-original.svg', color: '#2496ED' },
  { name: 'GraphQL', path: 'graphql/graphql-plain.svg', color: '#E10098' },
  { name: 'Firebase', path: 'firebase/firebase-original.svg', color: '#FFCA28' },
  { name: 'PostgreSQL', path: 'postgresql/postgresql-original.svg', color: '#336791' },
  { name: 'MongoDB', path: 'mongodb/mongodb-original.svg', color: '#47A248' },
  { name: 'AWS', path: 'amazonwebservices/amazonwebservices-original-wordmark.svg', color: '#FF9900', darkInvert: true },
  { name: 'Azure', path: 'azure/azure-original.svg', color: '#0078D4' },
  { name: 'GCP', path: 'googlecloud/googlecloud-original.svg', color: '#4285F4' },
];

export function TechStackMarquee() {
  const renderItem = (tech: typeof TECH_STACK[0], index: number, copyId: string) => {
    return (
      <div 
        key={`${copyId}-${index}`} 
        className="flex items-center gap-3 select-none group cursor-pointer"
        style={{ '--tech-color': tech.color } as React.CSSProperties}
      >
        <div 
          className="h-12 w-12 flex items-center justify-center rounded-xl p-2 bg-surface border border-hairline/40 shadow-xs
                     transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                     group-hover:scale-115 group-hover:shadow-[0_0_25px_rgba(var(--tech-color-rgb),0.3)]
                     group-hover:border-[var(--tech-color)]/60
                     group-hover:-translate-y-1.5 relative overflow-hidden"
          style={{
            boxShadow: `hover:0 10px 25px -5px ${tech.color}40`
          }}
        >
          {/* Subtle hover glow backdrop inside the card */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
            style={{ backgroundColor: tech.color }}
          />
          <img 
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.path}`} 
            alt={`${tech.name} logo`}
            className={`w-8 h-8 object-contain transition-transform duration-300 group-hover:rotate-6 ${tech.darkInvert ? 'dark:brightness-200 dark:contrast-200 dark:invert' : ''}`}
            loading="lazy"
          />
        </div>
        <span 
          className="text-sm font-semibold tracking-wide text-ink/70 transition-all duration-300"
          style={{
            color: 'var(--color-ink-70)'
          }}
        >
          <span className="group-hover:text-[var(--tech-color)] transition-colors duration-300">
            {tech.name}
          </span>
        </span>
      </div>
    );
  };

  return (
    <section className="w-full border-y border-hairline/50 bg-surface/30 my-4 backdrop-blur-xs" aria-label="Technology stack">
      <div className="relative w-full overflow-hidden marquee-container py-8">
        {/* Gradient fade on left & right */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-bg to-transparent" />
        
        {/* Track containing 2 copies for seamless loop — pauses on hover */}
        <div className="flex w-max animate-marquee marquee-track">
          {/* First copy */}
          <div className="flex items-center gap-16 px-8">
            {TECH_STACK.map((tech, i) => renderItem(tech, i, 'first'))}
          </div>
          
          {/* Second copy */}
          <div className="flex items-center gap-16 px-8">
            {TECH_STACK.map((tech, i) => renderItem(tech, i, 'second'))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 50s linear infinite;
        }

        /* Pause animation on hover */
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }

        /* Depth of field effect: fade and blur other items when one is hovered */
        .marquee-track:hover .group:not(:hover) {
          opacity: 0.35;
          filter: grayscale(0.4) blur(0.5px);
          transform: scale(0.92);
        }

        .group {
          transition: opacity 0.4s ease, filter 0.4s ease, transform 0.4s ease;
        }

        /* Advanced dynamic glows */
        .group:hover div {
          box-shadow: 0 10px 30px -5px var(--tech-color), 0 0 15px -3px var(--tech-color);
        }
      `}</style>
    </section>
  );
}