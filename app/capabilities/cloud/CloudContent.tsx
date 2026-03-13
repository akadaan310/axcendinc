'use client';

import Link from 'next/link';
import { ArrowRight, GitMerge, MonitorDot, TrendingUp, Cloud } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { Database, Server, Settings, Activity } from 'lucide-react';

/* ============================================================
   CUSTOM VISUALS
   ============================================================ */

function CloudMigrationVisual() {
  return (
    <div className="absolute inset-0 bg-[#050C1A] overflow-hidden flex items-center justify-center theme-visual">
      <svg width="100%" height="100%" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>
        <path d="M150 160 Q150 130 180 130 Q200 100 230 120 Q260 120 260 150 Q290 150 290 180 Q290 210 260 210 L150 210 Q120 210 120 180 Q120 160 150 160Z" fill="url(#cloudGrad)" opacity="0.8" />
        <rect x="180" y="240" width="40" height="20" rx="2" fill="#2563EB" opacity="0.3" />
        <rect x="190" y="230" width="20" height="10" fill="#2563EB" opacity="0.5" />
        
        <path d="M200 230 V160 L195 165 M200 160 L205 165" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
        <circle cx="170" cy="180" r="3" fill="white" />
        <circle cx="230" cy="160" r="4" fill="white" opacity="0.5" />
        <circle cx="210" cy="195" r="2" fill="white" opacity="0.8" />
      </svg>
    </div>
  );
}

function ManagedOpsVisual() {
  return (
    <div className="absolute inset-0 bg-[#061114] overflow-hidden flex items-center justify-center theme-visual">
      <svg width="100%" height="100%" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="opsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="#0D9488" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="130" r="60" stroke="#2DD4BF" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="200" cy="130" r="40" stroke="#2DD4BF" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="200" cy="130" r="15" fill="url(#opsGrad)" />
        
        <circle cx="200" cy="60" r="12" fill="#0D9488" opacity="0.6" />
        <rect x="195" y="55" width="10" height="10" fill="white" opacity="0.3" />
        
        <circle cx="270" cy="130" r="12" fill="#0D9488" opacity="0.6" />
        <path d="M265 130 H275 M270 125 V135" stroke="white" strokeWidth="1.5" opacity="0.5" />

        <circle cx="200" cy="200" r="12" fill="#0D9488" opacity="0.6" />
        <circle cx="200" cy="200" r="4" fill="white" opacity="0.3" />

        <circle cx="130" cy="130" r="12" fill="#0D9488" opacity="0.6" />
        <rect x="125" y="128" width="10" height="4" fill="white" opacity="0.3" />
        
        <path d="M200 72 V115 M215 130 H258 M200 145 V188 M185 130 H142" stroke="#2DD4BF" strokeWidth="1" strokeOpacity="0.3" />
      </svg>
    </div>
  );
}

function CloudStrategyVisual() {
  return (
    <div className="absolute inset-0 bg-[#0A0D14] overflow-hidden flex items-center justify-center theme-visual">
      <svg width="100%" height="100%" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="barGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>
        <rect x="100" y="160" width="30" height="60" rx="2" fill="#F59E0B" opacity="0.4" />
        <rect x="150" y="120" width="30" height="100" rx="2" fill="#F59E0B" opacity="0.6" />
        <rect x="200" y="80" width="30" height="140" rx="2" fill="#F59E0B" opacity="0.8" />
        <rect x="250" y="40" width="30" height="180" rx="2" fill="url(#barGrad)" />
        
        <path d="M100 220 L280 220" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.3" />
        <path d="M115 160 L165 120 L215 80 L265 40" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
        
        <circle cx="265" cy="40" r="4" fill="#F59E0B" />
        <circle cx="265" cy="40" r="8" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.4" />
      </svg>
    </div>
  );
}

/* ============================================================
   DATA
   ============================================================ */

const sections = [
  {
    icon: <GitMerge size={24} />,
    eyebrow: 'Cloud Migration',
    imageSrc: '/capabilities/cloud_migration.png',
    customVisual: <CloudMigrationVisual />,
    title: 'Migration Is Architecture. Treat It That Way.',
    body: [
      'We approach every migration as a target-state architecture exercise first, understanding your applications, dependencies, and security requirements before moving a single workload.',
      'Our migration paths minimize downtime and harden the landing zone. We ensure network segmentation, identity federation, and logging are configured before go-live.',
    ],
    bullets: [
      'Target-State Architecture Design',
      'Application Compatibility Assessment',
      'Zero-Downtime Migration Planning',
      'Landing Zone Configuration & Hardening',
      'Network Segmentation & Identity Federation',
      'Data Migration & Integrity Validation',
    ],
  },
  {
    icon: <MonitorDot size={24} />,
    eyebrow: 'Managed Cloud Operations',
    imageSrc: '/capabilities/cloud_operations.png',
    customVisual: <ManagedOpsVisual />,
    title: '7/24/365. Not a Slide Deck — A Service.',
    body: [
      'Cloud environments don\'t take nights off. We provide round-the-clock managed cloud operations—monitoring, incident response, and configuration management—across all major cloud providers.',
      'We proactively identify drift before it becomes a breach and maintain your environments to a defined security baseline. Every environment is documented, instrumented, and auditable.',
    ],
    bullets: [
      '7/24/365 Monitoring & Incident Response',
      'Patch Management & Vulnerability Remediation',
      'Security Configuration Hardening & Baseline Maintenance',
      'AWS · Azure · GCP · Office 365',
      'Cost Optimization & Right-Sizing',
      'Performance Tuning & Capacity Management',
    ],
  },
  {
    icon: <TrendingUp size={24} />,
    eyebrow: 'Cloud Strategy & ROI',
    imageSrc: '/capabilities/cloud_strategy.png',
    customVisual: <CloudStrategyVisual />,
    title: 'Every Cloud Investment Needs a Business Case.',
    body: [
      'Deployed without discipline, cloud infrastructure can cost more than on-premise solutions. We build a clear business case with portfolio assessment and financial modeling before you commit.',
      'Our honest cloud strategy engagements align your spending to measurable mission outcomes—identifying what to move, what to modernize, and what to retire.',
    ],
    bullets: [
      'Cloud Strategy & Roadmap Development',
      'Portfolio Assessment & Workload Classification',
      'Total Cost of Ownership (TCO) Analysis',
      'ROI Financial Modeling',
      'Hybrid Cloud Architecture Planning',
      'Vendor-Neutral Advisory',
    ],
  },
];

