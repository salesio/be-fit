import Image from 'next/image';

import { sitePath } from '@/lib/site-path';

export function SiteFooter() {
  return (
    <footer className="border-t border-[#0b5d3b]/10 bg-white px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Image src={sitePath('/assets/be-fit-logo.png')} alt="Be Fit" width={130} height={62} className="h-10 w-auto object-contain" />
          <p className="mt-2 text-sm text-[#587064]">Emagrecimento e saúde · Maputo, Moçambique</p>
        </div>
        <div className="flex gap-6 text-sm font-semibold text-[#345547]">
          <a href={sitePath('/#servicos')} className="hover:text-[#078c4b]">Serviços</a>
          <a href={sitePath('/shop/')} className="hover:text-[#078c4b]">Loja</a>
          <a href="https://www.instagram.com/gamanhiqueee/" target="_blank" rel="noreferrer" className="hover:text-[#078c4b]">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
