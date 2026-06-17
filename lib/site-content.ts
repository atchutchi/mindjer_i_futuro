import {
  textoBolsasLinguaFrancesa,
  textoBrunchAngariacao,
  textoConferenciaLiderancaFeminina,
  textoCursoHabilidadesProfissionais,
  textoIdentidadesDiasporicas,
  textoMasterclassFalarEmPublico,
  textoPodcast,
  textoProgramaMentoria,
  textoWorkshopsCapacitacao,
} from "./projectos-textos"

export type ProjectoFallback = {
  titulo: string
  slug: string
  categoria: string
  descricaoBreve: string
  descricaoLonga: string
  destaque: boolean
  impacto?: string
  imagemCapaUrl: string
  galeriaUrls?: string[]
}

export type { EventoFallback } from "./eventos-data"
export { eventosFallback, eventosFallbackOrdenados } from "./eventos-data"

export type MembroFallback = {
  nome: string
  cargo: string
  bio: string
  ordem: number
  fotoUrl?: string
  linkedin?: string
  instagram?: string
}

export type TestemunhoFallback = {
  quote: string
  nome: string
  programa: string
  fotoUrl?: string
}

export const heroSlideUrls = [
  "/eventos/e08-2-conferencia-lideranca-feminina-2024/capa.png",
  "/projectos/curso-habilidades-profissionais/galeria-1.png",
  "/projectos/brunch-angariacao/capa.png",
  "/projectos/podcast-mindjer-i-futuro/capa.png",
]

export const impactoBgUrl = "/projectos/identidades-diasporicas/capa.png"

export const projectosFallback: ProjectoFallback[] = [
  {
    titulo: "Workshops & Capacitação",
    slug: "workshops-capacitacao",
    categoria: "Workshops",
    descricaoBreve:
      "Competências profissionais, digitais e pessoais através de sessões práticas para jovens mulheres.",
    descricaoLonga: textoWorkshopsCapacitacao,
    destaque: true,
    impacto: "30+ actividades realizadas",
    imagemCapaUrl: "/projectos/curso-habilidades-profissionais/capa.png",
    galeriaUrls: [
      "/projectos/curso-habilidades-profissionais/galeria-1.png",
      "/projectos/curso-habilidades-profissionais/galeria-2.png",
    ],
  },
  {
    titulo: "Conferência de Liderança Feminina",
    slug: "conferencia-lideranca-feminina",
    categoria: "Conferência",
    descricaoBreve:
      "Encontro anual para debate, aprendizagem e criação de redes entre mulheres guineenses.",
    descricaoLonga: textoConferenciaLiderancaFeminina,
    destaque: true,
    impacto: "4 edições · 297 participantes na edição de 2026",
    imagemCapaUrl: "/eventos/e08-2-conferencia-lideranca-feminina-2024/capa.png",
  },
  {
    titulo: "Mulheres Guineenses e Identidades Diaspóricas",
    slug: "identidades-diasporicas",
    categoria: "Diálogos",
    descricaoBreve:
      "Diálogos e conversas temáticas sobre identidade, pertença e diáspora guineense.",
    descricaoLonga: textoIdentidadesDiasporicas,
    destaque: true,
    impacto: "Embaixada de França + CCFBG",
    imagemCapaUrl: "/projectos/identidades-diasporicas/capa.png",
    galeriaUrls: [
      "/projectos/identidades-diasporicas/galeria-1.png",
      "/projectos/identidades-diasporicas/galeria-2.png",
    ],
  },
  {
    titulo: "Bolsas de Estudo Língua Francesa",
    slug: "bolsas-lingua-francesa",
    categoria: "Bolsas",
    descricaoBreve:
      "10 bolsas, 8 meses, no Centro Cultural Franco-Bissau-Guineense.",
    descricaoLonga: textoBolsasLinguaFrancesa,
    destaque: true,
    impacto: "10 bolsas · 8 meses",
    imagemCapaUrl: "/projectos/bolsas-lingua-francesa/capa.png",
  },
  {
    titulo: "Programa de Mentoria",
    slug: "programa-mentoria",
    categoria: "Mentoria",
    descricaoBreve:
      "9 pares no piloto e nova edição prevista para junho de 2026 na Embaixada de França.",
    descricaoLonga: textoProgramaMentoria,
    destaque: true,
    impacto: "9 pares · nova edição em junho de 2026",
    imagemCapaUrl: "/projectos/programa-mentoria/capa.png",
  },
  {
    titulo: "Brunch & Angariação de Fundos",
    slug: "brunch-angariacao",
    categoria: "Angariação",
    descricaoBreve:
      "Dois brunches de angariação com o Restaurante Gã Melá para mobilizar recursos e rede.",
    descricaoLonga: textoBrunchAngariacao,
    destaque: true,
    impacto: "2 brunches · parceria Gã Melá",
    imagemCapaUrl: "/projectos/brunch-angariacao/capa.png",
    galeriaUrls: ["/projectos/brunch-angariacao/galeria-1.png"],
  },
  {
    titulo: "Podcast Mindjer i Futuro",
    slug: "podcast-mindjer-i-futuro",
    categoria: "Podcast",
    descricaoBreve:
      "Parceria com iParticipate: conversas mensais no YouTube com mulheres guineenses.",
    descricaoLonga: textoPodcast,
    destaque: true,
    impacto: "Parceiro iParticipate · mensal no YouTube",
    imagemCapaUrl: "/projectos/podcast-mindjer-i-futuro/capa.png",
  },
]

