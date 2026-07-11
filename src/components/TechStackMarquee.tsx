
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
        className="flex items-center gap-3 select-none group cursor-default"
      >
        <div 
          className="h-12 w-12 flex items-center justify-center rounded-xl p-2 bg-surface border border-hairline/40 shadow-xs
                     transition-all duration-300 ease-out
                     group-hover:scale-110 group-hover:shadow-md group-hover:border-[var(--accent)]/40
                     group-hover:-translate-y-1"
        >
          <img 
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.path}`} 
            alt={`${tech.name} logo`}
            className={`w-8 h-8 object-contain transition-transform duration-300 ${tech.darkInvert ? 'dark:brightness-200 dark:contrast-200 dark:invert' : ''}`}
            loading="lazy"
          />
        </div>
        <span className="text-sm font-semibold tracking-wide text-ink/70 group-hover:text-[var(--accent)] transition-colors duration-200">
          {tech.name}
        </span>
      </div>
    );
  };

  return (
    <section className="w-full border-y border-hairline/50 bg-surface/30 py-8 my-4 backdrop-blur-xs" aria-label="Technology stack">
      <div className="relative w-full overflow-hidden">
        {/* Gradient fade on left & right */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-bg to-transparent" />
        
        {/* Track containing 2 copies for seamless loop — pauses on hover */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
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

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}