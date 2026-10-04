import type { Metadata, Viewport } from 'next';
import './globals.css';
import { RecruiterModeProvider } from '@/components/RecruiterModeContext';

export const metadata: Metadata = {
  title: 'Natnael Getachew | Systems & Full-Stack Developer',
  description:
    'Full-Stack Developer Portfolio of Natnael Getachew. Computer Engineering graduate specializing in Next.js App Router, React 18, TypeScript, Python architecture, and native Android solutions.',
  keywords: [
    'Natnael Getachew',
    'Full-Stack Developer',
    'Software Engineer',
    'Addis Ababa',
    'Ethiopia',
    'Next.js 14',
    'React',
    'TypeScript',
    'Python',
    'Android',
  ],
  authors: [{ name: 'Natnael Getachew' }],
  icons: {
    icon: '/avatar.png',
  },
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
    <html lang="en" className="dark">
      <body className="bg-canvas text-gray-200 antialiased selection:bg-neon-pink/30 selection:text-neon-cyan min-h-screen relative">
        <RecruiterModeProvider>{children}</RecruiterModeProvider>
      </body>
    </html>
  );
}
