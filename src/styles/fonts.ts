import localFont from 'next/font/local';

export const primaryFont = localFont({
  src: [
    {
      path: '../../public/fonts/General Sans/fonts/GeneralSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/General Sans/fonts/GeneralSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/General Sans/fonts/GeneralSans-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/General Sans/fonts/GeneralSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-primary',
  display: 'swap',
});

export const displayFont = localFont({
  src: [
    {
      path: '../../public/fonts/General Sans/fonts/GeneralSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/General Sans/fonts/GeneralSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-display',
  display: 'swap',
});

export const monoFont = localFont({
  src: '../../public/fonts/General Sans/fonts/GeneralSans-Regular.woff2',
  variable: '--font-mono',
  display: 'swap',
});

export const maisonNeueFont = localFont({
  src: [
    {
      path: '../../public/fonts/Maison Neue/fonnts.com-Maison_Neue_Book.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Maison Neue/fonnts.com-Maison_Neue_Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Maison Neue/fonnts.com-Maison_Neue_Light.ttf',
      weight: '300',
      style: 'normal',
    }
  ],
  variable: '--font-maison-neue',
  display: 'swap',
});


