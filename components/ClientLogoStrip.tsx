'use client';

import { useInView } from '@/hooks/useInView';

const agencies = [
  { name: 'Defense Intelligence Agency', abbr: 'DIA', src: '/logos/DIA.png' },
  { name: 'United States Navy', abbr: 'USN', src: '/logos/USN-removebg-preview.png' },
  { name: 'U.S. Marine Corps', abbr: 'USMC', src: '/logos/USMC.webp' },
  { name: 'U.S. Air Force', abbr: 'USAF', src: '/logos/USAF.png' },
  { name: 'Dept. of Commerce', abbr: 'DOC', src: '/logos/DOC-logo-new.png' },
  { name: 'NOAA', abbr: 'NOAA', src: '/logos/NOAA.png' },
  { name: 'Defense Security Cooperation Agency', abbr: 'DSCA', src: '/logos/DSCA-new.jpg' },
  { name: 'FBI', abbr: 'FBI', src: '/logos/fbi-logo.png' },
];

function AgencySeal({ agency }: { agency: typeof agencies[0] }) {
  return (
    <div
      className="group flex-shrink-0 flex flex-col items-center gap-3 mx-6 cursor-default"
      title={agency.name}
    >
      <div className="w-36 h-36 relative flex items-center justify-center">
        <img
          src={agency.src}
          alt={`${agency.abbr} Logo`}
          className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <span
        className="text-[10px] font-semibold tracking-widest uppercase text-center transition-colors group-hover:text-white"
        style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', maxWidth: '80px' }}
      >
        {agency.abbr}
      </span>
    </div>
  );
}

interface ClientLogoStripProps {
  variant?: 'marquee' | 'grid';
  showLabel?: boolean;
}

export default function ClientLogoStrip({ variant = 'grid', showLabel = true }: ClientLogoStripProps) {
  const { ref, isVisible } = useInView();

  if (variant === 'marquee') {
    const doubled = [...agencies, ...agencies];
    return (
      <div className="overflow-hidden py-6">
        <div className="flex marquee-track">
          {doubled.map((a, i) => (
            <AgencySeal key={i} agency={a} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      {showLabel && (
        <p
          className={`text-center text-xs font-semibold tracking-widest uppercase mb-10 animate-enter ${isVisible ? 'is-visible' : ''}`}
          style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
        >
          Trusted by Agencies Across the Federal Government
        </p>
      )}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {agencies.map((agency, i) => (
          <div
            key={agency.abbr}
            className={`animate-enter ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <AgencySeal agency={agency} />
          </div>
        ))}
      </div>

      {/* Commercial clients */}
      <div
        className={`mt-10 pt-8 flex flex-wrap justify-center gap-3 animate-enter ${isVisible ? 'is-visible' : ''}`}
        style={{
          borderTop: '1px solid var(--border-subtle)',
          transitionDelay: '600ms',
        }}
      >
        {['Billion Dollar Home Builder', 'Multi-Million Dollar Amazon Shipper', 'Securities Brokerage'].map(
          (client) => (
            <span
              key={client}
              className="text-xs px-3 py-1.5 rounded-full font-medium"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-subtle)',
                background: 'var(--bg-surface)',
              }}
            >
              {client}
            </span>
          )
        )}
      </div>
    </div>
  );
}
