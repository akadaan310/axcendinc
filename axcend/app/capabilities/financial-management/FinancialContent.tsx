'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Settings, Search } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

/* ============================================================
   DATA
   ============================================================ */

const sections = [
  {
    icon: <BookOpen size={24} />,
    eyebrow: 'Audit Methodology',
    title: 'FISCAM Methodology. Built for the Federal Standard.',
    body: [
      'The Federal Information System Controls Audit Manual (FISCAM) is the authoritative standard for auditing information system controls in federal financial audits. Axcend\'s audit practice is built on this framework — not adapted to it. Our practitioners understand the difference between a compliance checkbox and a control that actually works under operational conditions.',
      'We apply FISCAM methodology with technical depth that most audit firms cannot match. Our auditors extend their work into the layers that matter: the infrastructure hosting the financial system, the security configuration of the underlying platform, and the network architecture that determines how data flows between components. This technical grounding produces findings that are credible, defensible, and actionable.',
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
    title: 'Financial System Controls. Technical Layer Included.',
    body: [
      'A financial audit that stops at the application layer is incomplete. The integrity of financial data depends on the security configuration of the servers it runs on, the access controls enforced at the network boundary, and the patch state of the operating environment. Axcend audits all of it.',
      'We examine information system controls as they actually operate — not as they are documented in policy. Where gaps exist between documented controls and operational reality, we surface them clearly, with specific findings, root cause analysis, and remediation recommendations that are technically grounded and prioritized by risk.',
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
    title: 'What We Audit. What Others Miss.',
    body: [
      'Traditional financial auditors audit financial systems. Axcend audits financial systems and the platforms they run on. That distinction matters when an auditor\'s finding needs to hold up to Inspector General scrutiny, congressional inquiry, or follow-on legal action.',
      'Our audit scope covers the full hosting stack: the financial application, the underlying operating system and database, network controls and segmentation, security configuration hardening, and the identity and access management controls that govern who can do what inside the system. This is how FISCAM was designed to be applied — and how Axcend applies it.',
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
  section: (typeof sections)[0];
  index: number;
}) {
  const { ref, isVisible } = useInView();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`rounded-xl p-10 mb-8 animate-enter ${isVisible ? 'is-visible' : ''}`}
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
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Services + placeholder column */}
        <div className="flex flex-col justify-center">
          {/* Placeholder visual */}
          <div
            className="rounded-lg mb-6 flex items-center justify-center"
            style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)',
              minHeight: '180px',
            }}
          >
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center opacity-20"
              style={{
                background: 'var(--gold-dim)',
                color: 'var(--gold)',
              }}
            >
              {section.icon}
            </div>
          </div>

          {/* Bullet list */}
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Capabilities
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
              className={`max-w-2xl text-xl leading-relaxed animate-enter ${heroVisible ? 'is-visible' : ''}`}
              style={{ color: 'var(--text-secondary)', transitionDelay: '200ms' }}
            >
              Axcend audits financial systems the way FISCAM was designed to be
              applied — extending beyond the application layer into the
              infrastructure, security configuration, and controls that
              determine whether the data is actually trustworthy.
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
          <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
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
