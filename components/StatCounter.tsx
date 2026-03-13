'use client';

import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
}

function Counter({ value, suffix = '', prefix = '', start }: { value: number; suffix?: string; prefix?: string; start: boolean }) {
  const count = useCountUp(value, 1600, start);
  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function StatCounter({ value, suffix = '', prefix = '', label, delay = 0 }: StatCounterProps) {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`text-center animate-enter ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="text-4xl md:text-5xl font-bold mb-2"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
      >
        <Counter value={value} suffix={suffix} prefix={prefix} start={isVisible} />
      </div>
      <p className="text-sm font-medium tracking-wide" style={{ color: 'var(--text-secondary)' }}>
        {label}
      </p>
    </div>
  );
}
