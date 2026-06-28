/* Atheric AI — rendering layer.
   Builds layout, widgets and the forecast chart from AthericData. */

const ICONS = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  bars: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="20" x2="4" y2="13"/><line x1="10" y1="20" x2="10" y2="5"/><line x1="16" y1="20" x2="16" y2="9"/><rect x="3" y="3" width="18" height="18" rx="3"/></svg>',
  card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  aperture: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="3" x2="12" y2="9"/><line x1="3.5" y1="8" x2="9" y2="11"/><line x1="3.5" y1="16" x2="9" y2="13"/><line x1="12" y1="21" x2="12" y2="15"/><line x1="20.5" y1="16" x2="15" y2="13"/><line x1="20.5" y1="8" x2="15" y2="11"/></svg>',
  report: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="8" y1="17" x2="8" y2="11"/><line x1="12" y1="17" x2="12" y2="7"/><line x1="16" y1="17" x2="16" y2="13"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>',
  help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12" y2="17"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
  sliders: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>',
  filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.5 10 19 14 21 14 12.5 22 3"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="15 7 21 7 21 13"/></svg>',
  down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 7 9 13 13 9 21 17"/><polyline points="15 17 21 17 21 11"/></svg>',
};

const el = (html) => {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
};

/* ---------------- Sidebar ---------------- */
function renderSidebar(active, variant) {
  const d = AthericData;
  const plain = variant === "plain";
  const brand = plain
    ? `<div class="brand brand--plain"><div class="brand-text"><div class="brand-name">${d.brand.name}</div></div></div>`
    : `<div class="brand">
         <div class="brand-mark">${d.brand.initial}</div>
         <div class="brand-text">
           <div class="brand-name">${d.brand.name}</div>
           <div class="brand-sub">${d.brand.subtitle}</div>
         </div>
       </div>`;

  const navItem = (item) => {
    const isActive = item.id === active;
    const neutral = !plain ? " is-neutral" : "";
    return `<a class="nav-item${isActive ? " active" + neutral : ""}" href="${item.href}">
      ${ICONS[item.icon]}<span>${item.label}</span></a>`;
  };

  const upgrade = plain ? "" : `<a class="upgrade-btn" href="#">Upgrade to Pro</a>`;

  return el(`<aside class="sidebar">
    ${brand}
    <nav class="nav">${d.nav.map(navItem).join("")}</nav>
    <div class="sidebar-spacer"></div>
    <div class="nav-sep"></div>
    <nav class="nav-footer">${d.navFooter.map(navItem).join("")}</nav>
    ${upgrade}
  </aside>`);
}

/* ---------------- Topbar ---------------- */
function renderTopbar(variant) {
  const d = AthericData;
  const terminal = variant === "terminal";
  const placeholder = terminal ? "Search markets, tickers…" : "Search…";

  const indices = terminal
    ? d.indicesPlain.map((l) => `<span class="index-plain">${l}</span>`).join("")
    : d.indices
        .map(
          (i) =>
            `<span class="index ${i.dir}"><span class="index-label">${i.label}</span><span class="index-value">${i.value}</span></span>`
        )
        .join("");

  const extra = terminal
    ? `<button class="icon-btn">${ICONS.sliders}</button>
       <a class="execute-btn" href="#">Execute Trade</a>`
    : "";

  return el(`<header class="topbar">
    <div class="search">${ICONS.search}<input placeholder="${placeholder}" /></div>
    <div class="indices">${indices}</div>
    <div class="topbar-actions">
      <button class="icon-btn">${ICONS.bell}</button>
      ${extra}
      <div class="avatar"><img src="${d.user.avatar}" alt="" /></div>
    </div>
  </header>`);
}

