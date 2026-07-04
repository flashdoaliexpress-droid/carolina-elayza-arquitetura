import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useActiveSection } from '@/hooks/useActiveSection';
import logoHero from '@/assets/Logo/Logo hero sction.png';
import logoHeader from '@/assets/Logo/Logo cabeçario branco.png';

type NavLink =
  | { kind: 'anchor'; id: string; label: string }
  | { kind: 'route'; to: string; label: string };

const links: NavLink[] = [
  { kind: 'anchor', id: 'hero', label: 'Início' },
  { kind: 'anchor', id: 'about', label: 'Sobre' },
  { kind: 'anchor', id: 'metodo', label: 'Método' },
  { kind: 'anchor', id: 'services', label: 'Serviços' },
  { kind: 'anchor', id: 'projetos', label: 'Projetos' },
  { kind: 'route', to: '/blog', label: 'Blog' },
  { kind: 'route', to: '/dicionario', label: 'Dicionário' },
  { kind: 'anchor', id: 'contato', label: 'Contato' },
];

export function Navbar() {
  const scrolled = useScrollPosition(80);
  const active = useActiveSection();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  const onHero = isHomePage && active === 'hero' && !scrolled && !menuOpen;
  const borderColor = onHero ? 'border-cream/20' : 'border-hairline';
  const bg = onHero ? 'bg-transparent' : 'bg-cream/90 backdrop-blur-sm';

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const iconColor = onHero ? 'text-cream' : 'text-olive';

  return (
    <>
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 border-b ${bg} ${borderColor}`}
    >
      <div className="flex justify-between items-center px-m-mobile md:px-m-desktop py-3">
        <Link
          to="/"
          className="relative block h-12 w-auto"
          aria-label="Carolina Elayza Arquitetura"
          onClick={(e) => {
            if (isHomePage) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              if (window.location.hash) {
                window.history.replaceState(null, '', '/');
              }
            }
            setMenuOpen(false);
          }}
        >
          <img
            src={logoHero}
            alt=""
            className={`h-12 w-auto transition-opacity duration-200 ${onHero ? 'opacity-100' : 'opacity-0'}`}
          />
          <img
            src={logoHeader}
            alt=""
            className={`absolute inset-0 h-12 w-auto transition-opacity duration-200 ${onHero ? 'opacity-0' : 'opacity-100'}`}
          />
        </Link>

        <nav className="hidden md:flex gap-4 lg:gap-5 xl:gap-gutter items-center">
          {links.map((link) => {
            const isAnchor = link.kind === 'anchor';
            const isActive =
              isAnchor
                ? isHomePage && active === link.id
                : location.pathname.startsWith(link.to);
            const baseClass = `font-mono text-label uppercase tracking-[0.15em] pb-1 transition-colors duration-100 border-b ${
              isActive
                ? onHero
                  ? 'text-cream border-terracotta'
                  : 'text-olive border-terracotta'
                : onHero
                  ? 'text-cream/80 border-transparent hover:text-cream'
                  : 'text-ink-muted border-transparent hover:text-olive'
            }`;

            if (isAnchor) {
              const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
              return (
                <a key={link.id} href={href} className={baseClass}>
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`${baseClass} hidden lg:inline-block`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className={`md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[6px] transition-colors ${iconColor}`}
        >
          <span
            aria-hidden="true"
            className={`block h-px w-6 bg-current transition-all duration-200 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            aria-hidden="true"
            className={`block h-px w-6 bg-current transition-opacity duration-200 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            aria-hidden="true"
            className={`block h-px w-6 bg-current transition-all duration-200 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>
    </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
        style={{ backgroundColor: '#ffffff' }}
        className={`md:hidden fixed inset-0 z-[100] transition-opacity duration-200 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex justify-between items-center px-m-mobile py-3 border-b border-hairline">
          <Link
            to="/"
            className="block h-12 w-auto"
            aria-label="Carolina Elayza Arquitetura"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                if (window.location.hash) {
                  window.history.replaceState(null, '', '/');
                }
              }
              setMenuOpen(false);
            }}
          >
            <img src={logoHeader} alt="" className="h-12 w-auto" />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
            className="relative w-10 h-10 flex items-center justify-center text-olive"
          >
            <span
              aria-hidden="true"
              className="absolute block h-px w-6 bg-current rotate-45"
            />
            <span
              aria-hidden="true"
              className="absolute block h-px w-6 bg-current -rotate-45"
            />
          </button>
        </div>

        <nav className="flex flex-col px-m-mobile py-6 overflow-y-auto h-[calc(100vh-72px)]">
          {links.map((link) => {
            const isAnchor = link.kind === 'anchor';
            const isActive =
              isAnchor
                ? isHomePage && active === link.id
                : location.pathname.startsWith(link.to);
            const itemClass = `font-display text-[28px] leading-tight py-5 border-b border-hairline transition-colors ${
              isActive ? 'text-terracotta' : 'text-olive'
            }`;

            if (isAnchor) {
              const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
              return (
                <a
                  key={link.id}
                  href={href}
                  className={itemClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={link.to}
                to={link.to}
                className={itemClass}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
