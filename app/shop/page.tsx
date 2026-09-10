import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowLeft, MessageCircle, ShieldCheck, ShoppingBag } from 'lucide-react';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { products, productWhatsappUrl } from '@/lib/products';
import { sitePath } from '@/lib/site-path';

export const metadata: Metadata = {
  title: 'Loja',
  description: 'Conheça os suplementos disponíveis na loja Be Fit e peça atendimento pelo WhatsApp.',
  alternates: { canonical: 'https://salesio.github.io/be-fit/shop/' },
  openGraph: {
    type: 'website',
    locale: 'pt_MZ',
    url: 'https://salesio.github.io/be-fit/shop/',
    siteName: 'Be Fit',
    title: 'Loja Be Fit | Suplementos e bem-estar',
    description: 'Conheça os suplementos disponíveis na loja Be Fit e peça atendimento pelo WhatsApp.',
    images: [
      {
        url: 'https://salesio.github.io/be-fit/og.png',
        secureUrl: 'https://salesio.github.io/be-fit/og.png',
        width: 1851,
        height: 840,
        type: 'image/png',
        alt: 'Be Fit — um caminho mais leve e um cuidado mais consciente',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loja Be Fit | Suplementos e bem-estar',
    description: 'Conheça os suplementos disponíveis na loja Be Fit e peça atendimento pelo WhatsApp.',
    images: ['https://salesio.github.io/be-fit/og.png'],
  },
};

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#f7fbf7]">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-[#0b5d3b]/10 bg-[#073c2a] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-20">
          <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-[#b8ef35]/20 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-[#078c4b]/35 blur-3xl" />
          <div className="relative mx-auto max-w-7xl">
            <a href={sitePath('/')} className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"><ArrowLeft className="size-4" /> Voltar ao início</a>
            <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[.2em] text-[#b8ef35]">Loja Be Fit</p>
                <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-.05em] sm:text-6xl">Bem-estar, produto por produto.</h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">Embalagens isoladas para ver cada opção com clareza. Escolha um produto e fale connosco para confirmar disponibilidade.</p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.07] px-5 py-4 backdrop-blur">
                <ShoppingBag className="size-6 text-[#b8ef35]" />
                <div><p className="text-2xl font-semibold">7 produtos</p><p className="text-sm text-white/60">Catálogo atual</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <article key={product.name} className={cn('group flex flex-col overflow-hidden rounded-[2rem] border border-[#0b5d3b]/10 bg-white shadow-[0_16px_55px_rgba(7,75,48,.07)] transition-transform duration-300 hover:-translate-y-1', index === products.length - 1 && 'sm:col-span-2 lg:col-span-1')}>
                <div className="relative flex min-h-80 items-center justify-center overflow-hidden p-7" style={{ background: `linear-gradient(145deg, ${product.accent}, #f8fff9 75%)` }}>
                  <div className="absolute right-5 top-5 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[.12em] text-[#0a6f43] backdrop-blur">{product.category}</div>
                  <Image src={sitePath(product.image)} alt={`Embalagem de ${product.name}`} width={520} height={640} className="max-h-64 w-auto object-contain drop-shadow-[0_18px_20px_rgba(24,60,45,.22)] transition-transform duration-300 group-hover:scale-[1.04]" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-2xl font-semibold leading-tight tracking-[-.025em] text-[#073c2a]">{product.name}</h2>
                  <p className="mt-3 flex-1 leading-7 text-[#587064]">{product.description}</p>
                  <div className="mt-6 flex items-end justify-between gap-4 border-t border-[#0b5d3b]/10 pt-5">
                    <div><p className="text-xs font-bold uppercase tracking-[.14em] text-[#6d8278]">Preço</p><p className="mt-1 text-2xl font-semibold text-[#087b47]">{product.price}</p></div>
                    <a href={productWhatsappUrl(product.name)} target="_blank" rel="noreferrer" aria-label={`Pedir ${product.name} pelo WhatsApp`} className={cn(buttonVariants({ size: 'lg' }), 'h-11 rounded-full bg-[#087b47] px-5 text-white hover:bg-[#05683a]')}>
                      Pedir <MessageCircle />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-7xl gap-4 rounded-[2rem] border border-[#087b47]/15 bg-[#eaf7ed] p-6 sm:p-8">
            <ShieldCheck className="mt-1 size-7 shrink-0 text-[#087b47]" />
            <div>
              <h2 className="text-xl font-semibold text-[#073c2a]">Nota importante sobre a sua saúde</h2>
              <p className="mt-2 max-w-4xl leading-7 text-[#4f6b5d]">Estes produtos são suplementos e não medicamentos. Não substituem diagnóstico, tratamento ou acompanhamento profissional. Consulte um profissional de saúde antes de usar, especialmente se tiver uma condição clínica, tomar medicação, estiver grávida ou a amamentar.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
