'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Eye, FileCheck } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

/* ============================================================
   DATA
   ============================================================ */

const sections = [
  {
    icon: <Shield size={24} />,
    eyebrow: 'Security Architecture',
    title: 'Build the Architecture. Sustain the Posture.',
    body: [
      'Most organizations treat security as a layer painted on top of existing infrastructure. Axcend designs it from the inside out. Our security architecture practice draws on years of designing and operating programs for DoD and Intelligence Community environments — where a misconfigured policy or missed patch can have consequences that extend well beyond a quarterly audit.',
      'We implement Zero Trust frameworks aligned to NIST SP 800-207, establish continuous monitoring programs that surface real threat signals (not alert noise), and apply our 4D methodology — Design, Develop, Deploy, Defend — to build security postures that hold under operational pressure. From initial architecture reviews through long-term continuous monitoring operations, Axcend is a persistent security partner — not a one-time assessor.',
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
    title: 'We Think Like the Adversary. So You Don\'t Have To.',
    body: [
      'Compliance scans tell you what your tools can see. Penetration testing tells you what an attacker would actually do. Axcend\'s offensive security practitioners approach every engagement with the mindset of a motivated adversary — mapping attack paths, chaining vulnerabilities, and identifying the gaps that automated tooling consistently misses.',
      'Our findings are mapped to NIST 800-53 and PCI-DSS control families, giving your team clear traceability from technical finding to compliance impact. Every engagement closes with a prioritized remediation roadmap — not a raw dump of CVEs — so your team knows exactly where to focus effort and resources.',
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
    title: 'Compliance Is a Program, Not a Checkbox.',
    body: [
      'Federal compliance frameworks — NIST RMF, FISMA, DIACAP — exist because the consequences of a breach in government systems are measured in national security, not quarterly earnings. Axcend practitioners have worked within these frameworks at the operational level, not just as auditors reviewing documentation after the fact.',
      'We support the full Authorization to Operate (ATO) lifecycle: system categorization, control selection, implementation, assessment, and ongoing authorization maintenance. Our team manages POA&M processes that keep remediation on track and ensure your authorization remains defensible across annual reviews, inspector general audits, and program transitions.',
    ],
    bullets: [
      'NIST RMF Authorization to Operate (ATO)',
      'FISMA Compliance Programs',
      'PCI-DSS Assessment Support',
      'DIACAP Transition Support',
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
              className={`max-w-2xl text-xl leading-relaxed animate-enter ${heroVisible ? 'is-visible' : ''}`}
              style={{ color: 'var(--text-secondary)', transitionDelay: '200ms' }}
            >
              From classified DoD networks to civilian agency compliance programs
              — Axcend delivers adversarial rigor and federal-grade cybersecurity
              depth across every environment.
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
          <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
            Start with a direct conversation. No RFP required — just a frank
            discussion about your current environment and where the gaps are.
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
