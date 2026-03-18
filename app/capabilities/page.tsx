'use client';
import Link from 'next/link';
import { ArrowRight, Shield, Cloud, Cpu, BarChart3 } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const capabilities = [
  {
    number: '01',
    icon: <Shield size={28} />,
    title: 'Cybersecurity & Compliance',
    description:
      'Axcend cybersecurity practitioners have designed and operated security programs for the most sensitive environments in the U.S. government — DoD, Intelligence Community, and civilian agencies operating under FISMA and CNSSI 1253 mandates.  We bring the same adversarial rigor and compliance depth to commercial enterprises.',
    services: [
      'Security Architecture',
      'NIST RMF / ATO Support',
      'Penetration Testing',
      'Compliance Management',
      'Zero Trust Implementation',
      'CONMON',
    ],
    certs: ['CISSP', 'CEH', 'NIST 800-53', 'FISMA'],
    href: '/capabilities/cybersecurity',
  },
  {
    number: '02',
    icon: <Cloud size={28} />,
    title: 'Cloud Architecture & Migration',
    description:
      'Cloud migration is one of the most consequential technical decisions an organization makes. Done poorly, it creates new attack surfaces, performance bottlenecks, and runaway costs. Done with Axcend, it becomes a strategic transformation — accelerating delivery, hardening security, and reducing operational overhead.',
    services: [
      'Cloud Migration',
      'Cloud Operations 7/24/365',
      'Cloud Strategy & ROI',
      'AWS · Azure · GCP · O365',
      'Hybrid Cloud',
      'Security Configuration Hardening',
    ],
    certs: ['AWS Solutions Architect', 'Azure', 'GCP', 'RHCSA'],
    href: '/capabilities/cloud',
  },
  {
    number: '03',
    icon: <Cpu size={28} />,
    title: 'Technology & Systems Integration',
    description:
      'Modern organizations need more than infrastructure — they need connected, operational technology environments. Axcend designs, deploys, and sustains technology environments — from secure network infrastructure to multimedia command centers. We are technology generalists with specialist depth.',
    services: [
      'Infrastructure Design',
      'DevSecOps & Software Dev',
      'A/V Systems Integration',
      'IT Benchmarking & Advisory',
      'VTC & DVTC Systems',
      'Service Desk Operations',
    ],
    certs: ['CCNA', 'ITIL V3', 'Microsoft', 'Cisco', 'VMware', 'Dell'],
    href: '/capabilities/technology-solutions',
  },
  {
    number: '04',
    icon: <BarChart3 size={28} />,
    title: 'Financial Management & FISCAM Auditing',
    description:
      "Axcend's audit practice is built on the Federal Information System Controls Audit Manual (FISCAM) — the definitive federal standard for information system control audits. We perform high-quality, transparent financial audits that extend into the technical and security layers of the hosting platform.",
    services: [
      'FISCAM Auditing',
      'Financial System Controls',
      'IT Audit Support',
      'Security Layer Analysis',
      'Audit Methodology',
      'Senior Leadership Reporting',
    ],
    certs: ['FISCAM', 'Financial Audit', 'Systems Controls'],
    href: '/capabilities/financial-management',
  },
];

function CapabilityRow({
  cap,
  index,
}: {
  cap: (typeof capabilities)[0];
  index: number;
}) {
  const { ref, isVisible } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative min-h-[340px] rounded-xl overflow-hidden flex flex-col justify-between p-10 mb-6 animate-enter ${isVisible ? 'is-visible' : ''}`}
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Large number watermark */}
      <span
        className="absolute top-6 right-8 text-[120px] font-bold leading-none pointer-events-none select-none"
        style={{
          fontFamily: 'var(--font-display)',
          color: 'var(--text-primary)',
          opacity: 0.04,
        }}
      >
        {cap.number}
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{
                background: 'var(--accent-blue-dim)',
                border: '1px solid rgba(0,87,255,0.2)',
                color: 'var(--accent-blue)',
              }}
            >
              {cap.icon}
            </div>
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Capability {cap.number}
            </span>
          </div>
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--text-primary)',
            }}
          >
            {cap.title}
          </h2>
          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: 'var(--text-secondary)' }}
          >
            {cap.description}
          </p>
          <Link
            href={cap.href}
            className="inline-flex items-center gap-2 font-semibold text-sm transition-all hover:gap-3"
            style={{ color: 'var(--accent-blue)' }}
          >
            Explore {cap.title.split('&')[0].trim()} <ArrowRight size={14} />
          </Link>
        </div>

        <div>
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Services Include
          </p>
          <ul className="space-y-2 mb-6">
            {cap.services.map((s) => (
              <li
                key={s}
                className="flex items-center gap-2 text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span
                  className="w-1 h-1 rounded-full flex-shrink-0"
                  style={{ background: 'var(--accent-blue)' }}
                />
                {s}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {cap.certs.map((c) => (
              <span
                key={c}
                className="text-[10px] px-2 py-1 rounded font-semibold tracking-wider uppercase"
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
      </div>
    </div>
  );
}

export default function CapabilitiesPage() {
  const { ref, isVisible } = useInView();
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-16 topo-bg"
        style={{ background: 'var(--bg-base)' }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div ref={ref as React.RefObject<HTMLDivElement>}>
            <span
              className={`text-xs font-semibold tracking-widest uppercase block mb-4 animate-enter ${isVisible ? 'is-visible' : ''}`}
              style={{
                color: 'var(--accent-blue)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Full Mission Stack
            </span>
            <h1
              className={`text-4xl md:text-6xl font-bold mb-6 animate-enter ${isVisible ? 'is-visible' : ''}`}
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--text-primary)',
                transitionDelay: '100ms',
                letterSpacing: '-0.02em',
              }}
            >
              The Full Mission Stack.
            </h1>
            <p
              className={`max-w-2xl text-xl leading-relaxed animate-enter ${isVisible ? 'is-visible' : ''}`}
              style={{ color: 'var(--text-secondary)', transitionDelay: '200ms' }}
            >
              From securing classified infrastructure to migrating enterprise
              workloads to the cloud — Axcend operates across every dimension of
              modern technology delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Capability rows */}
      <section
        className="py-16 px-6 md:px-12 lg:px-24"
        style={{ background: 'var(--bg-base)' }}
      >
        <div className="max-w-7xl mx-auto">
          {capabilities.map((cap, i) => (
            <CapabilityRow key={cap.number} cap={cap} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6 md:px-12 lg:px-24 text-center section-divider"
        style={{ background: 'var(--bg-surface)' }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-bold mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--text-primary)',
            }}
          >
            Ready to scope your engagement?
          </h2>
          <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
            Every Axcend engagement starts with a direct conversation. No sales
            team. No pitch deck. Just engineers who understand your mission.
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
