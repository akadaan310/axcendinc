'use client';

import { ArrowRight, BookOpen } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

interface BookCardProps {
  title: string;
  subtitle?: string;
  description: string;
  audience: string;
  href?: string;
  delay?: number;
  accentColor?: string;
  image?: string;
}

export default function BookCard({
  title,
  subtitle,
  description,
  audience,
  href = '#',
  delay = 0,
  accentColor = 'var(--accent-blue)',
  image,
}: BookCardProps) {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`book-card rounded-lg p-6 flex flex-col animate-enter ${isVisible ? 'is-visible' : ''}`}
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Book cover / placeholder */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full aspect-[3/4] rounded-md mb-6 flex items-center justify-center relative overflow-hidden group block"
        style={{
          background: `linear-gradient(135deg, var(--bg-elevated) 0%, rgba(0,87,255,0.1) 100%)`,
          border: '1px solid var(--border-subtle)',
          maxHeight: '340px',
        }}
      >
        {image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <BookOpen size={40} style={{ color: accentColor, opacity: 0.4 }} />
        )}
        <div
          className="absolute bottom-0 left-0 right-0 p-3"
          style={{ background: 'linear-gradient(to top, rgba(12,12,26,0.9) 0%, transparent 100%)' }}
        >
          <p className="text-xs font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
            {title}
          </p>
        </div>
      </a>

      <div className="flex-1 flex flex-col">
        <span
          className="text-[10px] font-semibold tracking-widest uppercase mb-2"
          style={{ color: accentColor, fontFamily: 'var(--font-mono)' }}
        >
          Technical Book · Ray Rafaels
        </span>
        <h3
          className="font-semibold mb-1 leading-snug"
          style={{ color: 'var(--text-primary)', fontSize: '1rem' }}
        >
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
            {subtitle}
          </p>
        )}
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>

        <div
          className="p-3 rounded mb-5"
          style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}
        >
          <p className="text-xs font-semibold mb-1" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
            WHO SHOULD READ THIS
          </p>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {audience}
          </p>
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
          style={{ color: accentColor }}
        >
          Look Inside <ArrowRight size={13} />
        </a>
      </div>
    </div>
  );
}
