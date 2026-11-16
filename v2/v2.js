// Portfolio v2 renderer. Reuses the copy in ../assets/content.js.
(function () {
  var S = window.SITE;
  // Images generated in Higgsfield. Replace with local copies in v2/img/ when available.
  var CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_3AOnmXGj7aKXk82JBr8QXOuv8AQ/";
  var IMG = {
    hero: CDN + "hf_20261116_191046_94842430-9b26-4694-b2aa-9e20bfd719d4.png",
    banner: CDN + "hf_20261116_191047_95d279e0-a71e-48da-917f-18fffdfda37c.png",
    "creative-testing": CDN + "hf_20261116_191046_aeb7fc48-03e2-4216-8e61-030074694e2f.png",
    "ai-production": CDN + "hf_20261116_191047_11c18046-ba93-4a0f-8a32-ba094ac0c3e4.png",
    "tv-spots": CDN + "hf_20261116_191048_75539dac-5210-41b1-8a3f-1d7ce84510c8.png",
    "landing-pages": CDN + "hf_20261116_191046_00a40559-7e5e-4122-8c75-03112e0bd249.png",
    motion: CDN + "hf_20261116_191049_a678d30c-9024-4c5c-83e5-a956502e71d3.png",
    "earlier-work": CDN + "hf_20261116_191048_6d6a9fde-4016-42bc-97d1-967bcafc8b4d.png"
  };

  function getLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "pt" || q === "en") return q;
    try { var s = localStorage.getItem("lang"); if (s === "pt" || s === "en") return s; } catch (e) {}
    return (navigator.language || "en").toLowerCase().indexOf("pt") === 0 ? "pt" : "en";
  }
  var lang = getLang();
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function top() {
    var u = S.ui[lang], home = document.body.dataset.page === "home" ? "" : "index.html";
    return '<header class="wrap top"><a class="mark" href="index.html">Paulo Ralha</a>' +
      '<nav class="glass" aria-label="Main">' +
      '<a href="' + home + '#work">' + u.nav.work + '</a><a href="' + home + '#about">' + u.nav.about + '</a><a href="' + home + '#contact">' + u.nav.contact + "</a>" +
      '<button type="button" data-lang="pt" aria-pressed="' + (lang === "pt") + '">PT</button>' +
      '<button type="button" data-lang="en" aria-pressed="' + (lang === "en") + '">EN</button></nav></header>';
  }

  function home() {
    var u = S.ui[lang];
    var cards = S.cases.map(function (c) {
      var t = c[lang];
      return '<a class="card glass" href="case.html?c=' + c.slug + '"><img src="' + IMG[c.slug] + '" alt="" loading="lazy">' +
        '<div class="body"><p class="tag">' + esc(t.tag) + "</p><h3>" + esc(t.title) + '</h3><p class="sum">' + esc(t.summary) + "</p></div></a>";
    }).join("");
    var exp = S.experience.map(function (e) {
      return '<li><span class="yrs">' + e.years + '</span><span><span class="co">' + esc(e.company) + '</span><span class="rl">' + esc(e[lang]) + "</span></span></li>";
    }).join("");
    return '<main class="wrap">' +
      '<section class="hero"><div><h1 class="display name">Paulo<br>Ralha</h1>' +
      '<p class="role">' + u.role + '</p><p class="intro">' + esc(u.intro) + "</p>" +
      '<div class="cta"><a class="btn primary" href="#work">' + u.work + '</a><a class="btn ghost" href="#contact">' + u.contact + "</a></div></div>" +
      '<div class="portrait-card glass"><img src="' + IMG.hero + '" alt="Paulo Ralha"></div></section>' +
      '<div class="banner glass"><img src="' + IMG.banner + '" alt="Portfolio"></div>' +
      '<section id="work"><h2 class="display sec-title">' + u.work + '</h2><div class="grid">' + cards + "</div></section>" +
      '<section id="about"><h2 class="display sec-title">' + u.about + '</h2><div class="about">' +
      '<div class="glass">' + S.about[lang].map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" +
      '<div class="glass"><h3>' + u.experience + '</h3><ul class="timeline">' + exp + "</ul></div></div></section>" +
      '<section id="contact" class="contact glass"><h2 class="display sec-title" style="margin:0">' + u.contact + "</h2>" +
      "<p>" + esc(u.contactText) + '</p><a class="display mail" href="mailto:' + S.email + '">' + S.email + "</a>" +
      '<div class="links"><a class="btn primary" href="' + S.linkedin + '" target="_blank" rel="noopener">LinkedIn</a>' +
      '<span class="soon">' + u.cv + ": " + u.cvSoon + "</span></div></section></main>";
  }

  function casePage() {
    var u = S.ui[lang];
    var slug = new URLSearchParams(location.search).get("c");
    var i = Math.max(0, S.cases.findIndex(function (c) { return c.slug === slug; }));
    var c = S.cases[i], t = c[lang], next = S.cases[(i + 1) % S.cases.length];
    document.title = t.title + " | Paulo Ralha";
    var slots = "";
    for (var k = 0; k < c.images; k++) slots += '<div class="slot glass" style="aspect-ratio:' + c.ratio + '">' + u.imageSoon + "</div>";
    return '<main class="wrap"><a class="back" href="index.html#work">' + u.back + "</a>" +
      '<div class="case-hero glass"><img src="' + IMG[c.slug] + '" alt=""></div>' +
      '<header class="case-head"><h1 class="display">' + esc(t.title) + '</h1><p class="tag">' + esc(t.tag) + '</p><p class="summary">' + esc(t.summary) + "</p></header>" +
      '<section class="story">' +
      '<div class="glass"><h2>' + u.challenge + "</h2><p>" + esc(t.challenge) + "</p></div>" +
      '<div class="glass"><h2>' + u.approach + "</h2><p>" + esc(t.approach) + "</p></div>" +
      '<div class="glass"><h2>' + u.result + "</h2><p>" + esc(t.result) + "</p></div></section>" +
      '<section class="gallery r' + c.ratio.replace("/", "x") + '" aria-label="' + u.gallery + '">' + slots + "</section>" +
      '<a class="next glass" href="case.html?c=' + next.slug + '"><span><span class="label">' + u.next + '</span><span class="display">' + esc(next[lang].title) + '</span></span></a></main>';
  }

  function render() {
    document.documentElement.lang = lang;
    var page = document.body.dataset.page;
    document.getElementById("app").innerHTML = top() + (page === "case" ? casePage() : home());
    if (page === "home") document.title = "Paulo Ralha | " + S.ui[lang].role;
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.addEventListener("click", function () {
        lang = b.dataset.lang;
        try { localStorage.setItem("lang", lang); } catch (e) {}
        render();
      });
    });
  }
  render();
})();