export const projectosDetalheFallback: ProjectoFallback[] = [
  ...projectosFallback,
  {
    titulo: "Curso de Habilidades Profissionais",
    slug: "curso-habilidades-profissionais",
    categoria: "Capacitação",
    descricaoBreve:
      "Parceria com a Embaixada dos EUA. 30 participantes, 6 semanas: CV, entrevistas e comunicação digital.",
    descricaoLonga: textoCursoHabilidadesProfissionais,
    destaque: false,
    impacto: "30 participantes",
    imagemCapaUrl: "/projectos/curso-habilidades-profissionais/capa.png",
    galeriaUrls: [
      "/projectos/curso-habilidades-profissionais/galeria-1.png",
      "/projectos/curso-habilidades-profissionais/galeria-2.png",
    ],
  },
  {
    titulo: "Masterclass Falar em Público",
    slug: "masterclass-falar-em-publico",
    categoria: "Capacitação",
    descricaoBreve:
      "Na Escola Nacional de Administração: confiança, linguagem corporal e comunicação assertiva.",
    descricaoLonga: textoMasterclassFalarEmPublico,
    destaque: false,
    impacto: "Escola Nacional de Administração",
    imagemCapaUrl: "/projectos/masterclass-falar-em-publico/capa.png",
    galeriaUrls: ["/projectos/masterclass-falar-em-publico/galeria-1.png"],
  },
]

export type ActividadeRealizada = {
  tema: string
  edicoes: string
  participantes: string
  parceiros: string
  descricao: string
  imagemUrl: string
}

