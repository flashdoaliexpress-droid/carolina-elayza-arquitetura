import { useEffect, useState } from 'react';
import hero1 from '@/assets/images/hero-1.webp';
import hero2 from '@/assets/images/hero-2.webp';

const HERO_IMAGES = [hero1, hero2];
const ROTATION_MS = 5000;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, ROTATION_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex flex-col justify-end overflow-hidden"
    >
      {HERO_IMAGES.map((src, i) => (
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
