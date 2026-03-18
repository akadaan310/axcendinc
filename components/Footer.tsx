import Link from 'next/link';
import { Linkedin, ArrowRight, Star } from 'lucide-react';

const capabilities = [
  { label: 'Cybersecurity', href: '/capabilities/cybersecurity' },
  { label: 'Cloud Architecture', href: '/capabilities/cloud' },
  { label: 'Technology Solutions', href: '/capabilities/technology-solutions' },
  { label: 'Financial Management', href: '/capabilities/financial-management' },
];

const company = [
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contract Vehicles', href: '/contracts' },
  { label: 'Contact', href: '/contact' },
];

const agencyNames = [
  'Defense Intelligence Agency',
  'United States Navy',
  'U.S. Marine Corps',
  'U.S. Air Force',
  'Dept. of Commerce',
  'NOAA',
  'Defense Security Cooperation Agency',
  'Defense Intelligence Agency',
  'United States Navy',
  'U.S. Marine Corps',
  'U.S. Air Force',
  'Dept. of Commerce',
  'NOAA',
  'Defense Security Cooperation Agency',
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)' }}>
      {/* Agency marquee strip */}
      <div
        className="py-4 overflow-hidden"
        style={{ borderBottom: '1px solid var(--border-subtle)' }}
      >
        <div className="marquee-track logos-marquee">
          {agencyNames.map((name, i) => (
            <span
              key={i}
              className="mx-8 text-xs font-semibold tracking-widest uppercase whitespace-nowrap"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <polygon
                  points="16,2 28,10 28,22 16,30 4,22 4,10"
                  fill="none"
                  stroke="var(--accent-blue)"
                  strokeWidth="1.5"
                />
                <polygon
                  points="16,8 23,13 23,21 16,26 9,21 9,13"
                  fill="var(--accent-blue)"
                  opacity="0.15"
                />
                <path d="M10 13 L16 8 L22 13" stroke="var(--accent-blue)" strokeWidth="1.2" fill="none" />
                <path d="M16 8 L16 26" stroke="var(--accent-blue)" strokeWidth="1" opacity="0.5" />
              </svg>
              <span
                className="text-lg font-bold tracking-[0.1em]"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                AXCEND
              </span>
            </div>
            <p className="text-lg font-medium leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
              Federal-grade technology.
              <br />
              Commercial-speed delivery.
            </p>

            {/* STARS III badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-semibold mb-5"
              style={{
                background: 'var(--gold-dim)',
                border: '1px solid rgba(196, 154, 42, 0.3)',
                color: 'var(--gold)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <Star size={11} />
              GSA 8(a) STARS III
            </div>

            <a
              href="https://www.linkedin.com/company/axcend"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors hover:text-white"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          {/* Col 2: Capabilities */}
          <div>
            <h4
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {capabilities.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-white link-underline"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-white link-underline"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
            >
              Contact
            </h4>
            <address
              className="not-italic text-sm leading-relaxed space-y-2"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
            >
              <div>
                Fairfax, Virginia
              </div>
              <div>
                <a href="tel:+12404181861" className="hover:text-white transition-colors">
                  (240) 418-1861
                </a>
              </div>
              <div>
                <a href="mailto:info@axcendinc.com" className="hover:text-white transition-colors">
                  info@axcendinc.com
                </a>
              </div>
            </address>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: 'var(--accent-blue)' }}
            >
              Start the Conversation <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: '1px solid var(--border-subtle)' }}
      >
        <p className="text-xs" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
          © 2026 Axcend, Inc. All rights reserved.
        </p>
        <div className="flex items-center gap-5">

        </div>
      </div>
    </footer>
  );
}