export const actividadesRealizadas: ActividadeRealizada[] = [
  {
    tema: "Saúde Sexual e Reprodutiva",
    edicoes: "5 edições",
    participantes: "200+ participantes",
    parceiros: "CCFBG",
    descricao:
      "Sessões sobre saúde menstrual, métodos contracetivos, prevenção de infeções, planeamento familiar e direitos sexuais e reprodutivos.",
    imagemUrl: "/eventos/e27-workshop-saude-sexual-2025-11/capa.png",
  },
  {
    tema: "Falar em Público",
    edicoes: "5 edições",
    participantes: "160+ participantes",
    parceiros: "CCFBG, ENA",
    descricao:
      "Formação prática em estrutura de discurso, linguagem corporal, gestão do nervosismo, liderança e comunicação segura.",
    imagemUrl: "/eventos/e28-workshop-falar-em-publico-2026/capa.png",
  },
  {
    tema: "Habilidades Profissionais",
    edicoes: "5 edições",
    participantes: "160+ participantes",
    parceiros: "American Corner, Embaixada dos EUA",
    descricao:
      "Preparação para o mercado de trabalho com CV, cartas de apresentação, entrevistas, comunicação profissional e ferramentas digitais.",
    imagemUrl: "/projectos/curso-habilidades-profissionais/capa.png",
  },
  {
    tema: "Educação Financeira",
    edicoes: "3 edições",
    participantes: "150+ participantes",
    parceiros: "Ecobank, CCFBG",
    descricao:
      "Literacia financeira com orçamento, gestão de despesas, poupança, reserva de emergência, dívidas e noções básicas de investimento.",
    imagemUrl: "/eventos/e25-workshop-educacao-financeira-2025/capa.png",
  },
  {
    tema: "Escolha de Carreira",
    edicoes: "1 edição",
    participantes: "50 participantes",
    parceiros: "CCFBG",
    descricao:
      "Orientação sobre vocação, influência social, bolsas de estudo, percursos académicos, carreira e empreendedorismo.",
    imagemUrl: "/eventos/e20-workshop-escolhendo-carreira-2024/capa.png",
  },
  {
    tema: "Literacia Digital e IA",
    edicoes: "5 edições",
    participantes: "80+ participantes",
    parceiros: "Abiptom, iParticipate, CCFBG",
    descricao:
      "Sessões sobre segurança digital, uso responsável da internet, competências digitais e introdução à inteligência artificial.",
    imagemUrl: "/eventos/e26-workshop-literacia-digital-2025/capa.png",
  },
  {
    tema: "Inteligência Emocional",
    edicoes: "1 edição",
    participantes: "100 participantes",
    parceiros: "CCFBG",
    descricao:
      "Reflexão prática sobre reconhecimento emocional, ansiedade, comunicação e resolução de desafios pessoais e profissionais.",
    imagemUrl: "/eventos/e23-workshop-inteligencia-emocional-2025/capa.png",
  },
  {
    tema: "Conferência de Liderança Feminina",
    edicoes: "4 edições",
    participantes: "297 participantes na edição de 2026",
    parceiros: "CCFBG, Rádio Jovem, No Kunsi Digital, Ecobank",
    descricao:
      "Encontro anual com painéis, testemunhos, sessões práticas e criação de redes entre mulheres, jovens, instituições e parceiros.",
    imagemUrl: "/eventos/e08-2-conferencia-lideranca-feminina-2024/capa.png",
  },
  {
    tema: "Programa de Mentoria",
    edicoes: "2 edições",
    participantes: "9 pares no piloto",
    parceiros: "CCFBG, Embaixada de França",
    descricao:
      "Ligação entre mentoras e aprendizes para orientação pessoal e profissional, com nova edição prevista para junho de 2026.",
    imagemUrl: "/projectos/programa-mentoria/capa.png",
  },
  {
    tema: "Brunch & Angariação de Fundos",
    edicoes: "2 brunches",
    participantes: "Comunidade MiF e apoiantes",
    parceiros: "Restaurante & Bar Gã Melá",
    descricao:
      "Momentos de encontro e angariação para apoiar workshops, mentoria, bolsas e outras actividades da organização.",
    imagemUrl: "/projectos/brunch-angariacao/capa.png",
  },
  {
    tema: "Diálogos e conversas temáticas",
    edicoes: "2 encontros",
    participantes: "90+ participantes",
    parceiros: "CCFBG, Embaixada de França",
    descricao:
      "Conversas como Mulheres Guineenses e Identidades Diaspóricas e Nha Fala com Adama Djaló.",
    imagemUrl: "/eventos/e21-coquetel-identidades-diasporicas-2025/capa.png",
  },
  {
    tema: "Podcast Mindjer i Futuro",
    edicoes: "Episódios mensais",
    participantes: "Convidadas da rede MiF",
    parceiros: "iParticipate, CCFBG",
    descricao:
      "Conversas abertas sobre percursos, trabalho, desafios, conquistas e liderança de mulheres guineenses.",
    imagemUrl: "/projectos/podcast-mindjer-i-futuro/capa.png",
  },
]

export type ProjectoEstrutura = {
  objectivo: string
  actividades: string[]
  resultados: string[]
}

