import type { Metadata } from 'next';
import { Geist, Geist_Mono, Syne } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const syne = Syne({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Axcend | Federal Cybersecurity & Technology Services',
    template: '%s | Axcend',
  },
  description:
    'Axcend is an 8(a) SBA-Certified, Minority-Owned cybersecurity and technology services firm serving DoD, Intel, and civilian government agencies. GSA 8(a) STARS III awardee. Fairfax, Virginia.',
  keywords: [
    'cybersecurity',
    'federal IT services',
    '8a STARS III',
    'GSA contract',
    'cloud migration',
    'FISMA',
    'NIST RMF',
    'Fairfax Virginia',
    'government contractor',
    'CISSP',
    'ATO support',
    'zero trust',
    'minority owned',
    '8a certified',
  ],
  openGraph: {
    siteName: 'Axcend',
    locale: 'en_US',
    type: 'website',
    title: 'Axcend | Federal Cybersecurity & Technology Services',
    description:
      'GSA 8(a) STARS III awardee. Cybersecurity, cloud architecture, and technology solutions for federal agencies and commercial enterprises.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axcend | Federal Cybersecurity & Technology Services',
    description: 'GSA 8(a) STARS III · Cybersecurity · Cloud · Technology · Fairfax, VA',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Axcend, Inc.',
  url: 'https://www.axcendinc.com',
  logo: 'https://www.axcendinc.com/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8950 Colesbury Pl',
    addressLocality: 'Fairfax',
    addressRegion: 'VA',
    postalCode: '22031',
    addressCountry: 'US',
  },
  telephone: '+12404181861',
  email: 'info@axcendinc.com',
  description: '8(a) SBA-Certified, Minority-Owned federal cybersecurity and technology services firm. GSA 8(a) STARS III awardee.',
  naics: '541512',
  sameAs: ['https://www.linkedin.com/company/axcend'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
