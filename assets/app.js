// Renders the home page and case pages from assets/content.js, in English or Portuguese.
(function () {
  var S = window.SITE;

  function getLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "pt" || q === "en") return q;
    try { var s = localStorage.getItem("lang"); if (s === "pt" || s === "en") return s; } catch (e) {}
    return (navigator.language || "en").toLowerCase().indexOf("pt") === 0 ? "pt" : "en";
  }
  var lang = getLang();

  function esc(t) {
    return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  function ratioClass(r) { return "r" + r.replace("/", "x"); }

  // A placeholder frame in the work's real format; swaps to an image or video once files exist.
  function frame(ratio, label, src) {
    var fmt = S.ui[lang].formats[ratio] || "";
    var media = "";
    if (src) media = /\.(mp4|webm)$/i.test(src)
      ? '<video src="' + esc(src) + '" muted loop playsinline autoplay></video>'
      : '<img src="' + esc(src) + '" alt="" loading="lazy">';
    return '<div class="frame" style="aspect-ratio:' + ratio + '"><span class="fmt">' + fmt + "</span>" + (media || esc(label)) + "</div>";
  }

  function nav() {
    var u = S.ui[lang];
    var home = document.body.dataset.page === "home" ? "" : "index.html";
    return '<nav class="nav" aria-label="Main">' +
      '<a href="' + home + '#work">' + u.nav.work + "</a>" +
      '<a href="' + home + '#about">' + u.nav.about + "</a>" +
      '<a href="' + home + '#contact">' + u.nav.contact + "</a>" +
      '<div class="lang" role="group" aria-label="Language">' +
      '<button type="button" data-lang="pt" aria-pressed="' + (lang === "pt") + '">PT</button>' +
      '<button type="button" data-lang="en" aria-pressed="' + (lang === "en") + '">EN</button>' +
      "</div></nav>";
  }

  function home() {
    var u = S.ui[lang];
    var cases = S.cases.map(function (c) {
      var t = c[lang];
      return '<li class="case-row"><a href="case.html?c=' + c.slug + '" data-ratio="' + c.ratio + '">' +
        '<h3 class="display">' + esc(t.title) + "</h3>" +
        '<p class="case-meta"><span class="tag">' + esc(t.tag) + "</span>" + esc(t.summary) + "</p></a></li>";
    }).join("");
    var exp = S.experience.map(function (e) {
      return '<li><span class="yrs">' + e.years + '</span><span><span class="co">' + esc(e.company) + '</span><span class="rl">' + esc(e[lang]) + "</span></span></li>";
    }).join("");
    var about = S.about[lang].map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");

    return '<main class="wrap">' +
      '<header class="hero"><h1 class="display name">' + S.name + "</h1>" +
      '<div class="hero-row"><div class="portrait">' + (S.photo ? '<img src="' + S.photo + '" alt="' + S.name + '">' : "PR") + "</div>" +
      '<div><p class="role">' + u.role + '</p><p class="intro">' + esc(u.intro) + "</p>" +
      '<p class="brands"><b>Stannah</b>, <b>TIFFOSI</b>, <b>INSIZIUM</b>, <b>Hypercube</b></p></div></div></header>' +

      '<section class="reel" aria-label="' + u.showreel + '">' + frame("16/9", u.showreelSoon, S.showreel) +
      '<p class="caption">' + u.showreel + "</p></section>" +

      '<section class="work" id="work"><div class="section-head"><h2>' + u.work + "</h2><span>" + S.cases.length + "</span></div>" +
      '<ul class="cases">' + cases + "</ul></section>" +

      '<section class="about" id="about"><div class="section-head"><h2>' + u.about + "</h2></div>" +
      '<div class="about-grid"><div class="about-text">' + about + "</div>" +
      '<div><h3 style="font-size:18px;margin:0 0 4px">' + u.experience + '</h3><ul class="timeline">' + exp + "</ul></div></div></section>" +

      '<section class="contact" id="contact"><div class="section-head"><h2>' + u.contact + "</h2></div>" +
      "<p>" + esc(u.contactText) + "</p>" +
      '<a class="display mail" href="mailto:' + S.email + '">' + S.email + "</a>" +
      '<div class="links"><a href="' + S.linkedin + '" target="_blank" rel="noopener">LinkedIn</a>' +
      (S.cv && S.cv[lang] ? '<a href="' + S.cv[lang] + '" download>' + u.cv + "</a>" : '<span class="soon">' + u.cv + ": " + u.cvSoon + "</span>") +
      "</div></section></main>" +
      '<div class="peek" aria-hidden="true"></div>';
  }

  function casePage() {
    var u = S.ui[lang];
    var slug = new URLSearchParams(location.search).get("c");
    var i = Math.max(0, S.cases.findIndex(function (c) { return c.slug === slug; }));
    var c = S.cases[i], t = c[lang], next = S.cases[(i + 1) % S.cases.length];
    document.title = t.title + " | " + S.name;
    var imgs = "";
    for (var k = 0; k < c.images; k++) imgs += frame(c.ratio, u.imageSoon, c.files && c.files[k]);
    return '<main class="wrap">' +
      '<header class="case-top"><a class="back" href="index.html#work">' + u.back + "</a>" +
      '<h1 class="display">' + esc(t.title) + '</h1><p class="tag">' + esc(t.tag) + '</p><p class="summary">' + esc(t.summary) + "</p></header>" +
      '<section class="story">' +
      "<div><h2>" + u.challenge + "</h2><p>" + esc(t.challenge) + "</p></div>" +
      "<div><h2>" + u.approach + "</h2><p>" + esc(t.approach) + "</p></div>" +
      "<div><h2>" + u.result + "</h2><p>" + esc(t.result) + "</p></div></section>" +
      '<section class="gallery ' + ratioClass(c.ratio) + '" aria-label="' + u.gallery + '">' + imgs + "</section>" +
      '<div class="next"><a href="case.html?c=' + next.slug + '"><span class="label">' + u.next + '</span><span class="display">' + esc(next[lang].title) + "</span></a></div></main>";
  }

  function render() {
    document.documentElement.lang = lang;
    var page = document.body.dataset.page;
    document.getElementById("app").innerHTML = (page === "case" ? casePage() : home()) + nav();
    if (page === "home") document.title = S.name + " | " + S.ui[lang].role;
    bind();
  }

  function bind() {
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.addEventListener("click", function () {
        lang = b.dataset.lang;
        try { localStorage.setItem("lang", lang); } catch (e) {}
        render();
      });
    });
    var peek = document.querySelector(".peek");
    if (!peek) return;
    document.querySelectorAll(".case-row a").forEach(function (a) {
      a.addEventListener("mouseenter", function () {
        var r = a.dataset.ratio;
        peek.innerHTML = frame(r, "", null);
        peek.style.width = r === "9/16" ? "160px" : r === "4/5" ? "200px" : "300px";
        peek.classList.add("on");
      });
      a.addEventListener("mousemove", function (e) { peek.style.left = e.clientX + "px"; peek.style.top = e.clientY + "px"; });
      a.addEventListener("mouseleave", function () { peek.classList.remove("on"); });
    });
  }

  render();
})();
