import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from 'lucide-react';

/* ============================================================
   SLUG METADATA MAP
   ============================================================ */

const slugMeta: Record<string, { title: string; category: string; date: string; readTime: string }> = {
  'zero-trust-federal-2025': {
    title: 'Zero Trust Architecture: What Federal Agencies Need to Know in 2025',
    category: 'Cybersecurity',
    date: 'February 2025',
    readTime: '8 min read',
  },
  'nist-800-53-rev5-changes': {
    title: 'Navigating NIST 800-53 Rev 5: Key Changes and What They Mean for Your ATO',
    category: 'Compliance',
    date: 'January 2025',
    readTime: '6 min read',
  },
  'cloud-migration-federal-risk': {
    title: 'Cloud Migration for Federal Agencies: A Risk-Based Framework',
    category: 'Cloud',
    date: 'December 2024',
    readTime: '10 min read',
  },
};

function prettifySlug(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/* ============================================================
   ARTICLE BODY — per slug
   ============================================================ */

const articleBodies: Record<string, React.ReactNode> = {
  'zero-trust-federal-2025': (
    <>
      <p>
        The federal mandate for Zero Trust Architecture — formalized through OMB Memorandum M-22-09
        and reinforced by CISA&apos;s Zero Trust Maturity Model — has moved from policy aspiration to
        active implementation requirement. For agencies still in the planning phase, 2025 represents
        the inflection point: those without a credible zero-trust roadmap will face increasing audit
        findings and potentially interrupted funding cycles. The question is no longer whether to
        implement zero trust, but how to do it without disrupting operational environments that were
        never designed with zero-trust principles in mind.
      </p>
      <p>
        The foundational principle of zero trust — never trust, always verify — sounds simple in
        theory and extraordinarily complex in practice. Federal networks are not greenfield
        environments. They are layers of legacy infrastructure, overlapping identity systems,
        inherited access policies, and mission-critical applications built before multi-factor
        authentication was a standard expectation. A realistic zero-trust implementation must begin
        not with technology acquisition but with a rigorous identity and access inventory. Who has
        access to what, under what conditions, and with what level of assurance? Until an agency can
        answer these questions at a machine-readable level, any zero-trust product deployment will
        operate on a flawed foundation.
      </p>
      <p>
        Network segmentation is typically the first visible zero-trust capability an agency
        implements — and it is also the most operationally disruptive. Micro-segmentation requires
        mapping application dependencies with a level of precision that many agencies simply have
        not maintained. Before any enforcement policy is applied, the dependency map must be built.
        This means passive network monitoring, application flow analysis, and close coordination
        with mission system owners. Attempting to enforce microsegment policies without this
        groundwork will generate application failures and urgent change requests that erode
        leadership confidence in the program.
      </p>
      <p>
        Continuous monitoring — the third pillar of zero trust alongside identity and device
        posture — is where mature implementations differentiate themselves. Static compliance
        snapshots, audit-and-forget SIEM deployments, and vulnerability scans run on annual
        schedules are incompatible with zero-trust intent. True continuous monitoring requires
        real-time telemetry from endpoints, network flows, identity systems, and cloud workloads —
        correlated and actioned within timeframes that reflect real adversarial dwell times, which
        CISA data puts at an average of 21 days for federal intrusions detected in 2024. Building
        this capability requires staffing, tooling, and the organizational authority to act on
        signals without waiting for change-control cycles.
      </p>
    </>
  ),
  'nist-800-53-rev5-changes': (
    <>
      <p>
        When NIST published Special Publication 800-53 Revision 5 in September 2020 — with a
        mandatory compliance deadline extended to November 2023 — it introduced more than an
        incremental update to existing controls. Rev 5 represented a structural reimagining of how
        the control catalog should be organized, who it applies to, and what risk domains it must
        cover. The three most significant changes are the integration of privacy controls, the
        expansion of supply chain risk management requirements, and the decoupling of the catalog
        from federal-specific language to make it applicable to any type of organization.
      </p>
      <p>
        The privacy control integration is perhaps the most operationally significant change for
        federal agencies. Under Rev 4, privacy controls existed as a supplemental appendix —
        informative but not required as part of the standard security baseline. Rev 5 integrates
        privacy controls directly into the main catalog, requiring ISSO and ISSM personnel to assess
        and document privacy requirements alongside traditional security requirements. For agencies
        with Privacy Act obligations and systems that process Personally Identifiable Information,
        this change will materially affect the scope and duration of ATO assessments and the
        complexity of System Security Plans.
      </p>
      <p>
        Supply chain risk management received its own control family — SR — in Rev 5, reflecting
        the maturation of supply chain attack vectors as a primary threat vector against federal
        systems. The SR family requires organizations to establish supply chain risk management
        plans, assess supplier risk, use tamper-evident packaging for hardware, and include
        cybersecurity requirements in acquisition documentation. Many agencies are still building
        the visibility required to comply with these controls — they require procurement
        collaboration that security teams alone cannot achieve.
      </p>
      <p>
        For organizations transitioning from Rev 4 to Rev 5, the practical challenge is not
        understanding the new controls in isolation — it is mapping existing implementations and
        SSP documentation to the restructured control identifiers. Several Rev 4 controls were split
        into multiple Rev 5 controls; others were merged, renamed, or moved to different families.
        The transition requires a systematic gap analysis that compares the current authorization
        baseline against the Rev 5 catalog at a control-by-control level, with particular attention
        to the 37 new controls added and the dozens of controls where applicability statements
        were materially changed.
      </p>
    </>
  ),
  'cloud-migration-federal-risk': (
    <>
      <p>
        Federal cloud migration is one of the most consistently misunderstood transformations in
        government IT. The persistent misconception is that cloud migration is primarily a technical
        project — a set of server moves, database lifts, and network reconfigurations managed by an
        infrastructure team. In practice, cloud migration for federal workloads is a risk management
        exercise first and a technical project second. The organizations that fail during or after
        migration almost universally do so because they did not map their compliance obligations,
        security baselines, and operational dependencies before they started moving workloads.
      </p>
      <p>
        The first phase of any rigorous federal cloud migration is a data classification and
        compliance mapping exercise. Before any workload moves, the project team must know what
        data the system processes, at what classification level, under what legal authority, and
        with what boundary conditions. A system that processes Controlled Unclassified Information
        (CUI) and falls under CMMC requirements has fundamentally different destination options
        than a system that processes low-sensitivity administrative data. Selecting a cloud
        environment before completing this analysis is not efficiency — it is procurement risk
        that surfaces as re-migration cost later in the program.
      </p>
      <p>
        Security baseline migration is the most technically demanding phase of a federal cloud
        transition. An existing on-premises system may have years of configuration hardening,
        custom firewall rules, application-layer controls, and STIG compliance baked into its
        deployment. None of that translates automatically to a cloud environment. The cloud
        destination must be independently assessed against the applicable NIST 800-53 baseline,
        with a new or updated System Security Plan, new boundary descriptions, and a data flow
        analysis that reflects the changed network topology. If the system is operating under an
        existing ATO, the migration will almost certainly require a Significant Change notification
        to the Authorizing Official and may trigger a full reassessment.
      </p>
      <p>
        Operational planning is the phase that receives the least investment and causes the most
        post-migration incidents. Cloud environments do not manage themselves. An on-premises system
        with a 10-person operations team does not automatically require fewer staff in the cloud —
        in fact, cloud operations often require different skills, new tooling, and updated monitoring
        configurations that must be established before go-live. The operations plan for a federal
        cloud migration must address 7/24/365 alerting and response, patching cadences, backup and
        recovery testing, cost optimization governance, and identity lifecycle management — all
        scoped to the specific cloud platform and security baseline in use.
      </p>
    </>
  ),
};

/* ============================================================
   RELATED POSTS
   ============================================================ */

const relatedPosts = [
  {
    slug: 'zero-trust-federal-2025',
    title: 'Zero Trust Architecture: What Federal Agencies Need to Know in 2025',
    category: 'Cybersecurity',
    readTime: '8 min read',
  },
  {
    slug: 'nist-800-53-rev5-changes',
    title: 'Navigating NIST 800-53 Rev 5: Key Changes and What They Mean for Your ATO',
    category: 'Compliance',
    readTime: '6 min read',
  },
  {
    slug: 'cloud-migration-federal-risk',
    title: 'Cloud Migration for Federal Agencies: A Risk-Based Framework',
    category: 'Cloud',
    readTime: '10 min read',
  },
];

/* ============================================================
   GENERATE METADATA
   ============================================================ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = slugMeta[slug];
  const title = meta?.title ?? prettifySlug(slug);
  return {
    title,
    description: `Axcend Insights: ${title}. Published perspectives on federal cybersecurity, cloud architecture, and compliance.`,
  };
}

/* ============================================================
   PAGE
   ============================================================ */

export default async function InsightSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = slugMeta[slug];
  const title = meta?.title ?? prettifySlug(slug);
  const category = meta?.category ?? 'Insights';
  const date = meta?.date ?? '2025';
  const readTime = meta?.readTime ?? '5 min read';
  const body = articleBodies[slug] ?? (
    <p style={{ color: 'var(--text-secondary)' }}>
      This article is currently being prepared. Check back soon for the full published version.
    </p>
  );

  const related = relatedPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* ====================================================
          HERO
      ==================================================== */}
      <section
        className="relative pt-32 pb-16 px-6 md:px-12 lg:px-24 grid-dot-bg"
        style={{ background: 'var(--bg-base)', borderBottom: '1px solid var(--border-subtle)' }}
      >
        <div
          className="absolute pointer-events-none inset-0"
          style={{
            background: 'radial-gradient(ellipse at 60% 0%, rgba(0,87,255,0.05) 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-white"
            style={{ color: 'var(--text-secondary)' }}
          >
            <ArrowLeft size={14} />
            Back to Insights
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded"
              style={{
                background: 'var(--accent-blue-dim)',
                border: '1px solid rgba(0,87,255,0.25)',
                color: 'var(--accent-blue)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {category}
            </span>
            <span
              className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded"
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Blog Post
            </span>
          </div>

          <h1
            className="mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}
          >
            {title}
          </h1>

          {/* Byline */}
          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: 'var(--accent-blue)', color: 'white' }}
              >
                RR
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Ray Rafaels
                </p>
                <p className="text-xs" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                  Principal Engineer &amp; Published Author
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4" style={{ color: 'var(--text-secondary)' }}>
              <span className="flex items-center gap-1.5 text-xs" style={{ fontFamily: 'var(--font-mono)' }}>
                <Calendar size={12} />
                {date}
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ fontFamily: 'var(--font-mono)' }}>
                <Clock size={12} />
                {readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          ARTICLE BODY
      ==================================================== */}
      <section
        className="py-16 px-6 md:px-12 lg:px-24"
        style={{ background: 'var(--bg-base)' }}
      >
        <div className="max-w-4xl mx-auto">
          <article
            className="prose-axcend space-y-6 text-base leading-[1.85] max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            {body}
          </article>

          {/* Author box */}
          <div
            className="mt-16 p-6 rounded-xl flex gap-5"
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
              style={{ background: 'var(--accent-blue)', color: 'white' }}
            >
              RR
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Ray Rafaels
                </p>
                <span
                  className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded"
                  style={{
                    background: 'var(--accent-blue-dim)',
                    color: 'var(--accent-blue)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  Author
                </span>
              </div>
              <p className="text-xs mb-2" style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>
                Principal Engineer &amp; Published Author · Axcend, Inc.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Ray Rafaels is the founder and principal engineer of Axcend, Inc. He holds active
                certifications including CISSP, CEH, AWS, and PMP, and has authored three technical
                books on cloud computing and NIST 800-53 security controls used by government and
                commercial security teams worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          RELATED POSTS
      ==================================================== */}
      <section
        className="py-16 px-6 md:px-12 lg:px-24"
        style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)' }}
      >
        <div className="max-w-4xl mx-auto">
          <span
            className="text-xs font-semibold tracking-widest uppercase block mb-6"
            style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}
          >
            Related Perspectives
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {related.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group rounded-lg p-5 transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <span
                  className="text-[10px] font-semibold tracking-widest uppercase block mb-3"
                  style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}
                >
                  {post.category}
                </span>
                <h3
                  className="font-semibold text-sm leading-snug mb-3 group-hover:text-white transition-colors"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {post.title}
                </h3>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2 transition-all"
                  style={{ color: 'var(--accent-blue)' }}
                >
                  Read more <ArrowRight size={11} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          CTA
      ==================================================== */}
      <section
        className="py-20 px-6 md:px-12 lg:px-24"
        style={{ background: 'var(--bg-base)', borderTop: '1px solid var(--border-subtle)' }}
      >
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-10 text-center"
            style={{
              background: 'linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-elevated) 100%)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <span
              className="text-xs font-semibold tracking-widest uppercase block mb-4"
              style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}
            >
              Apply This in Practice
            </span>
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Ready to implement these frameworks in your environment?
            </h2>
            <p className="text-base leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Axcend&apos;s engineers apply these exact frameworks on active federal engagements. Let&apos;s
              talk about what a practical implementation looks like for your mission.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: 'var(--accent-blue)' }}
              >
                Start the Conversation <ArrowRight size={15} />
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold transition-all hover:bg-white/5"
                style={{ color: 'var(--text-primary)', border: '1px solid var(--border-subtle)' }}
              >
                More Insights
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
