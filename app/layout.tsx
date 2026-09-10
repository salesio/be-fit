import type { Metadata } from 'next';
import { DM_Sans, Manrope } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({ variable: '--font-dm-sans', subsets: ['latin'] });
const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'Be Fit | Emagrecimento e Saúde', template: '%s | Be Fit' },
  description: 'Serviços de bem-estar, alimentação saudável e suplementos da Be Fit em Maputo.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body className={`${dmSans.variable} ${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
