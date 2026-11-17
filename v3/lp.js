// Landing pages case (v3): A/B test numbers (campaign pages to come).
window.LP = {
  en: {
    kicker: "A/B tests in numbers",
    title: "Small changes, measured",
    intro: "My team designed and built the variants for the landing page tests run across Stannah's markets. These are the tests with a positive result since January 2025, measured on conversion rate against the control.",
    stats: [["64", "positive tests since 2025"], ["19", "markets and languages"], ["+37%", "median conversion uplift"], ["8", "tests that more than doubled conversion"]],
    topTitle: "Biggest uplifts",
    top: [["BE-NL", "Step form on the price page", "+212%"], ["CH-DE", "New home lift photography", "+204%"], ["ES", "Outdoor stairlift page", "+185%"], ["CH-FR", "“Increase the value of your home” hero message", "+155%"], ["BE-NL", "Product images on the price page", "+131%"], ["UK", "Shorter page, FAQ and final CTA within reach", "+126%"], ["SK", "“95% say Stannah improved their daily life”", "+126%"], ["ES", "Address price anxiety earlier", "+93%"]],
    rollTitle: "One idea, many markets",
    roll: [["Sticky “get a quote” bar on the hero", [["FR", "+73%"], ["US", "+62%"], ["FR Uplifts", "+55%"], ["BE-FR", "+30%"], ["UK", "+18%"], ["PT", "+13%"]]], ["“Increase the value of your home”", [["CH-FR", "+155%"], ["NO", "+59%"], ["BE-FR", "+11%"]]], ["Product images on the price page", [["BE-NL", "+131%"], ["NO", "+12%"], ["SK", "+7%"]]]]
  },
  pt: {
    kicker: "Testes A/B em números",
    title: "Pequenas mudanças, medidas",
    intro: "A minha equipa desenhou e montou as variantes dos testes de landing pages feitos nos mercados da Stannah. Estes são os testes com resultado positivo desde janeiro de 2025, medidos na taxa de conversão face ao controlo.",
    stats: [["64", "testes positivos desde 2025"], ["19", "mercados e línguas"], ["+37%", "subida mediana da conversão"], ["8", "testes que mais do que duplicaram a conversão"]],
    topTitle: "As maiores subidas",
    top: [["BE-NL", "Formulário por passos na página de preço", "+212%"], ["CH-DE", "Novas fotografias do elevador doméstico", "+204%"], ["ES", "Página da cadeira elevatória de exterior", "+185%"], ["CH-FR", "Mensagem “Aumente o valor da sua casa” no hero", "+155%"], ["BE-NL", "Imagens do produto na página de preço", "+131%"], ["UK", "Página mais curta, FAQ e CTA final à mão", "+126%"], ["SK", "“95% dizem que a Stannah melhorou o seu dia a dia”", "+126%"], ["ES", "Responder mais cedo à ansiedade com o preço", "+93%"]],
    rollTitle: "Uma ideia, vários mercados",
    roll: [["Barra “pedir orçamento” fixa no hero", [["FR", "+73%"], ["US", "+62%"], ["FR Uplifts", "+55%"], ["BE-FR", "+30%"], ["UK", "+18%"], ["PT", "+13%"]]], ["“Aumente o valor da sua casa”", [["CH-FR", "+155%"], ["NO", "+59%"], ["BE-FR", "+11%"]]], ["Imagens do produto na página de preço", [["BE-NL", "+131%"], ["NO", "+12%"], ["SK", "+7%"]]]]
  }
};

