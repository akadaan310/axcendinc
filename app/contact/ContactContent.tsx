'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useInView } from '@/hooks/useInView';
import { MapPin, Phone, Mail, Linkedin, CheckCircle2, AlertCircle, ChevronDown } from 'lucide-react';

/* ============================================================
   ZOD SCHEMA
   ============================================================ */

const schema = z.object({
  name: z.string().min(2, 'Full name is required'),
  organization: z.string().min(2, 'Organization is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  inquiryType: z.string().min(1, 'Please select an inquiry type'),
  message: z.string().optional(),
  captchaAnswer: z.string().min(1, 'Security answer is required'),
});

type FormValues = z.infer<typeof schema>;

const INQUIRY_TYPES = [
  'Federal Contract / Task Order',
  '8(a) STARS III Inquiry',
  'Teaming / Subcontracting',
  'Cybersecurity Services',
  'Cloud Services',
  'Technology Solutions',
  'Financial Audit (FISCAM)',
  'General Inquiry',
];

/* ============================================================
   FIELD ERROR
   ============================================================ */

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-xs flex items-center gap-1" style={{ color: '#F87171' }}>
      <AlertCircle size={11} />
      {message}
    </p>
  );
}

/* ============================================================
   SUCCESS STATE
   ============================================================ */

function SuccessState() {
  return (
    <div
      className="rounded-xl p-10 flex flex-col items-center justify-center text-center min-h-[480px]"
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid rgba(0,87,255,0.2)',
      }}
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
        style={{ background: 'rgba(34,197,94,0.15)', border: '2px solid rgba(34,197,94,0.4)' }}
      >
        <CheckCircle2 size={32} style={{ color: '#22C55E' }} />
      </div>
      <h3
        className="text-xl font-bold mb-3"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
      >
        Message Sent
      </h3>
      <p className="text-base leading-relaxed max-w-sm" style={{ color: 'var(--text-secondary)' }}>
        Thank you — we&apos;ll be in touch within one business day.
      </p>
      <p
        className="mt-4 text-xs"
        style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
      >
        info@axcendinc.com · (240) 418-1861
      </p>
    </div>
  );
}

