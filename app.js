/* ==========================================================================
   DT-U-Bordeaux — shared layout and page rendering
   ========================================================================== */

const NAV = [
  ["index.html", "Home"],
  ["research.html", "Research Projects"],
  ["team.html", "Team"],
  ["publications.html", "Publications"],
  ["news.html", "News"],
  ["contact.html", "Contact"],
];

const ICONS = {
  city: '<path d="M3 21h18M5 21V8l5-3v16M10 21V3l9 4v14M13 9h3M13 13h3M13 17h3M7 11h1M7 15h1"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/><path d="m3 17.5 9 5 9-5" opacity=".5"/>',
  people: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2a5 5 0 0 1 6 4.8"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  box: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/>',
  plane: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2Z"/>',
  cycle: '<path d="M20 12a8 8 0 0 1-13.7 5.7M4 12a8 8 0 0 1 13.7-5.7"/><path d="M18 3v4h-4M6 21v-4h4"/>',
  network: '<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><circle cx="12" cy="13" r="2"/><path d="M12 7.5V11M10.4 14.3l-3.6 2.4M13.6 14.3l3.6 2.4"/>',
  check: '<path d="M12 3 4 6v6c0 4.5 3.4 8.2 8 9 4.6-.8 8-4.5 8-9V6l-8-3Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
};
const icon = (name, cls = "ico") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

const projectHref = p => `${p.id}.html`;
const esc = (s = "") => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const byId = (list, id) => list.find(x => x.id === id);
const initials = name => name.split(/\s+/).map(w => w[0]).slice(0, 2).join("").toUpperCase();
const TYPE_LABEL = { journal: "Journal", conference: "Int'l conference", chapter: "Book chapter", national: "National conference", thesis: "Thesis" };

/* ---------- Layout ---------- */

