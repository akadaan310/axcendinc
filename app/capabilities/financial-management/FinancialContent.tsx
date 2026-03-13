'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Settings, Search } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

/* ============================================================
   CUSTOM VISUALS
   ============================================================ */

function MethodologyVisual() {
  return (
    <div className="absolute inset-0 bg-[#0A0905] overflow-hidden flex items-center justify-center theme-visual">
      <svg width="100%" height="100%" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C49A2A" />
            <stop offset="100%" stopColor="#8A6D1F" />
          </linearGradient>
        </defs>
        <rect x="50" y="100" width="80" height="60" rx="4" fill="#141005" stroke="#C49A2A" strokeWidth="1" />
        <text x="65" y="135" fill="#C49A2A" fontSize="10" fontFamily="monospace">PLAN</text>
        
        <rect x="160" y="100" width="80" height="60" rx="4" fill="#141005" stroke="url(#goldGrad)" strokeWidth="2" />
        <text x="172" y="135" fill="#C49A2A" fontSize="10" fontFamily="monospace">AUDIT</text>
        
        <rect x="270" y="100" width="80" height="60" rx="4" fill="#141005" stroke="#C49A2A" strokeWidth="1" />
        <text x="282" y="135" fill="#C49A2A" fontSize="10" fontFamily="monospace">REPORT</text>
        
        <path d="M130 130 H160 M240 130 H270" stroke="#C49A2A" strokeWidth="1" />
        <path d="M150 125 L160 130 L150 135" fill="#C49A2A" />
        <path d="M260 125 L270 130 L260 135" fill="#C49A2A" />
      </svg>
    </div>
  );
}

function SystemControlsVisual() {
  return (
    <div className="absolute inset-0 bg-[#0D0B04] overflow-hidden flex items-center justify-center theme-visual">
      <svg width="100%" height="100%" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="stackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C49A2A" />
            <stop offset="100%" stopColor="#8A6D1F" />
          </linearGradient>
        </defs>
        <path d="M100 180 L200 140 L300 180 L200 220 Z" fill="#1A150A" stroke="#C49A2A" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M100 140 L200 100 L300 140 L200 180 Z" fill="#1A150A" stroke="#C49A2A" strokeWidth="1" strokeOpacity="0.7" />
        <path d="M100 100 L200 60 L300 100 L200 140 Z" fill="url(#stackGrad)" stroke="#C49A2A" strokeWidth="2" fillOpacity="0.8" />
        
        <circle cx="200" cy="100" r="10" fill="white" opacity="0.3" />
        <path d="M190 100 L210 100 M200 90 V110" stroke="white" strokeWidth="1" opacity="0.5" />
      </svg>
    </div>
  );
}

function AuditScopeVisual() {
  return (
    <div className="absolute inset-0 bg-[#0A0905] overflow-hidden flex items-center justify-center theme-visual">
      <svg width="100%" height="100%" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="auditGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C49A2A" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#C49A2A" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="260" fill="url(#auditGrad)" />
        <circle cx="200" cy="130" r="90" stroke="#C49A2A" strokeWidth="0.5" strokeOpacity="0.1" />
        <circle cx="200" cy="130" r="60" stroke="#C49A2A" strokeWidth="0.5" strokeOpacity="0.2" />
        <circle cx="200" cy="130" r="30" stroke="#C49A2A" strokeWidth="1" strokeOpacity="0.5" />
        
        <path d="M200 40 V130 L280 60" stroke="#C49A2A" strokeWidth="2" strokeOpacity="0.6" strokeDasharray="4 4" />
        <circle cx="200" cy="40" r="5" fill="#C49A2A" />
        <circle cx="280" cy="60" r="5" fill="#C49A2A" />
        <circle cx="240" cy="180" r="5" fill="#C49A2A" opacity="0.4" />
      </svg>
    </div>
  );
}

/* ============================================================
   DATA
   ============================================================ */

