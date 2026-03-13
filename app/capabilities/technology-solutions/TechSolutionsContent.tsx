'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Server,
  Code2,
  Tv2,
  BarChart2,
} from 'lucide-react';
import { useInView } from '@/hooks/useInView';

/* ============================================================
   CUSTOM VISUALS
   ============================================================ */

function InfrastructureVisual() {
  return (
    <div className="absolute inset-0 bg-[#0A0D14] overflow-hidden flex items-center justify-center theme-visual">
      <svg width="100%" height="100%" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="infraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
        <rect x="80" y="60" width="60" height="140" rx="4" fill="#1E293B" stroke="#3B82F6" strokeWidth="1" />
        <rect x="90" y="70" width="40" height="10" rx="1" fill="#3B82F6" opacity="0.3" />
        <rect x="90" y="90" width="40" height="10" rx="1" fill="#3B82F6" opacity="0.3" />
        <rect x="90" y="110" width="40" height="10" rx="1" fill="#3B82F6" opacity="0.3" />
        
        <rect x="170" y="60" width="60" height="140" rx="4" fill="#1E293B" stroke="url(#infraGrad)" strokeWidth="2" />
        <rect x="180" y="70" width="40" height="10" rx="1" fill="#3B82F6" opacity="0.6" />
        
        <rect x="260" y="60" width="60" height="140" rx="4" fill="#1E293B" stroke="#3B82F6" strokeWidth="1" />
        
        <path d="M140 130 H170 M230 130 H260" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="200" cy="230" r="10" fill="#3B82F6" opacity="0.2" />
      </svg>
    </div>
  );
}

