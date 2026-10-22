(function () {
  "use strict";

  var D = window.WBAC;
  var $ = function (sel) { return document.querySelector(sel); };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function isPlaceholder(s) { return !s || /TODO/.test(s); }

  /* ── Icons ───────────────────────────────────────────── */
  var ICONS = {
    groupme: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M12 3c5 0 9 3.4 9 7.7s-4 7.7-9 7.7c-.9 0-1.8-.1-2.6-.3L5 20.5l.9-3.9C4.1 15.2 3 13.1 3 10.7 3 6.4 7 3 12 3Z"/><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" d="M10.2 7.4v6.6M13.8 7.4v6.6M8 9.5h8M8 12h8"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 7.3A4.7 4.7 0 1 0 16.7 12 4.7 4.7 0 0 0 12 7.3Zm0 7.7a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm6-7.9a1.1 1.1 0 1 1-1.1-1.1A1.1 1.1 0 0 1 18 7.1ZM21.1 8.2a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-3.8-1.5C14.3 2.8 9.7 2.8 8.2 2.9a5.4 5.4 0 0 0-3.8 1.5 5.4 5.4 0 0 0-1.5 3.8c-.1 1.5-.1 6.1 0 7.6a5.4 5.4 0 0 0 1.5 3.8 5.4 5.4 0 0 0 3.8 1.5c1.5.1 6.1.1 7.6 0a5.4 5.4 0 0 0 3.8-1.5 5.4 5.4 0 0 0 1.5-3.8c.1-1.5.1-6.1 0-7.6Zm-2 9.3a3 3 0 0 1-1.7 1.7c-1.2.5-4 .4-5.4.4s-4.2.1-5.4-.4a3 3 0 0 1-1.7-1.7c-.5-1.2-.4-4-.4-5.5s-.1-4.2.4-5.4a3 3 0 0 1 1.7-1.7c1.2-.5 4-.4 5.4-.4s4.2-.1 5.4.4a3 3 0 0 1 1.7 1.7c.5 1.2.4 4 .4 5.4s.1 4.3-.4 5.5Z"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.8 3h3.1l-6.8 7.7 8 10.3h-6.2l-4.9-6.3L5.4 21H2.3l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.5l11.2 14.5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.1 2.1 2.1 0 0 1 0 4.1ZM7.1 20.5H3.5V9h3.6v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M3 5.5h18v13H3zM3.5 6l8.5 7 8.5-7"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11Z"/><circle cx="12" cy="10" r="2.3" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path fill="none" stroke="currentColor" stroke-width="1.8" d="M12 7.5V12l3 2"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="M5 12h13M13 6l6 6-6 6"/></svg>',
  };

  /* ── Dates ───────────────────────────────────────────── */
  function toDate(day, time) {
    var d = day.split("-").map(Number);
    var t = (time || "00:00").split(":").map(Number);
    return new Date(d[0], d[1] - 1, d[2], t[0], t[1]);
  }

  function fmtTime(time) {
    var t = time.split(":").map(Number);
    var h = t[0] % 12 || 12;
    return h + (t[1] ? ":" + String(t[1]).padStart(2, "0") : "") + (t[0] < 12 ? " AM" : " PM");
  }

  function calStamp(day, time) {
    return day.replace(/-/g, "") + "T" + time.replace(":", "") + "00";
  }

  function calendarUrl(m) {
    var p = new URLSearchParams({
      action: "TEMPLATE",
      text: D.short + ": " + m.title,
      dates: calStamp(m.date, m.start) + "/" + calStamp(m.date, m.end || m.start),
      details: m.description || "",
      location: m.location || "",
      ctz: D.timezone,
    });
    return "https://calendar.google.com/calendar/render?" + p.toString();
  }

  /* ── Connect / link hub ──────────────────────────────── */
  function renderLinks() {
    var el = $("#link-hub");
    if (!el) return;
    el.innerHTML = D.links.map(function (l) {
      var soon = isPlaceholder(l.url);
      var tag = soon ? "div" : "a";
      var attrs = soon ? ' aria-disabled="true"' : ' href="' + esc(l.url) + '" target="_blank" rel="noopener"';
      return (
        "<" + tag + ' class="hub-card hub-' + esc(l.id) + (soon ? " is-soon" : "") + '"' + attrs + ">" +
          '<span class="hub-icon">' + (ICONS[l.id] || "") + "</span>" +
          '<span class="hub-body">' +
            '<span class="hub-label">' + esc(l.label) + "</span>" +
            '<span class="hub-handle">' + (soon ? "Link coming soon" : esc(l.handle)) + "</span>" +
            '<span class="hub-blurb">' + esc(l.blurb) + "</span>" +
          "</span>" +
          '<span class="hub-arrow">' + ICONS.arrow + "</span>" +
        "</" + tag + ">"
      );
    }).join("");
  }

  /* ── Meetings ────────────────────────────────────────── */
  function meetingCard(m, featured) {
    var start = toDate(m.date, m.start);
    var month = start.toLocaleString("en-US", { month: "short" });
    var weekday = start.toLocaleString("en-US", { weekday: "long" });
    var time = fmtTime(m.start) + (m.end ? " – " + fmtTime(m.end) : "");
    return (
      '<article class="meeting' + (featured ? " is-next" : "") + '">' +
        '<div class="meeting-date" aria-hidden="true">' +
          '<span class="md-month">' + month + "</span>" +
          '<span class="md-day">' + start.getDate() + "</span>" +
          '<span class="md-weekday">' + weekday.slice(0, 3) + "</span>" +
        "</div>" +
        '<div class="meeting-body">' +
          (featured ? '<span class="eyebrow eyebrow-accent">Next meeting</span>' : "") +
          "<h3>" + esc(m.title) + "</h3>" +
          '<p class="meeting-meta">' +
            '<span class="sr-only">' + weekday + ", " + start.toLocaleDateString("en-US", { month: "long", day: "numeric" }) + ". </span>" +
            '<span>' + ICONS.clock + time + "</span>" +
            '<span>' + ICONS.pin + esc(m.location) + "</span>" +
          "</p>" +
          (m.description ? '<p class="meeting-desc">' + esc(m.description) + "</p>" : "") +
          (featured ? '<a class="btn btn-ghost btn-sm" href="' + esc(calendarUrl(m)) + '" target="_blank" rel="noopener">Add to calendar</a>' : "") +
        "</div>" +
      "</article>"
    );
  }

  function renderMeetings() {
    var up = $("#meetings-upcoming");
    var past = $("#meetings-past");
    if (!up) return;
    var now = new Date();
    var sorted = D.meetings.slice().sort(function (a, b) {
      return toDate(a.date, a.start) - toDate(b.date, b.start);
    });
    var upcoming = sorted.filter(function (m) { return toDate(m.date, m.end || m.start) >= now; });
    var done = sorted.filter(function (m) { return toDate(m.date, m.end || m.start) < now; }).reverse();

    var join = D.links.filter(function (l) { return l.id === "groupme"; })[0];
    up.innerHTML = upcoming.length
      ? upcoming.map(function (m, i) { return meetingCard(m, i === 0); }).join("")
      : '<div class="empty">' +
          "<h3>Next meeting coming soon</h3>" +
          "<p>Dates and rooms are announced in the GroupMe first. Join so you don't miss it.</p>" +
          (join ? '<a class="btn btn-primary btn-sm" href="' + esc(join.url) + '" target="_blank" rel="noopener">Join the GroupMe</a>' : "") +
        "</div>";

    if (past) {
      past.innerHTML = done.map(function (m) { return meetingCard(m, false); }).join("");
      past.closest("details").hidden = !done.length;
    }
  }

  /* ── Leadership ──────────────────────────────────────── */
  function initials(name) {
    if (isPlaceholder(name)) return "?";
    return name.split(/\s+/).map(function (w) { return w[0]; }).slice(0, 2).join("").toUpperCase();
  }

  function renderLeadership() {
    var el = $("#leadership-grid");
    if (!el) return;
    el.innerHTML = D.leadership.map(function (p) {
      var name = isPlaceholder(p.name) ? "Name coming soon" : p.name;
      var sub = [p.year, p.major].filter(Boolean).join(" · ");
      var socials = "";
      if (p.linkedin) socials += '<a href="' + esc(p.linkedin) + '" target="_blank" rel="noopener" aria-label="' + esc(name) + ' on LinkedIn">' + ICONS.linkedin + "</a>";
      if (p.email) socials += '<a href="mailto:' + esc(p.email) + '" aria-label="Email ' + esc(name) + '">' + ICONS.mail + "</a>";
      return (
        '<article class="leader">' +
          '<div class="leader-photo">' +
            (p.photo
              ? '<img src="' + esc(p.photo) + '" alt="' + esc(name) + '" loading="lazy">'
              : '<span class="leader-initials" aria-hidden="true">' + initials(p.name) + "</span>") +
          "</div>" +
          '<span class="eyebrow">' + esc(p.role) + "</span>" +
          '<h3 class="' + (isPlaceholder(p.name) ? "is-placeholder" : "") + '">' + esc(name) + "</h3>" +
          (sub ? '<p class="leader-sub">' + esc(sub) + "</p>" : "") +
          (p.bio ? '<p class="leader-bio">' + esc(p.bio) + "</p>" : "") +
          (socials ? '<div class="leader-socials">' + socials + "</div>" : "") +
        "</article>"
      );
    }).join("");
  }

  /* ── Projects ────────────────────────────────────────── */
  function projectCard(p) {
    var hasLink = !isPlaceholder(p.link);
    var tag = hasLink ? "a" : "article";
    var attrs = hasLink ? ' href="' + esc(p.link) + '" target="_blank" rel="noopener"' : "";
    return (
      "<" + tag + ' class="project" data-category="' + esc(p.category) + '"' + attrs + ">" +
        (p.image
          ? '<div class="project-media"><img src="' + esc(p.image) + '" alt="" loading="lazy"></div>'
          : '<div class="project-media project-media-blank" aria-hidden="true"><span>' + esc(p.category) + "</span></div>") +
        '<div class="project-body">' +
          '<div class="project-tags">' +
            '<span class="tag">' + esc(p.category) + "</span>" +
            '<span class="tag tag-status' + (p.status === "In progress" ? " is-live" : "") + '">' + esc(p.status) + "</span>" +
          "</div>" +
          "<h3>" + esc(p.title) + "</h3>" +
          "<p>" + esc(p.summary) + "</p>" +
          '<span class="project-date">' + esc(p.date) + (hasLink ? '<span class="project-link">View ' + ICONS.arrow + "</span>" : "") + "</span>" +
        "</div>" +
      "</" + tag + ">"
    );
  }

  function renderProjects() {
    var teaser = $("#projects-teaser");
    if (teaser) teaser.innerHTML = D.projects.slice(0, 3).map(projectCard).join("");

    var grid = $("#projects-grid");
    if (!grid) return;
    grid.innerHTML = D.projects.map(projectCard).join("");

    var filters = $("#project-filters");
    var cats = D.projects.map(function (p) { return p.category; })
      .filter(function (c, i, a) { return a.indexOf(c) === i; });
    filters.innerHTML = ["All"].concat(cats).map(function (c, i) {
      return '<button type="button" class="chip" aria-pressed="' + (i === 0) + '" data-filter="' + esc(c) + '">' + esc(c) + "</button>";
    }).join("");

    filters.addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      var f = btn.dataset.filter;
      filters.querySelectorAll(".chip").forEach(function (b) { b.setAttribute("aria-pressed", b === btn); });
      grid.querySelectorAll(".project").forEach(function (card) {
        card.hidden = f !== "All" && card.dataset.category !== f;
      });
    });
  }

  /* ── Hero shot chart (decorative) ────────────────────── */
  function renderShotChart() {
    var g = $("#shots");
    if (!g) return;
    var seed = 7;
    var rand = function () { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
    var hoop = { x: 250, y: 52 };
    var made = 0, n = 64, html = "";
    for (var i = 0; i < n; i++) {
      // Mix of rim attempts, mid-range and threes, the modern shot diet.
      var r = rand(), dist, ang = (rand() * 0.92 + 0.04) * Math.PI;
      if (r < 0.35) dist = 10 + rand() * 45;
      else if (r < 0.55) dist = 80 + rand() * 120;
      else dist = 245 + rand() * 40;
      var x = hoop.x + Math.cos(ang) * dist;
      var y = hoop.y + Math.sin(ang) * dist;
      if (x < 12 || x > 488 || y > 440) { i--; continue; }
      var pMake = dist < 60 ? 0.64 : dist < 230 ? 0.41 : 0.37;
      var hit = rand() < pMake;
      if (hit) made++;
      html += hit
        ? '<circle class="shot-made" cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="6"/>'
        : '<g class="shot-miss" transform="translate(' + x.toFixed(1) + " " + y.toFixed(1) + ')"><path d="M-4.5-4.5 4.5 4.5M4.5-4.5-4.5 4.5"/></g>';
    }
    g.innerHTML = html;
    var stat = $("#shot-stat");
    if (stat) stat.textContent = made + "/" + n + " FG · " + (made / n * 100).toFixed(1) + "%";
  }

  /* ── Nav ─────────────────────────────────────────────── */
  function initNav() {
    var toggle = $(".nav-toggle");
    var nav = $("#site-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      }
    });
  }

  function renderFooter() {
    var y = $("#year");
    if (y) y.textContent = new Date().getFullYear();
    var socials = $("#footer-socials");
    if (socials) {
      socials.innerHTML = D.links.filter(function (l) { return !isPlaceholder(l.url); }).map(function (l) {
        return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener" aria-label="' + esc(l.label) + '">' + (ICONS[l.id] || esc(l.label)) + "</a>";
      }).join("") + (D.email ? '<a href="mailto:' + esc(D.email) + '" aria-label="Email">' + ICONS.mail + "</a>" : "");
    }
    document.querySelectorAll("[data-join]").forEach(function (a) {
      var gm = D.links.filter(function (l) { return l.id === "groupme"; })[0];
      if (gm) a.href = gm.url;
    });
  }

  initNav();
  renderLinks();
  renderMeetings();
  renderLeadership();
  renderProjects();
  renderShotChart();
  renderFooter();
})();
