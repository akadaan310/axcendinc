'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Shield, Cloud, Cpu, BookOpen, FileText, ArrowRight, Star, Anchor, Radio, Search } from 'lucide-react';

export type MegaMenuPanel = 'capabilities' | 'insights' | 'contracts' | null;

interface MegaMenuProps {
  activePanel: MegaMenuPanel;
  onClose: () => void;
}

const capabilitiesCols = [
  {
    title: 'Cybersecurity',
    icon: <Shield size={16} />,
    href: '/capabilities/cybersecurity',
    items: [
      { label: 'Security Architecture', href: '/capabilities/cybersecurity#security-architecture' },
      { label: 'Adversarial Testing', href: '/capabilities/cybersecurity#adversarial-testing' },
      { label: 'Compliance & ATO', href: '/capabilities/cybersecurity#compliance-ato' },
    ],
  },
  {
    title: 'Cloud Architecture',
    icon: <Cloud size={16} />,
    href: '/capabilities/cloud',
    items: [
      { label: 'Cloud Migration', href: '/capabilities/cloud#cloud-migration' },
      { label: 'Managed Cloud Operations', href: '/capabilities/cloud#managed-cloud-operations' },
      { label: 'Cloud Strategy & ROI', href: '/capabilities/cloud#cloud-strategy-roi' },
    ],
  },
  {
    title: 'Technology Solutions',
    icon: <Cpu size={16} />,
    href: '/capabilities/technology-solutions',
    items: [
      { label: 'Infrastructure Design', href: '/capabilities/technology-solutions#infrastructure-design-integration' },
      { label: 'DevSecOps & Software', href: '/capabilities/technology-solutions#devsecops-software-development' },
      { label: 'A/V Systems Integration', href: '/capabilities/technology-solutions#audio-visual-systems-integration' },
      { label: 'IT Benchmarking & Advisory', href: '/capabilities/technology-solutions#it-benchmarking-advisory' },
    ],
  },
  {
    title: 'Financial Mgmt & Audit',
    icon: <Search size={16} />,
    href: '/capabilities/financial-management',
    items: [
      { label: 'Audit Methodology', href: '/capabilities/financial-management#audit-methodology' },
      { label: 'System Controls', href: '/capabilities/financial-management#financial-system-controls' },
      { label: 'Audit Scope', href: '/capabilities/financial-management#audit-scope' },
    ],
  },
];

const megaMenuCerts = [
  'CISSP', 'CEH', 'PMP', 'AWS Solutions Architect', 'CCNA', 'RHCSA', 'ITIL V3 Foundation'
];

const insightCards = [
  {
    type: 'BLOG POST',
    title: 'Securing the Future: Comprehensive RMF Support at the USAFA',
    excerpt: 'How Axcend partners with the Air Force Academy to deliver comprehensive Risk Management Framework workflows.',
    href: '/insights/usaf-academy-rmf-case-study',
    accentColor: 'var(--accent-blue)',
  },
  {
    type: 'BLOG POST',
    title: 'Defending the Homeland: Continuous Monitoring & Incident Response',
    excerpt: 'Delivering the cornerstone of the Department of the Interior’s defensive IT posture.',
    href: '/insights/doi-continuous-monitoring-soc',
    accentColor: 'var(--gold)',
  },
  {
    type: 'WHITE PAPER',
    title: 'The Federal Engineer\'s Guide to AWS AI Implementations',
    excerpt: 'Architecting isolated generative AI pipelines that satisfy stringent federal mandates.',
    href: '/insights/federal-aws-ai-guide',
    accentColor: 'var(--accent-blue)',
  },
];

const insightCategories = ['All Insights', 'Cybersecurity', 'Cloud', 'Compliance', 'Books'];

