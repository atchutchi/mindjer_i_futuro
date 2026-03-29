# Mindjer i Futuro

Website oficial da **Mindjer i Futuro** — Conferência de Liderança Feminina na Guiné-Bissau (“Mulher é o Futuro”, em Crioulo Guineense).

## Stack

- Next.js 15 (App Router, TypeScript strict)
- Tailwind CSS v4
- Motion (Framer) + GSAP + ScrollTrigger + Lenis
- React Three Fiber (partículas no hero)
- Sanity v3 + Studio em `/studio`
- React Hook Form + Zod + Resend (contacto e newsletter)
- `next/image` (Unsplash + CDN Sanity)

## Arranque local

```bash
npm install
cp .env.example .env.local
# Preenche NEXT_PUBLIC_SANITY_PROJECT_ID, dataset, RESEND_API_KEY, etc.
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Studio: [http://localhost:3000/studio](http://localhost:3000/studio).

## Variáveis de ambiente

Ver `.env.example`. Sem `NEXT_PUBLIC_SANITY_PROJECT_ID`, o site usa conteúdo estático de `lib/site-content.ts`.

## Build

```bash
npm run build
```

O comando `build` usa Webpack (sem Turbopack) por compatibilidade com o bundle do Sanity Studio.

## Fase 1 — Implementação inicial (29 Mar 2026)

**Alterações:** Estrutura completa do site (homepage com hero, manifesto, projectos, eventos, impacto, equipa, parceiros, newsletter), páginas internas, API Resend (`/api/contact`, `/api/newsletter`), schemas Sanity, Studio embutido, identidade visual (borgonha/ouro, tipografia Cormorant / DM Sans / Great Vibes), Lenis + proxy ScrollTrigger, cursor personalizado em desktop.

**Decisões:** `next-sanity@9` com Next 15; `@hookform/resolvers@3` com Zod 3; ícones de marcas removidos do Lucide — usados `Link2` e `Share2` para redes.

**Estado:** Build de produção a verde; conteúdo CMS opcional com fallbacks.

**Próximos passos:** Configurar projeto Sanity real, domínio e remetente Resend verificado; opcional `public/og-image.jpg` dedicado; Cloudinary se quiseres CDN próprio para imagens.
