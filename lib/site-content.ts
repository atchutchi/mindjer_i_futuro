import {
  textoBolsasLinguaFrancesa,
  textoBrunchAngariacao,
  textoCursoHabilidadesProfissionais,
  textoIdentidadesDiasporicas,
  textoMasterclassFalarEmPublico,
  textoPodcast,
  textoProgramaMentoria,
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
  "/projectos/identidades-diasporicas/capa.png",
  "/projectos/curso-habilidades-profissionais/capa.png",
  "/projectos/brunch-angariacao/capa.png",
]

export const impactoBgUrl =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"

export const projectosFallback: ProjectoFallback[] = [
  {
    titulo: "Curso de Habilidades Profissionais",
    slug: "curso-habilidades-profissionais",
    categoria: "Capacitação",
    descricaoBreve:
      "Parceria com a Embaixada dos EUA. 30 participantes, 6 semanas: CV, entrevistas e comunicação digital.",
    descricaoLonga: textoCursoHabilidadesProfissionais,
    destaque: true,
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
    destaque: true,
    impacto: "Escola Nacional de Administração",
    imagemCapaUrl: "/projectos/masterclass-falar-em-publico/capa.png",
    galeriaUrls: ["/projectos/masterclass-falar-em-publico/galeria-1.png"],
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
    nome: "Ilsa Cá e Sá",
    cargo: "Coordenadora de Logística",
    bio: "Tem mais de 10 anos de experiência em contextos multissetoriais, incluindo colaboração com instituições governamentais, agências das Nações Unidas e ONGs. Especializada em gestão de projetos e diálogo político, demonstra forte compromisso com a inclusão, igualdade de género e desenvolvimento sustentável. Ao longo do seu percurso profissional, liderou várias iniciativas de participação cívica e capacitação de jovens na Guiné-Bissau. Tem experiência em monitorização, avaliação e gestão baseada em resultados. É formada em Relações Internacionais, Desenvolvimento e Cooperação Internacional.",
    ordem: 3,
  },
  {
    nome: "Domingos Lourenço",
    cargo: "Assistente de Programas & Operações",
    bio: "",
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
  fotoUrl:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
}

export type ParceiroItem = {
  nome: string
  logoSrc: string
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
  { nome: "Tabanka TV", logoSrc: "/parceiros/tabanka.svg" },
]
