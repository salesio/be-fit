import type { Metadata } from 'next';
import { DM_Sans, Manrope } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({ variable: '--font-dm-sans', subsets: ['latin'] });
const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });

const siteUrl = 'https://salesio.github.io/be-fit/';
const shareImage = 'https://salesio.github.io/be-fit/og.png';
const siteTitle = 'Be Fit | Emagrecimento e Saúde';
const siteDescription =
  'Orientação, alimentação saudável, experiências de emagrecimento e suplementos da Be Fit em Maputo.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: '%s | Be Fit' },
  description: siteDescription,
  applicationName: 'Be Fit',
  authors: [{ name: 'Be Fit' }],
  creator: 'Be Fit',
  publisher: 'Be Fit',
  category: 'Saúde e bem-estar',
  keywords: [
    'Be Fit',
    'emagrecimento',
    'alimentação saudável',
    'bem-estar',
    'suplementos',
    'Maputo',
    'Moçambique',
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'pt_MZ',
    url: siteUrl,
    siteName: 'Be Fit',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: shareImage,
        secureUrl: shareImage,
        width: 1851,
        height: 840,
        type: 'image/png',
        alt: 'Be Fit — um caminho mais leve e um cuidado mais consciente',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [shareImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body className={`${dmSans.variable} ${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