/* ---------------- Forecast chart (computed from data) ---------------- */
function buildChart(f) {
  const W = 1000, H = 460;
  const pad = { l: 54, r: 28, t: 18, b: 38 };
  const iw = W - pad.l - pad.r;
  const ih = H - pad.t - pad.b;
  const n = f.actual.length + f.forecast.length - 1; // shared split point
  const xAt = (i) => pad.l + (iw * i) / (n);
  const yAt = (v) => pad.t + ih * (1 - (v - f.yMin) / (f.yMax - f.yMin));

  const splitX = xAt(f.actual.length - 1);

  const linePath = (vals, offset) =>
    vals.map((v, i) => `${i === 0 ? "M" : "L"} ${xAt(i + offset).toFixed(1)} ${yAt(v).toFixed(1)}`).join(" ");

  const off = f.actual.length - 1;
  const ciArea =
    f.ciUpper.map((v, i) => `${i === 0 ? "M" : "L"} ${xAt(i + off).toFixed(1)} ${yAt(v).toFixed(1)}`).join(" ") +
    " " +
    f.ciLower.slice().reverse().map((v, i) => `L ${xAt(f.ciLower.length - 1 - i + off).toFixed(1)} ${yAt(v).toFixed(1)}`).join(" ") +
    " Z";

  const gridY = f.yTicks
    .map(
      (t) =>
        `<line x1="${pad.l}" y1="${yAt(t).toFixed(1)}" x2="${W - pad.r}" y2="${yAt(t).toFixed(1)}" class="grid-line"/>
         <text x="${pad.l - 12}" y="${(yAt(t) + 4).toFixed(1)}" class="axis-y">${t}</text>`
    )
    .join("");

  const xLabels = f.xLabels
    .map((lab, i) => {
      const x = pad.l + (iw * i) / (f.xLabels.length - 1);
      const today = lab === "Today";
      return `<text x="${x.toFixed(1)}" y="${H - 12}" class="axis-x${today ? " axis-x--today" : ""}" text-anchor="middle">${lab}</text>`;
    })
    .join("");

  const lastActualX = xAt(off);
  const lastActualY = yAt(f.actual[f.actual.length - 1]);
  const dotX = xAt(off - 1);
  const dotY = yAt(f.actual[f.actual.length - 2]);

  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
    <defs>
      <linearGradient id="ciGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#28d2e6" stop-opacity="0.30"/>
        <stop offset="100%" stop-color="#28d2e6" stop-opacity="0.02"/>
      </linearGradient>
    </defs>
    <style>
      .grid-line { stroke: rgba(255,255,255,0.05); stroke-width: 1; }
      .axis-y { fill: #586074; font-size: 13px; text-anchor: end; }
      .axis-x { fill: #586074; font-size: 13px; }
      .axis-x--today { fill: #4f7dff; font-weight: 600; }
    </style>
    ${gridY}
    <path d="${ciArea}" fill="url(#ciGrad)" />
    <line x1="${splitX.toFixed(1)}" y1="${pad.t}" x2="${splitX.toFixed(1)}" y2="${H - pad.b}" stroke="rgba(255,255,255,0.14)" stroke-width="1" stroke-dasharray="3 4"/>
    <text x="${splitX.toFixed(1)}" y="${pad.t - 4}" fill="#586074" font-size="12" text-anchor="middle">Forecast Start</text>
    <path d="${linePath(f.actual, 0)}" fill="none" stroke="#3b6ef6" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="${linePath(f.forecast, off)}" fill="none" stroke="#28d2e6" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 9"/>
    <circle cx="${dotX.toFixed(1)}" cy="${dotY.toFixed(1)}" r="5" fill="#3b6ef6" stroke="#0a0e17" stroke-width="2"/>
    <circle cx="${lastActualX.toFixed(1)}" cy="${lastActualY.toFixed(1)}" r="4" fill="#28d2e6"/>
    ${xLabels}
  </svg>`;
}

/* ---------------- Gauge (confidence) ---------------- */
function buildGauge(value, color = "#3b6ef6") {
  const r = 54, c = 2 * Math.PI * r;
  const dash = (value / 100) * c;
  return `<div class="gauge">
    <svg viewBox="0 0 130 130">
      <circle cx="65" cy="65" r="${r}" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="9"/>
      <circle cx="65" cy="65" r="${r}" fill="none" stroke="${color}" stroke-width="9" stroke-linecap="round"
        stroke-dasharray="${dash.toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 65 65)"/>
    </svg>
    <div class="gauge-value">${value}</div>
  </div>`;
}

/* ---------------- Dashboard ---------------- */
function renderDashboard(mount) {
  const d = AthericData;
  const s = d.stock;

  const statCells = (arr) =>
    arr.map((st) => `<div class="stat"><div class="stat-label">${st.label}</div><div class="stat-value">${st.value}</div></div>`).join("");

  const stockHead = `<div class="stock-head">
    <div class="stock-mark">${s.initial}</div>
    <div class="stock-id">
      <div class="stock-row"><span class="stock-ticker">${s.ticker}</span><span class="stock-name">${s.name}</span></div>
    </div>
    <div class="stock-stats">
      ${statCells(s.ohlc)}
      <div class="stat-divider"></div>
      ${statCells(s.ratios)}
    </div>
    <div class="stock-price-block">
      <span class="stock-price">${s.price}</span>
      <span class="stock-change ${s.dir}">${s.dir === "up" ? "▲" : "▼"} ${s.change}</span>
    </div>
  </div>`;

  const f = d.forecast;
  const forecastCard = `<section class="card forecast-card">
    <div class="forecast-head">
      <div class="forecast-title">${f.title}</div>
      <div class="legend">
        <span class="legend-item"><span class="legend-line"></span>Actual</span>
        <span class="legend-item"><span class="legend-line dashed"></span>Forecast</span>
        <span class="legend-item"><span class="legend-swatch"></span>90% CI</span>
      </div>
      <div class="range-toggle">
        ${f.ranges.map((r) => `<button class="range-btn${r === f.activeRange ? " active" : ""}">${r}</button>`).join("")}
      </div>
    </div>
    <div class="chart-wrap">${buildChart(f)}</div>
  </section>`;

  const t = d.target;
  const targetCard = `<section class="card target-card">
    <div class="target-head"><span class="target-label">${t.title}</span><span class="target-rec rec-${t.rec.toLowerCase()}">${t.rec}</span></div>
    <div class="target-price-row"><span class="target-price">${t.price}</span><span class="target-upside">${t.upside}</span></div>
    <div class="slider-track"><span class="slider-thumb" style="left:${t.sliderPct}%"></span></div>
    <div class="slider-ends"><span>Bear</span><span>Bull</span></div>
  </section>`;

  const se = d.sentiment;
  const toneColor = { green: "#34d399", cyan: "#28d2e6" };
  const sentCard = `<section class="card metric-card sentiment-card">
    <div class="metric-title">${se.title}</div>
    <div class="gauge-pair">
      ${se.items
        .map(
          (i) => `<div class="gauge-cell">
            ${buildGauge(i.value, toneColor[i.tone])}
            <div class="gauge-cell-label">${i.label}</div>
          </div>`
        )
        .join("")}
    </div>
  </section>`;

  const sy = d.synthesis;
  const synthCard = `<section class="card panel-card synth-card">
    <div class="card-title">${sy.title}</div>
    <div class="synth-list">
      ${sy.items
        .map(
          (i) => `<div class="synth-item tone-${i.tone}">
            <div class="synth-item-head"><span class="synth-dot"></span><span class="synth-heading">${i.heading}</span></div>
            <div class="synth-body">${(Array.isArray(i.body) ? i.body : [i.body]).map((p) => `<p>${p}</p>`).join("")}</div>
          </div>`
        )
        .join("")}
    </div>
  </section>`;

  const nw = d.news;
  const newsCard = `<section class="card panel-card">
    <div class="news-head"><span class="card-title">${nw.title}</span><span class="live-dot"></span></div>
    ${nw.items
      .map(
        (i) => `<div class="news-item">
          <div><div class="news-headline">${i.headline}</div><div class="news-meta">${i.source} · ${i.time}</div></div>
          <span class="tag ${i.tone}">${i.tag}${i.tone === "green" ? " +" : ""}</span>
        </div>`
      )
      .join("")}
  </section>`;

  mount.appendChild(
    el(`<div class="content">
      ${stockHead}
      <div class="dash-grid">
        <div class="dash-col">${forecastCard}</div>
        <div class="dash-col">
          ${targetCard}
          ${sentCard}
        </div>
        <div class="dash-bottom">${synthCard}${newsCard}</div>
      </div>
    </div>`)
  );
}

/* ---------------- Markets ---------------- */
function renderMarkets(mount) {
  const r = AthericData.ranking;

  const highlights = r.highlights
    .map(
      (h) => `<section class="card highlight-card">
        <div class="hl-top">
          <div class="hl-left">
            <div class="hl-ticker-row"><span class="hl-ticker">${h.ticker}</span><span class="hl-rank">RANK ${h.rank}</span></div>
            <span class="hl-name">${h.name}</span>
          </div>
          <div class="hl-score"><div class="hl-score-val">${h.score}</div><div class="hl-score-label">AI SCORE</div></div>
        </div>
        <div class="hl-bottom">
          <div><span class="hl-ret-label">EXP. RETURN (30D)</span>
            <span class="hl-ret ${h.dir}">${ICONS[h.dir]}${h.ret}</span></div>
          <span class="hl-arrow">${ICONS.arrowRight}</span>
        </div>
      </section>`
    )
    .join("");

  const head = r.columns
    .map((c, i) => `<th class="${i >= 3 ? "num" : ""}">${c}${i === 0 ? " ↓" : ""}</th>`)
    .join("");

  const rows = r.rows
    .map(
      (row) => `<tr>
        <td class="td-rank">${row.rank}</td>
        <td class="td-ticker">${row.ticker}</td>
        <td class="td-company">${row.company}</td>
        <td class="num td-score">${row.score}</td>
        <td class="num ret ${row.dir}">${row.ret}</td>
        <td><div class="conf-cell"><span>${row.conf}</span><span class="conf-bar"><span style="width:${row.confPct}%"></span></span></div></td>
        <td><span class="pill ${row.rec.toLowerCase()}">${row.rec}</span></td>
        <td class="num">${row.cap}</td>
      </tr>`
    )
    .join("");

  mount.appendChild(
    el(`<div class="content">
      <div class="page-head">
        <div class="page-title">${r.title}</div>
        <div class="page-sub">${r.subtitle}</div>
      </div>
      <div class="highlight-grid">${highlights}</div>
      <section class="card table-card">
        <div class="table-head">
          <span class="card-title">Full Ranking Model</span>
          <div class="table-actions">
            <button class="ghost-btn">${ICONS.filter}Filter</button>
            <button class="ghost-btn">${ICONS.download}Export</button>
          </div>
        </div>
        <table class="rank-table">
          <thead><tr>${head}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </section>
    </div>`)
  );
}

/* ---------------- Bootstrap ---------------- */
function mountApp() {
  const root = document.getElementById("app");
  const page = root.dataset.page;
  const variant = root.dataset.variant; // "plain" or "terminal"

  const main = el(`<div class="main"></div>`);
  root.appendChild(renderSidebar(page, variant));
  root.appendChild(main);
  main.appendChild(renderTopbar(variant));

  if (page === "markets") renderMarkets(main);
  else renderDashboard(main);
}

document.addEventListener("DOMContentLoaded", mountApp);