export default function MegaMenu({ activePanel, onClose }: MegaMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!activePanel) return null;

  return (
    <div
      className="mega-menu-panel fixed left-0 right-0 z-[90]"
      style={{
        top: '72px',
        background: 'var(--mega-bg)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        borderBottom: '1px solid var(--border-subtle)',
        boxShadow: 'var(--mega-shadow)',
      }}
      ref={panelRef}
      onMouseLeave={onClose}
    >
      {activePanel === 'capabilities' && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-5 gap-8">
            {capabilitiesCols.map((col) => (
              <div key={col.title}>
                <Link
                  href={col.href}
                  onClick={onClose}
                  className="flex items-center gap-2 mb-4 font-semibold text-sm group"
                  style={{ color: 'var(--text-primary)' }}
                >
                  <span style={{ color: 'var(--accent-blue)' }}>{col.icon}</span>
                  {col.title}
                  <ArrowRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto"
                    style={{ color: 'var(--accent-blue)' }}
                  />
                </Link>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="text-sm block py-1 transition-colors duration-150 hover:text-white"
                        style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Dedicated Certifications Column */}
            <div>
              <div
                className="flex items-center gap-2 mb-4 font-semibold text-sm cursor-default"
                style={{ color: 'var(--text-primary)' }}
              >
                <span style={{ color: 'var(--accent-blue)' }}><Star size={16} /></span>
                Certifications
              </div>
              <div className="flex flex-wrap gap-2">
                {megaMenuCerts.map((cert) => (
                  <span
                    key={cert}
                    className="text-[10px] px-2 py-1 rounded font-semibold tracking-wider uppercase cursor-default"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      background: 'var(--gold-dim)',
                      color: 'var(--gold)',
                      border: '1px solid rgba(196,154,42,0.2)',
                    }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div
            className="mt-8 pt-5 flex items-center gap-3"
            style={{ borderTop: '1px solid var(--border-subtle)' }}
          >
            <Star size={14} style={{ color: 'var(--gold)' }} />
            <span
              className="text-sm font-semibold tracking-wide"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}
            >
              8(a) STARS III Contract Vehicle · Sole Source up to $4.5M · GSA Awardee
            </span>
            <Link
              href="/contracts"
              onClick={onClose}
              className="ml-auto text-xs flex items-center gap-1 transition-colors"
              style={{ color: 'var(--text-secondary)' }}
            >
              View contract details <ArrowRight size={11} />
            </Link>
          </div>
        </div>
      )}

      {activePanel === 'insights' && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-3 grid grid-cols-3 gap-6">
              {insightCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  onClick={onClose}
                  className="group rounded-lg p-4 transition-colors duration-200"
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <span
                    className="text-[10px] font-semibold tracking-widest uppercase block mb-2"
                    style={{ color: card.accentColor, fontFamily: 'var(--font-mono)' }}
                  >
                    {card.type}
                  </span>
                  <h4
                    className="text-sm font-semibold mb-2 group-hover:text-white transition-colors leading-snug"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {card.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {card.excerpt}
                  </p>
                </Link>
              ))}
            </div>
            <div>
              <p
                className="text-[10px] font-semibold tracking-widest uppercase mb-4"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
              >
                Categories
              </p>
              <ul className="space-y-2">
                {insightCategories.map((cat) => (
                  <li key={cat}>
                    <Link
                      href="/insights"
                      onClick={onClose}
                      className="text-sm transition-colors hover:text-white flex items-center gap-2 group"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <ArrowRight
                        size={11}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: 'var(--accent-blue)' }}
                      />
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/insights"
                onClick={onClose}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-white"
                style={{ color: 'var(--accent-blue)' }}
              >
                View All Insights <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {activePanel === 'contracts' && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Star size={16} style={{ color: 'var(--gold)' }} />
                <h3 className="font-semibold" style={{ color: 'var(--gold)' }}>
                  GSA 8(a) STARS III
                </h3>
              </div>
              <p className="text-sm mb-5" style={{ color: 'var(--text-secondary)' }}>
                Pre-competed GWAC vehicle for IT services. Sole-source awards up to $4.5M.
                Period of performance: 2021–2031.
              </p>
              <div
                className="rounded-md p-4 font-mono text-xs space-y-1"
                style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}
              >
                <div style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--gold)' }}>CONTRACT:</span> 47QTCB22D0115
                </div>
                <div style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--text-primary)' }}>CAGE:</span> 7FU62
                </div>
                <div style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--text-primary)' }}>UEI:</span> N6H6A8RBPHK7
                </div>
                <div style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--text-primary)' }}>PM:</span> STARS3@axcendinc.com
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div
                className="rounded-md p-4"
                style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Anchor size={14} style={{ color: 'var(--accent-blue)' }} />
                  <h4 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    Seaport Enhanced
                  </h4>
                </div>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  Navy's primary MAC for professional and technical services supporting DoD components.
                </p>
              </div>
              <div
                className="rounded-md p-4"
                style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Radio size={14} style={{ color: 'var(--accent-blue)' }} />
                  <h4 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    MCTSSA
                  </h4>
                </div>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  Marine Corps Tactical Systems Support Activity — direct support to USMC technology requirements.
                </p>
              </div>
              <div className="col-span-2">
                <Link
                  href="/contracts"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80 rounded px-4 py-2"
                  style={{
                    color: 'var(--bg-base)',
                    background: 'var(--gold)',
                  }}
                >
                  Contact Our Contracts Team <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
