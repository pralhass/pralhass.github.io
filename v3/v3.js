// Portfolio v3 renderer: playful studio. Reuses copy from ../assets/content.js.
(function () {
  var S = window.SITE;
  // v3 shows only Stannah work: the pre-Stannah case stays in v1 only.
  S.cases = S.cases.filter(function (c) { return c.slug !== "earlier-work"; });
  var C = "../media/hf/";
  // Animated stickers (GIF) and case covers generated in Higgsfield, kept in media/hf/.
  var IMG = {
    badge: C + "badge.gif",
    tv: C + "tv.gif",
    hand: C + "hand.gif",
    smile: C + "smile.gif",
    "creative-testing": C + "creative-testing.jpg",
    "ai-production": C + "ai-production.jpg",
    "tv-spots": C + "tv-spots.jpg",
    "landing-pages": C + "landing-pages.jpg",
    motion: C + "motion.jpg",
    "earlier-work": C + "earlier-work.jpg"
  };
  var T = {
    en: { behind: "Behind the visuals", career: "Career", edu: "Education", toolkit: "Toolkit", projects: "Featured projects", read: "Read the case" },
    pt: { behind: "Quem está por trás", career: "Percurso", edu: "Formação académica", toolkit: "Ferramentas", projects: "Projetos em destaque", read: "Ver o projeto" }
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
    var menu = lang === "pt" ? "Menu" : "Menu";
    return '<header class="wrap top"><a class="mark" href="index.html">Paulo Ralha</a><nav aria-label="Main">' +
      '<div class="nav-menu" id="nav-menu">' +
      '<a href="' + home + '#work">' + u.nav.work + '</a><a href="' + home + '#about">' + u.nav.about + '</a><a href="' + home + '#contact">' + u.nav.contact + "</a>" +
      '<span class="nav-lang"><button type="button" data-lang="pt" aria-pressed="' + (lang === "pt") + '">PT</button>' +
      '<button type="button" data-lang="en" aria-pressed="' + (lang === "en") + '">EN</button></span></div>' +
      '<a class="nav-cv" href="../assets/cv/paulo-ralha-cv-' + lang + '.pdf" target="_blank" rel="noopener">' + (lang === "pt" ? "Descarregar CV" : "Download CV") + "</a>" +
      '<button type="button" class="nav-burger" aria-expanded="false" aria-controls="nav-menu" aria-label="' + menu + '"><span></span><span></span><span></span></button></nav></header>';
  }


  function cvLink(l, label) { return '<a href="../assets/cv/paulo-ralha-cv-' + l + '.pdf" target="_blank" rel="noopener">' + esc(label) + "</a>"; }

  function home() {
    var u = S.ui[lang], t = T[lang];
    var exp = S.experience.map(function (e) {
      return '<li><span class="yrs">' + e.years.split(" - ")[0] + '</span><span><span class="co">' + esc(e.company) + '</span><span class="rl">' + esc(e[lang]) + "</span></span></li>";
    }).join("");
    var edu = (S.education || []).map(function (e) {
      return '<li><span class="yrs">' + e.year + '</span><span><span class="co">' + esc(e[lang]) + '</span><span class="rl">' + esc(e.school[lang]) + "</span></span></li>";
    }).join("");
    var projects = S.cases.map(function (c) {
      var x = c[lang];
      return '<a class="project card" href="case.html?c=' + c.slug + '"><img src="' + IMG[c.slug] + '" alt="" loading="lazy">' +
        '<div class="txt"><span class="tag">' + esc(x.tag) + "</span><h3>" + esc(x.title) + '</h3><p class="sum">' + esc(x.summary) + '</p><span class="go">' + t.read + "</span></div></a>";
    }).join("");
    return '<main class="wrap">' +
      '<section class="hero"><div class="word-row"><h1 class="word" aria-label="Portfolio">P<span class="pill" aria-hidden="true"></span>rtfolio</h1><img class="smile" src="' + IMG.smile + '" alt=""></div>' +
      '<div class="hero-sub"><div><p class="who">Paulo Ralha, ' + u.role + '</p><p class="intro">' + esc(u.intro) + '</p><div class="hero-cta"><a class="btn-cv" href="../assets/cv/paulo-ralha-cv-' + lang + '.pdf" target="_blank" rel="noopener">' + (lang === "pt" ? "Descarregar CV (PDF)" : "Download CV (PDF)") + '</a><a class="btn-ln" href="' + S.linkedin + '" target="_blank" rel="noopener">LinkedIn</a></div></div>' +
      '<img class="badge" src="' + IMG.badge + '" alt=""></div></section>' +

      '<section id="about" class="behind card"><div><h2 class="display">' + t.behind + "</h2>" +
      S.about[lang].map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + '</div><img class="hand" src="' + IMG.hand + '" alt=""></section>' +

      '<section class="cols card"><div><h3>' + t.career + '</h3><ul class="timeline">' + exp + "</ul>" + (edu ? '<h3 class="edu-h">' + t.edu + '</h3><ul class="timeline">' + edu + "</ul>" : "") + "</div>" +
      "<div><h3>" + t.toolkit + '</h3><div class="chips">' + TOOLS.map(function (x) { return '<span class="chip">' + x + "</span>"; }).join("") + "</div></div></section>" +

      '<section id="work"><div class="proj-head"><h2 class="display">' + t.projects + '</h2><img src="' + IMG.tv + '" alt=""></div>' +
      '<div class="projects">' + projects + "</div></section>" +

      '<section id="contact" class="contact card"><h2 class="display">' + u.contact + "</h2><p>" + esc(u.contactText) + "</p>" +
      '<a class="mail" href="mailto:' + S.email + '">' + S.email + "</a>" +
      '<div class="links"><a href="' + S.linkedin + '" target="_blank" rel="noopener">LinkedIn</a>' + cvLink("pt", "CV PT") + cvLink("en", "CV EN") + "</div></section></main>";
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
      (c.slug === "creative-testing" && window.ADS ? adsSections() : c.slug === "ai-production" && window.AI ? aiSections() : c.slug === "tv-spots" && window.TV ? tvSections() : c.slug === "landing-pages" && window.LP ? lpSections() : '<section class="gallery r' + c.ratio.replace("/", "x") + '" aria-label="' + u.gallery + '">' + slots + "</section>") +
      '<a class="next card" href="case.html?c=' + next.slug + '"><span class="label">' + u.next + '</span><span class="display">' + esc(next[lang].title) + "</span></a></main>";
  }


  // Ads wall + bulk rollout, only on the creative-testing case.
  function adsSections() {
    var A = window.ADS, ui = A.ui[lang];
    var wall = A.loose.map(function (a, i) {
      var x = a[lang], f0 = (a.formats || ["post"])[0], src = A.base + a.file + "-" + f0;
      var media = a.video
        ? '<video muted loop playsinline preload="none" poster="' + src + '.jpg" data-src="' + src + '.mp4"></video>'
        : '<img src="' + src + '.jpg" alt="" loading="lazy">';
      return '<button type="button" class="ad card" data-ad="' + i + '"><span class="ad-media' + (f0 === "story" ? " is-story" : a.sq ? " is-sq" : "") + '">' + media + (a.res ? '<span class="ad-res">' + a.res.map(function (r) { return "<b>" + r + "</b>"; }).join("") + "</span>" : "") + "</span>" +
        '<span class="ad-txt"><span class="tag">' + esc(a.market[lang]) + "</span><strong>" + esc(x.t) + "</strong><span>" + esc(x.d) + "</span></span></button>";
    }).join("");
    var bulks = A.bulks.map(function (b, bi) {
      var bt = b[lang];
      var tiles = b.markets.map(function (m, i) {
        var src = A.base + b.dir + m.k;
        var media = b.video
          ? '<video muted loop playsinline autoplay preload="metadata" poster="' + src + '.jpg" src="' + src + '-loop.mp4"></video>'
          : '<img src="' + src + '.jpg" alt="" loading="lazy">';
        return '<button type="button" class="mk" data-bulk="' + bi + ":" + i + '">' + media +
          '<span class="mk-name">' + esc(m[lang]) + "</span>" + (m.ctr ? '<span class="mk-ctr">' + m.ctr + " CTR</span>" : "") + "</button>";
      }).join("");
      return '<section class="bulk card"><div class="bulk-head"><h2 class="display">' + bt.title + "</h2><p>" + bt.text + '</p></div><div class="mk-grid">' + tiles + "</div></section>";
    }).join("");
    return '<section class="ads-wall"><div class="sec-head"><h2 class="display">' + ui.wall + "</h2><p>" + ui.wallText + '</p></div><div class="ads-grid">' + wall + "</div></section>" + bulks +
      '<div class="lb" hidden><div class="lb-box"><button type="button" class="lb-x">' + ui.close + '</button><div class="lb-tabs"></div><div class="lb-stage"></div><p class="lb-cap"></p></div></div>';
  }

  // TV spots case.
  function tvSections() {
    var T = window.TV, x = T[lang], B = T.base;
    function vid(k) { return '<div class="tv-frame"><video controls playsinline preload="none" poster="' + B + k + '.jpg" src="' + B + k + '.mp4"></video></div>'; }
    var spots = x.spots.map(function (s) {
      var sb = ""; for (var i = 1; i <= 12; i++) sb += '<img src="' + B + "sb/" + s.k + "-" + (i < 10 ? "0" : "") + i + '.jpg" alt="" loading="lazy">';
      return '<article class="spot card"><div class="spot-top">' + vid(s.k) + '<div class="spot-txt"><span class="tag">' + esc(s.meta) + '</span><h3 class="display">' + esc(s.t) + "</h3><p>" + esc(s.d) + '</p></div></div><div class="sb"><span class="sb-label">' + x.sbLabel + '</span><div class="sb-grid">' + sb + "</div></div></article>";
    }).join("");
    var bts = ""; for (var b = 1; b <= 14; b++) bts += '<img src="' + B + "bts/bts-" + (b < 10 ? "0" : "") + b + '.jpg?v=2" alt="" loading="lazy">';
    var more = x.more.map(function (m) { return "<figure>" + vid(m.k) + "<figcaption><strong>" + esc(m.t) + '</strong><span class="m">' + esc(m.m) + "</span><span>" + esc(m.d) + "</span></figcaption></figure>"; }).join("");
    return '<section class="tv-intro card"><span class="tag">' + x.kicker + '</span><h2 class="display">' + esc(x.title) + "</h2><p>" + esc(x.intro) + '</p></section><section class="cast card"><h3>' + esc(x.castTitle) + "</h3><p>" + esc(x.cast) + "</p></section>" + spots +
      elSection(x.el, B + "elegance/") +
      '<section class="bts card"><div class="bulk-head"><h2 class="display">' + x.btsTitle + "</h2><p>" + esc(x.btsText) + '</p></div><div class="bts-grid">' + bts + "</div></section>" +
      '<section class="more-tv"><div class="sec-head"><h2 class="display">' + x.moreTitle + "</h2><p>" + esc(x.moreText) + '</p></div><div class="more-grid">' + more + "</div></section>";
  }

  function elSection(e, B) {
    var ver = e.versions;
    return '<section class="el card"><div class="el-top"><div class="el-player"><div class="tv-frame"><video controls playsinline preload="none" poster="' + B + "el-" + ver[0][0] + '.jpg" src="' + B + "el-" + ver[0][0] + '.mp4"></video></div><div class="el-ver" role="group">' +
      ver.map(function (v, i) { return '<button type="button" data-v="' + v[0] + '" aria-pressed="' + (i === 0) + '">' + esc(v[1]) + "</button>"; }).join("") + '</div></div><div class="spot-txt"><span class="tag">' + esc(e.kicker) + '</span><h3 class="display">' + esc(e.title) + "</h3><p>" + esc(e.intro) + '</p><div class="chips">' +
      e.roles.map(function (r) { return '<span class="chip">' + esc(r) + "</span>"; }).join("") + "</div></div></div>" +
      '<div class="el-row"><div class="el-script"><h4>' + esc(e.scriptTitle) + "</h4><ol>" + e.scenes.map(function (sc) { return "<li><b>" + esc(sc[0]) + "</b><span>" + esc(sc[1]) + "</span></li>"; }).join("") + "</ol></div>" +
      '<figure class="el-crew"><img src="' + B + 'crew.jpg" alt="" loading="lazy"><figcaption>' + esc(e.crewCap) + "</figcaption></figure></div>" +
      '<div class="el-board"><h4>' + esc(e.boardTitle) + "</h4><p>" + esc(e.boardText) + '</p><div class="el-boards">' + [1, 2, 3].map(function (k) { return '<img src="' + B + "story-" + k + '.jpg" alt="" loading="lazy">'; }).join("") + "</div></div>" +
      '<div class="el-row el-post"><figure><img src="' + B + 'premiere.jpg" alt="" loading="lazy"><figcaption>' + esc(e.editCap) + '</figcaption></figure><p class="el-sound">' + esc(e.soundText) + "</p></div></section>";
  }

  function bindTV() {
    document.querySelectorAll(".el-ver button").forEach(function (b) {
      b.addEventListener("click", function () {
        var wrap = b.closest(".el-player"), v = wrap.querySelector("video"), base = v.getAttribute("src").replace(/el-\d+\.mp4$/, "");
        wrap.querySelectorAll("button").forEach(function (o) { o.setAttribute("aria-pressed", o === b); });
        v.pause(); v.poster = base + "el-" + b.dataset.v + ".jpg"; v.src = base + "el-" + b.dataset.v + ".mp4"; v.load();
      });
    });
  }

  // Landing pages case.
  function lpSections() {
    var x = window.LP[lang];
    return '<section class="lp-nums card"><span class="tag">' + x.kicker + '</span><h2 class="display">' + esc(x.title) + "</h2><p>" + esc(x.intro) + '</p><div class="ai-stats">' +
      x.stats.map(function (s) { return "<div><b>" + s[0] + "</b><span>" + esc(s[1]) + "</span></div>"; }).join("") + '</div><div class="lp-cols"><div><h3>' + esc(x.topTitle) + '</h3><ul class="lp-top">' +
      x.top.map(function (t) { return '<li><span class="mk-code">' + t[0] + "</span><span>" + esc(t[1]) + "</span><b>" + t[2] + "</b></li>"; }).join("") + "</ul></div><div><h3>" + esc(x.rollTitle) + "</h3>" +
      x.roll.map(function (r) { return '<div class="lp-roll"><strong>' + esc(r[0]) + '</strong><div class="chips">' + r[1].map(function (m) { return '<span class="chip">' + m[0] + " <b>" + m[1] + "</b></span>"; }).join("") + "</div></div>"; }).join("") + "</div></div></section>" + (window.LP.camp ? campSections() : "");
  }

  // Campaign landing pages: market switcher per rollout + gallery with lightbox.
  function campSections() {
    var C = window.LP.camp, u = C[lang], B = C.base;
    var rolls = C.rollouts.map(function (r) {
      var t = r[lang], p0 = r.pages[0][0];
      return '<article class="lp-rollout card"><div class="lp-r-txt"><h3 class="display">' + esc(t.t) + "</h3><p>" + esc(t.d) + "</p>" + (r.pages.length > 1 ? '<span class="lp-pick">' + u.pick + '</span><div class="lp-mk" role="group" aria-label="' + esc(u.pick) + '">' +
        r.pages.map(function (pg, i) { return '<button type="button" data-k="' + pg[0] + '" aria-pressed="' + (i === 0) + '">' + esc(pg[1]) + "</button>"; }).join("") + "</div>" : "") +
        '</div><div class="lp-browser"><div class="lp-bar"><i></i><i></i><i></i><span>' + esc(u.scroll) + '</span></div><div class="lp-view" tabindex="0"><img src="' + B + p0 + '.jpg" alt="' + esc(t.t + ", " + r.pages[0][1]) + '" loading="lazy"></div></div></article>';
    }).join("");
    var gal = C.gallery.map(function (g) {
      return '<button type="button" class="lp-g card" data-k="' + g[0] + '"' + (g[4] ? " data-pages='" + JSON.stringify(g[4]) + "'" : "") + '><span class="lp-g-img"><img src="' + B + g[0] + '-t.jpg" alt="" loading="lazy"></span><span class="lp-g-txt"><strong>' + esc(g[3][lang]) + '</strong><span>' + g[1] + " · " + g[2] + "</span></span></button>";
    }).join("");
    return '<section class="lp-camp"><div class="lp-camp-head"><span class="tag">' + u.kicker + '</span><h2 class="display">' + esc(u.title) + "</h2><p>" + esc(u.intro) + "</p></div>" + rolls +
      '<div class="sec-head lp-gal-head"><h2 class="display">' + u.galTitle + "</h2><p>" + u.galText + '</p></div><div class="lp-gal">' + gal + "</div>" +
      '<div class="lb lp-lb" hidden><div class="lb-box"><button type="button" class="lb-x">' + u.close + '</button><div class="lb-tabs lp-lb-tabs"></div><div class="lp-lb-view" tabindex="0"><img alt=""></div><p class="lb-cap"></p></div></div></section>';
  }

  function bindNav() {
    var b = document.querySelector(".nav-burger"), m = document.getElementById("nav-menu"); if (!b || !m) return;
    function set(o) { b.setAttribute("aria-expanded", o); m.classList.toggle("open", o); }
    b.addEventListener("click", function (e) { e.stopPropagation(); set(b.getAttribute("aria-expanded") !== "true"); });
    m.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { set(false); }); });
    document.addEventListener("click", function (e) { if (!m.contains(e.target)) set(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && b.getAttribute("aria-expanded") === "true") { set(false); b.focus(); } });
  }

  function bindLP() {
    var C = window.LP && window.LP.camp; if (!C) return;
    document.querySelectorAll(".lp-mk button").forEach(function (b) {
      b.addEventListener("click", function () {
        var art = b.closest(".lp-rollout"), view = art.querySelector(".lp-view"), img = view.querySelector("img");
        art.querySelectorAll(".lp-mk button").forEach(function (o) { o.setAttribute("aria-pressed", o === b); });
        img.src = C.base + b.dataset.k + ".jpg"; img.alt = art.querySelector("h3").textContent + ", " + b.textContent; view.scrollTop = 0;
      });
    });
    var lb = document.querySelector(".lp-lb"); if (!lb) return;
    var lv = lb.querySelector(".lp-lb-view"), li = lv.querySelector("img"), cap = lb.querySelector(".lb-cap"), last;
    function close() { lb.hidden = true; li.removeAttribute("src"); if (last) last.focus(); }
    document.querySelectorAll(".lp-g").forEach(function (g) {
      g.addEventListener("click", function () {
        last = g; li.src = C.base + g.dataset.k + ".jpg"; li.alt = g.querySelector("strong").textContent;
        var tabs = lb.querySelector(".lp-lb-tabs"), pages = g.dataset.pages ? JSON.parse(g.dataset.pages) : [];
        tabs.innerHTML = pages.map(function (pg) { return '<button type="button" data-k="' + pg[0] + '" aria-pressed="' + (pg[0] === g.dataset.k) + '">' + esc(pg[1]) + "</button>"; }).join("");
        tabs.querySelectorAll("button").forEach(function (t) { t.addEventListener("click", function () { tabs.querySelectorAll("button").forEach(function (o) { o.setAttribute("aria-pressed", o === t); }); li.src = C.base + t.dataset.k + ".jpg"; lv.scrollTop = 0; }); });
        cap.textContent = g.querySelector("strong").textContent + " · " + g.querySelector(".lp-g-txt span").textContent;
        lb.hidden = false; lv.scrollTop = 0; lb.querySelector(".lb-x").focus();
      });
    });
    lb.querySelector(".lb-x").addEventListener("click", close);
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !lb.hidden) close(); });
  }

  // Featured AI process, only on the ai-production case.
  function aiSections() {
    var A = window.AI, x = A[lang], B = A.base;
    function fig(src, cap, cls) { return '<figure class="' + (cls || "") + '"><img src="' + B + src + '.jpg" alt="' + esc(cap) + '" loading="lazy"><figcaption>' + esc(cap) + "</figcaption></figure>"; }
    var P = x.phases, vis = [
      '<div class="shots">' + P[0].shots.map(function (r) { return "<div><b>" + r[0] + "</b><span>" + esc(r[1]) + "</span></div>"; }).join("") + '</div><p class="ph-note">' + esc(P[0].note) + "</p>",
      '<div class="refs">' + fig("character", P[1].caps[0], "wide") + fig("quarto", P[1].caps[1]) + fig("sala", P[1].caps[2]) + "</div>" +
        '<p class="ph-sub">' + esc(P[1].product) + '</p><div class="prod">' + fig("packshot", P[1].caps[3], "pack") + fig("ref-motion", P[1].caps[4]) + fig("ref-button", P[1].caps[5]) + fig("ref-arrival", P[1].caps[6]) + "</div>",
      '<div class="tall4">' + ["previs-quarto", "previs-botao", "previs-escadas", "previs-corrida"].map(function (f, i) { return fig(f, P[2].caps[i]); }).join("") + "</div>",
      '<div class="tall4">' + P[3].cmp.map(function (c) {
        return '<figure class="cmp" style="--p:50%"><div class="cmp-box"><img src="' + B + "cmp-" + c[0] + '-b.jpg" alt="" loading="lazy"><img class="cmp-top" src="' + B + "cmp-" + c[0] + '-a.jpg" alt="" loading="lazy"><span class="cmp-l">' + P[3].prev + '</span><span class="cmp-r">' + P[3].res + '</span><span class="cmp-bar"></span><input type="range" min="0" max="100" value="50" aria-label="' + esc(P[3].prev + " / " + P[3].res + ", " + c[1]) + '"></div><figcaption>' + esc(c[1]) + "</figcaption></figure>";
      }).join("") + '</div><div class="speech"><p>' + esc(P[3].speech) + '</p><div class="fala">' + [1, 2, 3].map(function (k) { return '<img src="' + B + "fala-" + k + '.jpg" alt="" loading="lazy">'; }).join("") + "</div></div>",
      "",
      '<div class="tall4">' + [1, 2, 3, 4].map(function (k) { return fig("sub-v" + k, P[5].caps[k - 1]); }).join("") + "</div>",
      ""
    ];
    var phases = P.map(function (ph, i) {
      return '<article class="phase card' + (vis[i] ? "" : " slim") + '"><div class="ph-head"><span class="ph-n">' + (i + 1) + '</span><h3>' + esc(ph.t) + '</h3><span class="tag">' + esc(ph.tools) + '</span></div><div class="ph-body"><p>' + esc(ph.d) + "</p>" + vis[i] + "</div></article>";
    }).join("");
    var grandma = '<section class="ai-feature card"><div class="phone"><video controls playsinline preload="metadata" poster="' + A.video + '.jpg" src="' + A.video + '.mp4"></video></div>' +
      '<div class="ai-intro"><span class="tag">' + x.kicker + '</span><h2 class="display">' + esc(x.title) + "</h2><p>" + esc(x.intro) + '</p><div class="ai-stats">' +
      x.stats.map(function (s) { return "<div><b>" + s[0] + "</b><span>" + esc(s[1]) + "</span></div>"; }).join("") + "</div></div></section>" +
      '<section class="ai-process"><div class="sec-head"><h2 class="display">' + x.processTitle + "</h2></div>" + phases + "</section>" +
      '<section class="ai-learn"><h2 class="display">' + x.learnTitle + '</h2><div class="learn-grid">' + x.learn.map(function (l) { return '<div class="card"><h3>' + esc(l[0]) + "</h3><p>" + esc(l[1]) + "</p></div>"; }).join("") + "</div></section>";
    var tabs = A.tabs[lang], ids = ["avo", "tv", "equipa"], cur = ids.indexOf(location.hash.slice(1)); if (cur < 0) cur = 0;
    var panels = [grandma, chPanel(), teamPanel()];
    return '<div class="ai-tabs" role="tablist">' + tabs.map(function (t, i) { return '<button type="button" role="tab" id="tab-' + ids[i] + '" aria-controls="pan-' + ids[i] + '" aria-selected="' + (i === cur) + '" data-tab="' + ids[i] + '">' + esc(t) + "</button>"; }).join("") + "</div>" +
      panels.map(function (p, i) { return '<div class="ai-panel" role="tabpanel" id="pan-' + ids[i] + '" aria-labelledby="tab-' + ids[i] + '"' + (i === cur ? "" : " hidden") + ">" + p + "</div>"; }).join("");
  }

  function chPanel() {
    var C = window.AI.ch, x = C[lang], B = C.base, P = x.phases;
    function fig(src, cap) { return '<figure><img src="' + B + src + '.jpg" alt="' + esc(cap) + '" loading="lazy"><figcaption>' + esc(cap) + "</figcaption></figure>"; }
    var vis = [
      '<div class="g4 w">' + ["man", "man-face", "woman", "woman-face"].map(function (f, i) { return fig(f, P[0].caps[i]); }).join("") + "</div>",
      '<div class="g3 w">' + ["hall", "living", "topview"].map(function (f, i) { return fig(f, P[1].caps[i]); }).join("") + "</div>",
      '<div class="pair w">' + fig("product-photo", P[2].prodCaps[0]) + '<span class="arrow" aria-hidden="true">→</span>' + fig("k-addlift", P[2].prodCaps[1]) + '</div><div class="g4 w">' +
        ["k-empty", "k-walk", "k-feet", "k-hand", "k-help", "k-daughter", "k-top", "k-smile"].map(function (f, i) { return fig(f, P[2].caps[i]); }).join("") + "</div>",
      '<figure class="clip"><video controls muted playsinline preload="metadata" poster="' + B + 'f2v.jpg" src="' + B + 'f2v.mp4"></video><figcaption>' + esc(P[3].clipCap) + "</figcaption></figure>",
      '<figure class="audio"><audio controls preload="none" src="' + B + 'jingle.m4a"></audio><figcaption>' + esc(P[4].audioCap) + "</figcaption></figure>",
      '<figure class="clip"><img src="' + B + 'after-effects.jpg" alt="' + esc(P[5].shotCap) + '" loading="lazy"><figcaption>' + esc(P[5].shotCap) + "</figcaption></figure>"
    ];
    var phases = P.map(function (ph, i) {
      return '<article class="phase card"><div class="ph-head"><span class="ph-n">' + (i + 1) + '</span><h3>' + esc(ph.t) + '</h3><span class="tag">' + esc(ph.tools) + '</span></div><div class="ph-body"><p>' + esc(ph.d) + "</p>" + vis[i] + "</div></article>";
    }).join("");
    return '<section class="ch-feature card"><div class="tv-frame"><video controls playsinline preload="metadata" poster="' + C.film + '.jpg" src="' + C.film + '.mp4"></video></div>' +
      '<div class="ai-intro"><span class="tag">' + x.kicker + '</span><h2 class="display">' + esc(x.title) + "</h2><p>" + esc(x.intro) + '</p><div class="ai-stats">' +
      x.stats.map(function (s) { return "<div><b>" + s[0] + "</b><span>" + esc(s[1]) + "</span></div>"; }).join("") + "</div></div></section>" +
      '<section class="ai-process"><div class="sec-head"><h2 class="display">' + x.processTitle + "</h2></div>" + phases + "</section>";
  }

  function teamPanel() {
    var T = window.AI.team, x = T[lang];
    return '<section class="team card"><div class="bulk-head"><h2 class="display">' + x.title + "</h2><p>" + esc(x.text) + '</p></div><div class="team-grid">' +
      T.items.map(function (it) { var t = it[lang]; return '<figure><div class="team-media" style="aspect-ratio:' + it.r + '"><video controls playsinline preload="metadata" poster="' + T.base + it.f + '.jpg" src="' + T.base + it.f + '.mp4"></video></div><figcaption><strong>' + esc(t[0]) + "</strong><span>" + esc(t[1]) + "</span></figcaption></figure>"; }).join("") + "</div></section>";
  }

  function bindAI() {
    var tabs = document.querySelectorAll(".ai-tabs [role=tab]");
    function sel(btn, focus) {
      tabs.forEach(function (t) { var on = t === btn; t.setAttribute("aria-selected", on); t.tabIndex = on ? 0 : -1; document.getElementById(t.getAttribute("aria-controls")).hidden = !on; });
      document.querySelectorAll(".ai-panel[hidden] video, .ai-panel[hidden] audio").forEach(function (m) { m.pause(); });
      history.replaceState(null, "", "#" + btn.dataset.tab); if (focus) btn.focus();
    }
    tabs.forEach(function (t, i) {
      t.tabIndex = t.getAttribute("aria-selected") === "true" ? 0 : -1;
      t.addEventListener("click", function () { sel(t); });
      t.addEventListener("keydown", function (e) {
        var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (d) { e.preventDefault(); sel(tabs[(i + d + tabs.length) % tabs.length], true); }
      });
    });
    document.querySelectorAll(".cmp input").forEach(function (r) {
      r.addEventListener("input", function () { r.closest(".cmp").style.setProperty("--p", r.value + "%"); });
    });
  }

  function bindAds() {
    var A = window.ADS; if (!A || !document.querySelector(".ads-wall")) return;
    var ui = A.ui[lang];
    // Play wall videos only while on screen.
    var io = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        var v = e.target;
        if (e.isIntersecting) { if (!v.src) v.src = v.dataset.src; v.play().catch(function () {}); } else v.pause();
      });
    }, { threshold: 0.4 }) : null;
    document.querySelectorAll(".ads-grid video").forEach(function (v) { if (io) io.observe(v); else v.src = v.dataset.src; });
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) document.querySelectorAll(".mk video").forEach(function (v) { v.removeAttribute("autoplay"); v.pause(); });

    var lb = document.querySelector(".lb"), stage = lb.querySelector(".lb-stage"), tabs = lb.querySelector(".lb-tabs"), cap = lb.querySelector(".lb-cap");
    function show(src, isVideo) {
      stage.innerHTML = isVideo ? '<video controls autoplay playsinline src="' + src + '.mp4" poster="' + src + '.jpg"></video>' : '<img src="' + src + '.jpg" alt="">';
    }
    function open() { lb.hidden = false; document.body.style.overflow = "hidden"; lb.querySelector(".lb-x").focus(); }
    function close() { lb.hidden = true; stage.innerHTML = ""; document.body.style.overflow = ""; }
    lb.addEventListener("click", function (e) { if (e.target === lb || e.target.classList.contains("lb-x")) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !lb.hidden) close(); });
    document.querySelectorAll("[data-ad]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var a = A.loose[+btn.dataset.ad], base = A.base + a.file;
        var fm = a.formats || ["post", "story"];
        tabs.innerHTML = fm.length < 2 ? "" : '<button type="button" aria-pressed="true" data-f="post">' + ui.feed + '</button><button type="button" aria-pressed="false" data-f="story">' + ui.story + "</button>";
        tabs.querySelectorAll("button").forEach(function (t) {
          t.addEventListener("click", function () {
            tabs.querySelectorAll("button").forEach(function (o) { o.setAttribute("aria-pressed", o === t); });
            show(base + "-" + t.dataset.f, a.video);
          });
        });
        cap.textContent = a[lang].t + " | " + a.market[lang] + (a.res ? " | " + a.res.join(", ") : "");
        show(base + "-" + fm[0], a.video); open();
      });
    });
    document.querySelectorAll("[data-bulk]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var p = btn.dataset.bulk.split(":"), b = A.bulks[+p[0]], m = b.markets[+p[1]];
        tabs.innerHTML = ""; cap.textContent = b[lang].title + " | " + m[lang] + (m.ctr ? " (" + ui.ctr + " " + m.ctr + ")" : "");
        show(A.base + b.dir + m.k, b.video); open();
      });
    });
  }

  function render() {
    document.documentElement.lang = lang;
    var page = document.body.dataset.page;
    document.getElementById("app").innerHTML = top() + (page === "case" ? casePage() : home());
    if (page === "home") document.title = "Paulo Ralha | Portfolio";
    bindAds(); bindAI(); bindTV(); bindLP(); bindNav();
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.addEventListener("click", function () { lang = b.dataset.lang; try { localStorage.setItem("lang", lang); } catch (e) {} render(); });
    });
  }
  render();
})();
