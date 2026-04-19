import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';

export const primaryFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-primary',
});

export const displayFont = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});
