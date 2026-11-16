// Portfolio v3 renderer: playful studio. Reuses copy from ../assets/content.js.
(function () {
  var S = window.SITE;
  var C = "https://d8j0ntlcm91z4.cloudfront.net/user_3AOnmXGj7aKXk82JBr8QXOuv8AQ/hf_20261116_";
  // Animated stickers (GIF) and case covers generated in Higgsfield.
  var IMG = {
    badge: C + "191758_46cad621-d6c1-41f4-b15e-013b1819cfb6.gif",
    tv: C + "191758_9326e7b9-da65-4e15-a5d4-c44b8dac9c15.gif",
    hand: C + "191757_83060bf0-9674-43b6-9cc1-e4d95bcd8a59.gif",
    smile: C + "191756_a278aec4-b958-43bf-aad0-e1fd458d4101.gif",
    "creative-testing": C + "191757_9e286d62-d8b1-4c0b-a56e-eb32256006db.png",
    "ai-production": C + "191757_b4990b3a-69d0-4160-9ecb-d41861ff8566.png",
    "tv-spots": C + "191756_a39283e6-3835-4570-82a0-4ffc904df40c.png",
    "landing-pages": C + "191758_28d12bb8-a602-48b4-863d-c7c3be26b716.png",
    motion: C + "191757_a24bf127-d064-4e6d-a14d-627ba539f68e.png",
    "earlier-work": C + "191756_962cf579-5772-422d-a32f-8885a2337402.png"
  };
  var T = {
    en: { behind: "Behind the visuals", career: "Career", toolkit: "Toolkit", projects: "Featured projects", read: "Read the case" },
    pt: { behind: "Por trás dos visuais", career: "Percurso", toolkit: "Ferramentas", projects: "Projetos em destaque", read: "Ver o caso" }
  };
  var TOOLS = ["Premiere Pro", "After Effects", "Photoshop", "Illustrator", "Adobe Express", "Canva", "Higgsfield", "Seedance", "Claude", "Meta Ads", "Google Ads", "GA4", "Unbounce", "WordPress", "Make", "Zapier", "Blender"];

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
    return '<header class="wrap top"><a class="mark" href="index.html">Paulo Ralha</a><nav aria-label="Main">' +
      '<a href="' + home + '#work">' + u.nav.work + '</a><a href="' + home + '#about">' + u.nav.about + '</a><a href="' + home + '#contact">' + u.nav.contact + "</a>" +
      '<button type="button" data-lang="pt" aria-pressed="' + (lang === "pt") + '">PT</button>' +
      '<button type="button" data-lang="en" aria-pressed="' + (lang === "en") + '">EN</button></nav></header>';
  }

  function home() {
    var u = S.ui[lang], t = T[lang];
    var exp = S.experience.map(function (e) {
      return '<li><span class="yrs">' + e.years.split(" - ")[0] + '</span><span><span class="co">' + esc(e.company) + '</span><span class="rl">' + esc(e[lang]) + "</span></span></li>";
    }).join("");
    var projects = S.cases.map(function (c) {
      var x = c[lang];
      return '<a class="project card" href="case.html?c=' + c.slug + '"><img src="' + IMG[c.slug] + '" alt="" loading="lazy">' +
        '<div class="txt"><span class="tag">' + esc(x.tag) + "</span><h3>" + esc(x.title) + '</h3><p class="sum">' + esc(x.summary) + '</p><span class="go">' + t.read + "</span></div></a>";
    }).join("");
    return '<main class="wrap">' +
      '<section class="hero"><div class="word-row"><h1 class="word" aria-label="Portfolio">P<span class="pill" aria-hidden="true"></span>rtfolio</h1><img class="smile" src="' + IMG.smile + '" alt=""></div>' +
      '<div class="hero-sub"><div><p class="who">Paulo Ralha, ' + u.role + '</p><p class="intro">' + esc(u.intro) + "</p></div>" +
      '<img class="badge" src="' + IMG.badge + '" alt=""></div></section>' +

      '<section id="about" class="behind card"><div><h2 class="display">' + t.behind + "</h2>" +
      S.about[lang].map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + '</div><img class="hand" src="' + IMG.hand + '" alt=""></section>' +

      '<section class="cols card"><div><h3>' + t.career + '</h3><ul class="timeline">' + exp + "</ul></div>" +
      "<div><h3>" + t.toolkit + '</h3><div class="chips">' + TOOLS.map(function (x) { return '<span class="chip">' + x + "</span>"; }).join("") + "</div></div></section>" +

      '<section id="work"><div class="proj-head"><h2 class="display">' + t.projects + '</h2><img src="' + IMG.tv + '" alt=""></div>' +
      '<div class="projects">' + projects + "</div></section>" +

      '<section id="contact" class="contact card"><h2 class="display">' + u.contact + "</h2><p>" + esc(u.contactText) + "</p>" +
      '<a class="mail" href="mailto:' + S.email + '">' + S.email + "</a>" +
      '<div class="links"><a href="' + S.linkedin + '" target="_blank" rel="noopener">LinkedIn</a><span class="soon">' + u.cv + ": " + u.cvSoon + "</span></div></section></main>";
  }

  function casePage() {
    var u = S.ui[lang];
    var slug = new URLSearchParams(location.search).get("c");
    var i = Math.max(0, S.cases.findIndex(function (c) { return c.slug === slug; }));
    var c = S.cases[i], x = c[lang], next = S.cases[(i + 1) % S.cases.length];
    document.title = x.title + " | Paulo Ralha";
    var slots = "";
    for (var k = 0; k < c.images; k++) slots += '<div class="slot" style="aspect-ratio:' + c.ratio + '">' + u.imageSoon + "</div>";
    return '<main class="wrap"><a class="back" href="index.html#work">' + u.back + "</a>" +
      '<header class="case-head"><div><h1 class="display">' + esc(x.title) + '</h1><span class="tag">' + esc(x.tag) + '</span><p class="summary">' + esc(x.summary) + "</p></div></header>" +
      '<div class="case-cover card"><img src="' + IMG[c.slug] + '" alt=""></div>' +
      '<section class="story"><div class="card"><h2>' + u.challenge + "</h2><p>" + esc(x.challenge) + '</p></div><div class="card"><h2>' + u.approach + "</h2><p>" + esc(x.approach) + '</p></div><div class="card"><h2>' + u.result + "</h2><p>" + esc(x.result) + "</p></div></section>" +
      '<section class="gallery r' + c.ratio.replace("/", "x") + '" aria-label="' + u.gallery + '">' + slots + "</section>" +
      '<a class="next card" href="case.html?c=' + next.slug + '"><span class="label">' + u.next + '</span><span class="display">' + esc(next[lang].title) + "</span></a></main>";
  }

  function render() {
    document.documentElement.lang = lang;
    var page = document.body.dataset.page;
    document.getElementById("app").innerHTML = top() + (page === "case" ? casePage() : home());
    if (page === "home") document.title = "Paulo Ralha | Portfolio";
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.addEventListener("click", function () { lang = b.dataset.lang; try { localStorage.setItem("lang", lang); } catch (e) {} render(); });
    });
  }
  render();
})();
