# Fundo creme uniforme

## Objectivo

Substituir todos os fundos pretos e cinza-escuros do site pelo creme principal `#f5ede0`, mantendo fundo preto exclusivamente no rodape.

## Direccao visual aprovada

A pagina deve apresentar um fluxo continuo e uniforme em creme. As seccoes deixam de alternar entre superficies escuras e claras. A separacao entre conteudos passa a depender de espacamento, bordas discretas, fotografia, tipografia e detalhes em bordo e ouro.

O hero continua a usar fotografia em fundo. A sobreposicao escura do hero passa de preto para bordo escuro, preservando a leitura do titulo sem introduzir um fundo preto.

## Regras de cor

- Fundo principal de `body`, paginas e seccoes: `#f5ede0`.
- Fundo preto `#0a0808`: exclusivo do rodape.
- Texto principal sobre creme: preto ou bordo, conforme a hierarquia existente.
- Titulos de seccao sobre creme: bordo.
- Etiquetas e ligacoes de destaque: bordo ou ouro escuro.
- Bordas de separacao: bordo com baixa opacidade.
- Sobreposicoes de imagem: bordo, nunca preto.
- Superficies de contraste para logotipos claros: bordo.
- Menu mobile: bordo, por ser uma camada de navegacao e nao uma superficie preta.

## Componentes afectados

### Estrutura global

O `body` e o contentor principal usam creme. As variaveis de superficies escuras deixam de servir como fundos de pagina. O rodape passa a declarar directamente o preto.

### Navegacao

A navegacao usa creme translucido em todas as paginas e estados de scroll. Os links passam para bordo ou preto. O menu mobile mantem o fundo bordo e texto branco.

### Homepage

- Manifesto: creme, texto bordo e estatisticas em ouro escuro.
- Projectos: creme, titulo bordo e cartoes fotograficos preservados.
- Equipa: creme, nomes e biografias em bordo ou preto.
- Parceiros: creme, titulo bordo e cartoes brancos. O cartao da Tabanka usa bordo.
- Newsletter: creme, titulo bordo, texto preto e campo com borda bordo.
- Hero: fotografia preservada e gradiente final bordo escuro.

### Paginas internas

As paginas de Projectos, Equipa e Parceiros passam para creme. Textos actualmente brancos passam para bordo ou preto. As restantes paginas que ja usam creme mantem o comportamento actual.

### Elementos preservados

Cartoes fotograficos, botoes, etiquetas, estados de erro e sobreposicoes continuam a usar bordo, ouro e branco quando necessario. Texto preto continua permitido. O pedido de exclusividade aplica-se a fundos pretos.

## Acessibilidade e contraste

Textos que deixam fundos escuros devem mudar de branco para bordo ou preto. Elementos brancos so permanecem sobre fotografia, bordo ou o rodape preto. Estados de foco continuam visiveis em ouro ou bordo.

## Validacao

- Confirmar por pesquisa de codigo que nenhum fundo preto permanece fora do rodape.
- Confirmar visualmente homepage, Projectos, Equipa, Parceiros e Newsletter em desktop e mobile.
- Confirmar legibilidade do hero, navegacao e logotipo da Tabanka.
- Executar lint, TypeScript, build e Playwright.
