import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Metodo } from '@/components/sections/Metodo';
import { Services } from '@/components/sections/Services';
import { Projetos } from '@/components/sections/Projetos';
import { Planos } from '@/components/sections/Planos';
import { Avaliacoes } from '@/components/sections/Avaliacoes';
import { Contato } from '@/components/sections/Contato';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace(/^#/, '');
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <About />
      <Metodo />
      <Services />
      <Projetos />
      <Planos />
      <Avaliacoes />
      <Contato />
    </>
  );
}
