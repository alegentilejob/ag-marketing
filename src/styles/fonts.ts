import localFont from 'next/font/local';

export const primaryFont = localFont({
  src: [
    {
      path: '../../public/fonts/Maison Neue/fonnts.com-Maison_Neue_Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Maison Neue/fonnts.com-Maison_Neue_Book.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-primary',
  display: 'swap',
});

export const displayFont = localFont({
  src: '../../public/fonts/Maison Neue/fonnts.com-Maison_Neue_Bold.ttf',
  variable: '--font-display',
  display: 'swap',
});

export const monoFont = localFont({
  src: '../../public/fonts/Maison Neue/fonnts.com-Maison_Neue_Mono.ttf',
  variable: '--font-mono',
  display: 'swap',
});

