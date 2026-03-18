'use client';

import { useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import MegaMenu, { MegaMenuPanel } from './MegaMenu';
import { useScrolled } from '@/hooks/useScrolled';

const navItems = [
  { label: 'Services', panel: 'capabilities' as MegaMenuPanel, href: '/capabilities' },
  { label: 'Contracts', panel: 'contracts' as MegaMenuPanel, href: '/contracts' },
  { label: 'About', href: '/about' },
  { label: 'Insights', panel: 'insights' as MegaMenuPanel, href: '/insights' },
];

const mobileLinks = [
  { label: 'Services', href: '/capabilities' },
  { label: 'Cybersecurity', href: '/capabilities/cybersecurity' },
  { label: 'Cloud Architecture', href: '/capabilities/cloud' },
  { label: 'Technology Solutions', href: '/capabilities/technology-solutions' },
  { label: 'Financial Management', href: '/capabilities/financial-management' },
  { label: 'Contract Vehicles', href: '/contracts' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const scrolled = useScrolled(20);
  const pathname = usePathname();
  const [activePanel, setActivePanel] = useState<MegaMenuPanel>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const handlePanelOpen = useCallback((panel: MegaMenuPanel) => {
    clearCloseTimer();
    setActivePanel(panel);
  }, []);

  const handlePanelClose = useCallback(() => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => {
      setActivePanel(null);
    }, 120);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        style={{
          height: '72px',
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: '1px solid var(--nav-border)',
        }}
      >
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={handlePanelClose}
          >
            {/* Eagle mark placeholder — geometric SVG */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
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
              className="text-2xl font-bold tracking-[0.08em]"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--text-primary)',
                letterSpacing: '0.1em',
              }}
            >
              AXCEND
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              const hasPanel = !!item.panel;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasPanel && handlePanelOpen(item.panel!)}
                  onMouseLeave={() => hasPanel && handlePanelClose()}
                >
                  <Link
                    href={item.href}
                    className="px-4 py-2 rounded-md text-[19px] font-medium transition-colors duration-150 flex items-center gap-1"
                    style={{
                      color: isActive ? 'var(--accent-blue)' : 'var(--text-secondary)',
                    }}
                    aria-expanded={item.panel ? activePanel === item.panel : undefined}
                    onMouseEnter={() => hasPanel && handlePanelOpen(item.panel!)}
                  >
                    {item.label}
                    {hasPanel && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        className="mt-px transition-transform duration-150"
                        style={{
                          transform: activePanel === item.panel ? 'rotate(180deg)' : 'rotate(0deg)',
                          opacity: 0.5,
                        }}
                      >
                        <path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
                      </svg>
                    )}
                  </Link>
                </div>
              );
            })}

            <div className="ml-2 flex items-center gap-2">
              <ThemeToggle />
              <Link
                href="/contact"
                className="ml-1 px-4 py-2 rounded-md text-[18px] font-semibold transition-all duration-150 flex items-center gap-1.5 hover:gap-2"
                style={{
                  color: 'var(--accent-blue)',
                  border: '1px solid rgba(0, 87, 255, 0.4)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,87,255,0.1)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                }}
              >
                Contact
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-md transition-colors"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mega Menu panels — entering the panel cancels the close timer */}
      <div
        onMouseEnter={clearCloseTimer}
        onMouseLeave={handlePanelClose}
      >
        <MegaMenu activePanel={activePanel} onClose={handlePanelClose} />
      </div>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[95] flex flex-col"
          style={{ background: 'var(--overlay-bg)', backdropFilter: 'blur(20px)' }}
        >
          <div className="h-[72px] flex items-center justify-between px-6">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="text-xl font-bold tracking-widest"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              AXCEND
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-9 h-9 flex items-center justify-center"
              style={{ color: 'var(--text-primary)' }}
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center px-8">
            <nav className="space-y-1">
              {mobileLinks.map((link, i) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="mobile-nav-link block py-3 text-xl font-semibold transition-colors hover:text-white border-b"
                  style={{
                    color: pathname === link.href ? 'var(--accent-blue)' : 'var(--text-secondary)',
                    borderColor: 'var(--border-subtle)',
                    animationDelay: `${i * 60}ms`,
                    fontFamily: i === 0 ? 'var(--font-display)' : 'var(--font-body)',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-10">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white"
                style={{ background: 'var(--accent-blue)' }}
              >
                Start the Conversation <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="px-8 pb-8">
            <p className="text-sm" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              8(a) STARS III · GSA Awardee · Fairfax, VA
            </p>
          </div>
        </div>
      )}

      {/* Backdrop to close mega menu on click-outside (pointer-events only, won't block hover) */}
      {activePanel && (
        <div
          className="fixed inset-0 z-[85]"
          style={{ pointerEvents: 'none' }}
          onClick={handlePanelClose}
          aria-hidden="true"
        />
      )}
    </>
  );
}
