'use client';

import Link from 'next/link';
import { ArrowRight, GitMerge, MonitorDot, TrendingUp } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

/* ============================================================
   DATA
   ============================================================ */

const sections = [
  {
    icon: <GitMerge size={24} />,
    eyebrow: 'Cloud Migration',
    title: 'Migration Is Architecture. Treat It That Way.',
    body: [
      'Most cloud migrations fail not because of technology — but because the organization treated lift-and-shift as a destination rather than a starting point. Axcend approaches every migration as a target-state architecture exercise first. Before a single workload moves, we understand your applications, dependencies, security requirements, and operational constraints.',
      'We design migration paths that minimize downtime, preserve data integrity, and harden the landing zone before your first workload arrives. Application compatibility assessments ensure nothing breaks silently. Network segmentation, identity federation, and logging pipelines are configured before go-live — not patched in after the first incident.',
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
    title: '7/24/365. Not a Slide Deck — A Service.',
    body: [
      'Cloud environments don\'t take nights and weekends off. Neither do attackers. Axcend provides round-the-clock managed cloud operations — monitoring, patching, incident response, and configuration management — across AWS, Azure, GCP, and Office 365 environments.',
      'Our operations team doesn\'t just watch dashboards. We maintain your environments to a defined security baseline, respond to incidents with a defined SLA, and proactively identify drift before it becomes a breach. Every environment we manage is documented, instrumented, and auditable — because federal clients and their auditors expect nothing less.',
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
    title: 'Every Cloud Investment Needs a Business Case.',
    body: [
      'Cloud is not inherently cheaper. Deployed without discipline, it can cost more than the on-premise infrastructure it replaced — with more complexity and more risk. Axcend builds the business case for cloud investment before commitment: portfolio assessment, financial modeling, and a phased roadmap that aligns cloud spend to measurable mission outcomes.',
      'We have performed cloud strategy engagements for federal agencies where the answer was not "move everything" but "move these workloads, modernize these applications, and retire these systems." That kind of honest assessment is more valuable than a migration proposal driven by vendor incentives.',
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
                background: 'var(--accent-blue-dim)',
                color: 'var(--accent-blue)',
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
              className={`max-w-2xl text-xl leading-relaxed animate-enter ${heroVisible ? 'is-visible' : ''}`}
              style={{ color: 'var(--text-secondary)', transitionDelay: '200ms' }}
            >
              Cloud migration done right is a strategic transformation. Axcend
              brings federal-grade discipline — architecture-first, security-built-in,
              operations sustained round the clock.
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
          <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
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
