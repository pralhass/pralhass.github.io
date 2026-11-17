// Ads wall and bulk rollout for the "creative-testing" case (v3).
// Media lives in /media/ads (compressed copies of the originals).
window.ADS = {
  base: "../media/ads/",
  loose: [
    { file: "uplifts", formats: ["story"], market: { en: "Not yet launched", pt: "Ainda não lançado" },
      en: { t: "The grandma who rises through the floor", d: "UGC-style home lift ad made with generative AI: she rises through the floor in her home lift, coffee in hand." },
      pt: { t: "A avó que aparece pelo chão", d: "Anúncio de elevador doméstico em estilo UGC, feito com IA generativa: ela aparece pelo chão no elevador doméstico, de café na mão." }, video: true },
    { file: "8097", market: { en: "All markets", pt: "Todos os mercados" },
      en: { t: "You always have choice", d: "Care home or staying home: a side-by-side comparison, made once and rolled out in bulk." },
      pt: { t: "You always have choice", d: "Lar ou ficar em casa: uma comparação lado a lado, criada uma vez e lançada em bulk." }, video: true },
    { file: "3403", market: { en: "Portugal", pt: "Portugal" },
      en: { t: "Renovate or stay?", d: "Speaks to people about to rebuild their home around the ground floor." },
      pt: { t: "Remodelar ou ficar?", d: "Fala com quem está prestes a remodelar a casa para viver no rés-do-chão." }, video: true },
    { file: "8313", market: { en: "Switzerland", pt: "Suíça" },
      en: { t: "The Uplift has landed", d: "Launch film for a home lift that fits into an existing room." },
      pt: { t: "The Uplift has landed", d: "Filme de lançamento de um elevador doméstico que cabe numa divisão existente." }, video: true },
    { file: "8545a", market: { en: "Spain", pt: "Espanha" },
      en: { t: "A serious relationship, no commitment", d: "Stairlift rental, told as a light-hearted love story." },
      pt: { t: "Uma relação séria, sem compromisso", d: "Aluguer de cadeiras elevatórias, contado como uma história de amor leve." }, video: true },
    { file: "8545b", market: { en: "Spain", pt: "Espanha" },
      en: { t: "Life plays tricks on you", d: "Rental as the answer to the unexpected." },
      pt: { t: "A vida prega partidas", d: "O aluguer como resposta ao imprevisto." }, video: true },
    { file: "x", market: { en: "Product film", pt: "Filme de produto" },
      en: { t: "Joya", d: "Product reveal for a new stairlift model." },
      pt: { t: "Joya", d: "Apresentação de um novo modelo de cadeira elevatória." }, video: true },
    { file: "6822", market: { en: "Portugal", pt: "Portugal" },
      en: { t: "Made here, start to finish", d: "Static ad built on one fact: the only stairlift manufacturer in the country." },
      pt: { t: "Do início ao fim", d: "Anúncio estático assente num facto: o único fabricante de cadeiras elevatórias no país." }, video: false },
    { file: "8097s", market: { en: "All markets", pt: "Todos os mercados" },
      en: { t: "You always have choice (static)", d: "The same comparison as a static for feed and story." },
      pt: { t: "You always have choice (estático)", d: "A mesma comparação em estático, para feed e story." }, video: false }
  ],
  bulk: {
    en: { title: "One concept, 11 markets", text: "A UGC-style ad made with generative AI, then localised into 11 markets and languages, from Spanish and Czech to Thai and Japanese. In the first four markets with results, it more than doubled CTR against the control.", ctr: "CTR vs control", play: "Play with sound" },
    pt: { title: "Um conceito, 11 mercados", text: "Um anúncio em estilo UGC feito com IA generativa e depois adaptado a 11 mercados e línguas, do espanhol e checo ao tailandês e japonês. Nos primeiros quatro mercados com resultados, mais do que duplicou o CTR face ao controlo.", ctr: "CTR vs controlo", play: "Ver com som" },
    markets: [
      { k: "es", en: "Spain", pt: "Espanha", ctr: "+175%" },
      { k: "pt", en: "Portugal", pt: "Portugal", ctr: "+173%" },
      { k: "sk", en: "Slovakia", pt: "Eslováquia", ctr: "+160%" },
      { k: "cz", en: "Czechia", pt: "Chéquia", ctr: "+103%" },
      { k: "be-fr", en: "Belgium (FR)", pt: "Bélgica (FR)" },
      { k: "be-nl", en: "Belgium (NL)", pt: "Bélgica (NL)" },
      { k: "no", en: "Norway", pt: "Noruega" },
      { k: "th", en: "Thailand", pt: "Tailândia" },
      { k: "my", en: "Malaysia", pt: "Malásia" },
      { k: "tw", en: "Taiwan", pt: "Taiwan" },
      { k: "jp", en: "Japan", pt: "Japão" }
    ]
  },
  ui: {
    en: { wall: "Ads", wallText: "A selection of Meta Ads in feed (4:5) and story (9:16). Tap any ad to watch it with sound.", feed: "Feed 4:5", story: "Story 9:16", close: "Close" },
    pt: { wall: "Anúncios", wallText: "Uma seleção de anúncios Meta em feed (4:5) e story (9:16). Toca num anúncio para o ver com som.", feed: "Feed 4:5", story: "Story 9:16", close: "Fechar" }
  }
};
