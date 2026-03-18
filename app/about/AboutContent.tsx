'use client';

import { useInView } from '@/hooks/useInView';
import StatCounter from '@/components/StatCounter';
import {
  Shield,
  Cloud,
  Target,
  BarChart2,
  Settings,
  Network,
  Server,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

/* ============================================================
   CERT CARD
   ============================================================ */

interface CertCardProps {
  icon: React.ReactNode;
  name: string;
  abbr: string;
  delay?: number;
}

function CertCard({ icon, name, abbr, delay = 0 }: CertCardProps) {
  const { ref, isVisible } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`glass-dark rounded-lg p-5 flex flex-col gap-3 animate-enter ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center"
        style={{ background: 'var(--accent-blue-dim)', border: '1px solid rgba(0,87,255,0.2)' }}
      >
        {icon}
      </div>
      <div>
        <p
          className="text-sm font-semibold leading-snug mb-1"
          style={{ color: 'var(--text-primary)' }}
        >
          {name}
        </p>
        <span
          className="text-xs font-bold tracking-wider"
          style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}
        >
          {abbr}
        </span>
      </div>
    </div>
  );
}

/* ============================================================
   TIMELINE DECORATIVE ELEMENT
   ============================================================ */

function TimelineDecor() {
  const milestones = [
    { year: '2015', label: 'Founded in Fairfax, Virginia' },
    { year: '2015', label: 'Government Cyber engagement' },
    { year: '2016', label: 'First DoD and Intel Cyber/Cloud engagement' },
    { year: '2018', label: 'Cloud Computing book published' },
    { year: '2020', label: 'NIST 800-53 Rev 4 guide released' },
    { year: '2021', label: 'GSA 8(a) STARS III award' },
    { year: '2023', label: 'NIST 800-53 Rev 5 guide released' },
  ];

  return (
    <div className="relative pl-6">
      {/* Vertical line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(to bottom, var(--accent-blue), transparent)' }}
      />
      <div className="space-y-7">
        {milestones.map(({ year, label }, i) => (
          <div key={i} className="relative flex gap-4 items-start">
            {/* Dot */}
            <div
              className="absolute -left-[1.65rem] w-3 h-3 rounded-full mt-1 flex-shrink-0"
              style={{
                background: i === milestones.length - 1 ? 'var(--accent-blue)' : 'var(--bg-elevated)',
                border: '2px solid var(--accent-blue)',
                boxShadow: i === milestones.length - 1 ? '0 0 10px rgba(0,87,255,0.5)' : 'none',
              }}
            />
            <div>
              <span
                className="text-xs font-bold block mb-0.5"
                style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}
              >
                {year}
              </span>
              <p className="text-sm leading-snug" style={{ color: 'var(--text-secondary)' }}>
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   ABOUT CONTENT
   ============================================================ */

export default function AboutContent() {
  const heroRef = useInView();
  const storyRef = useInView();
  const certsRef = useInView();
  const statsRef = useInView();
  const contactRef = useInView();

  const certifications = [
    {
      icon: <Cloud size={18} style={{ color: 'var(--accent-blue)' }} />,
      name: 'AWS Solutions Architect – Associate',
      abbr: 'AWS-SAA',
    },
    {
      icon: <Shield size={18} style={{ color: 'var(--accent-blue)' }} />,
      name: 'Certified Information Systems Security Professional',
      abbr: 'CISSP',
    },
    {
      icon: <Target size={18} style={{ color: 'var(--accent-blue)' }} />,
      name: 'Certified Ethical Hacker',
      abbr: 'CEH',
    },
    {
      icon: <BarChart2 size={18} style={{ color: 'var(--accent-blue)' }} />,
      name: 'Project Management Professional',
      abbr: 'PMP',
    },
    {
      icon: <Settings size={18} style={{ color: 'var(--accent-blue)' }} />,
      name: 'ITIL V3 Foundation',
      abbr: 'ITIL V3',
    },
    {
      icon: <Network size={18} style={{ color: 'var(--accent-blue)' }} />,
      name: 'Cisco Certified Network Associate',
      abbr: 'CCNA',
    },
    {
      icon: <Server size={18} style={{ color: 'var(--accent-blue)' }} />,
      name: 'Red Hat Certified System Administrator',
      abbr: 'RHCSA',
    },
  ];

  return (
    <>
      {/* ====================================================
          HERO
      ==================================================== */}
      <section
        className="relative min-h-[60vh] flex flex-col justify-center grid-dot-bg overflow-hidden"
        style={{ background: 'var(--bg-base)' }}
        ref={heroRef.ref as React.RefObject<HTMLElement>}
      >
        {/* Blue radial bloom */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-150px',
            right: '-150px',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,87,255,0.06) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-36 pb-20">
          <div className={`animate-enter ${heroRef.isVisible ? 'is-visible' : ''}`}>
            <span
              className="text-xs font-semibold tracking-widest uppercase block mb-5"
              style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}
            >
              About Axcend
            </span>
          </div>
          <h1
            className={`max-w-4xl mb-6 animate-enter ${heroRef.isVisible ? 'is-visible' : ''}`}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
              transitionDelay: '100ms',
            }}
          >
            Decades of Service.{' '}
            <span style={{ color: 'var(--accent-blue)' }}>One Trusted Team.</span>
          </h1>
          <p
            className={`max-w-2xl text-2xl font-medium leading-relaxed animate-enter ${heroRef.isVisible ? 'is-visible' : ''}`}
            style={{ color: 'var(--text-secondary)', transitionDelay: '220ms' }}
          >
            Axcend was built on a simple conviction: organizations deserve cybersecurity and technology services delivered with rigorous, uncompromising excellence.
          </p>
        </div>
      </section>

      {/* ====================================================
          STORY SECTION
      ==================================================== */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
        style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)' }}
        ref={storyRef.ref as React.RefObject<HTMLElement>}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: editorial prose */}
            <div className={`animate-enter-left ${storyRef.isVisible ? 'is-visible' : ''}`}>
              <span
                className="text-xs font-semibold tracking-widest uppercase block mb-6"
                style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}
              >
                Our Story
              </span>
              <div className="space-y-6 text-xl font-medium leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <p>
                  Axcend was founded in Fairfax, Virginia by engineers deeply experienced in the world's most demanding environments. We don't chase every contract; we earn engagements where technical excellence and accountability are non-negotiable.
                </p>
                <p>
                  Today, Axcend is an 8(a) SBA-Certified, Minority-Owned firm. We have an active track record serving the DoD, Intelligence Community, civilian agencies, and commercial enterprises.
                </p>
                <p>
                  We are agile, senior-heavy, and deeply credentialed. Every engineer on an Axcend engagement holds active, relevant certifications. We stay current because mission environments evolve constantly.
                </p>
                <p>
                  Our founder, Ray Rafaels, authored definitive technical books on Cloud Computing and NIST 800-53 used universally by IT teams. We operate with this high intellectual rigor while remaining responsive, reliable, and accessible.
                </p>
              </div>
            </div>

            {/* Right: timeline */}
            <div className={`animate-enter-right ${storyRef.isVisible ? 'is-visible' : ''}`}>
              <span
                className="text-xs font-semibold tracking-widest uppercase block mb-8"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
              >
                Milestones
              </span>
              <TimelineDecor />

              {/* Credentials badges */}
              <div className="mt-12 flex flex-wrap gap-2">
                {[
                  '8(a) SBA Certified',
                  'Minority-Owned',
                  'GSA STARS III',
                  'Clearance Compatible',
                  'Fairfax, VA',
                ].map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          CERTIFICATIONS GRID
      ==================================================== */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
        style={{ background: 'var(--bg-base)', borderTop: '1px solid var(--border-subtle)' }}
        ref={certsRef.ref as React.RefObject<HTMLElement>}
      >
        <div className="max-w-7xl mx-auto">
          <div className={`mb-14 animate-enter ${certsRef.isVisible ? 'is-visible' : ''}`}>
            <span
              className="text-xs font-semibold tracking-widest uppercase block mb-4"
              style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}
            >
              Active Certifications
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold max-w-xl"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Credentials that match mission complexity.
            </h2>
            <p className="mt-4 max-w-2xl text-xl font-medium leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Every certification here is active. We believe credentials only matter when they are completely current.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <CertCard
                key={cert.abbr}
                icon={cert.icon}
                name={cert.name}
                abbr={cert.abbr}
                delay={i * 70}
              />
            ))}
          </div>
        </div>
      </section>



      {/* ====================================================
          CONTACT INFO BAND
      ==================================================== */}
      <section
        className="py-16 px-6 md:px-12 lg:px-24"
        style={{ background: 'var(--bg-surface)' }}
        ref={contactRef.ref as React.RefObject<HTMLElement>}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`animate-enter ${contactRef.isVisible ? 'is-visible' : ''}`}
          >
            <span
              className="text-xs font-semibold tracking-widest uppercase block mb-8"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
            >
              Contact
            </span>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  style={{ color: 'var(--accent-blue)', marginTop: '2px', flexShrink: 0 }}
                />
                <address
                  className="not-italic text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
                >
                  Fairfax, Virginia
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
                <a
                  href="tel:+12404181861"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
                >
                  (240) 418-1861
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
                <a
                  href="mailto:info@axcendinc.com"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
                >
                  info@axcendinc.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
