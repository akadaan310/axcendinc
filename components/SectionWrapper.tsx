import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  divider?: boolean;
  id?: string;
  variant?: 'base' | 'surface' | 'elevated' | 'navy';
  noPad?: boolean;
}

export default function SectionWrapper({
  children,
  className = '',
  divider = false,
  id,
  variant = 'base',
  noPad = false,
}: SectionWrapperProps) {
  const bgMap = {
    base: '',
    surface: 'bg-[var(--bg-surface)]',
    elevated: 'bg-[var(--bg-elevated)]',
    navy: 'bg-[#0A1628]',
  };

  return (
    <section
      id={id}
      className={`
        ${noPad ? '' : 'py-24 md:py-32'}
        px-6 md:px-12 lg:px-24
        ${bgMap[variant]}
        ${divider ? 'section-divider' : ''}
        ${className}
      `}
    >
      {children}
    </section>
  );
}
