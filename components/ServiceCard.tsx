'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

interface CapabilityCardProps {
  number: string;
  title: string;
  body: string;
  certs: string[];
  href: string;
  delay?: number;
}

export default function CapabilityCard({ number, title, body, certs, href, delay = 0 }: CapabilityCardProps) {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`capability-card relative rounded-lg p-8 min-h-[320px] flex flex-col animate-enter ${isVisible ? 'is-visible' : ''}`}
      style={{
        background: 'var(--bg-surface)',
        borderLeft: '3px solid rgba(136,136,170,0.2)',
        border: '1px solid var(--border-subtle)',
        borderLeftWidth: '3px',
        borderLeftColor: 'rgba(136,136,170,0.2)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Number watermark */}
      <span
        className="absolute top-4 right-6 text-7xl font-bold pointer-events-none select-none"
        style={{
          fontFamily: 'var(--font-display)',
          color: 'var(--text-primary)',
          opacity: 0.04,
          lineHeight: 1,
        }}
      >
        {number}
      </span>

      <div className="flex-1">
        <span
          className="text-[10px] font-semibold tracking-widest uppercase block mb-3"
          style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
        >
          Service {number}
        </span>
        <h3
          className="text-2xl font-bold mb-4"
          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
        >
          {title}
        </h3>
        <p className="text-lg font-medium leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {body}
        </p>
      </div>

      <div className="mt-6 space-y-4">
        {/* Cert pills */}
        <div className="flex flex-wrap gap-2">
          {certs.map((cert) => (
            <span
              key={cert}
              className="text-[10px] px-2 py-1 rounded font-semibold tracking-wider uppercase"
              style={{
                fontFamily: 'var(--font-mono)',
                background: 'var(--accent-blue-dim)',
                color: 'var(--accent-blue)',
                border: '1px solid rgba(0,87,255,0.2)',
              }}
            >
              {cert}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-base font-bold transition-all duration-150 hover:gap-3 group"
          style={{ color: 'var(--accent-blue)' }}
        >
          Explore {title.split('&')[0].trim()}
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
