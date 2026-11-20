/* ---------- Helpers ---------- */
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function safeUrl(value) {
  try { const u = new URL(value); return ["https:", "http:"].includes(u.protocol) ? u.href : "#"; }
  catch { return "#"; }
}
function safeId(value) {
  const id = String(value ?? "").trim();
  return /^[A-Za-z0-9_-]+$/.test(id) ? id : "";
}

/* ---------- Downloads: search and filter ---------- */
const grid = document.getElementById("resourceGrid");
const search = document.getElementById("searchInput");
const empty = document.getElementById("emptyState");
let activeFilter = "All";

function renderResources() {
  const term = search.value.trim().toLowerCase();
  const matches = resources.filter(item => {
    const categoryMatch = activeFilter === "All" || item.category === activeFilter;
    const textMatch = `${item.title} ${item.description} ${item.category} ${item.format}`.toLowerCase().includes(term);
    return categoryMatch && textMatch;
  });
  grid.innerHTML = matches.map(item => `
    <article class="resource-card">
      <span class="file-type">${escapeHtml(item.category)} · ${escapeHtml(item.format)}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
      <div class="resource-meta">
        <span>${escapeHtml(item.updated)}</span>
        <a class="download-link" href="${safeUrl(item.url)}" target="_blank" rel="noopener noreferrer">Download</a>
      </div>
    </article>`).join("");
  empty.hidden = matches.length !== 0;
}
search.addEventListener("input", renderResources);
document.getElementById("filters").addEventListener("click", e => {
  const button = e.target.closest("button[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  document.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b === button));
  renderResources();
});

/* ---------- Videos: player, most viewed, playlists ---------- */
const player = document.getElementById("player");
const playerNow = document.getElementById("playerNow");
const LATEST_SRC = "https://www.youtube.com/embed/videoseries?list=UUfQs1XyjNaPsnr4hdW_QA2g";

function playInPlayer(src, label) {
  player.src = src;
  playerNow.textContent = "Now showing: " + label;
  player.closest(".video-frame").scrollIntoView({ behavior: "smooth", block: "center" });
}

const topList = (typeof topVideos !== "undefined" ? topVideos : []).filter(v => safeId(v.id));
const playlistList = (typeof playlists !== "undefined" ? playlists : []).filter(p => safeId(p.id));

if (topList.length) {
  document.getElementById("tab-top").hidden = false;
  document.getElementById("topGrid").innerHTML = topList.map((v, i) => {
    const id = safeId(v.id);
    return `
    <div class="media-wrap">
      <button class="media-card" type="button" data-play="video" data-id="${id}" data-title="${escapeHtml(v.title)}">
        <span class="thumb">
          <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy">
          <span class="rank">#${i + 1}</span>
        </span>
        <span class="media-body">
          <h3>${escapeHtml(v.title)}</h3>
          <span class="play-hint">Play here</span>
        </span>
      </button>
      <a class="media-link" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener">Open on YouTube</a>
    </div>`;
  }).join("");
}

if (playlistList.length) {
  document.getElementById("tab-playlists").hidden = false;
  document.getElementById("playlistGrid").innerHTML = playlistList.map(p => {
    const id = safeId(p.id);
    const thumb = safeId(p.thumb);
    const img = thumb ? `<img src="https://i.ytimg.com/vi/${thumb}/hqdefault.jpg" alt="" loading="lazy">` : "";
    const badge = p.count ? `<span class="badge">${escapeHtml(p.count)}</span>` : "";
    return `
    <div class="media-wrap">
      <button class="media-card" type="button" data-play="playlist" data-id="${id}" data-title="${escapeHtml(p.title)}">
        <span class="thumb">${img}${badge}</span>
        <span class="media-body">
          <h3>${escapeHtml(p.title)}</h3>
          <span class="play-hint">Play playlist here</span>
        </span>
      </button>
      <a class="media-link" href="https://www.youtube.com/playlist?list=${id}" target="_blank" rel="noopener">Open on YouTube</a>
    </div>`;
  }).join("");
}

document.querySelectorAll(".card-grid").forEach(gridEl => {
  gridEl.addEventListener("click", e => {
    const card = e.target.closest("button[data-play]");
    if (!card) return;
    const id = card.dataset.id;
    if (card.dataset.play === "video") {
      playInPlayer(`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`, card.dataset.title);
    } else {
      playInPlayer(`https://www.youtube.com/embed/videoseries?list=${id}&autoplay=1`, "playlist · " + card.dataset.title);
    }
  });
});

document.getElementById("playLatest").addEventListener("click", () => playInPlayer(LATEST_SRC, "latest uploads"));

/* Tabs */
const tabs = document.querySelectorAll(".tab");
function showTab(name) {
  tabs.forEach(t => {
    const on = t.dataset.tab === name;
    t.classList.toggle("active", on);
    t.setAttribute("aria-selected", on ? "true" : "false");
    document.getElementById("panel-" + t.dataset.tab).hidden = !on;
  });
}
tabs.forEach(t => t.addEventListener("click", () => showTab(t.dataset.tab)));
/* Open "Most viewed" first when it has content */
if (topList.length) showTab("top");

/* ---------- Menu and footer ---------- */
const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menuToggle");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  menuToggle.textContent = open ? "Close" : "Menu";
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "Menu";
}));
document.getElementById("year").textContent = new Date().getFullYear();

renderResources();