/* ============================================================
   CONTACT FORM
   ============================================================ */

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [captcha, setCaptcha] = useState<{ num1: number; num2: number; op: string } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const n1 = Math.floor(Math.random() * 9) + 6;
    const n2 = Math.floor(Math.random() * 5) + 1;
    const operators = ['+', '-'];
    const op = operators[Math.floor(Math.random() * operators.length)];
    setCaptcha({ num1: n1, num2: n2, op });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormValues) {
    setIsLoading(true);
    setServerError(null);
    if (!captcha) {
      setServerError('Security check not initialized. Please refresh.');
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          num1: captcha.num1,
          num2: captcha.num2,
          op: captcha.op,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setServerError(json.error ?? 'Something went wrong. Please try again.');
      } else {
        setSubmitted(true);
      }
    } catch {
      setServerError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  }

  if (submitted) return <SuccessState />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Name + Organization */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            className="block text-xs font-semibold tracking-wider uppercase mb-2"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}
          >
            Full Name <span style={{ color: '#F87171' }}>*</span>
          </label>
          <input
            {...register('name')}
            type="text"
            placeholder="Jane Smith"
            className="form-input"
            autoComplete="name"
          />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <label
            className="block text-xs font-semibold tracking-wider uppercase mb-2"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}
          >
            Organization <span style={{ color: '#F87171' }}>*</span>
          </label>
          <input
            {...register('organization')}
            type="text"
            placeholder="Department of Defense"
            className="form-input"
            autoComplete="organization"
          />
          <FieldError message={errors.organization?.message} />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            className="block text-xs font-semibold tracking-wider uppercase mb-2"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}
          >
            Email Address <span style={{ color: '#F87171' }}>*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="you@agency.gov"
            className="form-input"
            autoComplete="email"
          />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <label
            className="block text-xs font-semibold tracking-wider uppercase mb-2"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}
          >
            Phone{' '}
            <span className="font-normal normal-case" style={{ color: 'var(--text-secondary)', letterSpacing: 0 }}>
              (optional)
            </span>
          </label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="(240) 000-0000"
            className="form-input"
            autoComplete="tel"
          />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      {/* Inquiry Type */}
      <div>
        <label
          className="block text-xs font-semibold tracking-wider uppercase mb-2"
          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}
        >
          Inquiry Type <span style={{ color: '#F87171' }}>*</span>
        </label>
        <div className="relative">
          <select
            {...register('inquiryType')}
            className="form-input appearance-none pr-10 cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled>
              Select an inquiry type…
            </option>
            {INQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <ChevronDown
            size={15}
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: 'var(--text-secondary)' }}
          />
        </div>
        <FieldError message={errors.inquiryType?.message} />
      </div>

      {/* Message */}
      <div>
        <label
          className="block text-xs font-semibold tracking-wider uppercase mb-2"
          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}
        >
          Message{' '}
          <span className="font-normal normal-case" style={{ color: 'var(--text-secondary)', letterSpacing: 0 }}>
            (optional)
          </span>
        </label>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="Please describe your project, contract vehicle of interest, or questions…"
          className="form-input resize-none"
          style={{ lineHeight: '1.65' }}
        />
        <FieldError message={errors.message?.message} />
      </div>

      {/* Server error */}
      {serverError && (
        <div
          className="flex items-center gap-3 p-4 rounded-lg text-sm"
          style={{
            background: 'rgba(248,113,113,0.08)',
            border: '1px solid rgba(248,113,113,0.25)',
            color: '#F87171',
          }}
        >
          <AlertCircle size={16} className="flex-shrink-0" />
          {serverError}
        </div>
      )}

      {/* Math CAPTCHA */}
      {mounted && captcha && (
        <div className="pt-2 pb-1">
          <label
            className="block text-xs font-semibold tracking-wider uppercase mb-2"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}
          >
            Security Check: What is {captcha.num1} {captcha.op} {captcha.num2}?{' '}
            <span style={{ color: '#F87171' }}>*</span>
          </label>
          <div className="max-w-[150px]">
            <input
              {...register('captchaAnswer')}
              type="number"
              placeholder="?"
              className="form-input text-center font-bold"
            />
          </div>
          <FieldError message={errors.captchaAnswer?.message} />
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full sm:w-auto px-8 py-3.5 rounded-md font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 flex items-center justify-center gap-2"
        style={{ background: 'var(--accent-blue)', minWidth: '200px' }}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
              <path d="M8 2 A6 6 0 0 1 14 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Sending…
          </>
        ) : (
          'Send Message'
        )}
      </button>

      <p
        className="text-xs pt-1"
        style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
      >
        We respond within one business day. Usually faster.
      </p>
    </form>
  );
}

/* ============================================================
   RIGHT PANEL
   ============================================================ */

function ContactPanel() {
  return (
    <div
      className="glass-dark rounded-xl p-8 h-fit"
      style={{ border: '1px solid var(--border-subtle)' }}
    >
      {/* Contact info */}
      <div className="mb-8">
        <span
          className="text-xs font-semibold tracking-widest uppercase block mb-5"
          style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
        >
          Contact Information
        </span>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div
              className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: 'var(--accent-blue-dim)' }}
            >
              <MapPin size={14} style={{ color: 'var(--accent-blue)' }} />
            </div>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              Fairfax, Virginia
            </address>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
              style={{ background: 'var(--accent-blue-dim)' }}
            >
              <Phone size={14} style={{ color: 'var(--accent-blue)' }} />
            </div>
            <a
              href="tel:+12404181861"
              className="text-sm transition-colors hover:text-white"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
            >
              (240) 418-1861
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
              style={{ background: 'var(--accent-blue-dim)' }}
            >
              <Linkedin size={14} style={{ color: 'var(--accent-blue)' }} />
            </div>
            <a
              href="https://www.linkedin.com/search/results/all/?keywords=axcend%2C%20inc.&origin=RICH_QUERY_SUGGESTION&heroEntityKey=urn%3Ali%3Aorganization%3A80851858&position=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors hover:text-white"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border-subtle)', marginBottom: '1.5rem' }} />

      {/* STARS III PM */}
      <div className="mb-7">
        <span
          className="text-xs font-semibold tracking-widest uppercase block mb-4"
          style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}
        >
          STARS III Program Manager
        </span>
        <div className="flex items-start gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
            style={{ background: 'var(--gold-dim)', border: '1px solid rgba(196,154,42,0.3)', color: 'var(--gold)' }}
          >
            NR
          </div>
          <div>
            <p className="text-sm font-semibold mb-0.5" style={{ color: 'var(--text-primary)' }}>
              Nadine Rafaels
            </p>
            <p className="text-xs mb-1" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              STARS III Program Manager
            </p>
            <a
              href="mailto:STARS3@axcendinc.com"
              className="text-xs transition-colors hover:text-white"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}
            >
              STARS3@axcendinc.com
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border-subtle)', marginBottom: '1.5rem' }} />

      {/* Communication standards */}
      <blockquote
        className="text-sm italic leading-relaxed"
        style={{
          color: 'var(--text-secondary)',
          borderLeft: '2px solid var(--accent-blue)',
          paddingLeft: '1rem',
        }}
      >
        &ldquo;We answer the phone, respond to emails the same day, and show up on time. That&apos;s not
        a marketing line — it&apos;s how we&apos;ve operated for two decades.&rdquo;
      </blockquote>
      <p
        className="mt-3 text-xs"
        style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
      >
        — Ray Rafaels, Principal · Axcend, Inc.
      </p>
    </div>
  );
}