const sections = [
  {
    icon: <BookOpen size={24} />,
    eyebrow: 'Audit Methodology',
    customVisual: <MethodologyVisual />,
    title: 'FISCAM Methodology. Built for the Federal Standard.',
    body: [
      'Built on the FISCAM framework, our audit practice distinguishes between a compliance checkbox and a control that operates effectively under real-world Federal conditions.',
      'Unlike traditional firms, our auditors analyze the full environment—infrastructure, security configuration, and network architecture—producing findings that are credible, defensible, and actionable.',
    ],
    bullets: [
      'FISCAM-Based Audit Methodology',
      'General Controls (FISCAM Sections 2-6)',
      'Application-Level Controls',
      'Audit Planning & Scoping',
      'Walkthrough & Testing Procedures',
      'Senior Leadership Reporting',
    ],
  },
  {
    icon: <Settings size={24} />,
    eyebrow: 'Financial System Controls',
    customVisual: <SystemControlsVisual />,
    title: 'Financial System Controls. Technical Layer Included.',
    body: [
      'The integrity of financial data relies on secure servers, strong network access controls, and operating environment posture. Axcend audits the complete technical stack.',
      'We evaluate controls exactly as they operate, surfacing gaps between policy and reality with actionable findings, root cause analysis, and risk-prioritized remediation recommendations.',
    ],
    bullets: [
      'Information System Controls Assessment',
      'Access Control Review',
      'Change Management Controls',
      'Configuration Management Controls',
      'Contingency Planning Controls',
      'Segregation of Duties Analysis',
    ],
  },
  {
    icon: <Search size={24} />,
    eyebrow: 'Audit Scope',
    customVisual: <AuditScopeVisual />,
    title: 'What We Audit. What Others Miss.',
    body: [
      'While traditional auditors assess financial applications, Axcend evaluates both the systems and their underlying platforms, ensuring findings withstand Inspector General scrutiny.',
      'Our comprehensive scope covers applications, OS and databases, network segmentation, and identity access controls. This is the true application of the FISCAM standard.',
    ],
    bullets: [
      'Federal Financial Systems',
      'IT General Controls (ITGC)',
      'Security Configuration Review',
      'Network Architecture & Segmentation',
      'Identity & Access Management Controls',
      'Data Integrity & Backup Controls',
    ],
  },
];

/* ============================================================
   SECTION CARD
   ============================================================ */

function SectionCard({
  section,
  index,
}: {
  section: (typeof sections)[0] & { customVisual?: React.ReactNode };
  index: number;
}) {
  const { ref, isVisible } = useInView();
  const isEven = index % 2 === 0;
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
                background: 'var(--gold-dim)',
                border: '1px solid rgba(196,154,42,0.25)',
                color: 'var(--gold)',
              }}
            >
              {section.icon}
            </div>
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{
                color: 'var(--gold)',
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

        {/* Services & Visual column */}
        <div className="flex flex-col justify-center">
          {/* Feature Visual */}
          <div
            className="rounded-lg mb-6 relative overflow-hidden w-full flex items-center justify-center"
            style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)',
              minHeight: '260px',
            }}
          >
            {section.customVisual ? (
              section.customVisual
            ) : (
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center opacity-20"
                style={{
                  background: 'var(--gold-dim)',
                  color: 'var(--gold)',
                }}
              >
                {section.icon}
              </div>
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
                  style={{ background: 'var(--gold)' }}
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

export default function FinancialContent() {
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
          style={{ background: 'var(--gold)', opacity: 0.7 }}
        />

        <div className="max-w-7xl mx-auto w-full">
          <div ref={heroRef as React.RefObject<HTMLDivElement>}>
            <span
              className={`text-xs font-semibold tracking-widest uppercase block mb-4 animate-enter ${heroVisible ? 'is-visible' : ''}`}
              style={{
                color: 'var(--gold)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Financial Management & FISCAM Auditing
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
              Transparent Audits. Technical Depth. Federal Standard.
            </h1>
            <p
              className={`max-w-2xl text-2xl font-medium leading-relaxed animate-enter ${heroVisible ? 'is-visible' : ''}`}
              style={{ color: 'var(--text-secondary)', transitionDelay: '200ms' }}
            >
              Axcend audits financial systems by extending beyond the application layer into the infrastructure, security, and controls that determine true data reliability.
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
            Standards & Frameworks
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['FISCAM', 'GAGAS', 'NIST SP 800-53', 'ITGC', 'FISMA'].map((c) => (
              <span
                key={c}
                className="text-xs px-4 py-2 rounded-full font-semibold tracking-wider uppercase"
                style={{
                  fontFamily: 'var(--font-mono)',
                  background: 'var(--gold-dim)',
                  color: 'var(--gold)',
                  border: '1px solid rgba(196,154,42,0.25)',
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
            Ready to discuss your audit requirements?
          </h2>
          <p className="text-xl font-medium mb-8" style={{ color: 'var(--text-secondary)' }}>
            Axcend audit engagements are scoped directly with the practitioners
            who will do the work — no hand-off to a junior team after the
            proposal is signed.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold transition-all hover:opacity-90"
            style={{ background: 'var(--gold)', color: '#05050F' }}
          >
            Start the Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
