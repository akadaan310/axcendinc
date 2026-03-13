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
      image: '/books/cloud_computing.png',
      href: 'https://www.amazon.com/Cloud-Computing-Mr-Ray-Rafaels/dp/1986726282/ref=dp_ob_title_bk',
    },
    {
      title: 'Guide to Understanding Security Controls',
      subtitle: 'NIST SP 800-53 Rev 4',
      description:
        'An enhanced, plain-English guide to NIST Special Publication 800-53 Revision 4 — the foundational security and privacy control catalog for federal information systems. Enhanced with detailed explanations, illustrations, and formatting improvements to make the standard accessible to both technical practitioners and compliance professionals.',
      audience:
        'Federal ISSO/ISSM personnel, security assessors, ATO package preparers, IT auditors, and compliance managers.',
      accentColor: 'var(--gold)',
      image: '/books/security_controls_rev4.png',
      href: 'https://www.amazon.com/Guide-Understanding-Security-Controls-800-53/dp/1686084447/ref=sr_1_2?keywords=800-53+rev+4&qid=1569517133&s=books&sr=1-2',
    },
    {
      title: 'Guide to Understanding Security Controls',
      subtitle: 'NIST SP 800-53 Rev 5',
      description:
        'The updated edition covering NIST SP 800-53 Revision 5, which introduced significant structural changes to the control catalog including the integration of privacy controls and the expansion of supply chain risk management requirements. Essential reading for organizations transitioning from Rev 4 to Rev 5.',
      audience:
        'Anyone managing a federal ATO, conducting FISMA assessments, or building a modern zero-trust security program.',
      accentColor: 'var(--accent-blue)',
      image: '/books/security_controls_rev5.png',
      href: 'https://www.amazon.com/Guide-Understanding-Security-Controls-SP-800-dp-B09TMTLL33/dp/B09TMTLL33/ref=dp_ob_title_bk',
    },
  ];

  const posts = [
    {
      type: 'BLOG POST' as const,
      title: 'Securing the Future: Comprehensive RMF Support at the U.S. Air Force Academy',
      excerpt:
        'Axcend partners with the USAFA to deliver comprehensive Risk Management Framework (RMF) tasks across their critical IT systems.',
      category: 'Case Study',
      slug: 'usaf-academy-rmf-case-study',
      date: 'Mar 10, 2026',
      readTime: '7 min read',
    },
    {
      type: 'BLOG POST' as const,
      title: 'Defending the Homeland: Continuous Monitoring & Incident Response for the Dept of Interior',
      excerpt:
        'Axcend delivers the cornerstone of the DOI’s defensive posture through continuous IT security monitoring and rapid incident response.',
      category: 'Case Study',
      slug: 'doi-continuous-monitoring-soc',
      date: 'Mar 10, 2026',
      readTime: '8 min read',
    },
    {
      type: 'WHITE PAPER' as const,
      title: 'The Federal Engineer\'s Guide to AWS AI Implementations',
      excerpt:
        'Implementing generative AI on AWS requires an architectural approach that satisfies federal mandates while providing elasticity.',
      category: 'Whitepaper',
      slug: 'federal-aws-ai-guide',
      date: 'Mar 10, 2026',
      readTime: '12 min read',
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
            className={`max-w-2xl text-xl font-medium md:text-2xl leading-relaxed animate-enter ${heroRef.isVisible ? 'is-visible' : ''}`}
            style={{ color: 'var(--text-secondary)', transitionDelay: '220ms' }}
          >
            Axcend&apos;s intellectual contributions to the federal technology community.
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
                image={book.image}
                href={book.href}
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
              <p className="text-lg font-medium leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                We publish practical perspectives on cybersecurity, cloud architecture, and compliance. Enter your email to be notified when new articles are published.
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
            <p className="text-base font-medium" style={{ color: 'var(--text-secondary)' }}>
              Talk to Axcend about your next project.
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
