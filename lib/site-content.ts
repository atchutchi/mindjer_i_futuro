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
  "/projectos/brunch-angariacao/capa.png",
  "/projectos/identidades-diasporicas/capa.png",
  "/projectos/curso-habilidades-profissionais/capa.png",
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
    impacto: "20+ sessões realizadas",
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
    imagemCapaUrl: "/eventos/e29-4-conferencia-lideranca-feminina-2026/capa.png",
  },
  {
    titulo: "Mulheres Guineenses e Identidades Diaspóricas",
    slug: "identidades-diasporicas",
    categoria: "Cultura",
    descricaoBreve:
      "Embaixada de França e CCFBG: identidade, pertença e diáspora guineense.",
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
      "9 pares mentora/aprendiz ao longo de 7 meses para desenvolvimento pessoal e profissional.",
    descricaoLonga: textoProgramaMentoria,
    destaque: true,
    impacto: "9 pares · 7 meses",
    imagemCapaUrl: "/projectos/programa-mentoria/capa.png",
  },
  {
    titulo: "Brunch & Angariação de Fundos",
    slug: "brunch-angariacao",
    categoria: "Angariação",
    descricaoBreve:
      "Parceria com o Restaurante Gã Melá: rede e financiamento da organização.",
    descricaoLonga: textoBrunchAngariacao,
    destaque: true,
    impacto: "Parceria Gã Melá",
    imagemCapaUrl: "/projectos/brunch-angariacao/capa.png",
    galeriaUrls: ["/projectos/brunch-angariacao/galeria-1.png"],
  },
  {
    titulo: "Podcast Mindjer i Futuro",
    slug: "podcast-mindjer-i-futuro",
    categoria: "Podcast",
    descricaoBreve:
      "Parceria iParticipate, mensal no YouTube: vozes de mulheres guineenses inspiradoras.",
    descricaoLonga: textoPodcast,
    destaque: true,
    impacto: "Mensal · YouTube",
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
      "Habilidades profissionais, CV, entrevistas e comunicação",
      "Gestão de projectos, empreendedorismo e educação financeira",
      "Literacia digital, LinkedIn e Canva",
      "Falar em público, inteligência emocional e saúde sexual e reprodutiva",
    ],
    resultados: [
      "Mais de 20 sessões realizadas desde 2023",
      "Maior confiança e preparação profissional das participantes",
      "Criação de redes entre participantes, facilitadores e parceiros",
    ],
  },
  "conferencia-lideranca-feminina": {
    objectivo:
      "Criar um espaço anual de aprendizagem, debate e ligação entre mulheres guineenses e organizações parceiras.",
    actividades: [
      "Painéis e conversas sobre liderança feminina",
      "Testemunhos e partilha de percursos",
      "Sessões práticas e momentos de networking",
    ],
    resultados: [
      "Quatro edições realizadas",
      "297 participantes na edição de 2026",
      "Maior visibilidade para lideranças femininas guineenses",
    ],
  },
  "bolsas-lingua-francesa": {
    objectivo: "Ampliar o acesso de jovens mulheres à aprendizagem da língua francesa.",
    actividades: ["Selecção de bolseiras", "Curso de francês durante oito meses", "Acompanhamento das participantes"],
    resultados: ["10 bolsas atribuídas", "Novas competências linguísticas", "Maior preparação para oportunidades académicas e profissionais"],
  },
  "programa-mentoria": {
    objectivo: "Apoiar o desenvolvimento pessoal e profissional de jovens mulheres através de mentoria.",
    actividades: ["Emparelhamento entre mentoras e aprendizes", "Encontros regulares", "Acompanhamento pela equipa MiF"],
    resultados: ["9 pares de mentoria", "Sete meses de acompanhamento", "Maior clareza de objectivos e confiança"],
  },
  "identidades-diasporicas": {
    objectivo: "Criar pontes entre mulheres guineenses no país e na diáspora.",
    actividades: ["Conversa aberta sobre identidade e pertença", "Partilha de experiências", "Criação de redes"],
    resultados: ["Maior ligação entre diferentes percursos", "Novas oportunidades de colaboração", "Valorização das experiências da diáspora"],
  },
  "brunch-angariacao": {
    objectivo: "Mobilizar recursos e reforçar a rede de apoio às actividades da Mindjer i Futuro.",
    actividades: ["Brunches de angariação", "Apresentação do trabalho da MiF", "Encontro entre apoiantes e parceiras"],
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
    bio: "Especialista em redes, sistemas informáticos e suporte técnico, com experiência em administração de sistemas Windows e Linux, configuração de firewalls, montagem e manutenção de hardware e resolução de problemas de conectividade. Focado na otimização de processos tecnológicos e na segurança de dados, destaca-se também pelo seu espírito de equipa e atitude proativa, contribuindo ativamente para o bom funcionamento e a implementação das atividades e programação da associação.",
    ordem: 4,
    fotoUrl: "/equipa/domingos-lourenco.png",
  },
  {
    nome: "Aissatu Ly",
    cargo: "Assistente de Eventos & Logística",
    bio: "Aissatu Ly é estudante finalista do curso de Gestão de Empresas na Universidade Católica da Guiné-Bissau e desempenha funções como secretária estagiária na empresa Darling Sarl. Desenvolve competências em organização administrativa e comunicação profissional. Integra a equipa da Mindjer i Futuro como Assistente de Eventos & Logística, contribuindo na organização e coordenação de atividades para o desenvolvimento de jovens mulheres. Acredita na educação, liderança jovem e networking como ferramentas de transformação social.",
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
  { nome: "Impact Hub Bissau", logoSrc: "/parceiros/impact_hub.svg" },
  { nome: "iParticipate", logoSrc: "/parceiros/iparticipate.svg" },
  { nome: "No Kunsi Digital", logoSrc: "/parceiros/no_kunsi_digital.svg" },
  { nome: "QR Consulting", logoSrc: "/parceiros/qr_consulting.svg" },
  { nome: "Tabanka TV", logoSrc: "/parceiros/tabanka.svg", darkBackground: true },
]