export const projectosEstrutura: Record<string, ProjectoEstrutura> = {
  "workshops-capacitacao": {
    objectivo:
      "Reforçar competências pessoais, profissionais e digitais de jovens mulheres através de aprendizagem prática.",
    actividades: [
      "Saúde sexual e reprodutiva",
      "Falar em público e comunicação",
      "Habilidades profissionais e empregabilidade",
      "Educação financeira",
      "Escolha de carreira",
      "Literacia digital e inteligência artificial",
      "Inteligência emocional",
    ],
    resultados: [
      "Mais de 20 sessões realizadas desde 2023",
      "Mais de 200 participantes nas edições de saúde sexual e reprodutiva",
      "Mais de 150 participantes nas edições de educação financeira",
      "Maior confiança e preparação profissional das participantes",
    ],
  },
  "curso-habilidades-profissionais": {
    objectivo:
      "Preparar jovens mulheres para o mercado de trabalho através de competências práticas e aplicáveis.",
    actividades: [
      "Elaboração de CV",
      "Escrita de cartas de apresentação",
      "Preparação para entrevistas",
      "Comunicação profissional",
      "Ferramentas digitais",
    ],
    resultados: [
      "30 participantes certificadas",
      "Duas turmas ao longo de 6 semanas",
      "Maior confiança e clareza de objectivos profissionais",
    ],
  },
  "masterclass-falar-em-publico": {
    objectivo:
      "Apoiar jovens mulheres no desenvolvimento da sua capacidade de comunicação e expressão.",
    actividades: [
      "Estrutura de discurso",
      "Controlo do nervosismo",
      "Linguagem corporal",
      "Técnicas de comunicação eficaz",
      "Exercícios práticos e simulações",
    ],
    resultados: [
      "Maior confiança na apresentação de ideias",
      "Melhoria da clareza na comunicação",
      "Maior capacidade de intervenção em contextos públicos e profissionais",
    ],
  },
  "conferencia-lideranca-feminina": {
    objectivo:
      "Criar um espaço anual de aprendizagem, debate e ligação entre mulheres guineenses e organizações parceiras.",
    actividades: [
      "1.ª Conferência de Liderança Feminina",
      "2.ª Conferência de Liderança Feminina",
      "3.ª Conferência de Liderança Feminina",
      "4.ª Conferência de Liderança Feminina",
    ],
    resultados: [
      "Quatro edições realizadas",
      "297 participantes na edição de 2026",
      "Painéis, testemunhos, sessões práticas e criação de redes",
    ],
  },
  "bolsas-lingua-francesa": {
    objectivo: "Ampliar o acesso de jovens mulheres à aprendizagem da língua francesa.",
    actividades: ["Selecção de bolseiras", "Curso de francês durante oito meses", "Acompanhamento das participantes"],
    resultados: ["10 bolsas atribuídas", "Novas competências linguísticas", "Maior preparação para oportunidades académicas e profissionais"],
  },
  "programa-mentoria": {
    objectivo: "Apoiar o desenvolvimento pessoal e profissional de jovens mulheres através de mentoria.",
    actividades: [
      "Emparelhamento entre mentoras e aprendizes",
      "Encontros regulares",
      "Acompanhamento pela equipa MiF",
      "Sessão de lançamento da nova edição em junho de 2026",
    ],
    resultados: [
      "9 pares de mentoria no piloto",
      "Sete meses de acompanhamento",
      "Novo grupo previsto na Embaixada de França",
    ],
  },
  "identidades-diasporicas": {
    objectivo: "Criar espaços de diálogo entre mulheres guineenses no país, na diáspora e na rede MiF.",
    actividades: ["Identidades Diaspóricas", "Nha Fala com Adama Djaló", "Conversas temáticas e djumbais"],
    resultados: [
      "Maior ligação entre diferentes percursos",
      "Novas oportunidades de colaboração",
      "Valorização das experiências da diáspora e de histórias reais",
    ],
  },
  "brunch-angariacao": {
    objectivo: "Mobilizar recursos e reforçar a rede de apoio às actividades da Mindjer i Futuro.",
    actividades: ["Dois brunches de angariação", "Apresentação do trabalho da MiF", "Encontro entre apoiantes e parceiras"],
    resultados: ["Apoio financeiro às actividades", "Maior visibilidade da organização", "Expansão da rede de apoio"],
  },
  "podcast-mindjer-i-futuro": {
    objectivo: "Dar voz a mulheres guineenses e aproximar as suas histórias de um público alargado.",
    actividades: ["Entrevistas mensais", "Conversas sobre percursos, desafios e conquistas", "Publicação no YouTube"],
    resultados: ["Arquivo digital de histórias de mulheres", "Maior visibilidade das convidadas", "Conteúdo contínuo de aprendizagem e inspiração"],
  },
}

