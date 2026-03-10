'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, ExternalLink, Handshake, Award } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

/* ============================================================
   DATA
   ============================================================ */

const stars3Details = [
  { label: 'Contract Vehicle', value: 'GSA 8(a) STARS III' },
  { label: 'Master Contract', value: '47QTCB22D0115' },
  { label: 'DUNS/UEI', value: '079944214 · N6H6A8RBPHK7' },
  { label: 'CAGE CODE', value: '7FU62' },
  { label: 'Program Manager', value: 'Nadine Rafaels' },
  { label: 'PM Email', value: 'STARS3@axcendinc.com' },
  { label: 'Contract Type', value: 'IDIQ, T&M, Labor Hour, Fixed Price' },
  { label: 'Period of Perf.', value: 'July 2, 2021 – July 1, 2031' },
  { label: 'Sole Source Limit', value: 'Up to $4.5M' },
];

const naicsCodes = [
  { code: '541519', description: 'Other Computer Related Services' },
  { code: '541511', description: 'Custom Computer Programming Services' },
  { code: '541512', description: 'Computer Systems Design Services' },
  { code: '541513', description: 'Computer Facilities Management Services' },
  { code: '541611', description: 'Administrative Management & General Mgmt Consulting' },
];

const stars3Bullets = [
  'Sole-source awards up to $4.5M — no competitive range required',
  'Satisfies 8(a) and small business set-aside requirements',
  '$50B+ IDIQ ceiling — government-wide access',
  'Pre-vetted 8(a) pool reduces acquisition risk and timeline',
  'Broad IT scope: cybersecurity, cloud, infrastructure, advisory',
  'Streamlined task order placement through any federal agency',
];

/* ============================================================
   SECTION WRAPPER WITH SCROLL REVEAL
   ============================================================ */

