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
   DATA
   ============================================================ */

const areas = [
  {
    icon: <Server size={28} />,
    eyebrow: 'Area 01',
    title: 'Infrastructure Design & Integration',
    description:
      'Axcend designs and deploys enterprise infrastructure that meets the performance, security, and availability requirements of federal and commercial environments. From physical datacenter builds to fully virtualized environments, we architect systems that are built to operate — not just pass inspection.',
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
    title: 'DevSecOps & Software Development',
    description:
      'Security can no longer be bolted on after code is written. Axcend integrates security into every stage of the software development lifecycle — from requirements through deployment — using CI/CD pipelines, container security, and automated code scanning aligned to NIST and OWASP standards.',
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
    title: 'Audio/Visual Systems Integration',
    description:
      'Modern command centers, briefing rooms, and training facilities require more than screens and speakers. Axcend designs and integrates full AV environments — from VTC and DVTC systems for DoD and Intelligence Community facilities to multimedia production suites and broadcast-quality graphics systems.',
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
    title: 'IT Benchmarking & Advisory',
    description:
      'Organizations frequently lack an objective view of their own technology posture. Axcend provides independent IT benchmarking, capacity planning, and organizational design advisory — giving leadership the data they need to make confident investment decisions and build sustainable IT organizations.',
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
   AREA CARD
   ============================================================ */

function AreaCard({
  area,
  index,
}: {
  area: (typeof areas)[0];
  index: number;
}) {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`rounded-xl p-8 flex flex-col gap-6 animate-enter ${isVisible ? 'is-visible' : ''}`}
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
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
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {area.eyebrow}
          </span>
        </div>
        <h2
          className="text-xl md:text-2xl font-bold mb-3"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
          }}
        >
          {area.title}
        </h2>
        <p
          className="text-sm leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {area.description}
        </p>
      </div>

      {/* Services */}
      <div>
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          Services
        </p>
        <ul className="space-y-1.5 mb-5">
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

        {/* Cert tags */}
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
              className={`max-w-2xl text-xl leading-relaxed animate-enter ${heroVisible ? 'is-visible' : ''}`}
              style={{ color: 'var(--text-secondary)', transitionDelay: '200ms' }}
            >
              From secure network infrastructure to multimedia command centers —
              Axcend is a technology generalist with specialist depth, building
              environments designed to perform under mission pressure.
            </p>
          </div>
        </div>
      </section>

      {/* 2x2 grid */}
      <section
        className="py-16 px-6 md:px-12 lg:px-24"
        style={{ background: 'var(--bg-base)' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {areas.map((area, i) => (
            <AreaCard key={area.eyebrow} area={area} index={i} />
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
          <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
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
