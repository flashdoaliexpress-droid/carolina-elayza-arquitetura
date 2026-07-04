import { Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoMarrom from '@/assets/Logo/Logo cabeçario branco Secundaria.png';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M15 3v9.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M15 3c.5 2.5 2.5 4.5 5 5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="w-full px-m-mobile md:px-m-desktop py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-gutter bg-cream border-t border-hairline">
      <a href="/" aria-label="Voltar ao início" className="block">
        <img
          src={logoMarrom}
          alt="Carolina Elayza Arquitetura"
          className="h-7 md:h-12 w-auto"
        />
      </a>

      <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
        <nav
          aria-label="Páginas complementares"
          className="flex items-center gap-6 font-mono text-label uppercase tracking-[0.25em]"
        >
          <Link to="/blog" className="text-ink-muted hover:text-terracotta transition-colors">
            Blog
          </Link>
          <span aria-hidden="true" className="w-px h-3 bg-sage/60" />
          <Link
            to="/dicionario"
            className="text-ink-muted hover:text-terracotta transition-colors"
          >
            Dicionário
          </Link>
        </nav>

        <nav aria-label="Redes sociais" className="flex items-center gap-6">
          <a
            href="https://instagram.com/carolina_elayza_arquitetura"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Carolina Elayza"
            className="text-olive hover:text-terracotta transition-colors"
          >
            <Instagram className="w-6 h-6" strokeWidth={1.5} />
          </a>
          <a
            href="https://www.youtube.com/@CarolinaElayzaArquitetura"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube da Carolina Elayza"
            className="text-olive hover:text-terracotta transition-colors"
          >
            <Youtube className="w-6 h-6" strokeWidth={1.5} />
          </a>
          <a
            href="https://www.tiktok.com/@carolina_elayza_arq"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok da Carolina Elayza"
            className="text-olive hover:text-terracotta transition-colors"
          >
            <TikTokIcon className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/5585999873435"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp da Carolina Elayza"
            className="text-olive hover:text-terracotta transition-colors"
          >
            <WhatsAppIcon className="w-6 h-6" />
          </a>
        </nav>

        <p className="font-body text-body-md text-ink-muted">
          © {new Date().getFullYear()} Carolina Elayza Arquitetura
        </p>
      </div>
    </footer>
  );
}