function RevealSection({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, isVisible } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`animate-enter ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ============================================================
   PAGE
   ============================================================ */

export default function ContractsContent() {
  const { ref: heroRef, isVisible: heroVisible } = useInView();

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[60vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-16 topo-bg"
        style={{ background: '#0A1628' }}
      >
        {/* Gold accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: 'var(--gold)', opacity: 0.8 }}
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
              Contract Vehicles
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
              Procurement-Ready. Contract Vehicles That Accelerate Award.
            </h1>
            <p
              className={`max-w-2xl text-xl leading-relaxed animate-enter ${heroVisible ? 'is-visible' : ''}`}
              style={{ color: 'var(--text-secondary)', transitionDelay: '200ms' }}
            >
              Axcend holds multiple federal contract vehicles that allow agencies
              to place task orders quickly — without the overhead of a full
              open-market competition. Streamlined acquisition. Vetted awardee.
              Mission-ready.
            </p>
          </div>
        </div>
      </section>

      {/* ── STARS III ── */}
      <section
        className="py-16 px-6 md:px-12 lg:px-24"
        style={{ background: 'var(--bg-base)' }}
      >
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderLeft: '4px solid var(--gold)',
              }}
            >
              {/* STARS III header */}
              <div
                className="px-10 py-8"
                style={{ borderBottom: '1px solid var(--border-subtle)' }}
              >
                <div className="flex items-start gap-4 flex-wrap">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'var(--gold-dim)',
                      border: '1px solid rgba(196,154,42,0.25)',
                      color: 'var(--gold)',
                    }}
                  >
                    <Award size={24} />
                  </div>
                  <div>
                    <span
                      className="text-xs font-semibold tracking-widest uppercase block mb-1"
                      style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}
                    >
                      Primary Contract Vehicle
                    </span>
                    <h2
                      className="text-2xl md:text-3xl font-bold"
                      style={{
                        fontFamily: 'var(--font-display)',
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      GSA 8(a) STARS III
                    </h2>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left — description + bullets */}
                <div
                  className="px-10 py-8"
                  style={{ borderRight: '1px solid var(--border-subtle)' }}
                >
                  <p
                    className="text-base leading-relaxed mb-6"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    The GSA 8(a) STARS III is a Government-Wide Acquisition Contract
                    (GWAC) for IT services, reserved exclusively for 8(a)-certified
                    small businesses. It provides federal agencies with a pre-vetted
                    pool of qualified IT contractors and streamlined task order
                    placement — reducing acquisition timelines while satisfying
                    small business set-aside mandates. With a $50 billion+ IDIQ
                    ceiling and a broad IT scope, STARS III is one of the most
                    flexible and widely-used IT vehicles in the federal market.
                  </p>

                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-3"
                    style={{
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    Why It Matters for Your Agency
                  </p>
                  <ul className="space-y-3 mb-6">
                    {stars3Bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: 'var(--gold)' }}
                        />
                        <span
                          className="text-sm leading-relaxed"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://www.gsa.gov/stars3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                    style={{ color: 'var(--gold)' }}
                  >
                    For ordering information, visit gsa.gov/stars3{' '}
                    <ExternalLink size={13} />
                  </a>
                </div>

                {/* Right — monospace data card + NAICS */}
                <div className="px-10 py-8">
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    Contract Details
                  </p>

                  {/* Monospace data card */}
                  <div
                    className="rounded-lg p-6 mb-6"
                    style={{
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-subtle)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {stars3Details.map(({ label, value }) => (
                      <div
                        key={label}
                        className="flex flex-col sm:flex-row sm:gap-2 mb-2.5 last:mb-0"
                      >
                        <span
                          className="text-xs flex-shrink-0 w-40"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {label}:
                        </span>
                        <span
                          className="text-xs font-semibold"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* NAICS codes */}
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-3"
                    style={{
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    Authorized NAICS Codes
                  </p>
                  <div className="space-y-2">
                    {naicsCodes.map(({ code, description }) => (
                      <div key={code} className="flex items-baseline gap-3">
                        <span
                          className="text-xs font-bold flex-shrink-0"
                          style={{
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--gold)',
                          }}
                        >
                          {code}
                        </span>
                        <span
                          className="text-xs"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Seaport Enhanced + MCTSSA ── */}
      <section
        className="py-4 pb-16 px-6 md:px-12 lg:px-24"
        style={{ background: 'var(--bg-base)' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Seaport NxG */}
          <RevealSection delay={0}>
            <div
              className="rounded-xl p-8 h-full"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'var(--accent-blue-dim)',
                    border: '1px solid rgba(0,87,255,0.2)',
                    color: 'var(--accent-blue)',
                  }}
                >
                  <Award size={20} />
                </div>
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  Navy / DoD Vehicle
                </span>
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--text-primary)',
                }}
              >
                Seaport Enhanced (SeaPort-NxG)
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                SeaPort-NxG is the Navy's primary multiple award contract vehicle
                for engineering, technical, and enterprise IT services. It covers
                all Naval System Commands and provides a streamlined mechanism for
                awarding task orders across a broad range of professional and
                technical service categories.
              </p>
              <ul className="space-y-1.5">
                {[
                  'Naval System Commands — direct access',
                  'Engineering & IT professional services',
                  'Competitive task order placement',
                  'DoD mission alignment',
                ].map((b) => (
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
          </RevealSection>

          {/* MCTSSA */}
          <RevealSection delay={80}>
            <div
              className="rounded-xl p-8 h-full"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'var(--accent-blue-dim)',
                    border: '1px solid rgba(0,87,255,0.2)',
                    color: 'var(--accent-blue)',
                  }}
                >
                  <Award size={20} />
                </div>
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  Marine Corps Vehicle
                </span>
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--text-primary)',
                }}
              >
                MCTSSA
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                The Marine Corps Tactical Systems Support Activity (MCTSSA)
                contract vehicle provides access to technical and IT support
                services for Marine Corps systems and tactical environments.
                Axcend's vehicle presence enables direct support to Marine Corps
                programs requiring cybersecurity, infrastructure, and systems
                integration expertise.
              </p>
              <ul className="space-y-1.5">
                {[
                  'Marine Corps tactical system support',
                  'Cybersecurity & IT services access',
                  'Infrastructure & systems integration',
                  'Established USMC program vehicle',
                ].map((b) => (
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
          </RevealSection>
        </div>
      </section>

      {/* ── Subcontracting ── */}
      <section
        className="py-16 px-6 md:px-12 lg:px-24 section-divider"
        style={{ background: 'var(--bg-surface)' }}
      >
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div
              className="rounded-xl p-10"
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
                      <Handshake size={20} />
                    </div>
                    <span
                      className="text-xs font-semibold tracking-widest uppercase"
                      style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}
                    >
                      Teaming & Subcontracting
                    </span>
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Prime Contractor? Let's Partner.
                  </h2>
                  <p
                    className="text-base leading-relaxed mb-4"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Axcend is available as a subcontractor on large prime contracts
                    requiring 8(a) depth, cybersecurity specialization, or cloud
                    migration expertise. Our STARS III vehicle and established
                    federal past performance make us a credible, low-risk teaming
                    partner for large primes pursuing competitive bids.
                  </p>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    We bring genuine technical depth — not just a socioeconomic
                    certification. If your bid needs a cybersecurity or cloud
                    subcontractor who can actually perform, talk to us before the
                    proposal deadline.
                  </p>
                </div>

                <div>
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    What Axcend Brings to a Team
                  </p>
                  <ul className="space-y-3">
                    {[
                      '8(a) SBA-certified — satisfies small business requirements',
                      'GSA 8(a) STARS III awardee — established vehicle presence',
                      'Cybersecurity depth: CISSP, CEH, NIST RMF, Zero Trust',
                      'Cloud architecture across AWS, Azure, GCP, O365',
                      'Federal past performance: DoD, Intel, civilian agencies',
                      'Minority-Owned, Fairfax VA — competitive teaming profile',
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: 'var(--gold)' }}
                        />
                        <span
                          className="text-sm leading-relaxed"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 px-6 md:px-12 lg:px-24 text-center section-divider"
        style={{ background: 'var(--bg-base)' }}
      >
        <div className="max-w-2xl mx-auto">
          <RevealSection>
            <h2
              className="text-3xl font-bold mb-4"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--text-primary)',
              }}
            >
              Ready to place a task order?
            </h2>
            <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
              Our contracts team handles vehicle inquiries, sole-source
              justifications, and teaming discussions directly. No procurement
              intermediaries — just the people who know the vehicles and the work.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold transition-all hover:opacity-90"
              style={{ background: 'var(--gold)', color: '#05050F' }}
            >
              Contact Our Contracts Team <ArrowRight size={16} />
            </Link>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
