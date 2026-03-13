import Link from 'next/link';
import { ArrowRight, BookOpen, FileText } from 'lucide-react';

interface InsightCardProps {
  type: 'BLOG POST' | 'TECHNICAL BOOK' | 'WHITE PAPER';
  title: string;
  excerpt: string;
  category?: string;
  slug: string;
  date?: string;
  readTime?: string;
}

export default function InsightCard({
  type,
  title,
  excerpt,
  category,
  slug,
  date,
  readTime,
}: InsightCardProps) {
  const isBook = type === 'TECHNICAL BOOK';

  return (
    <Link
      href={`/insights/${slug}`}
      className="group rounded-lg p-6 flex flex-col transition-all duration-200 hover:-translate-y-1"
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-8 h-8 rounded flex items-center justify-center"
          style={{
            background: isBook ? 'var(--gold-dim)' : 'var(--accent-blue-dim)',
            border: `1px solid ${isBook ? 'rgba(196,154,42,0.3)' : 'rgba(0,87,255,0.2)'}`,
          }}
        >
          {isBook ? (
            <BookOpen size={14} style={{ color: 'var(--gold)' }} />
          ) : (
            <FileText size={14} style={{ color: 'var(--accent-blue)' }} />
          )}
        </div>
        <span
          className="text-[10px] font-semibold tracking-widest uppercase"
          style={{
            color: isBook ? 'var(--gold)' : 'var(--accent-blue)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {type}
        </span>
      </div>

      {category && (
        <span
          className="text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded inline-block w-fit mb-3"
          style={{
            fontFamily: 'var(--font-mono)',
            background: 'var(--bg-elevated)',
            color: 'var(--text-secondary)',
          }}
        >
          {category}
        </span>
      )}

      <h3
        className="font-semibold mb-3 leading-snug group-hover:text-white transition-colors"
        style={{ color: 'var(--text-primary)', fontSize: '1.0625rem' }}
      >
        {title}
      </h3>

      <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--text-secondary)' }}>
        {excerpt}
      </p>

      <div className="flex items-center justify-between">
        {(date || readTime) && (
          <span
            className="text-xs"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
          >
            {date && date} {date && readTime && '·'} {readTime && readTime}
          </span>
        )}
        <span
          className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2 transition-all ml-auto"
          style={{ color: 'var(--accent-blue)' }}
        >
          Read more <ArrowRight size={13} />
        </span>
      </div>
    </Link>
  );
}