const creds = ['AWS', 'Azure', 'GCP', 'Office 365', 'RHCSA'];

/* ============================================================
   SECTION CARD
   ============================================================ */

function SectionCard({
  section,
  index,
}: {
  section: {
    icon: React.ReactNode;
    eyebrow: string;
    imageSrc: string;
    title: string;
    body: string[];
    bullets: string[];
    customVisual?: React.ReactNode;
  };
  index: number;
}) {
  const { ref, isVisible } = useInView();
  const isEven = index % 2 === 0;
  // Create an explicit id from the eyebrow string by replacing to lowercase hyphens
  const sectionId = section.eyebrow.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <div
      id={sectionId}
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`rounded-xl p-10 mb-8 animate-enter ${isVisible ? 'is-visible' : ''} scroll-mt-24`}
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${!isEven ? 'lg:[&>*:first-child]:order-2' : ''}`}
      >
        {/* Text column */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: 'var(--accent-blue-dim)',
                border: '1px solid rgba(0,87,255,0.2)',
                color: 'var(--accent-blue)',
              }}
            >
              {section.icon}
            </div>
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{
                color: 'var(--accent-blue)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {section.eyebrow}
            </span>
          </div>
          <h2
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em',
            }}
          >
            {section.title}
          </h2>
          {section.body.map((para, i) => (
            <p
              key={i}
              className="text-xl font-medium leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Services + placeholder column */}
        <div className="flex flex-col justify-center">
          {/* Feature Visual */}
          <div
            className="rounded-lg mb-6 relative overflow-hidden w-full"
            style={{
              border: '1px solid var(--border-subtle)',
              minHeight: '260px',
              background: 'var(--bg-elevated)',
            }}
          >
            {section.customVisual ? (
              section.customVisual
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img 
                src={section.imageSrc} 
                alt={section.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </div>

          {/* Bullet list */}
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Services
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
            {section.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2 text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span
                  className="w-1 h-1 rounded-full flex-shrink-0 mt-2"
                  style={{ background: 'var(--accent-blue)' }}
                />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE
   ============================================================ */

export default function CloudContent() {
  const { ref: heroRef, isVisible: heroVisible } = useInView();

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[65vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-16 topo-bg"
        style={{ background: 'var(--bg-base)' }}
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: 'var(--accent-blue)', opacity: 0.6 }}
        />

        <div className="max-w-7xl mx-auto w-full">
          <div ref={heroRef as React.RefObject<HTMLDivElement>}>
            <span
              className={`text-xs font-semibold tracking-widest uppercase block mb-4 animate-enter ${heroVisible ? 'is-visible' : ''}`}
              style={{
                color: 'var(--accent-blue)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Cloud Architecture & Migration
            </span>
            <h1
              className={`text-4xl md:text-6xl font-bold mb-6 max-w-4xl animate-enter ${heroVisible ? 'is-visible' : ''}`}
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--text-primary)',
                transitionDelay: '100ms',
                letterSpacing: '-0.02em',
                lineHeight: '1.1',
              }}
            >
              Enterprise Cloud, Engineered for Mission.
            </h1>
            <p
              className={`max-w-2xl text-2xl font-medium leading-relaxed animate-enter ${heroVisible ? 'is-visible' : ''}`}
              style={{ color: 'var(--text-secondary)', transitionDelay: '200ms' }}
            >
              Cloud migration is a strategic transformation. Axcend brings federal-grade discipline with architecture-first, secure, round-the-clock operations.
            </p>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section
        className="py-16 px-6 md:px-12 lg:px-24"
        style={{ background: 'var(--bg-base)' }}
      >
        <div className="max-w-7xl mx-auto">
          {sections.map((s, i) => (
            <SectionCard key={s.eyebrow} section={s} index={i} />
          ))}
        </div>
      </section>

      {/* Credential band */}
      <section
        className="py-10 px-6 md:px-12 lg:px-24 section-divider"
        style={{ background: 'var(--bg-surface)' }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-5 text-center"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Platforms & Certifications
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {creds.map((c) => (
              <span
                key={c}
                className="text-xs px-4 py-2 rounded-full font-semibold tracking-wider uppercase"
                style={{
                  fontFamily: 'var(--font-mono)',
                  background: 'var(--accent-blue-dim)',
                  color: 'var(--accent-blue)',
                  border: '1px solid rgba(0,87,255,0.2)',
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6 md:px-12 lg:px-24 text-center section-divider"
        style={{ background: 'var(--bg-base)' }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-bold mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--text-primary)',
            }}
          >
            Ready to plan your cloud migration?
          </h2>
          <p className="text-xl font-medium mb-8" style={{ color: 'var(--text-secondary)' }}>
            Every engagement starts with an honest assessment of where you are,
            where you need to go, and what it will actually take to get there.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold text-white transition-all hover:opacity-90"
            style={{ background: 'var(--accent-blue)' }}
          >
            Start the Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
