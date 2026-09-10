import Image from 'next/image';
import { MessageCircle } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { sitePath } from '@/lib/site-path';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0b5d3b]/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
        <a href={sitePath('/')} aria-label="Be Fit — página inicial" className="shrink-0">
          <Image src={sitePath('/assets/be-fit-logo.png')} alt="Be Fit" width={160} height={76} className="h-12 w-auto object-contain" priority />
        </a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 text-sm font-semibold text-[#294b3d] md:flex">
          <a href={sitePath('/')} className="transition-colors hover:text-[#078c4b]">Início</a>
          <a href={sitePath('/#servicos')} className="transition-colors hover:text-[#078c4b]">Serviços</a>
          <a href={sitePath('/shop/')} className="transition-colors hover:text-[#078c4b]">Loja</a>
          <a href={sitePath('/#sobre')} className="transition-colors hover:text-[#078c4b]">Sobre</a>
        </nav>
        <a href="https://wa.me/258878175266" target="_blank" rel="noreferrer" className={cn(buttonVariants(), 'h-10 rounded-full bg-[#087b47] px-4 text-white hover:bg-[#05683a]')}>
          <MessageCircle /> <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
      <nav aria-label="Navegação móvel" className="flex items-center justify-center gap-6 overflow-x-auto border-t border-[#0b5d3b]/10 px-5 py-3 text-sm font-semibold text-[#294b3d] md:hidden">
        <a href={sitePath('/')} className="whitespace-nowrap hover:text-[#078c4b]">Início</a>
        <a href={sitePath('/#servicos')} className="whitespace-nowrap hover:text-[#078c4b]">Serviços</a>
        <a href={sitePath('/shop/')} className="whitespace-nowrap hover:text-[#078c4b]">Loja</a>
        <a href={sitePath('/#sobre')} className="whitespace-nowrap hover:text-[#078c4b]">Sobre</a>
      </nav>
    </header>
  );
}