export const equipaFallback: MembroFallback[] = [
  {
    nome: "Ana Djú",
    cargo: "Co-Fundadora",
    bio: "Co-fundadora da Mindjer i Futuro, Ana Dju é empreendedora social com experiência no sistema das Nações Unidas, nomeadamente no PNUD, onde tem liderado iniciativas nas áreas de juventude, género, inovação e acesso à justiça. É licenciada em Direito e mestre em Políticas Africanas pela SOAS, University of London. Ao longo do seu percurso, tem desenvolvido projetos focados no empoderamento de jovens mulheres, inclusão social e criação de oportunidades, combinando trabalho comunitário, desenvolvimento de políticas e inovação para gerar impacto sustentável na Guiné-Bissau.",
    ordem: 1,
    fotoUrl: "/equipa/ana_dju.jpeg",
  },
  {
    nome: "Né Vaz",
    cargo: "Co-Fundadora",
    bio: "",
    ordem: 2,
    fotoUrl: "/equipa/ne-vaz.png",
  },
  {
    nome: "Ilsa Cá Sá",
    cargo: "Coordenadora de Logística",
    bio: "Tem mais de 10 anos de experiência em contextos multissetoriais, incluindo colaboração com instituições governamentais, agências das Nações Unidas e ONGs. Especializada em gestão de projetos e diálogo político, demonstra forte compromisso com a inclusão, igualdade de género e desenvolvimento sustentável. Ao longo do seu percurso profissional, liderou várias iniciativas de participação cívica e capacitação de jovens na Guiné-Bissau. Tem experiência em monitorização, avaliação e gestão baseada em resultados. É formada em Relações Internacionais, Desenvolvimento e Cooperação Internacional.",
    ordem: 3,
    fotoUrl: "/equipa/ilsa_sa.jpeg",
  },
  {
    nome: "Domingos Lourenço",
    cargo: "Assistente de Programas & Operações",
    bio: "Especialista em redes, sistemas informáticos e suporte técnico, com experiência em administração de sistemas Windows e Linux, configuração de firewalls, montagem e manutenção de hardware e resolução de problemas de conectividade. Focado na optimização de processos tecnológicos e na segurança de dados, destaca-se também pelo seu espírito de equipa e atitude proactiva, contribuindo activamente para o bom funcionamento e a implementação das actividades e programação da associação.",
    ordem: 4,
    fotoUrl: "/equipa/domingos-lourenco.png",
  },
  {
    nome: "Aissatu Ly",
    cargo: "Assistente de Eventos & Logística",
    bio: "Aissatu Ly é estudante finalista do curso de Gestão de Empresas na Universidade Católica da Guiné-Bissau e desempenha funções como secretária estagiária na empresa Darling Sarl. Desenvolve competências em organização administrativa e comunicação profissional. Integra a equipa da Mindjer i Futuro como Assistente de Eventos & Logística, contribuindo na organização e coordenação de actividades para o desenvolvimento de jovens mulheres. Acredita na educação, liderança jovem e networking como ferramentas de transformação social.",
    ordem: 5,
    fotoUrl: "/equipa/aissatu-ly.png",
  },
  {
    nome: "Biljorge Dinis Semedo Cabral",
    cargo: "Assistente de TIC & Comunicação",
    bio: "Biljorge Dinis Semedo Cabral é líder juvenil e profissional da educação na Guiné-Bissau, com formação em Ciências da Educação e experiência em economia e tecnologia. É Secretário-Geral do Youth Sounding Board (PNUD/União Europeia). Foi presidente da AJOC. Atua na capacitação de jovens e mulheres com foco em marketing digital e TIC. Trabalha com inovação, liderança inclusiva e desenvolvimento sustentável.",
    ordem: 6,
    fotoUrl: "/equipa/biljorge-cabral.png",
  },
]

export const testemunhoFallback: TestemunhoFallback = {
  quote:
    "Mindjer i Futuro abriu-me portas que não sabia que existiam. Saí com confiança para liderar na minha comunidade.",
  nome: "Participante do programa",
  programa: "Curso de Habilidades Profissionais",
  fotoUrl: impactoBgUrl,
}

export type ParceiroItem = {
  nome: string
  logoSrc: string
  darkBackground?: boolean
}

export const parceirosItems: ParceiroItem[] = [
  { nome: "Abiptom", logoSrc: "/parceiros/abiptom.svg" },
  { nome: "Adama Connect", logoSrc: "/parceiros/adama_connect.svg" },
  {
    nome: "CCFBG",
    logoSrc: "/parceiros/centre_culturel_franco_bissau_guineen.svg",
  },
  { nome: "Ecobank", logoSrc: "/parceiros/ecobank.png" },
  { nome: "Impact Hub Bissau", logoSrc: "/parceiros/impact_hub.svg" },
  { nome: "iParticipate", logoSrc: "/parceiros/iparticipate.svg" },
  { nome: "No Kunsi Digital", logoSrc: "/parceiros/no_kunsi_digital.svg" },
  { nome: "QR Consulting", logoSrc: "/parceiros/qr_consulting.svg" },
  { nome: "Tabanka TV", logoSrc: "/parceiros/tabanka.svg", darkBackground: true },
]
