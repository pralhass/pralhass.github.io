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
      intro: "Lidero a equipa de design que faz os anúncios do paid media da Stannah em cerca de 40 mercados. Quinze anos de motion, vídeo e produção de TV, agora a trabalhar com dados e IA generativa para testar mais criativos, mais depressa.",
      nav: { work: "Trabalho", about: "Sobre", contact: "Contacto" },
      showreel: "Showreel 2026",
      showreelSoon: "Novo showreel em produção",
      work: "Trabalho selecionado",
      viewCase: "Ver caso",
      about: "Sobre mim",
      experience: "Experiência",
      contact: "Contacto",
      contactText: "Disponível para novas funções em liderança criativa, criativos de performance e motion design. Vivo perto de Braga e estou aberto a trabalho híbrido e remoto.",
      email: "Email",
      cv: "CV",
      cvSoon: "Download disponível em breve",
      back: "Todo o trabalho",
      challenge: "O desafio",
      approach: "O que fiz",
      result: "Resultado",
      gallery: "Trabalho",
      imageSoon: "Imagem em breve",
      next: "Caso seguinte",
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
      "Comecei atrás da câmara, a filmar e a editar vídeo, e passei vários anos em 3D estereoscópico, CGI e VFX antes de passar para vídeo de marca e motion design no retalho de moda.",
      "Na Stannah passei de motion designer, a produzir spots de TV da pré-produção à pós-produção, a responsável pelo departamento de design e multimédia. Hoje a minha equipa produz anúncios estáticos e em vídeo, landing pages e vídeo para paid media na Europa e nos EUA.",
      "O que me interessa: criativos testados e não adivinhados, e processos de produção que deixam uma equipa pequena fazer o trabalho de uma grande."
    ]
  },

  experience: [
    { years: "2019 - 2026", company: "Stannah Group", en: "Design & Multimedia Manager, Design Coordinator, Motion Designer", pt: "Design & Multimedia Manager, Design Coordinator, Motion Designer" },
    { years: "2015 - 2019", company: "TIFFOSI", en: "Motion Graphics Designer and Camera Operator", pt: "Motion Graphics Designer e Operador de Câmara" },
    { years: "2012 - 2015", company: "INSIZIUM", en: "3D Stereoscopic Artist, CGI and VFX", pt: "3D Stereoscopic Artist, CGI e VFX" },
    { years: "2010 - 2012", company: "Hypercube", en: "3D Stereoscopic Supervisor", pt: "3D Stereoscopic Supervisor" },
    { years: "2002 - 2009", company: "Foto Humberto", en: "Video Editor and Camera Operator", pt: "Editor de Vídeo e Operador de Câmara" }
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
        title: "Testes de criativos em escala",
        tag: "Meta Ads · mais de 20 mercados",
        summary: "175 testes de anúncios medidos em 13 meses. 37% superaram o controlo em CTR.",
        challenge: "O paid media precisava de muito mais testes de criativos do que uma equipa de três designers conseguia produzir mercado a mercado.",
        approach: "Redesenhei a produção para que cada conceito de anúncio seja criado uma vez e adaptado a todas as línguas, com briefings partilhados, regras de nomenclatura e um único fluxo de aprovação com os mercados.",
        result: "A produção passou de 13 para 38 testes de criativos por mês com a mesma equipa. Em 175 testes medidos, 37% superaram o controlo em CTR (subida mediana de 38%) e 39 criativos baixaram o CPA numa mediana de 33%."
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
        title: "Produção de anúncios com IA generativa",
        tag: "Nano Banana · Seedance · Veo · Claude",
        summary: "Levar a imagem e o vídeo com IA para uma equipa de anúncios a sério, dos primeiros testes à produção diária.",
        challenge: "Para chegar ao volume pedido pelo paid media, a equipa tinha de fazer mais anúncios sem mais pessoas nem mais horas.",
        approach: "Integrei a imagem e o vídeo generativos na produção diária, criei uma biblioteca partilhada de referências, escrevi fluxos de IA para criação de anúncios, QA e prompts de vídeo, e dei formação prática à equipa.",
        result: "Os assets gerados com IA fazem hoje parte da produção regular de Meta Ads, incluindo anúncios de vídeo em estilo UGC, e a equipa trabalha com ferramentas de IA partilhadas em vez de experiências soltas."
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
        summary: "Spots de TV da Stannah, do guião e da rodagem à edição e ao motion.",
        challenge: "Produzir spots prontos para televisão dentro de casa, com um orçamento de marca.",
        approach: "Tratei de toda a cadeia: pré-produção, gravação, realização e pós-produção, incluindo edição e motion graphics em After Effects.",
        result: "Spots produzidos do início ao fim dentro de casa."
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
        summary: "Desenhar e testar as páginas onde o tráfego pago aterra.",
        challenge: "Todas as campanhas pagas aterram numa página, e cada oferta sazonal precisa da sua própria página, em vários mercados e línguas, com prazos apertados.",
        approach: "A minha equipa desenhou e montou as landing pages em Unbounce e WordPress: páginas de campanha para ofertas de Natal, primavera e verão e passatempos, e as variantes dos testes A/B nos vários mercados.",
        result: "Páginas de campanha lançadas em vários mercados ao mesmo tempo, e 64 testes A/B com resultado positivo desde 2025."
      },
      images: 3
    },
    {
      slug: "motion",
      ratio: "16/9",
      en: {
        title: "Motion design and video",
        tag: "After Effects · Premiere Pro",
        summary: "Animation, explainers and video for brands in fashion retail and home mobility.",
        challenge: "Turn product stories into short videos that work on TV, in store and on social.",
        approach: "Motion graphics, filming and editing for Stannah and TIFFOSI, including in-store digital signage.",
        result: "A body of brand video across formats, from 9:16 social to 16:9 broadcast."
      },
      pt: {
        title: "Motion design e vídeo",
        tag: "After Effects · Premiere Pro",
        summary: "Animação, vídeos explicativos e vídeo para marcas de moda e de mobilidade em casa.",
        challenge: "Transformar histórias de produto em vídeos curtos que funcionem na TV, em loja e nas redes sociais.",
        approach: "Motion graphics, filmagem e edição para a Stannah e a TIFFOSI, incluindo digital signage em loja.",
        result: "Um conjunto de vídeo de marca em vários formatos, do 9:16 para redes sociais ao 16:9 para televisão."
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
