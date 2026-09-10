import Image from 'next/image';
import { ArrowRight, HeartPulse, Leaf, MessageCircle, Mic2, ShoppingBag, Users } from 'lucide-react';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { sitePath } from '@/lib/site-path';

const whatsappUrl =
  'https://wa.me/258878175266?text=Ol%C3%A1%20Be%20Fit!%20Gostaria%20de%20saber%20mais%20sobre%20os%20vossos%20servi%C3%A7os.';

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-[linear-gradient(140deg,#f5ffe8_0%,#ffffff_48%,#e7f8ed_100%)]">
          <div className="absolute -left-28 top-24 h-80 w-80 rounded-full bg-[#b8ef35]/25 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#078c4b]/16 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.03fr_.97fr] lg:items-center lg:px-10 lg:pb-24 lg:pt-20">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#068b4a]/15 bg-white/75 px-4 py-2 text-sm font-semibold text-[#07643c] shadow-sm backdrop-blur">
                <Leaf className="size-4" />
                Emagrecimento, saúde e escolhas conscientes
              </div>
              <h1 className="font-heading text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#073c2a] sm:text-6xl lg:text-7xl">
                Um caminho mais leve.
                <span className="brand-gradient block">Um cuidado mais consciente.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#395a4c] sm:text-xl">
                A Be Fit aproxima orientação, alimentação saudável e produtos de
                bem-estar para ajudar a transformar intenção em rotina.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={sitePath('/#servicos')}
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'h-12 rounded-full bg-[#087b47] px-6 text-base text-white shadow-[0_12px_35px_rgba(8,123,71,.24)] hover:bg-[#05683a]',
                  )}
                >
                  Conhecer os serviços <ArrowRight />
                </a>
                <a
                  href={sitePath('/shop/')}
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'h-12 rounded-full border-[#087b47]/25 bg-white/70 px-6 text-base text-[#075f39] hover:bg-white',
                  )}
                >
                  Visitar a loja
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-[#486858]">
                <span className="inline-flex items-center gap-2">
                  <HeartPulse className="size-4 text-[#078c4b]" /> Bem-estar com propósito
                </span>
                <span className="inline-flex items-center gap-2">
                  <MessageCircle className="size-4 text-[#078c4b]" /> Atendimento por WhatsApp
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[590px] lg:mx-0">
              <div className="absolute -inset-4 rotate-2 rounded-[2.3rem] bg-[linear-gradient(145deg,#b6ee35,#078b4a,#063c2c)] opacity-90" />
              <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-[#d9efe1] shadow-[0_30px_80px_rgba(7,75,48,.22)]">
                <Image
                  src={sitePath('/assets/gloria-speaking.jpg')}
                  alt="Gloria Alberto Manhique durante uma apresentação da Be Fit"
                  width={1080}
                  height={1080}
                  priority
                  className="aspect-[5/6] w-full object-cover object-center"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-[#073c2a]/88 p-4 text-white backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5">
                  <p className="text-sm font-medium text-[#c9f77a]">Maputo, Moçambique</p>
                  <p className="mt-1 text-lg font-semibold">Conhecimento que se partilha. Hábitos que se constroem.</p>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-3 hidden rounded-2xl border border-white/80 bg-white p-4 shadow-xl sm:block">
                <Image src={sitePath('/assets/be-fit-logo.png')} alt="Be Fit" width={150} height={72} className="h-12 w-auto object-contain" />
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-[#073c2a] px-5 py-20 text-white sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.18em] text-[#b8ef35]">Como a Be Fit ajuda</p>
              <h2 className="mt-4 max-w-md text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Pequenas decisões. Mudanças que permanecem.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-3xl border border-white/10 bg-white/[.07] p-6">
                <p className="text-sm font-semibold text-[#c9f77a]">01</p>
                <h3 className="mt-8 text-2xl font-semibold">Imersão de emagrecimento</h3>
                <p className="mt-3 leading-7 text-white/70">Uma experiência orientada para rever hábitos, ganhar clareza e criar uma rotina possível.</p>
              </article>
              <article className="rounded-3xl border border-white/10 bg-white/[.07] p-6">
                <p className="text-sm font-semibold text-[#c9f77a]">02</p>
                <h3 className="mt-8 text-2xl font-semibold">Palestras de alimentação saudável</h3>
                <p className="mt-3 leading-7 text-white/70">Conversas práticas para organizações, comunidades e grupos que querem cuidar melhor da saúde.</p>
              </article>
              <article className="rounded-3xl border border-white/10 bg-[linear-gradient(145deg,rgba(184,239,53,.18),rgba(255,255,255,.06))] p-6 sm:col-span-2">
                <p className="text-sm font-semibold text-[#c9f77a]">03</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div>
                    <h3 className="text-2xl font-semibold">Orientação para escolhas conscientes</h3>
                    <p className="mt-3 max-w-2xl leading-7 text-white/70">Conversa individual para conhecer a rotina, esclarecer dúvidas sobre o catálogo e encontrar o próximo passo mais adequado.</p>
                  </div>
                  <ShoppingBag className="hidden size-10 text-[#b8ef35] sm:block" />
                </div>
              </article>
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-7xl">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className={cn(buttonVariants({ size: 'lg' }), 'h-12 rounded-full bg-[#b8ef35] px-6 text-base text-[#073c2a] hover:bg-[#c9f77a]')}>
              Falar com a Be Fit <MessageCircle />
            </a>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.18em] text-[#078c4b]">Loja Be Fit</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] text-[#073c2a] sm:text-5xl">Cada produto, agora com espaço para respirar.</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#526d60]">O catálogo reúne sete suplementos da linha Be Fit. Veja cada embalagem, conheça a sua proposta e peça atendimento diretamente pelo WhatsApp.</p>
              <a href={sitePath('/shop/')} className={cn(buttonVariants({ size: 'lg' }), 'mt-8 h-12 rounded-full bg-[#087b47] px-6 text-base text-white hover:bg-[#05683a]')}>
                Ver os 7 produtos <ArrowRight />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                ['/assets/products/uxi-amarelo.png', 'Uxi Amarelo'],
                ['/assets/products/omega-3.png', 'Ômega 3'],
                ['/assets/products/acido-hialuronico.png', 'Ácido Hialurónico'],
              ].map(([src, alt], index) => (
                <div key={src} className={cn('flex min-h-64 items-center justify-center rounded-[2rem] border border-[#0b5d3b]/10 bg-[linear-gradient(145deg,#f7ffeb,#eaf8ef)] p-4 shadow-[0_18px_55px_rgba(7,75,48,.08)]', index === 2 && 'col-span-2 sm:col-span-1')}>
                  <Image src={sitePath(src)} alt={alt} width={420} height={560} className="max-h-56 w-auto object-contain drop-shadow-[0_16px_16px_rgba(7,60,42,.16)]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-[#edf8f0] px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-[linear-gradient(145deg,#b8ef35,#078c4b)]" />
              <Image src={sitePath('/assets/gloria-speaking.jpg')} alt="Gloria Alberto Manhique a falar num evento" width={900} height={900} className="relative aspect-square w-full rounded-[2rem] object-cover" />
            </div>
            <div className="lg:pl-8">
              <p className="text-sm font-semibold uppercase tracking-[.18em] text-[#078c4b]">Por detrás da Be Fit</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] text-[#073c2a] sm:text-5xl">Gloria Alberto Manhique</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4b685a]">Criadora digital em Maputo e voz da Be Fit. Gloria leva a conversa sobre emagrecimento e alimentação saudável para o palco, para as imersões e para o dia a dia de quem procura mudanças mais conscientes.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 shadow-sm"><Users className="size-6 text-[#078c4b]" /><p className="mt-3 font-semibold text-[#073c2a]">Imersões com proximidade</p><p className="mt-1 text-sm leading-6 text-[#5a7267]">Partilha, motivação e passos práticos em grupo.</p></div>
                <div className="rounded-2xl bg-white p-5 shadow-sm"><Mic2 className="size-6 text-[#078c4b]" /><p className="mt-3 font-semibold text-[#073c2a]">Palestras que inspiram</p><p className="mt-1 text-sm leading-6 text-[#5a7267]">Alimentação saudável explicada de forma acessível.</p></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