// Campaign landing pages: full-page captures in media/lp/ (k = file name).
window.LP.camp = {
  base: "../media/lp/",
  rollouts: [
    { id: "ae", pages: [["uplifts-ae", "AE"]],
      en: { t: "Uplifts home lift, United Arab Emirates", d: "Lead page for the Uplifts home lift with the local distributor: the S2 and S3 models, what installation involves, FAQ and a quote form placed right under the hero." },
      pt: { t: "Elevador doméstico Uplifts, Emirados Árabes Unidos", d: "Página de leads do elevador Uplifts com o distribuidor local: os modelos S2 e S3, o processo de instalação, FAQ e um formulário de orçamento logo abaixo do hero." } },
    { id: "itmob", pages: [["disabili-it", "IT"]],
      en: { t: "Mobility solutions, Italy", d: "One page for the whole accessibility range, home lift, platform lifts, stairlifts. A needs-based selector sends each visitor to the right product, and the tax incentives are explained in plain words." },
      pt: { t: "Soluções de mobilidade, Itália", d: "Uma página para toda a gama de acessibilidade, elevador doméstico, plataformas, cadeiras elevatórias. Um seletor por necessidade leva cada visitante ao produto certo, e os benefícios fiscais são explicados de forma simples." } },
    { id: "us", pages: [["uplifts-us", "US"]],
      en: { t: "Uplifts home lift, United States", d: "The Uplifts page adapted for the US: North American safety certification up front, review badges and a longer form that matches how US dealers qualify leads." },
      pt: { t: "Elevador doméstico Uplifts, Estados Unidos", d: "A página Uplifts adaptada aos EUA: a certificação de segurança norte-americana em destaque, selos de avaliações e um formulário mais completo, à medida da forma como os distribuidores americanos qualificam os contactos." } },
    { id: "joyait", pages: [["joya-it", "IT"], ["joya-es", "ES"]],
      en: { t: "Joya launch, Italy and Spain", d: "Launch page for Joya, the design stairlift. An editorial layout with large product photography and short videos, closer to a design brand than to a classic lead page." },
      pt: { t: "Lançamento Joya, Itália e Espanha", d: "Página de lançamento da Joya, a cadeira elevatória de design. Um layout editorial com fotografia grande e vídeos curtos, mais perto de uma marca de design do que de uma landing page clássica." } },
    { id: "sta", pages: [["stastannah-it", "IT"]],
      en: { t: "C'è chi Sta e c'è chi Stannah, Italy", d: "Page for the Italian TV campaign: a split-screen hero that tells the before and after in one image, the TV spot, the tax deduction deadline and a quote form." },
      pt: { t: "C'è chi Sta e c'è chi Stannah, Itália", d: "Página da campanha de TV italiana: um hero em ecrã dividido que conta o antes e o depois numa só imagem, o spot de TV, o prazo da dedução fiscal e o formulário de orçamento." } },
    { id: "sicuro", pages: [["sicuro-it", "IT"]],
      en: { t: "Sicuro sicuro?, Italy", d: "A campaign that takes on the belief that a stairlift is too expensive. An animated hero answers the objection, followed by interest-free finance and a payment simulator." },
      pt: { t: "Sicuro sicuro?, Itália", d: "Uma campanha que responde à ideia de que uma cadeira elevatória é cara demais. Um hero animado responde à objeção, seguido do financiamento sem juros e de um simulador de prestações." } },
    { id: "infl", pages: [["influencers-es", "ES"]],
      en: { t: "Influencer campaign, Spain", d: "Landing page for the influencer campaign, written for adult children choosing for a parent: a three-step process, subsidies and finance, and a short quiz about the stairs before the form." },
      pt: { t: "Campanha com influenciadores, Espanha", d: "Landing page da campanha com influenciadores, escrita para filhos que escolhem pelos pais: um processo em três passos, apoios e financiamento, e um pequeno questionário sobre a escada antes do formulário." } },
    { id: "x22", pages: [["natal2022-pt", "PT"], ["natal2022-pt-sco", "PT scooters"], ["navidad2022-es", "ES"], ["xmas2022-be-fr", "BE-FR"], ["xmas2022-be-nl", "BE-NL"], ["xmas2022-sk", "SK"], ["xmas2022-cz", "CZ"]],
      en: { t: "Christmas 2022, seven markets", d: "The offer changed from market to market, VAT paid by Stannah, a smart TV, a free scooter, while the design system, the Santa photography and the page flow were shared." },
      pt: { t: "Natal 2022, sete mercados", d: "A oferta mudava de mercado para mercado, IVA oferecido, uma smart TV, uma scooter grátis, mas o sistema de design, a fotografia do Pai Natal e o fluxo da página eram comuns." } },
    { id: "sum23", pages: [["summer2023-pt", "PT"]],
      en: { t: "Summer 2023, a surprise at the home visit", d: "A new look for the summer campaign: a bright outdoor hero, the stairlift placed in a family garden scene, and an offer kept as a surprise, revealed only at the free assessment visit. Every block on the page leads to one action, booking that visit." },
      pt: { t: "Verão 2023, uma surpresa na visita", d: "Um visual novo para a campanha de verão: um hero exterior e luminoso, o elevador de escadas integrado numa cena de família no jardim, e uma oferta mantida em surpresa, revelada só na visita de avaliação gratuita. Cada bloco da página leva a uma única ação, marcar essa visita." } }
  ],
  gallery: [
    ["mundial2026-pt", "PT", "2026", { en: "World Cup", pt: "Mundial" }],
    ["xmas2025-pt", "PT", "2025", { en: "Christmas, spin the prize wheel", pt: "Natal, roleta de brindes" }],
    ["xmas2025-ch", "CH-DE", "2025", { en: "Christmas gift", pt: "Prenda de Natal" }],
    ["ferias2024-pt", "PT", "2024", { en: "Win a holiday for two", pt: "Ganhe férias para dois" }],
    ["ambassador-pt", "PT", "2024", { en: "Ambassador programme", pt: "Programa de embaixadores" }],
    ["ambassador-be", "BE", "2024", { en: "Ambassador programme", pt: "Programa de embaixadores" }],
    ["xmas2023-es", "PT, ES, BE, CH, SK, CZ", "2023", { en: "Christmas, ten versions", pt: "Natal, dez versões" }, [["xmas2023-pt", "PT"], ["xmas2023-pt-sco", "PT scooters"], ["xmas2023-es", "ES"], ["xmas2023-be-fr", "BE-FR"], ["xmas2023-be-nl", "BE-NL"], ["xmas2023-ch-de", "CH-DE"], ["xmas2023-ch-fr", "CH-FR"], ["xmas2023-ch-it", "CH-IT"], ["xmas2023-sk", "SK"], ["xmas2023-cz", "CZ"]]],
    ["primavera2023-pt-sco", "PT", "2023", { en: "Spring, scooters", pt: "Primavera, scooters" }],
    ["compreagora2023-pt", "PT", "2022", { en: "Buy now, pay next year", pt: "Compre agora, pague em 2023" }],
    ["blackmonth-pt", "PT", "2022", { en: "Black Month, stairlifts", pt: "Black Month, elevadores de escadas" }],
    ["blackmonth-all-pt", "PT", "2022", { en: "Black Month, full range", pt: "Black Month, toda a gama" }],
    ["summer2022-pt", "PT", "2022", { en: "Super Summer", pt: "Super Verão" }],
    ["natal2021-pt", "PT", "2021", { en: "Christmas hamper", pt: "Cabaz de Natal" }],
    ["natal2020-pt", "PT", "2020", { en: "Christmas wish list", pt: "Lista de desejos de Natal" }],
    ["natal2019-pt", "PT", "2019", { en: "Christmas offer", pt: "Oferta de Natal" }],
    ["natale2019-it", "IT", "2019", { en: "Christmas offer", pt: "Oferta de Natal" }]
  ],
  en: { kicker: "Campaign landing pages", title: "Campaign pages, built to convert", intro: "Product launches, TV and influencer campaigns, seasonal offers, prize draws and referral programmes, from Italy and Spain to the US and the Emirates. My team designed and built the landing pages for the paid campaigns, often one design rolled out to several markets at once.", pick: "Choose a market", scroll: "Scroll inside the page", galTitle: "More campaigns", galText: "Open any page to see it full length.", close: "Close" },
  pt: { kicker: "Landing pages de campanha", title: "Páginas de campanha, feitas para converter", intro: "Lançamentos de produto, campanhas de TV e com influenciadores, ofertas sazonais, sorteios e programas de referência, de Itália e Espanha aos EUA e aos Emirados. A minha equipa desenhou e montou as landing pages das campanhas pagas, muitas vezes um design lançado em vários mercados ao mesmo tempo.", pick: "Escolha um mercado", scroll: "Faça scroll dentro da página", galTitle: "Mais campanhas", galText: "Abra qualquer página para a ver completa.", close: "Fechar" }
};
