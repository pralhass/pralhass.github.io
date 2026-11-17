// All site copy lives here, in English (en) and Portuguese (pt).
// To add a case: copy one object in CASES, give it a new slug and fill both languages.
// "ratio" is the format of the work itself (16:9 TV, 4:5 feed, 9:16 story/reel).

window.SITE = {
  name: "Paulo Ralha",
  email: "pralhas@gmail.com",
  linkedin: "https://www.linkedin.com/in/pauloralha",
  ui: {
    en: {
      role: "Design & Multimedia Manager",
      intro: "I lead the design team that makes the ads behind Stannah's paid media in around 40 markets. Fifteen years of motion, video and TV production, now working with data and generative AI to test more creative, faster.",
      nav: { work: "Work", about: "About", contact: "Contact" },
      showreel: "Showreel 2026",
      showreelSoon: "New showreel in production",
      work: "Selected work",
      viewCase: "View case",
      about: "About",
      experience: "Experience",
      contact: "Contact",
      contactText: "Open to new roles in creative leadership, performance creative and motion design. Based near Braga, Portugal, open to hybrid and remote work.",
      email: "Email",
      cv: "CV",
      cvSoon: "Download coming soon",
      back: "All work",
      challenge: "The challenge",
      approach: "What I did",
      result: "Result",
      gallery: "Work",
      imageSoon: "Image coming soon",
      next: "Next case",
      formats: { "16/9": "16:9", "4/5": "4:5", "9/16": "9:16" }
    },
    pt: {
      role: "Design & Multimedia Manager",
      intro: "Lidero a equipa de design que cria os anúncios das campanhas pagas da Stannah em cerca de 40 mercados. Tenho quinze anos de experiência em motion design, vídeo e produção de televisão, e hoje junto dados e IA generativa para testar mais criativos em menos tempo.",
      nav: { work: "Trabalhos", about: "Sobre mim", contact: "Contacto" },
      showreel: "Showreel 2026",
      showreelSoon: "Novo showreel em preparação",
      work: "Trabalhos selecionados",
      viewCase: "Ver projeto",
      about: "Sobre mim",
      experience: "Experiência",
      contact: "Contacto",
      contactText: "Estou disponível para novos desafios em liderança criativa, criativos de performance e motion design. Vivo perto de Braga e aceito trabalho híbrido ou remoto.",
      email: "Email",
      cv: "CV",
      cvSoon: "Download disponível em breve",
      back: "Todos os trabalhos",
      challenge: "O desafio",
      approach: "O que fiz",
      result: "Resultado",
      gallery: "Trabalhos",
      imageSoon: "Imagem em breve",
      next: "Próximo projeto",
      formats: { "16/9": "16:9", "4/5": "4:5", "9/16": "9:16" }
    }
  },

  about: {
    en: [
      "I started behind the camera, editing and shooting video, then spent years in stereoscopic 3D, CGI and VFX before moving into brand video and motion design for fashion retail.",
      "At Stannah I grew from motion designer, producing TV commercials from pre-production to post, to running the design and multimedia department. Today my team produces static and video ads, landing pages and video for paid media across Europe and the US.",
      "What I care about: creative that is tested, not guessed, and production systems that let a small team do the work of a big one."
    ],
    pt: [
      "Comecei atrás da câmara, a filmar e a editar vídeo. Depois passei vários anos a trabalhar em 3D estereoscópico, CGI e efeitos visuais, até chegar ao vídeo de marca e ao motion design numa marca de moda.",
      "Na Stannah comecei como motion designer, a produzir spots de televisão da pré-produção à pós-produção, e hoje dirijo o departamento de design e multimédia. A minha equipa cria anúncios estáticos e em vídeo, landing pages e vídeos para as campanhas pagas na Europa e nos Estados Unidos.",
      "Acredito em criativos que se testam em vez de se adivinharem, e em processos que permitem a uma equipa pequena fazer o trabalho de uma grande."
    ]
  },

  experience: [
    { years: "2019 - 2026", company: "Stannah Group", en: "Design & Multimedia Manager, Design Coordinator, Motion Designer", pt: "Design & Multimedia Manager, Design Coordinator, Motion Designer" },
    { years: "2015 - 2019", company: "TIFFOSI", en: "Motion Graphics Designer and Camera Operator", pt: "Motion Graphics Designer e Operador de Câmara" },
    { years: "2012 - 2015", company: "INSIZIUM", en: "3D Stereoscopic Artist, CGI and VFX", pt: "3D Stereoscopic Artist, CGI e VFX" },
    { years: "2010 - 2012", company: "Hypercube", en: "3D Stereoscopic Supervisor", pt: "3D Stereoscopic Supervisor" },
    { years: "2002 - 2009", company: "Foto Humberto", en: "Video Editor and Camera Operator", pt: "Editor de Vídeo e Operador de Câmara" }
  ],

  education: [
    { year: "2010", en: "BSc in Computer Graphics and Multimedia Engineering", pt: "Licenciatura em Engenharia de Computação Gráfica e Multimédia", school: { en: "Instituto Politécnico de Viana do Castelo, ESTG", pt: "Instituto Politécnico de Viana do Castelo, ESTG" } },
    { year: "2003", en: "Secondary education, Computer Science", pt: "Ensino secundário, Informática", school: { en: "Escola Secundária de Barcelos", pt: "Escola Secundária de Barcelos" } }
  ],

  cases: [
    {
      slug: "creative-testing",
      ratio: "4/5",
      en: {
        title: "Creative testing at scale",
        tag: "Meta Ads · 20+ markets",
        summary: "175 measured ad tests in 13 months. 37% beat the control on CTR.",
        challenge: "Paid media needed far more creative tests than a three-person design team could produce one market at a time.",
        approach: "I redesigned production so each ad concept is built once and rolled out in every language, with shared briefs, naming rules and a single approval flow with the market teams.",
        result: "Output went from 13 to 38 creative tests a month with the same team. Across 175 measured tests, 37% beat the control on CTR (median uplift +38%), and 39 creatives cut CPA by a median of 33%."
      },
      pt: {
        title: "Testes de criativos em grande escala",
        tag: "Meta Ads · mais de 20 mercados",
        summary: "175 testes de anúncios medidos em 13 meses, com 37% a superar o controlo em CTR.",
        challenge: "As campanhas pagas precisavam de muito mais testes de criativos do que uma equipa de três designers conseguia produzir, mercado a mercado.",
        approach: "Reorganizei a produção para que cada conceito de anúncio seja criado uma única vez e depois adaptado a todas as línguas, com briefings comuns, regras de nomenclatura e um só circuito de aprovação com os mercados.",
        result: "Com a mesma equipa, passámos de 13 para 38 testes de criativos por mês. Dos 175 testes medidos, 37% superaram o controlo em CTR (subida mediana de 38%) e 39 criativos reduziram o CPA, com uma descida mediana de 33%."
      },
      images: 4
    },
    {
      slug: "ai-production",
      ratio: "9/16",
      en: {
        title: "Ad production with generative AI",
        tag: "Nano Banana · Seedance · Veo · Claude",
        summary: "Bringing AI image and video into a working ad team, from first tests to daily production.",
        challenge: "To reach the volume paid media asked for, the team had to make more ads without more people or more hours.",
        approach: "I brought generative image and video into daily production, built a shared library of reference images, wrote AI workflows for ad creation, QA and video prompts, and trained the team in hands-on workshops.",
        result: "AI-generated assets are now part of regular Meta Ads production, including UGC-style video ads, and the team works from shared AI tools instead of one-off experiments."
      },
      pt: {
        title: "Anúncios produzidos com IA generativa",
        tag: "Nano Banana · Seedance · Veo · Claude",
        summary: "Levar a imagem e o vídeo gerados com IA dos primeiros testes à produção diária de uma equipa de anúncios.",
        challenge: "Para responder ao volume pedido pelas campanhas pagas, a equipa tinha de produzir mais anúncios sem aumentar o número de pessoas nem de horas.",
        approach: "Integrei a imagem e o vídeo gerados com IA na produção diária, criei uma biblioteca de referências partilhada, desenvolvi fluxos de IA para criar anúncios, fazer controlo de qualidade e escrever prompts de vídeo, e dei formação prática à equipa.",
        result: "Hoje os conteúdos gerados com IA fazem parte da produção regular de anúncios para Meta, incluindo vídeos em estilo UGC, e a equipa usa ferramentas de IA comuns em vez de experiências isoladas."
      },
      images: 4
    },
    {
      slug: "tv-spots",
      ratio: "16/9",
      en: {
        title: "TV commercials",
        tag: "Pre-production to post",
        summary: "Stannah TV spots, from script and shoot to edit and motion.",
        challenge: "Produce broadcast-ready commercials in house, on a brand budget.",
        approach: "I handled the full chain: pre-production, filming, directing and post-production, including editing and motion graphics in After Effects.",
        result: "Commercials produced in house, from first idea to final cut."
      },
      pt: {
        title: "Spots de televisão",
        tag: "Da pré-produção à pós-produção",
        summary: "Spots de televisão da Stannah, do guião e da rodagem à montagem e ao motion design.",
        challenge: "Produzir internamente spots com qualidade de televisão, com um orçamento de marca.",
        approach: "Acompanhei todo o processo: pré-produção, rodagem, realização e pós-produção, incluindo montagem e motion graphics em After Effects.",
        result: "Spots produzidos de raiz pela equipa interna, do primeiro esboço à versão final para televisão."
      },
      images: 3
    },
    {
      slug: "landing-pages",
      ratio: "16/9",
      en: {
        title: "Landing pages and A/B tests",
        tag: "Unbounce · WordPress",
        summary: "Designing and testing the pages that paid traffic lands on.",
        challenge: "Every paid campaign lands on a page, and every seasonal offer needs its own page, in several markets and languages, on a tight deadline.",
        approach: "My team designed and built the landing pages in Unbounce and WordPress: campaign pages for Christmas, spring and summer offers and prize draws, and the variants for A/B tests across markets.",
        result: "Campaign pages rolled out to several markets at once, and 64 A/B tests with a positive result since 2025."
      },
      pt: {
        title: "Landing pages e testes A/B",
        tag: "Unbounce · WordPress",
        summary: "Desenhar e testar as páginas onde chega o tráfego das campanhas pagas.",
        challenge: "Todas as campanhas pagas levam o utilizador a uma página, e cada oferta sazonal precisa da sua, em vários mercados e línguas e com prazos curtos.",
        approach: "A minha equipa desenhou e construiu as landing pages em Unbounce e WordPress: páginas para campanhas de Natal, primavera e verão e para passatempos, e as variantes dos testes A/B nos vários mercados.",
        result: "Páginas de campanha lançadas em vários mercados em simultâneo e 64 testes A/B com resultado positivo desde 2025."
      },
      images: 3
    },
    {
      slug: "motion",
      ratio: "16/9",
      en: {
        title: "Motion design and video",
        tag: "After Effects · Premiere Pro",
        summary: "Animation, explainers and brand video for Stannah.",
        challenge: "Turn product stories into short videos that work on TV, on social and on the website.",
        approach: "Motion graphics, filming and editing for Stannah, across every format.",
        result: "A body of brand video across formats, from 9:16 social to 16:9 broadcast."
      },
      pt: {
        title: "Motion design e vídeo",
        tag: "After Effects · Premiere Pro",
        summary: "Animação, vídeos explicativos e vídeo de marca para a Stannah.",
        challenge: "Transformar histórias de produto em vídeos curtos que funcionem na televisão, nas redes sociais e no site.",
        approach: "Motion graphics, filmagem e montagem para a Stannah, em todos os formatos.",
        result: "Uma biblioteca de vídeo de marca em vários formatos, do 9:16 para as redes sociais ao 16:9 para televisão."
      },
      images: 3
    },
    {
      slug: "earlier-work",
      ratio: "16/9",
      en: {
        title: "Earlier work: 3D, CGI and film",
        tag: "Stereoscopic 3D · VFX · 360° video",
        summary: "Stereoscopic 3D, CGI and VFX, plus wedding films.",
        challenge: "Early stereoscopic 3D production, when the tools and workflows were still being invented.",
        approach: "Supervised stereoscopic production, CGI, VFX, animation and 360° video at Hypercube and INSIZIUM. Today I still shoot and edit wedding films.",
        result: "A technical base in cameras, 3D and post-production that still shapes how I work with AI video."
      },
      pt: {
        title: "Trabalho anterior: 3D, CGI e filme",
        tag: "3D estereoscópico · VFX · vídeo 360°",
        summary: "3D estereoscópico, CGI e VFX, e filmes de casamento.",
        challenge: "Produção em 3D estereoscópico numa altura em que as ferramentas e os processos ainda estavam a ser inventados.",
        approach: "Supervisionei produção estereoscópica, CGI, VFX, animação e vídeo 360° na Hypercube e na INSIZIUM. Hoje continuo a filmar e editar filmes de casamento.",
        result: "Uma base técnica em câmaras, 3D e pós-produção que ainda hoje molda a forma como trabalho com vídeo de IA."
      },
      images: 3
    }
  ]
};
