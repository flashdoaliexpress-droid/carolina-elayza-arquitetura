import { useEffect, useState } from 'react';
import hero1 from '@/assets/images/hero-1.webp';
import hero2 from '@/assets/images/hero-2.webp';
import hero1Mobile from '@/assets/images/hero-1 Mobile.png';
import hero2Mobile from '@/assets/images/hero-2 Mobile.png';

const HERO_DESKTOP = [hero1, hero2];
const HERO_MOBILE = [hero1Mobile, hero2Mobile];
const ROTATION_MS = 5000;
const MOBILE_QUERY = '(max-width: 767px)';

export function Hero() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(MOBILE_QUERY).matches : false,
  );

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % HERO_DESKTOP.length);
    }, ROTATION_MS);
    return () => window.clearInterval(id);
  }, []);

  const images = isMobile ? HERO_MOBILE : HERO_DESKTOP;

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex flex-col justify-end overflow-hidden"
    >
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-[1500ms] ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${src})` }}
          role={i === index ? 'img' : undefined}
          aria-label={i === index ? 'Projeto de arquitetura por Carolina Elayza' : undefined}
        />
      ))}

      <div className="absolute inset-0 z-0 pointer-events-none bg-ink/15" />

      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(29,27,24,0.65) 0%, rgba(29,27,24,0.35) 35%, rgba(29,27,24,0.10) 65%, rgba(29,27,24,0) 90%)',
        }}
      />

      <div className="relative z-10 px-m-mobile md:px-m-desktop pb-24 md:pb-32 md:grid md:grid-cols-12">
        <div className="md:col-span-10 lg:col-span-9">
          <h1 className="font-display text-cream leading-[1.05] tracking-tight text-balance text-[40px] md:text-[64px] lg:text-[72px] max-w-[900px]">
            Arquitetura que <em className="italic font-normal">acolhe</em> · Espaços que transformam
          </h1>
        </div>
      </div>
    </section>
  );
}
