'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Eye, FileCheck } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

/* ============================================================
   CUSTOM VISUALS
   ============================================================ */

function SecurityArchitectureVisual() {
  return (
    <div className="absolute inset-0 bg-[#0A0F1C] overflow-hidden flex items-center justify-center theme-visual">
      <svg width="100%" height="100%" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0057FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0057FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <rect width="400" height="260" fill="url(#grad1)" />
        <circle cx="200" cy="130" r="100" stroke="#1E40AF" strokeWidth="0.5" strokeOpacity="0.3" />
        <circle cx="200" cy="130" r="80" stroke="#1E40AF" strokeWidth="0.5" strokeOpacity="0.5" />
        <path d="M200 60 L260 90 V140 C260 180 200 210 200 210 C200 210 140 180 140 140 V90 L200 60Z" fill="url(#shieldGrad)" filter="url(#glow)" />
        <path d="M180 115 L195 130 L225 100" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="100" y="50" width="40" height="15" rx="2" fill="#3B82F6" opacity="0.4" />
        <rect x="260" y="190" width="50" height="15" rx="2" fill="#3B82F6" opacity="0.3" />
        <rect x="70" y="180" width="30" height="10" rx="2" fill="#3B82F6" opacity="0.2" />
      </svg>
    </div>
  );
}

