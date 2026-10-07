import type { Metadata, Viewport } from 'next';
import './globals.css';
import NetworkBanner from '@/components/NetworkBanner';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://natnaelgetachew.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Natnael Getachew | Software Developer & QA Intern',
    template: '%s | Natnael Getachew',
  },
  description:
    'Software Developer & QA Intern portfolio of Natnael Getachew. MSc AI scholar at Defense University, BSc Computer Engineering graduate, specializing in Next.js App Router, React 18, TypeScript, Python, and TeleBirr API integration.',
  keywords: [
    'Natnael Getachew',
    'Software Developer Intern',
    'QA Intern',
    'Quality Assurance Engineer',
    'Full-Stack Developer',
    'Addis Ababa',
    'Ethiopia',
    'Next.js App Router',
    'React 18',
    'TypeScript',
    'Python',
    'TeleBirr API',
    'Defense University',
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
    title: 'Natnael Getachew | Software Developer & QA Intern',
    description:
      'Computer Engineering graduate, MSc Artificial Intelligence scholar, specializing in Next.js App Router, React 18, TypeScript, Python, and TeleBirr API integration.',
    siteName: 'Natnael Getachew Portfolio',
    images: [
      {
        url: '/avatar.webp',
        width: 800,
        height: 600,
        alt: 'Natnael Getachew - Software Developer & QA Intern',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Natnael Getachew | Software Developer & QA Intern',
    description:
      'Computer Engineering graduate, MSc Artificial Intelligence scholar, specializing in Next.js App Router, React 18, TypeScript, Python, and TeleBirr API integration.',
    images: ['/avatar.webp'],
    creator: '@natnaelgetachew',
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
  jobTitle: 'Software Developer Intern',
  email: 'mailto:getachewnatnael55@gmail.com',
  telephone: '+251983833337',
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
  ],
  knowsAbout: [
    'Next.js App Router',
    'React 18',
    'TypeScript',
    'Python',
    'Functional QA',
    'TeleBirr API',
    'NestJS',
    'PostgreSQL',
  ],
  sameAs: [
    'https://github.com/Greyshinobi2013',
    'https://linkedin.com/in/natnaelgetachew',
  ],
};

export const viewport: Viewport = {
  themeColor: '#080B10',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio_theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-canvas text-gray-200 antialiased selection:bg-neon-pink/30 selection:text-neon-cyan min-h-screen relative transition-colors duration-200"
      >
        <NetworkBanner />
        {children}
      </body>
    </html>
  );
}
