'use client';

import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import BookCard from '@/components/BookCard';
import InsightCard from '@/components/InsightCard';
import { ArrowRight, Send } from 'lucide-react';

/* ============================================================
   EMAIL CAPTURE
   ============================================================ */

function EmailCapture() {
  const { ref, isVisible } = useInView();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`animate-enter ${isVisible ? 'is-visible' : ''}`}
    >
      {submitted ? (
        <div
          className="flex items-center gap-3 py-5 px-6 rounded-lg"
          style={{ background: 'var(--accent-blue-dim)', border: '1px solid rgba(0,87,255,0.3)' }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: 'var(--accent-blue)' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8l3.5 3.5L13 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
            You&apos;re on the list. We&apos;ll notify you when new insights are published.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@agency.gov"
            required
            className="form-input flex-1"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-white transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ background: 'var(--accent-blue)' }}
          >
            <Send size={14} />
            Notify Me
          </button>
        </form>
      )}
    </div>
  );
}

/* ============================================================
   INSIGHTS CONTENT
   ============================================================ */

export default function InsightsContent() {
  const heroRef = useInView();
  const booksRef = useInView();
  const postsRef = useInView();
  const captureRef = useInView();

  const books = [
    {
      title: 'Cloud Computing: From Beginning to End',
      description:
        'A comprehensive technical guide to cloud computing technology and the methodologies required to migrate existing applications to the cloud. Covers not only the technical architecture of public and private cloud platforms, but the strategy, design, and in-depth implementation details practitioners need to execute real-world migrations.',
      audience:
        'Cloud architects, enterprise IT leaders, federal program managers considering cloud adoption, and engineers preparing for AWS or Azure certifications.',
      accentColor: 'var(--accent-blue)',
    },
    {
      title: 'Guide to Understanding Security Controls',
      subtitle: 'NIST SP 800-53 Rev 4',
      description:
        'An enhanced, plain-English guide to NIST Special Publication 800-53 Revision 4 — the foundational security and privacy control catalog for federal information systems. Enhanced with detailed explanations, illustrations, and formatting improvements to make the standard accessible to both technical practitioners and compliance professionals.',
      audience:
        'Federal ISSO/ISSM personnel, security assessors, ATO package preparers, IT auditors, and compliance managers.',
      accentColor: 'var(--gold)',
    },
    {
      title: 'Guide to Understanding Security Controls',
      subtitle: 'NIST SP 800-53 Rev 5',
      description:
        'The updated edition covering NIST SP 800-53 Revision 5, which introduced significant structural changes to the control catalog including the integration of privacy controls and the expansion of supply chain risk management requirements. Essential reading for organizations transitioning from Rev 4 to Rev 5.',
      audience:
        'Anyone managing a federal ATO, conducting FISMA assessments, or building a modern zero-trust security program.',
      accentColor: 'var(--accent-blue)',
    },
  ];

  const posts = [
    {
      type: 'BLOG POST' as const,
      title: 'Zero Trust Architecture: What Federal Agencies Need to Know in 2025',
      excerpt:
        'A practitioner guide to implementing zero-trust principles in federal environments — from network segmentation to identity verification and continuous monitoring.',
      category: 'Cybersecurity',
      slug: 'zero-trust-federal-2025',
      date: 'Feb 2025',
      readTime: '8 min read',
    },
    {
      type: 'BLOG POST' as const,
      title: 'Navigating NIST 800-53 Rev 5: Key Changes and What They Mean for Your ATO',
      excerpt:
        'Rev 5 introduced privacy controls, supply chain risk management changes, and a restructured control catalog. Here is what practitioners need to know.',
      category: 'Compliance',
      slug: 'nist-800-53-rev5-changes',
      date: 'Jan 2025',
      readTime: '6 min read',
    },
    {
      type: 'BLOG POST' as const,
      title: 'Cloud Migration for Federal Agencies: A Risk-Based Framework',
      excerpt:
        'Moving federal workloads to the cloud requires more than technical execution — it requires a structured risk assessment, compliance mapping, and a realistic operations plan.',
      category: 'Cloud',
      slug: 'cloud-migration-federal-risk',
      date: 'Dec 2024',
      readTime: '10 min read',
    },
  ];

  return (
    <>
      {/* ====================================================
          HERO
      ==================================================== */}
      <section
        className="relative min-h-[50vh] flex flex-col justify-center overflow-hidden"
        style={{ background: 'var(--bg-base)' }}
        ref={heroRef.ref as React.RefObject<HTMLElement>}
      >
        {/* Radial accent */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-100px',
            left: '60%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(196,154,42,0.05) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-36 pb-20">
          <div className={`animate-enter ${heroRef.isVisible ? 'is-visible' : ''}`}>
            <span
              className="text-xs font-semibold tracking-widest uppercase block mb-5"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}
            >
              Insights & Publications
            </span>
          </div>
          <h1
            className={`max-w-3xl mb-5 animate-enter ${heroRef.isVisible ? 'is-visible' : ''}`}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
              transitionDelay: '100ms',
            }}
          >
            Intelligence.{' '}
            <span style={{ color: 'var(--gold)' }}>Published.</span>
          </h1>
          <p
            className={`max-w-2xl text-lg md:text-xl leading-relaxed animate-enter ${heroRef.isVisible ? 'is-visible' : ''}`}
            style={{ color: 'var(--text-secondary)', transitionDelay: '220ms' }}
          >
            Axcend&apos;s intellectual contributions to the federal technology community — in print,
            in practice, and in the field.
          </p>
        </div>
      </section>

      {/* ====================================================
          BOOKS SECTION
      ==================================================== */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
        style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)' }}
        ref={booksRef.ref as React.RefObject<HTMLElement>}
      >
        <div className="max-w-7xl mx-auto">
          <div className={`mb-14 animate-enter ${booksRef.isVisible ? 'is-visible' : ''}`}>
            <span
              className="text-xs font-semibold tracking-widest uppercase block mb-4"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}
            >
              Published Works
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold max-w-2xl"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Three books. One mission: make complex standards accessible.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {books.map((book, i) => (
              <BookCard
                key={i}
                title={book.title}
                subtitle={book.subtitle}
                description={book.description}
                audience={book.audience}
                accentColor={book.accentColor}
                delay={i * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          BLOG POSTS SECTION
      ==================================================== */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
        style={{ background: 'var(--bg-base)', borderTop: '1px solid var(--border-subtle)' }}
        ref={postsRef.ref as React.RefObject<HTMLElement>}
      >
        <div className="max-w-7xl mx-auto">
          <div className={`mb-14 animate-enter ${postsRef.isVisible ? 'is-visible' : ''}`}>
            <span
              className="text-xs font-semibold tracking-widest uppercase block mb-4"
              style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}
            >
              Perspectives
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold max-w-xl"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Technical insights from the field.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <InsightCard
                key={post.slug}
                type={post.type}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                slug={post.slug}
                date={post.date}
                readTime={post.readTime}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          EMAIL CAPTURE
      ==================================================== */}
      <section
        className="py-20 md:py-24 px-6 md:px-12 lg:px-24"
        style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)' }}
        ref={captureRef.ref as React.RefObject<HTMLElement>}
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className={`mb-4 animate-enter ${captureRef.isVisible ? 'is-visible' : ''}`}>
              <span
                className="text-xs font-semibold tracking-widest uppercase block mb-4"
                style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}
              >
                Stay Current
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                More Insights Coming Soon.
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                We publish practical, field-tested perspectives on federal cybersecurity, cloud
                architecture, and compliance — written by practitioners who do the work. Enter your
                email to be notified when new articles are published.
              </p>
            </div>
            <EmailCapture />
            <p
              className="mt-4 text-xs"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
            >
              No marketing cadences. Only substantive technical content.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================
          BOTTOM CTA
      ==================================================== */}
      <section
        className="py-20 px-6 md:px-12 lg:px-24"
        style={{ background: 'var(--bg-base)', borderTop: '1px solid var(--border-subtle)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-xl font-bold mb-1"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Ready to apply these frameworks to your mission?
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Talk to Axcend about your cybersecurity or cloud project.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ background: 'var(--accent-blue)' }}
          >
            Start the Conversation <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </>
  );
}
