# Carolina Elayza Arquitetura

Site institucional da arquiteta **Carolina Elayza** — escritório de arquitetura acessível e humana em Fortaleza / CE.

## Stack

- React 18 + Vite + TypeScript
- Tailwind CSS 3 (design system "Atelier Editorial")
- react-router-dom 6
- lucide-react (ícones)
- Tipografia: Fraunces (display) + General Sans (corpo) + IBM Plex Mono (labels)

## Como rodar

```bash
npm install
npm run dev      # localhost:5173
npm run build    # build de produção
npm run preview  # preview do build
npm run lint     # tsc --noEmit
```

## Estrutura

```
src/
├── App.tsx                    # BrowserRouter shell
├── main.tsx
├── pages/
│   ├── Home.tsx               # 8 seções verticais
│   └── Projeto.tsx            # /projetos/:slug
├── components/
│   ├── layout/                # Navbar, Footer
│   ├── sections/              # Hero, About, Metodo, Services, Projetos, Planos, Avaliacoes, Contato
│   └── ui/                    # Feather, HorizontalGallery
├── data/                      # projetos.ts, services.ts, values.ts, avaliacoes.ts
├── hooks/                     # useScrollPosition, useActiveSection, useLocalStorage
├── lib/storage.ts             # localStorage wrapper
├── assets/                    # Logo, images
├── Projetos/                  # Capas e renders dos 3 projetos
└── styles/globals.css
```

## Rotas

- `/` — home com 8 seções (Hero, Sobre, Método, Serviços, Projetos, Planos, Avaliações, Contato)
- `/projetos/casa-raizes` — Jatobá no Siqueira, residencial
- `/projetos/igreja-assembleia-de-deus-missao` — Granja Portugal, templo comunitário
- `/projetos/quialteras` — Barra do Ceará, projeto acadêmico premiado

## Contato

- **Instagram:** [@carolina_elayza_arquitetura](https://instagram.com/carolina_elayza_arquitetura)
- **WhatsApp:** [+55 85 99987-3435](https://wa.me/5585999873435)
