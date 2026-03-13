import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from 'lucide-react';

/* ============================================================
   SLUG METADATA MAP
   ============================================================ */

const slugMeta: Record<string, { title: string; category: string; date: string; readTime: string }> = {
  'usaf-academy-rmf-case-study': {
    title: 'Securing the Future: Comprehensive RMF Support at the U.S. Air Force Academy',
    category: 'Case Study',
    date: 'March 10, 2026',
    readTime: '7 min read',
  },
  'doi-continuous-monitoring-soc': {
    title: 'Defending the Homeland: Continuous Monitoring & Incident Response for the Dept of Interior',
    category: 'Case Study',
    date: 'March 10, 2026',
    readTime: '8 min read',
  },
  'federal-aws-ai-guide': {
    title: 'The Federal Engineer\'s Guide to AWS AI Implementations',
    category: 'Whitepaper',
    date: 'March 10, 2026',
    readTime: '12 min read',
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
  'usaf-academy-rmf-case-study': (
    <>
      <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
        Introduction: The USAFA Mission and IT Complexity
      </h3>
      <p>
        The United States Air Force Academy (USAFA) requires a resilient, compliant IT infrastructure to train future leaders. Axcend partners with the USAFA to deliver comprehensive Risk Management Framework (RMF) tasks, proving rigorous security doesn't impede academic operations. Balancing an open academic network with strict DoD security mandates requires a highly tailored approach to authorization.
      </p>

      <h3 className="text-2xl font-bold mt-12 mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
        The Axcend Approach to DoD Risk Management Framework
      </h3>
      <p>
        We execute all RMF Steps, adapting the standard NIST SP 800-37 lifecycle to the unique enclave architecture of the USAFA. We methodically select NIST 800-53 security controls and deploy expert Security Controls Assessor Representatives (SCARs) to perform in-depth control assessments.
      </p>

      {/* Visual 1: Expanded RMF Process Diagram */}
      <div className="my-10 p-8 rounded-xl" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
        <h4 className="text-sm font-semibold tracking-widest uppercase mb-8" style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>
          The Integrated RMF Lifecycle at USAFA
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] z-0" style={{ background: 'linear-gradient(90deg, rgba(0,87,255,0.2) 0%, var(--accent-blue) 50%, rgba(0,87,255,0.2) 100%)' }} />
          {[
            { step: '01. Categorize', desc: 'Identify mission impact (FIPS 199/200). Define system boundaries and authorization applicability.' },
            { step: '02. Select', desc: 'Baseline NIST 800-53 controls. Tailor overlays for DoD IL4/IL5 data strictures.' },
            { step: '03. Implement', desc: 'Deploy technical security solutions and document system security plans (SSP).' },
            { step: '04. Assess', desc: 'Independent SCAR evaluations. STIG compliance checks and penetration testing.' },
            { step: '05. Authorize', desc: 'Develop POAMs to address residual risk. Achieve Authority to Operate (ATO).' },
            { step: '06. Monitor', desc: 'Continuous vulnerability scanning. Active ISSO management and change validation.' },
          ].map((item, i) => (
            <div key={item.step} className="bg-[var(--bg-base)] p-5 rounded-lg border border-[var(--border-subtle)] relative z-10 shadow-lg transform transition-transform hover:-translate-y-1">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-sm"
                style={{ background: 'var(--accent-blue-dim)', color: 'var(--accent-blue)', border: '1px solid rgba(0,87,255,0.3)' }}
              >
                {i + 1}
              </div>
              <h5 className="font-bold text-md mb-2" style={{ color: 'var(--text-primary)' }}>{item.step}</h5>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <p>
        Axcend's engineers work directly with system owners to ensure boundary definitions are accurate, avoiding unnecessary compliance overhead or the accidental exposure of unclassified systems to higher-tier data flows.
      </p>

      <h3 className="text-2xl font-bold mt-12 mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
        Precision Assessments: The Role of the SCAR
      </h3>
      <p>
        Our SCAR evaluations mirror real-world adversarial environments rather than performing "paper compliance." Our teams validate technical controls utilizing DISA STIGs and SRGs.
      </p>

      {/* Visual 2: SCAR Evaluation Matrix */}
      <div className="my-10 p-8 rounded-xl" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
         <h4 className="text-center font-bold mb-8 text-lg" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
          Axcend Assessment Matrix Coverage
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded text-center border" style={{ borderColor: 'rgba(255, 255, 255, 0.1)', background: 'rgba(0,87,255,0.05)' }}>
            <svg className="mx-auto mb-3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="1.5"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/><polyline points="14 2 14 8 20 8"/><path d="m3 15 2 2 4-4"/></svg>
            <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>Documentation</div>
            <div className="text-[10px] mt-1" style={{ color: 'var(--text-secondary)' }}>SSP, SAR, POAMs</div>
          </div>
          <div className="p-4 rounded text-center border" style={{ borderColor: 'rgba(255, 255, 255, 0.1)', background: 'rgba(0,87,255,0.05)' }}>
            <svg className="mx-auto mb-3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>Infrastructure</div>
            <div className="text-[10px] mt-1" style={{ color: 'var(--text-secondary)' }}>OS & Network STIGs</div>
          </div>
          <div className="p-4 rounded text-center border" style={{ borderColor: 'rgba(255, 255, 255, 0.1)', background: 'rgba(0,87,255,0.05)' }}>
            <svg className="mx-auto mb-3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>SaaS & Cloud</div>
            <div className="text-[10px] mt-1" style={{ color: 'var(--text-secondary)' }}>FedRAMP Validation</div>
          </div>
          <div className="p-4 rounded text-center border" style={{ borderColor: 'rgba(255, 255, 255, 0.1)', background: 'rgba(0,87,255,0.05)' }}>
             <svg className="mx-auto mb-3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>Applications</div>
            <div className="text-[10px] mt-1" style={{ color: 'var(--text-secondary)' }}>Fortify & SAST/DAST</div>
          </div>
        </div>
      </div>

      <p>
        Our assessments quickly reveal out-of-date cryptographic libraries or insecure protocols. We collaborate directly with Academy development teams to engineer remediation strategies, translating raw security findings into actionable engineering sprints.
      </p>

      <h3 className="text-2xl font-bold mt-12 mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
        Continuous Monitoring: Security Beyond the ATO
      </h3>
      <p>
        True security demands continuous vigilance. We conduct continuous monitoring powered by advanced vulnerability scanners and cyber toolsets, including ACAS and HBSS telemetry integration.
      </p>

      {/* Visual 3: Continuous Monitoring Arch */}
      <div className="my-10 p-8 rounded-xl overflow-hidden relative" style={{ background: '#0a0a0f', border: '1px solid var(--border-subtle)' }}>
        <h4 className="text-sm font-semibold tracking-widest uppercase mb-8 z-10 relative" style={{ color: '#aaa', fontFamily: 'var(--font-mono)' }}>
          Continuous Monitoring Architecture
        </h4>
        <div className="flex justify-center items-center py-4 relative z-10">
          <svg width="100%" height="200" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Endpoints */}
            <rect x="20" y="20" width="80" height="40" rx="4" fill="#1A1F36" stroke="#4A5568" strokeWidth="2"/>
            <text x="60" y="45" fill="#E2E8F0" fontSize="12" textAnchor="middle" fontFamily="monospace">Endpoints</text>
            
            <rect x="20" y="80" width="80" height="40" rx="4" fill="#1A1F36" stroke="#4A5568" strokeWidth="2"/>
            <text x="60" y="105" fill="#E2E8F0" fontSize="12" textAnchor="middle" fontFamily="monospace">Servers</text>
            
            <rect x="20" y="140" width="80" height="40" rx="4" fill="#1A1F36" stroke="#4A5568" strokeWidth="2"/>
            <text x="60" y="165" fill="#E2E8F0" fontSize="12" textAnchor="middle" fontFamily="monospace">Cloud</text>

            {/* Scanning Lines */}
            <path d="M100 40 L200 100" stroke="#0057FF" strokeWidth="2" strokeDasharray="4 4"/>
            <path d="M100 100 L200 100" stroke="#0057FF" strokeWidth="2" strokeDasharray="4 4"/>
            <path d="M100 160 L200 100" stroke="#0057FF" strokeWidth="2" strokeDasharray="4 4"/>

            {/* ACAS Engine */}
            <rect x="200" y="70" width="120" height="60" rx="8" fill="#0057FF" fillOpacity="0.2" stroke="#0057FF" strokeWidth="2"/>
            <text x="260" y="100" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">ACAS / Nessus</text>
            <text x="260" y="115" fill="#E2E8F0" fontSize="10" textAnchor="middle">Validation Engine</text>

            {/* Flow to eMASS */}
            <path d="M320 100 L420 100" stroke="var(--gold)" strokeWidth="3"/>
            <polygon points="420,100 410,95 410,105" fill="var(--gold)"/>

            {/* eMASS / Risk Dashboard */}
            <rect x="430" y="60" width="140" height="80" rx="8" fill="var(--gold-dim)" stroke="var(--gold)" strokeWidth="2"/>
            <text x="500" y="90" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">eMASS Systems</text>
            <text x="500" y="110" fill="var(--gold)" fontSize="10" textAnchor="middle">POAM Generation &</text>
            <text x="500" y="125" fill="var(--gold)" fontSize="10" textAnchor="middle">Risk Reporting</text>
          </svg>
        </div>
      </div>

      <p>
        Our embedded technical support ensures deviations in your posture are caught and corrected early. We integrate directly into operational tempos, actively mitigating vulnerabilities and reporting compliance through the DoD chain of command.
      </p>
      <p>
        Our partnership with the USAFA proves that security and agility are not mutually exclusive. By applying deep technical expertise, we secure the systems that forge tomorrow's leaders.
      </p>
    </>
  ),
  'doi-continuous-monitoring-soc': (
    <>
      <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
        Introduction: The Scope of the DOI Mission
      </h3>
      <p>
        Safeguarding the DOI's vast natural resource data, personnel records, and critical infrastructure telemetry is an unrelenting task. Evolving cyber threats against civilian agencies could compromise national resources or expose citizens' data.
      </p>
      <p>
        Axcend delivers the cornerstone of the DOI's defensive posture with continuous IT security monitoring, proactive event analysis, and rapid incident response capabilities.
      </p>

      <h3 className="text-2xl font-bold mt-12 mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
        Establishing the Defensive Posture
      </h3>
      <p>
        Our mission relies heavily on SOC tool operations and maintenance, tightly integrated with strict change and release management practices. We correlate alerts to ensure analysts aren't drowning in noise from disparate security tools.
      </p>

      {/* Visual 1: SOC Incident Response Flow */}
      <div className="my-10 p-8 rounded-xl relative overflow-hidden" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
        
        <h4 className="text-sm font-semibold tracking-widest uppercase mb-8 relative z-10" style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}>
          Axcend SOC Threat Mitigation Pipeline
        </h4>
        
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--gold-dim)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div>
              <h5 className="font-semibold" style={{ color: 'var(--text-primary)' }}>Ingestion & Telemetry Tuning</h5>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Tuning defensive tools (SIEM, EDR) to drastically reduce false positive security alerts across the DOI network.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 pl-8">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--bg-elevated)', border: '1px solid rgba(0,87,255,0.2)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            <div>
              <h5 className="font-semibold" style={{ color: 'var(--text-primary)' }}>Event Analysis & Threat Hunting</h5>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Deep-dive digital forensics and vulnerability assessments to categorize anomalies in real-time applying MITRE ATT&CK mapping.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pl-16">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--bg-elevated)', border: '1px solid rgba(255,100,100,0.3)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <h5 className="font-semibold" style={{ color: 'var(--text-primary)' }}>Incident Response & Recovery</h5>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Swift containment and systematic recovery protocols led by Axcend Incident Response handlers.</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-12 mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
        Deep Dive into Telemetry & Tuning
      </h3>
      <p>
        By continually tuning defensive IT security system configurations, we significantly reduce "alert fatigue", freeing analysts to focus on high-priority threats. Axcend engineers deploy custom parsing scripts and threat intelligence integrations to enrich incoming data logs.
      </p>

      {/* Visual 2: Alert Fatigue Chart */}
      <div className="my-10 p-8 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
        <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-center" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
          Alert Reduction Efficacy (Example SIEM Tuning)
        </h4>
        <div className="flex items-end justify-center gap-6 h-[200px] border-b border-l border-[var(--border-subtle)] px-4 pb-2 relative">
          <div className="absolute top-0 -left-12 text-xs text-[var(--text-secondary)]">Volume</div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 bg-red-900/40 border border-red-500/50 rounded-t-sm" style={{ height: '180px' }} title="Raw Alerts: 100k+"></div>
            <span className="text-xs text-[var(--text-secondary)]">Raw Ingestion</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 bg-[var(--gold-dim)] border border-[var(--gold)] rounded-t-sm" style={{ height: '80px' }} title="Filtered: 40k"></div>
            <span className="text-xs text-[var(--text-secondary)]">Rule Tuning</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-16 bg-[var(--accent-blue-dim)] border border-[var(--accent-blue)] rounded-t-sm" style={{ height: '30px' }} title="Correlated: 5k"></div>
            <span className="text-xs text-[var(--text-secondary)]">Correlation</span>
          </div>

          <div className="flex flex-col items-center gap-2">
             <div className="w-16 bg-green-900/40 border border-green-500/50 rounded-t-sm" style={{ height: '10px' }} title="Actionable: <100"></div>
            <span className="text-xs text-[var(--text-secondary)] font-bold">Actionable IR</span>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-12 mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
        Incident Response Protocol
      </h3>
      <p>
        Our responders conduct proactive vulnerability assessments and apply threat intelligence to hunt adversaries before a breach occurs, scanning the environment for illicit beacons and zero-day exploitation artifact trails.
      </p>

      {/* Visual 3: Incident Response Timeline */}
      <div className="my-10 p-6 rounded-xl bg-black/40 border border-[var(--border-subtle)]">
        <h4 className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>
          Axcend Tactical IR Phases
        </h4>
        <div className="relative border-l-2 border-[var(--gold)] pl-6 py-2 space-y-6">
          <div className="relative">
             <div className="absolute w-3 h-3 bg-[var(--bg-base)] border-2 border-[var(--gold)] rounded-full -left-[1.90rem] top-1"></div>
             <p className="font-bold text-sm" style={{ color: 'white' }}>T+0m: Detection & Triage</p>
             <p className="text-xs mt-1 text-[var(--text-secondary)]">Analyst identifies confirmed malicious payload on endpoint via EDR.</p>
          </div>
          <div className="relative">
             <div className="absolute w-3 h-3 bg-[var(--bg-base)] border-2 border-[var(--gold)] rounded-full -left-[1.90rem] top-1"></div>
             <p className="font-bold text-sm" style={{ color: 'white' }}>T+15m: Network Containment</p>
             <p className="text-xs mt-1 text-[var(--text-secondary)]">Host is network-isolated using EDR platform. Lateral movement halted.</p>
          </div>
          <div className="relative">
             <div className="absolute w-3 h-3 bg-[var(--bg-base)] border-2 border-[var(--gold)] rounded-full -left-[1.90rem] top-1"></div>
             <p className="font-bold text-sm" style={{ color: 'white' }}>T+2Hr: Forensic Acquisition</p>
             <p className="text-xs mt-1 text-[var(--text-secondary)]">Memory dumps and MFT tables extracted for root cause analysis.</p>
          </div>
          <div className="relative">
             <div className="absolute w-3 h-3 bg-[var(--bg-base)] border-2 border-[var(--gold)] rounded-full -left-[1.90rem] top-1"></div>
             <p className="font-bold text-sm" style={{ color: 'white' }}>T+24Hr: Eradication & Recovery</p>
             <p className="text-xs mt-1 text-[var(--text-secondary)]">Payload purged, vulnerabilities patched, active directory accounts rotated.</p>
          </div>
        </div>
      </div>

      <p>
        Our rapid recovery efforts ensure minimal operational downtime for DOI services. Axcend provides comprehensive post-incident reporting to CISO stakeholders, documenting infrastructural changes to prevent recurrence.
      </p>
    </>
  ),
  'federal-aws-ai-guide': (
    <>
      <p className="mb-8 font-semibold text-lg" style={{ color: 'var(--accent-blue)' }}>
        Axcend Technical Whitepaper Series: Generative AI in the Cloud
      </p>
      
      <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
        Section 1: The AI Imperative in Government
      </h3>
      <p>
        As AI shapes the next decade, federal agencies must leverage it to revolutionize public service delivery. However, implementing AI on public AWS infrastructure requires an approach that satisfies stringent federal mandates while providing computational elasticity.
      </p>
      <p>
        Transmitting CUI into public API endpoints like OpenAI poses severe exfiltration risks. Federal deployments demand isolated, controlled environments.
      </p>

      <h3 className="text-2xl font-bold mt-12 mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
        Section 2: Architectural Foundations for FedRAMP High
      </h3>
      <p>
        Deploying generative AI natively within AWS GovCloud allows federal agencies to maintain absolute control over data residency and encryption logic through concentric zero-trust rings.
      </p>

      {/* Visual 1: Enterprise AWS AI Architecture */}
      <div className="my-12 p-8 rounded-xl" style={{ background: 'var(--bg-elevated)', border: '1px solid rgba(0,87,255,0.3)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
        <h4 className="text-center font-bold mb-8 text-lg" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
          Federal AWS Generative AI Reference Architecture
        </h4>
        
        <div className="flex flex-col gap-4">
          {/* Tier 1: Data */}
          <div className="p-4 rounded border border-dashed text-center relative" style={{ borderColor: 'var(--text-secondary)', background: 'rgba(0,0,0,0.2)' }}>
            <span className="absolute -top-3 left-4 px-2 text-[10px] font-bold tracking-widest uppercase bg-[var(--bg-elevated)]" style={{ color: 'var(--text-secondary)' }}>Data Layer (FIPS 140-2 Encrypted)</span>
            <div className="flex justify-center gap-6">
              <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Amazon S3 (Data Lakes)</div>
              <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Amazon RDS / DynamoDB</div>
              <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>AWS Glue</div>
            </div>
            <div className="mt-3 text-[10px] text-[var(--accent-blue)]">All data encrypted at rest via AWS KMS (Customer Managed Keys)</div>
          </div>

          <div className="flex justify-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)"><path d="M12 4v16m-6-6 6 6 6-6"/></svg></div>

          {/* Tier 2: AI Services */}
          <div className="p-5 rounded text-center relative" style={{ border: '1px solid var(--accent-blue)', background: 'var(--accent-blue-dim)' }}>
            <span className="absolute -top-3 left-4 px-2 text-[10px] font-bold tracking-widest uppercase bg-[var(--bg-elevated)]" style={{ color: 'var(--accent-blue)' }}>Compute & AI Layer</span>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded bg-white/5 border border-white/10">
                <h6 className="font-bold text-sm mb-1" style={{ color: 'white' }}>Amazon Bedrock</h6>
                <p className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>Serverless Foundation Models</p>
                <div className="mt-2 text-[9px] bg-black/30 rounded p-1 text-gray-300">VPC Endpoint Isolated</div>
              </div>
              <div className="p-3 rounded bg-white/5 border border-white/10">
                <h6 className="font-bold text-sm mb-1" style={{ color: 'white' }}>Amazon SageMaker</h6>
                <p className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>Custom Model Training & MLOps</p>
                <div className="mt-2 text-[9px] bg-black/30 rounded p-1 text-gray-300">No Internet Egress</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)"><path d="M12 4v16m-6-6 6 6 6-6"/></svg></div>

          {/* Tier 3: Security & Governance */}
          <div className="p-4 rounded border" style={{ borderColor: 'var(--gold-dim)', background: 'rgba(196,154,42,0.05)' }}>
            <span className="block text-center text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--gold)' }}>Zero Trust & Governance Boundary</span>
            <div className="flex flex-wrap justify-around text-[12px] font-semibold" style={{ color: 'var(--text-secondary)' }}>
              <span>AWS CloudTrail</span>
              <span className="hidden sm:inline">•</span>
              <span>Amazon Macie</span>
              <span className="hidden sm:inline">•</span>
              <span>AWS KMS</span>
              <span className="hidden sm:inline">•</span>
              <span>IAM Row-Level Security</span>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-12 mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
        Section 3: Data Governance & Macie Integration
      </h3>
      <p>
        <strong>Implement Rigorous Data Governance:</strong> AI models are only as secure as the data they ingest. Before enabling RAG capabilities, agencies must classify their data using Amazon Macie to continuously scan and mask PII and CUI.
      </p>

      {/* Visual 2: Data Flow through Macie & KMS */}
      <div className="my-10 p-6 rounded-xl relative bg-[#0B1021] border border-[var(--border-subtle)] overflow-hidden">
        <h4 className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: '#E2E8F0', fontFamily: 'var(--font-mono)' }}>Data Anonymization Flow</h4>
        <div className="flex flex-col md:flex-row items-center justify-between text-center gap-4">
          <div className="p-4 bg-blue-900/30 border border-blue-500/30 rounded-full w-24 h-24 flex flex-col items-center justify-center">
            <svg width="24" height="24" fill="none" stroke="#60A5FA" strokeWidth="2" className="mb-1"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            <span className="text-[10px] text-blue-200 font-bold">Raw S3 Data</span>
          </div>
          
          <div className="flex-1 flex justify-center text-gray-500">
             <svg width="40" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h30M25 5l10 7-10 7"/></svg>
          </div>

          <div className="p-4 bg-purple-900/30 border border-purple-500/30 rounded-lg w-32 flex flex-col items-center justify-center">
            <span className="text-xs text-purple-200 font-bold mb-1">Amazon Macie</span>
            <span className="text-[9px] text-purple-300/70">Scans for CUI/PII</span>
          </div>

          <div className="flex-1 flex justify-center text-gray-500">
             <svg width="40" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h30M25 5l10 7-10 7"/></svg>
          </div>

          <div className="p-4 bg-green-900/30 border border-green-500/30 rounded-full w-24 h-24 flex flex-col items-center justify-center">
             <svg width="24" height="24" fill="none" stroke="#34D399" strokeWidth="2" className="mb-1"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
            <span className="text-[10px] text-green-200 font-bold">Cleaned DB</span>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-12 mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
        Section 4: Private Models with Amazon Bedrock
      </h3>
      <p>
        <strong>Emphasize Private Model Endpoints:</strong> We utilize Amazon Bedrock to consume foundation models privately within the AWS trust boundary. By configuring AWS PrivateLink, we ensure prompts and enterprise data remain highly localized and traffic never traverses the public internet.
      </p>

      <h3 className="text-2xl font-bold mt-12 mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
        Section 5: MLOps and Continuous Validation
      </h3>
      <p>
        <strong>Automate MLOps with CI/CD:</strong> Model drift and bias require continuous evaluation. We employ SageMaker Pipelines combined with CI/CD directly within AWS GovCloud to securely manage deployments.
      </p>

      {/* Visual 3: CI/CD Pipeline for SageMaker */}
      <div className="my-10 p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
        <h4 className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>SageMaker Secure MLOps Pipeline</h4>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4 bg-[var(--bg-base)] p-3 rounded border border-gray-700/50">
             <div className="w-8 h-8 rounded bg-blue-900/50 flex items-center justify-center font-mono text-xs text-blue-300">1</div>
             <p className="text-sm text-[var(--text-primary)]">Code Commit: <span className="text-gray-400 text-xs">Jupyter Notebooks checked into Git.</span></p>
          </div>
          <div className="flex justify-center h-4 border-l-2 border-dashed border-gray-600 ml-7"></div>
          <div className="flex items-center gap-4 bg-[var(--bg-base)] p-3 rounded border border-gray-700/50">
             <div className="w-8 h-8 rounded bg-red-900/50 flex items-center justify-center font-mono text-xs text-red-300">2</div>
             <p className="text-sm text-[var(--text-primary)]">Static Analysis: <span className="text-gray-400 text-xs">SonarQube & Checkmarx scan code for vulnerabilities.</span></p>
          </div>
          <div className="flex justify-center h-4 border-l-2 border-dashed border-gray-600 ml-7"></div>
          <div className="flex items-center gap-4 bg-[var(--bg-base)] p-3 rounded border border-gray-700/50">
             <div className="w-8 h-8 rounded bg-purple-900/50 flex items-center justify-center font-mono text-xs text-purple-300">3</div>
             <p className="text-sm text-[var(--text-primary)]">Model Evaluation: <span className="text-gray-400 text-xs">SageMaker Clarify runs bias and explainability metrics.</span></p>
          </div>
          <div className="flex justify-center h-4 border-l-2 border-dashed border-gray-600 ml-7"></div>
          <div className="flex items-center gap-4 bg-[var(--bg-base)] p-3 rounded border border-[var(--gold)]">
             <div className="w-8 h-8 rounded bg-[var(--gold-dim)] flex items-center justify-center font-mono text-xs text-[var(--gold)]">4</div>
             <p className="text-sm text-[var(--text-primary)]">Deployment: <span className="text-gray-400 text-xs">Manual approval gate opens deployment to Prod VPC.</span></p>
          </div>
        </div>
      </div>

      <p>
        Automating security scans and image signing ensures models meet compliance requirements before deployment. Continuous monitoring via AWS Security Hub guarantees immediate incident response upon anomaly detection.
      </p>

      <h3 className="text-2xl font-bold mt-12 mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
        Conclusion
      </h3>
      <p>
        By architecting native AWS services around a zero-trust model, isolating training data, and strictly adhering to federal authorization bounds, Axcend provides the blueprint for safe Generative AI in the federal cloud.
      </p>
    </>
  ),
};

/* ============================================================
   RELATED POSTS
   ============================================================ */

const relatedPosts = [
  {
    slug: 'usaf-academy-rmf-case-study',
    title: 'Securing the Future: Comprehensive RMF Support at the USAFA',
    category: 'Case Study',
    readTime: '7 min read',
  },
  {
    slug: 'doi-continuous-monitoring-soc',
    title: 'Defending the Homeland: Continuous Monitoring & Incident Response for the Dept of Interior',
    category: 'Case Study',
    readTime: '8 min read',
  },
  {
    slug: 'federal-aws-ai-guide',
    title: 'The Federal Engineer\'s Guide to AWS AI Implementations',
    category: 'Whitepaper',
    readTime: '12 min read',
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
            className="prose-axcend space-y-6 text-xl font-medium leading-[1.85] max-w-3xl lg:max-w-4xl"
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
