# Mindjer i Futuro

**"Mulher é o Futuro"** em Crioulo Guineense — plataforma digital da associação Mindjer i Futuro, dedicada ao empoderamento de jovens raparigas e mulheres na Guiné-Bissau através da educação, mentoria e criação de redes.

> Quando uma mulher avança, toda a sociedade progride.

---

## Sobre o Projecto

A Mindjer i Futuro (MiF) promove workshops, conferências, diálogos, programas de mentoria e bolsas de estudo para mulheres guineenses. Este site serve como montra dos projectos, agenda de eventos, apresentação da equipa e ponto de contacto com a comunidade — incluindo a diáspora.

**URL de produção:** [mindjerifuturo.org](https://mindjerifuturo.org)

---

## Stack Tecnológico

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 15 (App Router, TypeScript strict) |
| Estilos | Tailwind CSS v4 |
| Animações | Motion (Framer Motion) · GSAP + ScrollTrigger · Lenis (smooth scroll) |
| 3D | React Three Fiber + Drei (partículas no hero) |
| CMS | Sanity v3 com Studio embutido em `/studio` |
| Formulários | React Hook Form + Zod (validação) + Resend (email) |
| Imagens | `next/image` com CDN Sanity e Unsplash (fallback) |
| Testes | Playwright (E2E) |

---

## Estrutura do Projecto

```
├── app/                    # Páginas (App Router)
│   ├── page.tsx            # Homepage
│   ├── sobre/              # Quem somos, missão e valores
│   ├── projectos/          # Projectos e detalhe ([slug])
│   ├── eventos/            # Eventos passados e futuros
│   ├── programacao/        # Programação anual 2026
│   ├── equipa/             # Membros da equipa
│   ├── parceiros/          # Parceiros e apoiantes
│   ├── contacto/           # Formulário de contacto
│   ├── api/                # Endpoints (contact, newsletter)
│   └── studio/             # Sanity Studio
├── components/
│   ├── home/               # Secções da homepage
│   ├── layout/             # Navigation, Footer, LayoutShell
│   ├── projectos/          # Cards de projectos (3D tilt)
│   ├── contact/            # Formulário de contacto
│   └── ui/                 # Button, CustomCursor, SmoothScroll
├── lib/                    # Configuração e dados
│   ├── site-content.ts     # Conteúdo fallback (sem CMS)
│   ├── eventos-data.ts     # 30+ eventos com detalhes
│   ├── sanity.ts           # Cliente Sanity
│   ├── sanity.fetch.ts     # Queries de dados
│   └── fonts.ts            # Cormorant Garamond · DM Sans · Great Vibes
├── sanity/                 # Schemas do CMS
│   └── schemaTypes/        # projecto, evento, membroEquipa, testemunho
├── public/                 # Assets estáticos
│   ├── projectos/          # Imagens de projectos
│   ├── eventos/            # Imagens de eventos
│   ├── equipa/             # Fotos da equipa
│   └── parceiros/          # Logos dos parceiros (SVG)
└── tests/e2e/              # Testes Playwright
```

---

## Arranque Local

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
git clone https://github.com/atchutchi/mindjer_i_futuro.git
cd mindjer_i_futuro
npm install
```

### Configuração

```bash
cp .env.example .env.local
```

Preenche as variáveis em `.env.local`:

| Variável | Descrição | Obrigatório |
|----------|-----------|:-----------:|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | ID do projecto Sanity | Não* |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset Sanity (default: `production`) | Não* |
| `SANITY_API_TOKEN` | Token de leitura Sanity | Não* |
| `RESEND_API_KEY` | API key do Resend para emails | Sim** |
| `RESEND_FROM` | Remetente dos emails | Sim** |
| `CONTACT_EMAIL` | Email de destino do formulário | Sim** |
| `NEXT_PUBLIC_SITE_URL` | URL do site em produção | Não |

\* Sem Sanity configurado, o site usa dados estáticos de `lib/site-content.ts`.
\** Necessário apenas para o formulário de contacto e newsletter.

### Desenvolvimento

```bash
npm run dev
```

- Site: [http://localhost:3000](http://localhost:3000)
- Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

---

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento (Turbopack) |
| `npm run build` | Build de produção |
| `npm start` | Servidor de produção |
| `npm run lint` | ESLint |
| `npm run test:e2e` | Testes E2E (Playwright) |
| `npm run test:e2e:ui` | Testes E2E com interface gráfica |

---

## Identidade Visual

| Elemento | Valor |
|----------|-------|
| Borgonha (primária) | `#7b1d40` |
| Ouro (destaque) | `#c9a55a` |
| Creme (fundo claro) | `#f5ede0` |
| Preto (fundo escuro) | `#0a0808` |
| Fonte títulos | Cormorant Garamond |
| Fonte corpo | DM Sans |
| Fonte script | Great Vibes |

---

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Homepage com hero animado, manifesto, projectos, eventos, equipa, parceiros e newsletter |
| `/sobre` | Quem somos, missão e valores da MiF |
| `/projectos` | Todos os projectos com cards 3D |
| `/projectos/[slug]` | Detalhe de cada projecto |
| `/eventos` | Lista completa de eventos (30+) |
| `/programacao` | Programação anual 2026 — workshops, diálogos e conferências |
| `/equipa` | Membros da equipa |
| `/parceiros` | Parceiros e apoiantes |
| `/contacto` | Formulário de contacto |
| `/studio` | Sanity Studio (gestão de conteúdo) |

---

## Deployment

O projecto está preparado para deploy em **Vercel**:

```bash
npm run build
```

Para outras plataformas, assegura que as variáveis de ambiente estão configuradas e que o Node.js 18+ está disponível.

---

## Parceiros

Abiptom · Adama Connect · CCFBG · Impact Hub Bissau · iParticipate · No Kunsi Digital · QR Consulting · Tabanka TV

---

## Licença

Projecto privado da associação Mindjer i Futuro. Todos os direitos reservados.
