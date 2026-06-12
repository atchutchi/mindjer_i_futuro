# Fundo Creme Uniforme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Aplicar o creme `#f5ede0` como fundo uniforme do site, mantendo preto exclusivamente no rodape.

**Architecture:** A alteracao usa as variaveis e classes Tailwind ja existentes. Cada superficie escura passa para creme e os textos associados mudam para bordo ou preto. O rodape declara o preto directamente e o teste Playwright verifica a regra visual nas rotas principais.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, Playwright.

---

### Task 1: Regra de regressao visual

**Files:**
- Modify: `tests/e2e/site-audit.spec.ts`

- [ ] Adicionar um teste que verifique fundo creme no `body`, manifesto, Projectos, Equipa, Parceiros, Newsletter e paginas internas.
- [ ] Verificar que o rodape continua preto.
- [ ] Executar o teste e confirmar que falha antes da implementacao.

### Task 2: Superficies globais e navegacao

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`
- Modify: `components/layout/Navigation.tsx`
- Modify: `components/layout/Footer.tsx`
- Modify: `components/home/HeroSection.tsx`

- [ ] Aplicar creme ao `body` e ao layout global.
- [ ] Tornar a navegacao creme translucida com texto bordo.
- [ ] Declarar preto exclusivamente no rodape.
- [ ] Trocar a sobreposicao preta do hero por bordo escuro.

### Task 3: Homepage e paginas internas

**Files:**
- Modify: `components/home/ManifestoSection.tsx`
- Modify: `components/home/ProjectosSection.tsx`
- Modify: `components/home/EquipaSection.tsx`
- Modify: `components/home/ParceirosSection.tsx`
- Modify: `components/home/NewsletterSection.tsx`
- Modify: `app/projectos/page.tsx`
- Modify: `app/equipa/page.tsx`
- Modify: `app/parceiros/page.tsx`
- Modify: `components/projectos/ProjectoCard.tsx`
- Modify: `components/contact/ContactForm.tsx`

- [ ] Trocar fundos escuros por creme.
- [ ] Adaptar textos brancos para bordo ou preto.
- [ ] Trocar superficies de contraste pretas por bordo.
- [ ] Confirmar contraste dos cartoes, formularios e logotipos.

### Task 4: Validacao e publicacao

**Files:**
- Modify: `tests/e2e/site-audit.spec.ts`

- [ ] Executar o teste visual e confirmar que passa.
- [ ] Inspeccionar desktop e mobile no Browser do Codex.
- [ ] Executar lint, TypeScript, build e suite Playwright.
- [ ] Commit, push para `main` e deploy de producao no Vercel.
