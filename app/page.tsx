'use client';

import Link from 'next/link';
import { ArrowRight, ChevronDown, Star, Shield, BookOpen, Cloud, ExternalLink } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import ServiceCard from '@/components/ServiceCard';
import ClientLogoStrip from '@/components/ClientLogoStrip';

/* ============================================================
   WHY AXCEND CARD
   ============================================================ */

interface WhyCardProps {
  icon: React.ReactNode;
  headline: string;
  body: string;
  delay?: number;
}

function WhyCard({ icon, headline, body, delay = 0 }: WhyCardProps) {
  const { ref, isVisible } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`glass-dark rounded-xl p-8 flex flex-col gap-5 animate-enter ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center"
        style={{ background: 'var(--accent-blue-dim)', border: '1px solid rgba(0,87,255,0.2)' }}
      >
        {icon}
      </div>
      <div>
        <h3
          className="text-xl font-bold mb-3"
          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
        >
          {headline}
        </h3>
        <p className="text-lg font-medium leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {body}
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   MARQUEE CONTENT
   ============================================================ */

const techTerms1 = [
  'Cybersecurity', '·', 'NIST RMF', '·', 'Zero Trust Architecture', '·', 'FISMA Compliance',
  '·', 'Cloud Migration', '·', 'AWS', '·', 'Microsoft Azure', '·', 'Google Cloud', '·', 'AI Solutions',
  '·', 'ATO Support', '·', 'FedRAMP-Aligned', '·', 'DevSecOps',
];

const techTerms2 = [
  '8(a) STARS III', '·', 'DoD', '·', 'Intel Community', '·', 'FISMA', '·', 'PMP Certified',
  '·', 'CISSP', '·', 'CEH', '·', 'CCNA', '·', 'ITIL V3', '·', 'AWS Certified', '·',
  'RHCSA', '·', 'Penetration Testing', '·', 'Minority Owned', '·', 'GSA Awardee',
];

/* ============================================================
   HOME PAGE
   ============================================================ */

export default function HomePage() {
  const whyRef = useInView();
  const clientsRef = useInView();
  const capabilitiesRef = useInView();
  const contractsRef = useInView();
  const booksRef = useInView();

  return (
    <>
      {/* ====================================================
          HERO
      ==================================================== */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: 'var(--bg-base)' }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none hero-video"
          src="/hero_loop3.mp4"
        />

        {/* Blue radial bloom */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-200px',
            right: '-200px',
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,87,255,0.07) 0%, transparent 70%)',
          }}
        />

        {/* Topo rings */}
        <div className="absolute pointer-events-none" style={{ bottom: '-100px', left: '-100px', opacity: 0.04 }}>
          {[280, 220, 160, 100, 40].map((r, i) => (
            <svg key={i} className="absolute" style={{ width: '600px', height: '600px', top: 0, left: 0 }} viewBox="0 0 600 600" fill="none">
              <circle cx="300" cy="300" r={r} stroke="#0057FF" strokeWidth="0.8" />
            </svg>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-20">
          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <span
              className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8 inline-block"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--gold)',
                background: 'var(--gold-dim)',
                border: '1px solid rgba(196,154,42,0.25)',
              }}
            >

              <Star size={11} style={{ display: 'inline', marginRight: '6px' }} />
              GSA ·  MAS · HACS Certified
            </span>
          </div>

          {/* H1 */}
          <h1
            className="hero-h1 max-w-4xl mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
            }}
          >
            Securing and Accelerating{' '}
            <span style={{ color: 'var(--accent-blue)' }}>America&apos;s</span> Most Critical Missions.
          </h1>

          {/* Subtitle */}
          <p
            className="hero-subtitle max-w-2xl text-2xl font-medium leading-relaxed mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            Axcend delivers advanced cybersecurity, cloud architecture, and technology services to federal and commercial partners.
          </p>

          {/* Badge row */}
          <div className="hero-badges flex flex-wrap gap-3 mb-10">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: 'var(--gold-dim)',
                border: '1px solid rgba(196,154,42,0.3)',
                color: 'var(--gold)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <Star size={10} />
              8(a) STARS III · GSA
            </span>
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: 'var(--accent-blue-dim)',
                border: '1px solid rgba(0,87,255,0.25)',
                color: 'var(--accent-blue)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              8(a) SBA Certified · Minority Owned
            </span>
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Fairfax, Virginia · Est. Federal Contractor
            </span>
          </div>

          {/* CTAs */}
          <div className="hero-ctas flex flex-wrap gap-4">
            <Link
              href="/capabilities"
              className="glow-pulse inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold text-white transition-all duration-150 hover:opacity-90"
              style={{ background: 'var(--accent-blue)' }}
            >
              Explore Our Services <ArrowRight size={16} />
            </Link>
            <Link
              href="/contracts"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold transition-all duration-150 hover:bg-white/5"
              style={{
                color: 'var(--text-primary)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              View Contract Vehicles
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll absolute bottom-10 left-1/2">
          <ChevronDown
            size={20}
            className="scroll-bounce"
            style={{ color: 'var(--text-secondary)', opacity: 0.4 }}
          />
        </div>
      </section>

      {/* ====================================================
          DUAL MARQUEE BAND
      ==================================================== */}
      <div
        className="py-4 overflow-hidden"
        style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}
      >
        <div className="marquee-track mb-2">
          {[...techTerms1, ...techTerms1].map((term, i) => (
            <span
              key={i}
              className="mx-3 text-xs font-semibold whitespace-nowrap"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
            >
              {term}
            </span>
          ))}
        </div>
        <div className="marquee-track-reverse">
          {[...techTerms2, ...techTerms2].map((term, i) => (
            <span
              key={i}
              className="mx-3 text-xs font-semibold whitespace-nowrap"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', opacity: 0.7 }}
            >
              {term}
            </span>
          ))}
        </div>
      </div>

      {/* ====================================================
          WHY AXCEND
      ==================================================== */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
        style={{ background: 'var(--bg-base)' }}
        ref={whyRef.ref as React.RefObject<HTMLElement>}
      >
        <div className="max-w-7xl mx-auto">
          <div className={`mb-16 animate-enter ${whyRef.isVisible ? 'is-visible' : ''}`}>
            <span
              className="text-xs font-semibold tracking-widest uppercase block mb-3"
              style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}
            >
              Why Axcend
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold max-w-2xl"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Built for missions where failure is not an option.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <WhyCard
              icon={<Star size={20} style={{ color: 'var(--accent-blue)' }} />}
              headline="Contract Vehicles That Open Doors"
              body="As a GSA 8(a) STARS III awardee, we offer federal buyers a pre-vetted, sole-source path to rapid award."
              delay={0}
            />
            <WhyCard
              icon={<Shield size={20} style={{ color: 'var(--accent-blue)' }} />}
              headline="Credentials That Match Mission Complexity"
              body="Our engineers hold active CISSP, AWS, CCNA, and ITIL certifications. We deliver proven technical depth."
              delay={120}
            />
            <WhyCard
              icon={<BookOpen size={20} style={{ color: 'var(--accent-blue)' }} />}
              headline="Knowledge Published, Not Just Claimed"
              body="Our founder authored the definitive technical guides on Cloud Computing and NIST 800-53 security controls."
              delay={240}
            />
          </div>
        </div>
      </section>

      {/* ====================================================
          CLIENT LOGOS
      ==================================================== */}
      <section
        className="py-24 md:py-28 px-6 md:px-12 lg:px-24 section-divider"
        style={{ background: 'var(--bg-surface)' }}
        ref={clientsRef.ref as React.RefObject<HTMLElement>}
      >
        <div className="max-w-7xl mx-auto">
          <ClientLogoStrip variant="grid" showLabel />
        </div>
      </section>

      {/* ====================================================
          CAPABILITIES
      ==================================================== */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
        style={{ background: 'var(--bg-base)' }}
        ref={capabilitiesRef.ref as React.RefObject<HTMLElement>}
      >
        <div className="max-w-7xl mx-auto">
          <div className={`mb-16 animate-enter ${capabilitiesRef.isVisible ? 'is-visible' : ''}`}>
            <span
              className="text-xs font-semibold tracking-widest uppercase block mb-3"
              style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}
            >
              What We Do
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              What Axcend Builds and Defends
            </h2>
            <p className="max-w-2xl text-xl font-medium" style={{ color: 'var(--text-secondary)' }}>
              From classified infrastructure to commercial cloud environments, we master the complete technology supply chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard
              number="01"
              title="Cybersecurity & Compliance"
              body="Axcend partners with DoD commands to deliver embedded RMF lifecycle support and proactive SOC defense."
              certs={['CISSP', 'CEH', 'NIST RMF', 'Zero Trust']}
              href="/capabilities/cybersecurity"
              delay={0}
            />
            <ServiceCard
              number="02"
              title="Cloud Architecture & Migration"
              body="Federal-grade cloud adoption architectures and continuous operational tuning across AWS, Azure, and GCP."
              certs={['AWS Certified', 'Azure', 'GCP', 'Office 365', 'RHCSA']}
              href="/capabilities/cloud"
              delay={80}
            />
            <ServiceCard
              number="03"
              title="Technology & Systems Integration"
              body="Comprehensive DevSecOps CI/CD pipelines and tactical operational command center infrastructure."
              certs={['CCNA', 'ITIL V3', 'Microsoft', 'Cisco', 'VMware', 'RedHat']}
              href="/capabilities/technology-solutions"
              delay={160}
            />
            <ServiceCard
              number="04"
              title="Financial Management & FISCAM"
              body="Expert FISCAM auditing spanning the complete ecosystem of financial controls and infrastructure."
              certs={['FISCAM', 'Financial Audit', 'Systems Controls']}
              href="/capabilities/financial-management"
              delay={240}
            />
          </div>
        </div>
      </section>

      {/* ====================================================
          CONTRACT VEHICLES BAND
      ==================================================== */}
      <section
        className="py-20 md:py-24 px-6 md:px-12 lg:px-24 section-divider"
        style={{ background: 'var(--bg-surface)' }}
        ref={contractsRef.ref as React.RefObject<HTMLElement>}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className={`animate-enter-left ${contractsRef.isVisible ? 'is-visible' : ''}`}>
              <span
                className="text-xs font-semibold tracking-widest uppercase block mb-4"
                style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}
              >
                Contract Vehicles
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold mb-5"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                Already on contract.
                <br />
                Ready to task.
              </h2>
              <p className="text-xl font-medium leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                Active federal contract vehicles allow agencies to award task orders without broad competition. This guarantees faster, low-risk procurement.
              </p>
              <Link
                href="/contracts"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-sm transition-all hover:bg-amber-400/10"
                style={{
                  color: 'var(--gold)',
                  border: '1px solid rgba(196,154,42,0.4)',
                }}
              >
                View All Contract Vehicles <ArrowRight size={14} />
              </Link>
            </div>

            <div className={`animate-enter-right ${contractsRef.isVisible ? 'is-visible' : ''}`}>
              <div
                className="rounded-lg p-6 space-y-1"
                style={{
                  background: 'var(--bg-base)',
                  border: '1px solid var(--border-subtle)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {[
                  ['GSA 8(a) STARS III', 'Master Contract: 47QTCB22D0115'],
                  ['Seaport Enhanced', 'DUNS/UEI: 079944214 · N6H6A8RBPHK7'],
                  ['MCTSSA (Marine Corps)', 'CAGE CODE: 7FU62'],
                  ['Sole Source up to $4.5M', 'Period: 2021 – 2031'],
                  ['NAICS', '541511 · 541512 · 541513 · 541519 · 541611'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-2 gap-4 py-2.5"
                    style={{ borderBottom: '1px solid var(--border-subtle)' }}
                  >
                    <span className="text-sm font-semibold" style={{ color: 'var(--gold)', fontSize: '0.8125rem' }}>
                      {label}
                    </span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.8125rem' }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          BOOKS / AUTHORITY
      ==================================================== */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
        style={{ background: 'var(--bg-base)' }}
        ref={booksRef.ref as React.RefObject<HTMLElement>}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div className={`lg:col-span-3 animate-enter-left ${booksRef.isVisible ? 'is-visible' : ''}`}>
              <span
                className="text-xs font-semibold tracking-widest uppercase block mb-4"
                style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}
              >
                Published Authority
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                When the standards change, we&apos;ve already read the draft.
              </h2>
              <div className="space-y-4 text-xl font-medium leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <p>
                  Ray Rafaels, Axcend&apos;s founder, authored the definitive guides:{' '}
                  <strong style={{ color: 'var(--text-primary)' }}>Cloud Computing: From Beginning to End</strong>{' '}
                  and the{' '}
                  <strong style={{ color: 'var(--text-primary)' }}>Guide to NIST SP 800-53 Rev 5</strong>.
                </p>
                <p>
                  These are practitioner-level references used globally. When Axcend audits or secures your infrastructure, you get the mind that explained the standards to the industry.
                </p>
              </div>
              <Link
                href="/insights"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-sm transition-all hover:gap-3"
                style={{ color: 'var(--accent-blue)' }}
              >
                Explore the Books <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right — stacked book covers */}
            <div className={`lg:col-span-2 animate-enter-right ${booksRef.isVisible ? 'is-visible' : ''}`}>
              <div className="relative" style={{ height: '280px' }}>
                {/* Book 3 */}
                <div
                  className="absolute rounded-lg flex items-center justify-center"
                  style={{
                    width: '155px', height: '205px',
                    background: 'linear-gradient(135deg, #0A2040 0%, #0A1628 100%)',
                    border: '1px solid rgba(0,87,255,0.25)',
                    transform: 'rotate(5deg) translate(120px, 40px)',
                    zIndex: 1,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  }}
                >
                  <div className="p-3 text-center">
                    <p className="text-[8px] font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}>NIST SP 800-53</p>
                    <p className="text-[11px] font-bold leading-tight" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                      Guide to Understanding Security Controls Rev 5
                    </p>
                    <p className="text-[8px] mt-2 opacity-50" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>Ray Rafaels</p>
                  </div>
                </div>
                {/* Book 2 */}
                <div
                  className="absolute rounded-lg flex items-center justify-center"
                  style={{
                    width: '155px', height: '205px',
                    background: 'linear-gradient(135deg, #0D1B35 0%, #091030 100%)',
                    border: '1px solid rgba(0,87,255,0.2)',
                    transform: 'rotate(-2deg) translate(60px, 55px)',
                    zIndex: 2,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  }}
                >
                  <div className="p-3 text-center">
                    <p className="text-[8px] font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>NIST SP 800-53</p>
                    <p className="text-[11px] font-bold leading-tight" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                      Guide to Understanding Security Controls Rev 4
                    </p>
                    <p className="text-[8px] mt-2 opacity-50" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>Ray Rafaels</p>
                  </div>
                </div>
                {/* Book 1 — front */}
                <div
                  className="absolute rounded-lg flex flex-col items-center justify-center"
                  style={{
                    width: '163px', height: '215px',
                    background: 'linear-gradient(135deg, #040F20 0%, #0A1628 100%)',
                    border: '1px solid rgba(0,87,255,0.5)',
                    transform: 'rotate(-1deg) translate(0px, 25px)',
                    zIndex: 3,
                    boxShadow: '0 30px 80px rgba(0,87,255,0.15), 0 20px 60px rgba(0,0,0,0.7)',
                  }}
                >
                  <div className="p-4 text-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3"
                      style={{ background: 'var(--accent-blue-dim)', border: '1px solid rgba(0,87,255,0.4)' }}
                    >
                      <Cloud size={14} style={{ color: 'var(--accent-blue)' }} />
                    </div>
                    <p className="text-[8px] font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>Cloud Computing</p>
                    <p className="text-[12px] font-bold leading-tight" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                      From Beginning to End
                    </p>
                    <p className="text-[8px] mt-2 opacity-60" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>Ray Rafaels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          FINAL CTA BAND
      ==================================================== */}
      <section
        className="py-24 px-6 md:px-12 lg:px-24 text-center"
        style={{ background: '#0057FF' }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
          >
            Ready to bring Axcend into your mission?
          </h2>
          <p className="text-2xl font-medium leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.82)' }}>
            Whether you&apos;re a Contracting Officer leveraging STARS III or a CTO securing a pipeline, the mission starts here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold transition-all hover:opacity-90 hover:gap-3"
              style={{ background: 'white', color: '#0057FF' }}
            >
              Start the Conversation <ArrowRight size={16} />
            </Link>
            <a
              href="/axcend-capability-statement.pdf"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold transition-all hover:bg-white/10"
              style={{ color: 'white', border: '1px solid rgba(255,255,255,0.4)' }}
            >
              <ExternalLink size={15} />
              Download Capability Statement
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
