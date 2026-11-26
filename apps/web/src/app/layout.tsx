import type { Metadata, Viewport } from 'next';
import { Host_Grotesk, Atkinson_Hyperlegible_Mono } from 'next/font/google';
import './globals.css';

const hostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  variable: '--font-host',
  weight: ['400', '500'],
  display: 'swap',
});

const atkinsonMono = Atkinson_Hyperlegible_Mono({
  subsets: ['latin'],
  variable: '--font-atkinson-mono',
  weight: ['400', '500'],
  display: 'swap',
  adjustFontFallback: false,
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-website-rho-three-54.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Natnael Getachew | Software & QA Engineering Intern',
    template: '%s | Natnael Getachew',
  },
  description:
    'Computer Engineering graduate and Master of Technology in Artificial Intelligence candidate. Building TypeScript, React 18, Next.js App Router, Python, Node.js, NestJS, and PostgreSQL applications.',
  keywords: [
    'Natnael Getachew',
    'Software & QA Engineering Intern',
    'Software Development Intern',
    'Master of Technology in Artificial Intelligence',
    'Addis Ababa',
    'Ethiopia',
    'Next.js App Router',
    'React 18',
    'TypeScript',
    'Python',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'Ethiopian Defense University',
    'Debre Birhan University',
    'IBT Ethiopia',
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
    title: 'Natnael Getachew | Software & QA Engineering Intern',
    description:
      'Computer Engineering graduate and Master of Technology in Artificial Intelligence candidate specializing in TypeScript, React 18, Next.js (App Router), Node.js, NestJS, and PostgreSQL.',
    siteName: 'Natnael Getachew Portfolio',
    images: [
      {
        url: '/avatar.webp',
        width: 440,
        height: 440,
        alt: 'Natnael Getachew, Software & QA Engineering Intern',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Natnael Getachew | Software & QA Engineering Intern',
    description:
      'Computer Engineering graduate and Master of Technology in Artificial Intelligence candidate specializing in TypeScript, React 18, Next.js (App Router), Node.js, NestJS, and PostgreSQL.',
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
  jobTitle: 'Software & QA Engineering Intern',
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
      award: 'Bachelor of Science in Computer Engineering',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Ethiopian Defense University',
      award: 'Master of Technology in Artificial Intelligence',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'IBT Ethiopia – Advanced Digital Skills Training',
      award: 'Full stack Software & QA Engineering',
    },
  ],
  knowsAbout: [
    'JavaScript (ES6+)',
    'TypeScript',
    'Python',
    'React 18',
    'Next.js (App Router)',
    'Tailwind CSS',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'REST APIs',
    'Code Reviews',
    'Debugging & Troubleshooting',
    'Object-Oriented Programming (OOP)',
    'Data Structures & Algorithms',
  ],
  sameAs: [
    'https://github.com/Greyshinobi2013',
    'https://www.linkedin.com/in/natnaelgetachew/',
  ],
};

export const viewport: Viewport = {
  themeColor: '#111316',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${hostGrotesk.variable} ${atkinsonMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </head>
      <body suppressHydrationWarning className="bg-paper text-ink antialiased min-h-screen">
        <a href="#about" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