/* ============================================================
   AGENCY SEAL STRIP
   ============================================================ */

const agencies = [
  'Defense Intelligence Agency',
  'United States Navy',
  'U.S. Marine Corps',
  'U.S. Air Force',
  'NOAA',
  'Dept. of Commerce',
  'Defense Security Cooperation Agency',
];

function AgencyStrip() {
  const { ref, isVisible } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`animate-enter ${isVisible ? 'is-visible' : ''}`}
    >
      <p
        className="text-xs font-semibold tracking-widest uppercase mb-5 text-center"
        style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
      >
        Agencies Served
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
        {agencies.map((agency, i) => (
          <span
            key={i}
            className="text-xs font-semibold tracking-wider uppercase whitespace-nowrap"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', opacity: 0.55 }}
          >
            {agency}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   CONTACT CONTENT
   ============================================================ */

export default function ContactContent() {
  const heroRef = useInView();
  const formRef = useInView();

  return (
    <>
      {/* ====================================================
          HERO
      ==================================================== */}
      <section
        className="relative pt-32 pb-16 px-6 md:px-12 lg:px-24 grid-dot-bg overflow-hidden"
        style={{ background: 'var(--bg-base)' }}
        ref={heroRef.ref as React.RefObject<HTMLElement>}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-200px',
            left: '50%',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,87,255,0.06) 0%, transparent 70%)',
            transform: 'translateX(-50%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className={`animate-enter ${heroRef.isVisible ? 'is-visible' : ''}`}>
            <span
              className="text-xs font-semibold tracking-widest uppercase block mb-5"
              style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}
            >
              Get In Touch
            </span>
          </div>
          <h1
            className={`max-w-2xl mb-5 animate-enter ${heroRef.isVisible ? 'is-visible' : ''}`}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
              transitionDelay: '100ms',
            }}
          >
            Start the{' '}
            <span style={{ color: 'var(--accent-blue)' }}>Conversation.</span>
          </h1>
          <p
            className={`max-w-xl text-lg leading-relaxed animate-enter ${heroRef.isVisible ? 'is-visible' : ''}`}
            style={{ color: 'var(--text-secondary)', transitionDelay: '220ms' }}
          >
            Whether you&apos;re a Contracting Officer, a CTO, or a program manager — we respond
            within one business day. Usually faster.
          </p>
        </div>
      </section>

      {/* ====================================================
          SPLIT FORM LAYOUT
      ==================================================== */}
      <section
        className="py-16 md:py-20 px-6 md:px-12 lg:px-24"
        style={{ background: 'var(--bg-base)', borderTop: '1px solid var(--border-subtle)' }}
        ref={formRef.ref as React.RefObject<HTMLElement>}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16">
            {/* Left — Form (60%) */}
            <div className={`animate-enter-left ${formRef.isVisible ? 'is-visible' : ''}`}>
              <span
                className="text-xs font-semibold tracking-widest uppercase block mb-8"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
              >
                Send a Message
              </span>
              <ContactForm />
            </div>

            {/* Right — Glass Panel (40%) */}
            <div
              className={`lg:w-[360px] animate-enter-right ${formRef.isVisible ? 'is-visible' : ''}`}
            >
              <span
                className="text-xs font-semibold tracking-widest uppercase block mb-8"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
              >
                Contact Details
              </span>
              <ContactPanel />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          AGENCY SEAL STRIP
      ==================================================== */}
      <section
        className="py-14 px-6 md:px-12 lg:px-24"
        style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)' }}
      >
        <div className="max-w-7xl mx-auto">
          <AgencyStrip />
        </div>
      </section>
    </>
  );
}
