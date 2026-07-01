import { Link, useLocation } from 'react-router-dom';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useActiveSection } from '@/hooks/useActiveSection';
import logoHero from '@/assets/Logo/Logo hero sction.png';
import logoHeader from '@/assets/Logo/Logo cabeçario branco.png';

const links = [
  { id: 'hero', label: 'Início' },
  { id: 'about', label: 'Sobre' },
  { id: 'metodo', label: 'Método' },
  { id: 'services', label: 'Serviços' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
] as const;

export function Navbar() {
  const scrolled = useScrollPosition(80);
  const active = useActiveSection();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const onHero = isHomePage && active === 'hero' && !scrolled;
  const borderColor = onHero ? 'border-cream/20' : 'border-hairline';
  const bg = onHero ? 'bg-transparent' : 'bg-cream/90 backdrop-blur-sm';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 border-b ${bg} ${borderColor}`}
    >
      <div className="flex justify-between items-center px-m-mobile md:px-m-desktop py-3">
        <Link to="/" className="relative block h-12 w-auto" aria-label="Carolina Elayza Arquitetura">
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

        <nav className="hidden md:flex gap-gutter items-center">
          {links.map((link) => {
            const isActive = isHomePage && active === link.id;
            const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
            return (
              <a
                key={link.id}
                href={href}
                className={`font-mono text-label uppercase tracking-[0.15em] pb-1 transition-colors duration-100 border-b ${
                  isActive
                    ? onHero
                      ? 'text-cream border-terracotta'
                      : 'text-olive border-terracotta'
                    : onHero
                      ? 'text-cream/80 border-transparent hover:text-cream'
                      : 'text-ink-muted border-transparent hover:text-olive'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