function renderLayout() {
  const page = location.pathname.split("/").pop() || "index.html";
  const projectPage = PROJECTS.some(p => projectHref(p) === page);
  const current = projectPage ? "research.html" : page;
  const links = NAV.map(([href, label]) => {
    const active = href === current ? ' class="active"' : "";
    if (href !== "research.html")
      return `<a href="${href}"${active}${href === page ? ' aria-current="page"' : ""}>${label}</a>`;
    const items = PROJECTS.map(p =>
      `<a href="${projectHref(p)}"${projectHref(p) === page ? ' class="active" aria-current="page"' : ""}>${esc(p.title)}</a>`).join("");
    return `
      <div class="dropdown">
        <button class="drop-btn${active ? " active" : ""}" id="dropBtn" aria-expanded="false" aria-haspopup="true">${label}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="drop-menu" id="dropMenu">
          <a href="research.html"${page === "research.html" ? ' class="active" aria-current="page"' : ""}>All projects</a>${items}
        </div>
      </div>`;
  }).join("");

  document.getElementById("site-header").innerHTML = `
    <div class="nav wrap">
      <a href="index.html" class="brand" aria-label="${esc(SITE.name)} home">
        <span class="brand-mark">${twinMark()}</span>
        <span class="brand-text"><span><strong>DT</strong>·U-Bordeaux</span><small>${esc(SITE.fullName)}</small></span>
      </a>
      <nav class="links" id="navLinks">${links}</nav>
      <div class="nav-right">
        <button class="icon-btn" id="themeToggle" aria-label="Toggle dark mode" title="Toggle theme">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/></svg>
        </button>
        <button class="icon-btn menu-btn" id="menuToggle" aria-label="Menu" aria-expanded="false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
    </div>`;

  document.getElementById("site-footer").innerHTML = `
    <div class="wrap footer-grid">
      <div>
        <div class="brand footer-brand"><span class="brand-mark">${twinMark()}</span><span class="brand-text"><span><strong>DT</strong>·U-Bordeaux</span></span></div>
        <p class="muted">${esc(SITE.fullName)} — ${esc(SITE.university)}.<br>${esc(SITE.lab)}.</p>
      </div>
      <div>
        <h4>Explore</h4>
        <ul class="footer-links">${NAV.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h4>Address</h4>
        <p class="muted">${SITE.address.map(esc).join("<br>")}</p>
      </div>
    </div>
    <div class="wrap footer-bottom muted">© ${new Date().getFullYear()} ${esc(SITE.name)} · Hosted on GitHub Pages</div>`;

  const nav = document.getElementById("navLinks");
  const menuBtn = document.getElementById("menuToggle");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });

  const drop = document.getElementById("dropBtn");
  const dropMenu = document.getElementById("dropMenu");
  const setDrop = open => { dropMenu.classList.toggle("open", open); drop.setAttribute("aria-expanded", open); };
  drop.addEventListener("click", e => { e.stopPropagation(); setDrop(!dropMenu.classList.contains("open")); });
  document.addEventListener("click", e => { if (!e.target.closest(".dropdown")) setDrop(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") setDrop(false); });

  document.getElementById("themeToggle").addEventListener("click", () => {
    const root = document.documentElement;
    const dark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });
}

function twinMark() {
  return `<svg viewBox="0 0 32 32" aria-hidden="true">
    <rect x="3" y="7" width="12" height="18" rx="2" fill="currentColor"/>
    <rect x="17" y="7" width="12" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="3 2"/>
    <path d="M15 12h2M15 20h2" stroke="currentColor" stroke-width="2"/>
  </svg>`;
}

/* ---------- Components ---------- */

function projectCard(p, n) {
  return `
    <a class="card axis" href="${projectHref(p)}">
      <span class="axis-icon">${icon(p.icon, "ico lg")}</span>
      <span class="axis-num">${String(n).padStart(2, "0")}</span>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.summary)}</p>
      <span class="more">View project ${icon("arrow", "ico sm")}</span>
    </a>`;
}

function pubItem(p, showProjects = true) {
  const doi = p.doi ? `<a href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">DOI: ${esc(p.doi)}</a>` : "";
  const projects = showProjects ? (p.projects || []).map(id => {
    const pr = byId(PROJECTS, id);
    return pr ? `<a class="chip chip-link" href="${projectHref(pr)}">${esc(pr.short)}</a>` : "";
  }).join("") : "";
  return `
    <li class="pub">
      <div class="pub-meta"><span class="pub-year">${p.year}</span><span class="tag tag-${p.type}">${TYPE_LABEL[p.type] || p.type}</span>${p.status !== "Published" && p.type !== "thesis" ? `<span class="tag tag-status">${esc(p.status)}</span>` : ""}</div>
      <h3 class="pub-title">${esc(p.title)}</h3>
      <p class="pub-authors">${esc(p.authors)}</p>
      <p class="pub-venue">${esc(p.venue)} ${doi}</p>
      ${projects ? `<div class="pub-projects">${projects}</div>` : ""}
    </li>`;
}

function memberCard(m) {
  const photo = m.photo
    ? `<img src="${esc(m.photo)}" alt="${esc(m.name)}" loading="lazy">`
    : `<span>${initials(m.name)}</span>`;
  const labels = { website: "Website", scholar: "Google Scholar", orcid: "ORCID", linkedin: "LinkedIn", github: "GitHub", email: "Email" };
  const links = Object.entries(m.links || {}).map(([k, v]) =>
    `<a href="${k === "email" ? "mailto:" + esc(v) : esc(v)}" target="_blank" rel="noopener">${labels[k] || k}</a>`).join("");
  const projects = PROJECTS.filter(p => p.members.includes(m.id))
    .map(p => `<a class="chip chip-link" href="${projectHref(p)}">${esc(p.short)}</a>`).join("");
  const activities = (m.activities || []).map(a => `<span class="chip chip-plain">${esc(a)}</span>`).join("");
  return `
    <article class="card member" id="${esc(m.id)}">
      <div class="avatar">${photo}</div>
      <h3>${esc(m.name)}</h3>
      <p class="role">${esc(m.role) || "&nbsp;"}</p>
      ${m.bio ? `<p class="bio">${esc(m.bio)}</p>` : ""}
      ${projects ? `<div class="member-projects">${projects}</div>` : ""}
      ${activities ? `<div class="member-projects"><span class="mini-label">Activities</span>${activities}</div>` : ""}
      ${links ? `<div class="member-links">${links}</div>` : ""}
    </article>`;
}

function fmtDate(d) {
  return new Date(d + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function newsItem(n) {
  const pr = n.project && byId(PROJECTS, n.project);
  return `
    <li class="news-item">
      <time datetime="${n.date}">${fmtDate(n.date)}</time>
      <div><h3>${esc(n.title)}</h3><p>${esc(n.text)}</p>
      ${pr ? `<a class="chip chip-link" href="${projectHref(pr)}">${esc(pr.short)}</a>` : ""}</div>
    </li>`;
}

/* ---------- Pages ---------- */

const PAGES = {
  home() {
    set("stat-projects", PROJECTS.length);
    set("stat-members", TEAM.length);
    set("stat-pubs", PUBLICATIONS.filter(p => p.status === "Published" || p.type === "thesis").length);
    html("home-axes", AXES.map(a => `
      <div class="card axis">
        <span class="axis-icon">${icon(a.icon, "ico lg")}</span>
        <h3>${esc(a.title)}</h3><p>${esc(a.summary)}</p>
      </div>`).join(""));
    html("home-projects", PROJECTS.map((p, i) => projectCard(p, i + 1)).join(""));
  },

  research() {
    html("research-projects", PROJECTS.map((p, i) => projectCard(p, i + 1)).join(""));
  },

  project() {
    const p = byId(PROJECTS, document.body.dataset.project);
    if (!p) {
      html("project-root", `<div class="wrap section"><h1>Project not found</h1><p><a href="research.html">Back to research</a></p></div>`);
      return;
    }
    document.title = `${p.short} — ${SITE.name}`;
    const members = p.members.map(mid => byId(TEAM, mid)).filter(Boolean);
    const pubs = PUBLICATIONS.filter(x => (x.projects || []).includes(p.id));
    const news = NEWS.filter(n => n.project === p.id);
    html("project-root", `
      <section class="page-hero">
        <div class="wrap">
          <a class="back" href="research.html">← All projects</a>
          <div class="card-top"><span class="chips">${p.group ? `<span class="chip chip-dark">${p.group === "UDT" ? "Urban Digital Twin" : esc(p.group)}</span>` : ""}${p.programme ? `<span class="chip chip-dark">${esc(p.programme)}</span>` : ""}</span>${p.status ? `<span class="status status-dark">${esc(p.status)}</span>` : ""}</div>
          <h1>${esc(p.title)}</h1>
          ${p.fullName ? `<p class="full-name">${esc(p.fullName)}</p>` : ""}
          <p class="lead">${esc(p.summary)}</p>
        </div>
      </section>
      <div class="wrap section project-layout">
        <div>
          <h2>About the project</h2>
          ${p.description.map(t => typeof t === "string"
            ? `<p>${esc(t)}</p>`
            : `<${t.ordered ? "ol" : "ul"} class="bullets">${t.items.map(i => `<li>${esc(i)}</li>`).join("")}</${t.ordered ? "ol" : "ul"}>`).join("")}
          ${p.perspectives ? `<h2>Research perspectives</h2><ul class="bullets">${p.perspectives.map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
          <h2>Publications <span class="count-badge">${pubs.length}</span></h2>
          ${pubs.length ? `<ol class="pubs">${pubs.map(x => pubItem(x, false)).join("")}</ol>` : '<p class="muted">Publications coming soon.</p>'}
          ${news.length ? `<h2>News & talks</h2><ul class="news">${news.map(newsItem).join("")}</ul>` : ""}
        </div>
        <aside class="sidebar">
          <div class="card">
            <h4>Team</h4>
            ${members.length
              ? `<ul class="mini-team">${members.map(m => `<li><a href="team.html#${m.id}"><span class="avatar sm">${m.photo ? `<img src="${esc(m.photo)}" alt="">` : initials(m.name)}</span><span>${esc(m.name)}<small>${esc(m.role)}</small></span></a></li>`).join("")}</ul>`
              : '<p class="muted">Team to be announced.</p>'}
          </div>
          ${p.collaborations && p.collaborations.length ? `<div class="card"><h4>Collaborations</h4><ul class="plain">${p.collaborations.map(c => `<li>${esc(c)}</li>`).join("")}</ul></div>` : ""}
          ${p.funding.length ? `<div class="card"><h4>Funding & partners</h4><ul class="plain">${p.funding.map(f => `<li>${esc(f)}</li>`).join("")}</ul></div>` : ""}
          ${p.links.length ? `<div class="card"><h4>Links</h4><ul class="plain">${p.links.map(l => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${icon("link", "ico sm")} ${esc(l.label)}</a></li>`).join("")}</ul></div>` : ""}
        </aside>
      </div>`);
  },

  team() {
    html("team-grid", TEAM.map(memberCard).join(""));
  },

  publications() {
    const state = { type: "all", project: "all", q: "" };
    const types = ["all", ...Object.keys(TYPE_LABEL).filter(t => PUBLICATIONS.some(p => p.type === t))];
    html("pub-types", types.map(t =>
      `<button class="filter${t === "all" ? " active" : ""}" data-type="${t}">${t === "all" ? "All" : TYPE_LABEL[t]} <span>${t === "all" ? PUBLICATIONS.length : PUBLICATIONS.filter(p => p.type === t).length}</span></button>`).join(""));
    const sel = document.getElementById("pub-project");
    sel.innerHTML = `<option value="all">All projects</option>` + PROJECTS.map(p => `<option value="${p.id}">${esc(p.short)}</option>`).join("");

    const draw = () => {
      const q = state.q.toLowerCase();
      const list = PUBLICATIONS.filter(p =>
        (state.type === "all" || p.type === state.type) &&
        (state.project === "all" || (p.projects || []).includes(state.project)) &&
        (!q || `${p.title} ${p.authors} ${p.venue}`.toLowerCase().includes(q)));
      const years = [...new Set(list.map(p => p.year))].sort((a, b) => b - a);
      html("pub-list", years.map(y => `<h2 class="year-head">${y}</h2><ol class="pubs">${list.filter(p => p.year === y).map(p => pubItem(p)).join("")}</ol>`).join("")
        || '<p class="muted">No publications match these filters.</p>');
    };
    document.getElementById("pub-types").addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      document.querySelectorAll("#pub-types .filter").forEach(x => x.classList.toggle("active", x === b));
      state.type = b.dataset.type; draw();
    });
    sel.addEventListener("change", () => { state.project = sel.value; draw(); });
    document.getElementById("pub-search").addEventListener("input", e => { state.q = e.target.value; draw(); });
    draw();
  },

  news() {
    html("news-list", NEWS.map(newsItem).join(""));
  },

  contact() {
    html("contact-address", SITE.address.map(esc).join("<br>"));
    html("contact-email", SITE.email
      ? `<a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>`
      : '<span class="muted">Contact email coming soon.</span>');
  },
};

function set(id, v) { const el = document.getElementById(id); if (el) el.textContent = v; }
function html(id, v) { const el = document.getElementById(id); if (el) el.innerHTML = v; }

document.addEventListener("DOMContentLoaded", () => {
  renderLayout();
  const page = document.body.dataset.page;
  if (PAGES[page]) PAGES[page]();
});