function DevSecOpsVisual() {
  return (
    <div className="absolute inset-0 bg-[#0F0510] overflow-hidden flex items-center justify-center theme-visual">
      <svg width="100%" height="100%" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="devGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#7E22CE" />
          </linearGradient>
        </defs>
        <path d="M140 130 Q140 90 180 90 Q220 90 220 130 Q220 170 260 170 Q300 170 300 130 Q300 90 260 90 Q220 90 220 130 Q220 170 180 170 Q140 170 140 130 Z" stroke="url(#devGrad)" strokeWidth="8" fill="none" strokeOpacity="0.8" />
        <circle cx="180" cy="90" r="15" fill="#1A0A0F" stroke="#A855F7" strokeWidth="1" />
        <rect x="175" y="85" width="10" height="10" fill="#A855F7" opacity="0.5" />
        <circle cx="260" cy="170" r="15" fill="#1A0A0F" stroke="#A855F7" strokeWidth="1" />
        <path d="M255 170 L260 175 L265 165" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function AVIntegrationVisual() {
  return (
    <div className="absolute inset-0 bg-[#061114] overflow-hidden flex items-center justify-center theme-visual">
      <svg width="100%" height="100%" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="avGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#2DD4BF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect x="80" y="50" width="240" height="130" rx="4" fill="#0A1A1F" stroke="#2DD4BF" strokeWidth="1" />
        <rect x="90" y="60" width="220" height="110" fill="url(#avGrad)" />
        <path d="M120 115 L140 115 L150 100 L160 130 L170 115 L190 115" stroke="#2DD4BF" strokeWidth="2" strokeLinejoin="round" />
        <path d="M210 115 L230 115 L240 100 L250 130 L260 115 L280 115" stroke="#2DD4BF" strokeWidth="2" strokeLinejoin="round" />
        <rect x="180" y="200" width="40" height="20" rx="2" fill="#2DD4BF" opacity="0.3" />
        <rect x="195" y="180" width="10" height="20" fill="#2DD4BF" opacity="0.4" />
      </svg>
    </div>
  );
}

function ITBenchmarkingVisual() {
  return (
    <div className="absolute inset-0 bg-[#0A0D14] overflow-hidden flex items-center justify-center theme-visual">
      <svg width="100%" height="100%" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="130" r="80" stroke="#3B82F6" strokeWidth="0.5" strokeOpacity="0.2" />
        <circle cx="200" cy="130" r="50" stroke="#3B82F6" strokeWidth="0.5" strokeOpacity="0.3" />
        <path d="M200 50 L276 105 L247 195 L153 195 L124 105 Z" fill="url(#nodeGrad)" stroke="#60A5FA" strokeWidth="2" />
        <circle cx="200" cy="50" r="4" fill="#60A5FA" />
        <circle cx="276" cy="105" r="4" fill="#60A5FA" />
        <circle cx="247" cy="195" r="4" fill="#60A5FA" />
        <circle cx="153" cy="195" r="4" fill="#60A5FA" />
        <circle cx="124" cy="105" r="4" fill="#60A5FA" />
        <line x1="200" y1="130" x2="200" y2="50" stroke="#60A5FA" strokeWidth="0.5" strokeOpacity="0.5" />
        <line x1="200" y1="130" x2="276" y2="105" stroke="#60A5FA" strokeWidth="0.5" strokeOpacity="0.5" />
      </svg>
    </div>
  );
}

/* ============================================================
   DATA
   ============================================================ */

const areas = [
  {
    icon: <Server size={28} />,
    eyebrow: 'Area 01',
    customVisual: <InfrastructureVisual />,
    title: 'Infrastructure Design & Integration',
    description:
      'We design and deploy enterprise infrastructure meeting strict performance and security requirements. From physical datacenters to virtualized environments, our systems are built to operate reliably.',
    services: [
      'Server & Storage Architecture',
      'Network Design & Segmentation',
      'Virtualization (VMware · Hyper-V)',
      'Datacenter Build-Outs',
      'ITIL-Aligned Service Management',
      'Disaster Recovery & Business Continuity',
    ],
    certs: ['CCNA', 'VMware', 'Dell', 'Microsoft', 'ITIL V3'],
  },
  {
    icon: <Code2 size={28} />,
    eyebrow: 'Area 02',
    customVisual: <DevSecOpsVisual />,
    title: 'DevSecOps & Software Development',
    description:
      'Axcend intrinsically integrates security into every software development stage using CI/CD pipelines, container security, and automated code scanning aligned to NIST and OWASP standards.',
    services: [
      'CI/CD Pipeline Design & Management',
      'Container Security (Docker · Kubernetes)',
      'Automated Code Scanning & SAST/DAST',
      'Web Application Development',
      'API Development & Integration',
      'DevSecOps Maturity Assessment',
    ],
    certs: ['AWS', 'Kubernetes', 'OWASP', 'NIST'],
  },
  {
    icon: <Tv2 size={28} />,
    eyebrow: 'Area 03',
    customVisual: <AVIntegrationVisual />,
    title: 'Audio/Visual Systems Integration',
    description:
      'We design and integrate full AV environments—including VTC systems for DoD facilities, multimedia production suites, and broadcast-quality graphics systems—built for modern command centers.',
    services: [
      'VTC & DVTC System Design & Integration',
      'Multimedia Production Suite Build-Outs',
      'Broadcast-Quality Graphics Systems',
      'Command Center Display Walls',
      'Training & Simulation Environment Support',
      'AV Systems Maintenance & Operations',
    ],
    certs: ['CTS', 'AVIXA', 'Crestron', 'Cisco'],
  },
  {
    icon: <BarChart2 size={28} />,
    eyebrow: 'Area 04',
    customVisual: <ITBenchmarkingVisual />,
    title: 'IT Benchmarking & Advisory',
    description:
      'Axcend provides independent IT benchmarking, capacity planning, and organizational advisory, giving leadership objective data to make confident investments and build sustainable IT organizations.',
    services: [
      'IT Capability Benchmarking',
      'Capacity Planning & Forecasting',
      'IT Organizational Design',
      'Technology Roadmap Development',
      'Vendor Assessment & Selection',
      'IT Governance Framework Design',
    ],
    certs: ['ITIL V3', 'PMP', 'TOGAF'],
  },
];

/* ============================================================
   SECTION CARD
   ============================================================ */

function SectionCard({
  area,
  index,
}: {
  area: (typeof areas)[0] & { customVisual?: React.ReactNode };
  index: number;
}) {
  const { ref, isVisible } = useInView();
  const isEven = index % 2 === 0;
  const sectionId = area.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

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
              {area.icon}
            </div>
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{
                color: 'var(--accent-blue)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {area.eyebrow}
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
            {area.title}
          </h2>
          <p
            className="text-xl font-medium leading-relaxed mb-4"
            style={{ color: 'var(--text-secondary)' }}
          >
            {area.description}
          </p>
        </div>

        {/* Services & Visual column */}
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
            {area.customVisual}
          </div>

          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Services
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-6">
            {area.services.map((s) => (
              <li
                key={s}
                className="flex items-start gap-2 text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span
                  className="w-1 h-1 rounded-full flex-shrink-0 mt-2"
                  style={{ background: 'var(--accent-blue)' }}
                />
                {s}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {area.certs.map((c) => (
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

/* ============================================================
   PAGE
   ============================================================ */

export default function TechSolutionsContent() {
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
              Technology & Systems Integration
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
              Systems That Work. Environments That Operate.
            </h1>
            <p
              className={`max-w-2xl text-2xl font-medium leading-relaxed animate-enter ${heroVisible ? 'is-visible' : ''}`}
              style={{ color: 'var(--text-secondary)', transitionDelay: '200ms' }}
            >
              From network infrastructure to multimedia command centers, Axcend builds enterprise environments designed to perform under pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Sections List */}
      <section
        className="py-16 px-6 md:px-12 lg:px-24"
        style={{ background: 'var(--bg-base)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {areas.map((area, i) => (
            <SectionCard key={area.eyebrow} area={area} index={i} />
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
            Let's discuss your environment.
          </h2>
          <p className="text-xl font-medium mb-8" style={{ color: 'var(--text-secondary)' }}>
            Whether you're standing up a new facility or modernizing legacy
            infrastructure, Axcend brings the breadth and depth to deliver.
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
