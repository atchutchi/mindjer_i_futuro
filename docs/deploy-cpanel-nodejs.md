# Deploy em cPanel com Node.js

Este guia prepara o site Mindjer i Futuro para correr como aplicação Next.js em cPanel com Node.js e Phusion Passenger.

Fontes técnicas usadas:

- cPanel, instalação de aplicação Node.js: https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/
- cPanel Application Manager: https://docs.cpanel.net/cpanel/software/application-manager/
- Next.js, deploy como servidor Node.js: https://nextjs.org/docs/pages/getting-started/deploying
- Next.js, self-hosting: https://nextjs.org/docs/app/guides/self-hosting
- Next.js, standalone output: https://nextjs.org/docs/pages/api-reference/config/next-config-js/output
- Sanity, CORS: https://www.sanity.io/docs/content-lake/cors

## Requisitos

- cPanel com Application Manager ou Setup Node.js App activo.
- Node.js 22.12 ou superior. O projecto usa Sanity 6, que exige Node 22.12 ou superior.
- SSH ou Terminal do cPanel activo.
- Domínio com SSL activo antes de produção.
- Resend com domínio verificado para enviar emails com `info@mindjerifuturo.org`.
- Projecto Sanity criado e dataset `production`.

## Variáveis de ambiente

Configurar estas variáveis no cPanel antes do build:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=ID_DO_PROJECTO_SANITY
NEXT_PUBLIC_SANITY_DATASET=production
RESEND_API_KEY=CHAVE_RESEND
RESEND_FROM="Mindjer i Futuro <info@mindjerifuturo.org>"
CONTACT_EMAIL=info@mindjerifuturo.org
NEXT_PUBLIC_SITE_URL=https://mindjerifuturo.org
NODE_ENV=production
```

As variáveis com `NEXT_PUBLIC_` entram no bundle durante `next build`. Se mudares `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET` ou `NEXT_PUBLIC_SITE_URL`, faz novo build.

## Sanity

No painel Sanity:

1. Abrir https://www.sanity.io/manage.
2. Entrar no projecto da Mindjer i Futuro.
3. Ir a Settings, API settings, CORS Origins.
4. Adicionar `https://mindjerifuturo.org` com credentials activo.
5. Adicionar `https://www.mindjerifuturo.org` com credentials activo se o domínio com `www` estiver activo.
6. Manter `http://localhost:3000` para desenvolvimento local se necessário.

O site lê dados públicos com CDN. Não há token Sanity no frontend. Não coloques `SANITY_API_TOKEN` no cPanel para este site, porque o código actual não precisa dele.

## Build local

Antes de enviar para o servidor:

```bash
git pull
npm ci
npm run lint
npm run build:cpanel
npm run start:cpanel
```

Abrir `http://localhost:3000` e testar:

- Homepage.
- Actividades.
- Agenda.
- Equipa.
- Parceiros.
- Contacto.
- `/studio`, se o Studio for mantido no mesmo domínio.

## Deploy com build no servidor

Este é o fluxo mais simples se o cPanel tiver Node 22.12 ou superior e memória suficiente.

1. Enviar o repositório para uma pasta fora de `public_html`, por exemplo `~/apps/mindjer_i_futuro`.
2. No cPanel, abrir Setup Node.js App ou Application Manager.
3. Criar uma aplicação com:
   - Node.js: 22.12 ou superior.
   - Application mode: production.
   - Application root: `apps/mindjer_i_futuro`.
   - Application URL: `mindjerifuturo.org`.
   - Startup file: `.next/standalone/server.js`.
4. Configurar as variáveis de ambiente no painel da aplicação.
5. Abrir Terminal no cPanel e correr:

```bash
cd ~/apps/mindjer_i_futuro
npm ci
npm run build:cpanel
```

6. No cPanel, reiniciar a aplicação.
7. Abrir o domínio e testar páginas e formulário.

## Deploy com build feito localmente

Usa este fluxo se o cPanel tiver pouca memória para fazer build.

1. Na máquina local:

```bash
npm ci
npm run build:cpanel
```

2. Enviar o conteúdo de `.next/standalone/` para a pasta da aplicação no cPanel.
3. Confirmar que dentro da pasta enviada existem:
   - `server.js`
   - `.next/static`
   - `public`
   - `package.json`
4. No cPanel, configurar:
   - Application root: pasta onde está o `server.js`.
   - Startup file: `server.js`.
   - Node.js: 22.12 ou superior.
   - Environment: production.
5. Reiniciar a aplicação.

## Verificações pós-deploy

Depois do deploy:

```bash
curl -I https://mindjerifuturo.org
curl -I https://mindjerifuturo.org/contacto
curl -I https://mindjerifuturo.org/studio
```

Confirmar:

- Status 200 nas páginas públicas.
- Header `x-content-type-options: nosniff`.
- Header `referrer-policy: strict-origin-when-cross-origin`.
- Formulário de contacto envia email.
- Newsletter regista pedido.
- Imagens do Sanity carregam.
- `/studio` abre e exige login Sanity.

## Nota de segurança

O `npm audit` actual deixa 6 avisos moderados ligados ao mesmo `js-yaml`, vindo de `@vercel/frameworks`, dependência transitiva do Sanity CLI. A versão mais recente desse pacote ainda declara `js-yaml` 3.x. O comando `npm audit fix --force` propõe downgrade/breaking em Sanity, por isso não é uma correcção segura neste projecto.

Medida prática: manter Node e pacotes actualizados, não expor tokens Sanity, restringir CORS no Sanity e considerar separar o Studio para outro deploy quando o site público estabilizar.
