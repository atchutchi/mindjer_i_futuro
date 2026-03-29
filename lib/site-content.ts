export type ProjectoFallback = {
  titulo: string
  slug: string
  categoria: string
  descricaoBreve: string
  destaque: boolean
  impacto?: string
  imagemCapaUrl: string
}

export type EventoFallback = {
  titulo: string
  slug: string
  data: string
  local: string
  descricaoBreve: string
  status: "passado" | "proximo" | "inscricoes-abertas"
  imagemCapaUrl: string
}

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
  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80",
  "https://images.unsplash.com/photo-1540575467063-27a2dade0f47?w=1920&q=80",
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
    destaque: true,
    impacto: "30 participantes",
    imagemCapaUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
  },
  {
    titulo: "Masterclass Falar em Público",
    slug: "masterclass-falar-em-publico",
    categoria: "Capacitação",
    descricaoBreve:
      "Na Escola Nacional de Administração: confiança, linguagem corporal e comunicação assertiva.",
    destaque: true,
    impacto: "Escola Nacional de Administração",
    imagemCapaUrl:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
  },
  {
    titulo: "Mulheres Guineenses e Identidades Diaspóricas",
    slug: "identidades-diasporicas",
    categoria: "Cultura",
    descricaoBreve:
      "Embaixada de França e CCFBG: identidade, pertença e diáspora guineense.",
    destaque: true,
    impacto: "Embaixada de França + CCFBG",
    imagemCapaUrl:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  },
  {
    titulo: "Bolsas de Estudo Língua Francesa",
    slug: "bolsas-lingua-francesa",
    categoria: "Bolsas",
    descricaoBreve:
      "10 bolsas, 8 meses, no Centro Cultural Franco-Bissau-Guineense.",
    destaque: true,
    impacto: "10 bolsas · 8 meses",
    imagemCapaUrl:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
  },
  {
    titulo: "Programa de Mentoria",
    slug: "programa-mentoria",
    categoria: "Mentoria",
    descricaoBreve:
      "9 pares mentora/aprendiz ao longo de 7 meses para desenvolvimento pessoal e profissional.",
    destaque: true,
    impacto: "9 pares · 7 meses",
    imagemCapaUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    titulo: "Brunch & Angariação de Fundos",
    slug: "brunch-angariacao",
    categoria: "Angariação",
    descricaoBreve:
      "Parceria com o Restaurante Gã Melá: rede e financiamento da organização.",
    destaque: true,
    impacto: "Parceria Gã Melá",
    imagemCapaUrl:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    titulo: "Podcast Mindjer i Futuro",
    slug: "podcast-mindjer-i-futuro",
    categoria: "Podcast",
    descricaoBreve:
      "Parceria iParticipate, mensal no YouTube: vozes de mulheres guineenses inspiradoras.",
    destaque: true,
    impacto: "Mensal · YouTube",
    imagemCapaUrl:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
  },
]

export const eventosFallback: EventoFallback[] = [
  {
    titulo: "Conferência Mindjer i Futuro 2024",
    slug: "conferencia-2024",
    data: "2024-03-15T09:00:00.000Z",
    local: "Bissau, Guiné-Bissau",
    descricaoBreve:
      "Encontro anual com palestras, debates e workshops de liderança feminina.",
    status: "passado",
    imagemCapaUrl:
      "https://images.unsplash.com/photo-1540575467063-27a2dade0f47?w=800&q=80",
  },
  {
    titulo: "Próxima edição — Mindjer i Futuro",
    slug: "proxima-edicao",
    data: "2026-06-01T09:00:00.000Z",
    local: "Bissau, Guiné-Bissau",
    descricaoBreve:
      "Novas sessões de capacitação, mentoria e partilha de histórias. Inscrições em breve.",
    status: "proximo",
    imagemCapaUrl:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
  },
]

export const equipaFallback: MembroFallback[] = [
  {
    nome: "Ana Djú",
    cargo: "Co-Fundadora",
    bio: "Co-fundadora da Mindjer i Futuro, Ana Dju é empreendedora social com experiência no sistema das Nações Unidas, nomeadamente no PNUD, onde tem liderado iniciativas nas áreas de juventude, género, inovação e acesso à justiça. É licenciada em Direito e mestre em Políticas Africanas pela SOAS, University of London. Ao longo do seu percurso, tem desenvolvido projetos focados no empoderamento de jovens mulheres, inclusão social e criação de oportunidades, combinando trabalho comunitário, desenvolvimento de políticas e inovação para gerar impacto sustentável na Guiné-Bissau.",
    ordem: 1,
    fotoUrl: "/equipa/ana-dju.png",
  },
  {
    nome: "Né Vaz",
    cargo: "Co-Fundadora",
    bio: "",
    ordem: 2,
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

export const parceirosNomes = [
  "RENAJ",
  "NKD",
  "Adama Connect",
  "Tabanka TV",
  "Abiptom",
  "Impact Hub Bissau",
  "CCFBG",
  "QR Consulting",
  "Embaixada EUA",
  "Embaixada França",
] as const
