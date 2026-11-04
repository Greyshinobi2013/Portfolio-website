import type { Metadata, Viewport } from 'next';
import { Nunito, Roboto, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ParticleBackdrop from '@/components/ParticleBackdrop';

const nunitoFont = Nunito({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '600', '700', '800'],
  display: 'swap',
});

const robotoFont = Roboto({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://natnaelgetachew.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Natnael Getachew — Software & QA Engineer (MSc AI Scholar)',
    template: '%s | Natnael Getachew',
  },
  description:
    'Portfolio of Natnael Getachew: Software & QA Engineer, MSc Artificial Intelligence Scholar at Ethiopian Defense University. Specializing in Next.js 16, TypeScript, Python, and TeleBirr fintech payment rails.',
  keywords: [
    'Natnael Getachew',
    'Software & QA Engineer',
    'QA Engineer',
    'Software Developer',
    'MSc Artificial Intelligence',
    'Addis Ababa',
    'Ethiopia',
    'Next.js 16 App Router',
    'React 18',
    'TypeScript',
    'Python',
    'TeleBirr API',
    'Ethiopian Defense University',
    'Debre Birhan University',
  ],
  authors: [{ name: 'Natnael Getachew', url: siteUrl }],
  creator: 'Natnael Getachew',
  publisher: 'Natnael Getachew',
  icons: {
    icon: '/avatar.webp',
    apple: '/avatar.webp',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Natnael Getachew — Software & QA Engineer (MSc AI Scholar)',
    description:
      'Computer Engineering graduate, MSc Artificial Intelligence scholar, specializing in Next.js App Router, React 18, TypeScript, Python, and TeleBirr fintech payment rails.',
    siteName: 'Natnael Getachew Portfolio',
    images: [
      {
        url: '/avatar.webp',
        width: 800,
        height: 600,
        alt: 'Natnael Getachew — Software & QA Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Natnael Getachew — Software & QA Engineer (MSc AI Scholar)',
    description:
      'Computer Engineering graduate, MSc Artificial Intelligence scholar, specializing in Next.js App Router, React 18, TypeScript, Python, and TeleBirr fintech payment rails.',
    images: ['/avatar.webp'],
    creator: '@Greyshinobi2013',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Natnael Getachew',
  jobTitle: 'Software & QA Engineer',
  email: 'mailto:getachewnatnael55@gmail.com',
  telephone: '+251923789370',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Addis Ababa',
    addressCountry: 'Ethiopia',
  },
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'Debre Birhan University',
      award: 'BSc in Computer Engineering',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Ethiopian Defense University',
      award: 'MSc in Artificial Intelligence',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'IBT College of Canada',
      award: 'Advanced Digital Skills: Software Development & QA',
    },
  ],
  knowsAbout: [
    'Next.js 16 App Router',
    'React 18',
    'TypeScript Strict',
    'Python 3',
    'Quality Assurance & Boundary Testing',
    'TeleBirr Fintech API',
    'Deep Learning & Computer Vision',
    'PostgreSQL',
  ],
  sameAs: [
    'https://github.com/Greyshinobi2013',
    'https://www.linkedin.com/in/natnael-getachew-25b8211ba',
  ],
};

export const viewport: Viewport = {
  themeColor: '#1b1b1b',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${nunitoFont.variable} ${robotoFont.variable} ${monoFont.variable} font-sans`}
      suppressHydrationWarning
    >
      <head>
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-charcoal text-[#e5e5e5] antialiased selection:bg-[#037daf]/40 selection:text-white min-h-screen relative"
      >
        {/* Accessibility Skip Link */}
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#0a74db] focus:text-white focus:rounded focus:shadow-elevation-8 focus:font-mono focus:text-xs uppercase tracking-wider"
        >
          Skip to main content
        </a>

        {/* Interactive Constellation Mesh */}
        <ParticleBackdrop />

        {children}
      </body>
    </html>
  );
}
