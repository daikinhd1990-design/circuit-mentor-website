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
      <div class="resource-meta"><span>${escapeHtml(item.updated)}</span>
      <a class="download-link" href="${safeUrl(item.url)}" target="_blank" rel="noopener noreferrer">Download ↗</a></div>
    </article>`).join("");
  empty.hidden = matches.length !== 0;
}
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function safeUrl(value) {
  try { const u = new URL(value); return ["https:", "http:"].includes(u.protocol) ? u.href : "#"; }
  catch { return "#"; }
}
search.addEventListener("input", renderResources);
document.getElementById("filters").addEventListener("click", e => {
  const button = e.target.closest("button[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  document.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b === button));
  renderResources();
});
document.getElementById("menuToggle").addEventListener("click", () => document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", () => document.getElementById("nav").classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();
renderResources();