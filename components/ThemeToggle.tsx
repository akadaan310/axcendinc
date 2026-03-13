'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button className="w-9 h-9 flex items-center justify-center rounded-md opacity-0" aria-hidden="true">
        <span className="w-4 h-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="w-9 h-9 flex items-center justify-center rounded-md transition-colors duration-200 hover:bg-white/10"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{ color: 'var(--text-secondary)' }}
    >
      {isDark ? (
        <Sun
          size={16}
          style={{
            transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
        />
      ) : (
        <Moon
          size={16}
          style={{
            transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
        />
      )}
    </button>
  );
}