function AdversarialTestingVisual() {
  return (
    <div className="absolute inset-0 bg-[#0F0510] overflow-hidden flex items-center justify-center theme-visual">
      <svg width="100%" height="100%" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="targetGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="260" fill="url(#targetGrad)" />
        <circle cx="200" cy="130" r="90" stroke="#EF4444" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="200" cy="130" r="60" stroke="#EF4444" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="200" cy="130" r="30" stroke="#EF4444" strokeWidth="2" strokeOpacity="0.8" />
        <line x1="200" y1="20" x2="200" y2="240" stroke="#EF4444" strokeWidth="0.5" strokeOpacity="0.3" />
        <line x1="20" y1="130" x2="380" y2="130" stroke="#EF4444" strokeWidth="0.5" strokeOpacity="0.3" />
        <circle cx="240" cy="90" r="6" fill="#EF4444" />
        <circle cx="160" cy="170" r="4" fill="#EF4444" opacity="0.6" />
        <circle cx="280" cy="180" r="3" fill="#EF4444" opacity="0.4" />
        <rect x="300" y="40" width="80" height="40" rx="4" fill="#1A0A0F" stroke="#EF4444" strokeWidth="1" />
        <text x="310" y="58" fill="#EF4444" fontSize="8" fontFamily="monospace">STATUS: ACTIVE</text>
        <text x="310" y="72" fill="#EF4444" fontSize="8" fontFamily="monospace">TARGET: FOUND</text>
      </svg>
    </div>
  );
}

function ComplianceVisual() {
  return (
    <div className="absolute inset-0 bg-[#0B1214] overflow-hidden flex items-center justify-center theme-visual">
      <svg width="100%" height="100%" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="compGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
        <path d="M120 40 H280 V220 H120 Z" fill="#0D181A" stroke="#10B981" strokeWidth="1" />
        <rect x="140" y="60" width="80" height="8" rx="2" fill="#10B981" opacity="0.3" />
        <rect x="140" y="80" width="120" height="4" rx="1" fill="#10B981" opacity="0.1" />
        <rect x="140" y="90" width="100" height="4" rx="1" fill="#10B981" opacity="0.1" />

        <circle cx="145" cy="120" r="8" fill="url(#compGrad)" />
        <path d="M141 120 L144 123 L149 118" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="165" y="118" width="80" height="4" rx="1" fill="#10B981" opacity="0.2" />

        <circle cx="145" cy="150" r="8" fill="url(#compGrad)" />
        <path d="M141 150 L144 153 L149 148" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="165" y="148" width="80" height="4" rx="1" fill="#10B981" opacity="0.2" />

        <circle cx="145" cy="180" r="8" fill="url(#compGrad)" />
        <path d="M141 180 L144 183 L149 178" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="165" y="178" width="80" height="4" rx="1" fill="#10B981" opacity="0.2" />

        <path d="M280 180 A30 30 0 1 1 320 220" stroke="#10B981" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}

/* ============================================================
   DATA
   ============================================================ */

const sections = [
  {
    icon: <Shield size={24} />,
    eyebrow: 'Security Architecture',
    imageSrc: '/capabilities/cyber_architecture.png',
    customVisual: <SecurityArchitectureVisual />,
    title: 'Build the Architecture. Sustain the Posture.',
    body: [
      'We design security from the inside out, leveraging years of experience in DoD and Intelligence Community environments where technical rigor is critical.',
      'From implementing Zero Trust frameworks (NIST SP 800-207) to establishing continuous monitoring programs, we build security postures that hold under operational pressure. Axcend is your persistent security partner.',
    ],
    bullets: [
      'Zero Trust Architecture (NIST SP 800-207)',
      'Security Architecture Design & Review',
      'Continuous Monitoring (CONMON)',
      'Security Control Implementation',
      '4D Methodology: Design · Develop · Deploy · Defend',
      'Security Operations Support',
    ],
  },
  {
    icon: <Eye size={24} />,
    eyebrow: 'Adversarial Testing',
    imageSrc: '/capabilities/cyber_testing.png',
    customVisual: <AdversarialTestingVisual />,
    title: 'We Think Like the Adversary. So You Don\'t Have To.',
    body: [
      'Penetration testing tells you what an attacker would actually do. Our offensive security practitioners approach every engagement like a motivated adversary, identifying gaps that automated tooling misses.',
      'We map all findings to NIST 800-53 and PCI-DSS, delivering a prioritized remediation roadmap so your team knows exactly where to focus their efforts.',
    ],
    bullets: [
      'Network & Application Penetration Testing',
      'Vulnerability Assessment & Management',
      'Findings Mapped to NIST 800-53 / PCI-DSS',
      'Attack Path Analysis',
      'Prioritized Remediation Roadmap',
      'Red Team Exercise Support',
    ],
  },
  {
    icon: <FileCheck size={24} />,
    eyebrow: 'Compliance & ATO',
    imageSrc: '/capabilities/cyber_compliance.png',
    customVisual: <ComplianceVisual />,
    title: 'Compliance Is a Program, Not a Checkbox.',
    body: [
      'Axcend practitioners operate within federal compliance frameworks—NIST RMF, FISMA, ensuring security is built-in, not just audited.',
      'We support the full Authorization to Operate (ATO) lifecycle and manage POA&M processes, ensuring your systems remain defensible across all audits and transitions.',
    ],
    bullets: [
      'NIST RMF Authorization to Operate (ATO)',
      'FISMA Compliance Programs',
      'PCI-DSS Assessment Support',
      'POA&M Development & Management',
      'Continuous Authorization Maintenance',
    ],
  },
];

const creds = ['CISSP', 'CEH', 'AWS Security', 'NIST RMF', 'FedRAMP'];

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

export default function CybersecurityContent() {
  const { ref: heroRef, isVisible: heroVisible } = useInView();

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[65vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-16 topo-bg"
        style={{ background: 'var(--bg-base)' }}
      >
        {/* Subtle accent line */}
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
              Cybersecurity & Compliance
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
              Your Threat Landscape Has No Boundaries. Neither Does Our Defense.
            </h1>
            <p
              className={`max-w-2xl text-2xl font-medium leading-relaxed animate-enter ${heroVisible ? 'is-visible' : ''}`}
              style={{ color: 'var(--text-secondary)', transitionDelay: '200ms' }}
            >
              From classified DoD networks to civilian agency programs, Axcend delivers federal-grade cybersecurity depth.
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
            Practitioner Credentials & Standards
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
            Ready to harden your posture?
          </h2>
          <p className="text-xl font-medium mb-8" style={{ color: 'var(--text-secondary)' }}>
            Let's have a frank discussion about your current environment and your security gaps.
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
