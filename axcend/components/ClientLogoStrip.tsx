'use client';

import { useInView } from '@/hooks/useInView';

const agencies = [
  { name: 'Defense Intelligence Agency', abbr: 'DIA' },
  { name: 'United States Navy', abbr: 'USN' },
  { name: 'U.S. Marine Corps', abbr: 'USMC' },
  { name: 'U.S. Air Force', abbr: 'USAF' },
  { name: 'Dept. of Commerce', abbr: 'DOC' },
  { name: 'NOAA', abbr: 'NOAA' },
  { name: 'Defense Security Cooperation Agency', abbr: 'DSCA' },
];

function AgencySeal({ abbr, name }: { abbr: string; name: string }) {
  return (
    <div
      className="group flex-shrink-0 flex flex-col items-center gap-2 mx-6 cursor-default"
      title={name}
    >
      {/* SVG placeholder seal */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          border: '2px solid rgba(136,136,170,0.2)',
          background: 'rgba(136,136,170,0.05)',
          filter: 'grayscale(1) brightness(1.4)',
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <path d="M20 8 L22 16 L30 16 L24 21 L26 29 L20 24 L14 29 L16 21 L10 16 L18 16 Z"
            fill="currentColor" opacity="0.25" />
        </svg>
      </div>
      <span
        className="text-[10px] font-semibold tracking-widest uppercase text-center"
        style={{ color: 'rgba(136,136,170,0.6)', fontFamily: 'var(--font-mono)', maxWidth: '80px' }}
      >
        {abbr}
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
            <AgencySeal key={i} abbr={a.abbr} name={a.name} />
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
            <AgencySeal abbr={agency.abbr} name={agency.name} />
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
