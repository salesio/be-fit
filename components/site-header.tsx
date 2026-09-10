import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0b5d3b]/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
        <Link href="/" aria-label="Be Fit — página inicial" className="shrink-0">
          <Image src="/assets/be-fit-logo.png" alt="Be Fit" width={160} height={76} className="h-12 w-auto object-contain" priority />
        </Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 text-sm font-semibold text-[#294b3d] md:flex">
          <Link href="/" className="transition-colors hover:text-[#078c4b]">Início</Link>
          <Link href="/#servicos" className="transition-colors hover:text-[#078c4b]">Serviços</Link>
          <Link href="/shop" className="transition-colors hover:text-[#078c4b]">Loja</Link>
          <Link href="/#sobre" className="transition-colors hover:text-[#078c4b]">Sobre</Link>
        </nav>
        <a href="https://wa.me/258878175266" target="_blank" rel="noreferrer" className={cn(buttonVariants(), 'h-10 rounded-full bg-[#087b47] px-4 text-white hover:bg-[#05683a]')}>
          <MessageCircle /> <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
