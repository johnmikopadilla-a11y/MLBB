(() => {
  "use strict";
  const ROLES = ["Tank", "Fighter", "Assassin", "Mage", "Marksman", "Support"];

  const HEROES = [
    { id: "alucard", name: "Alucard", role: "Fighter", img: "assets/alucard.jpg", blurb: "A relentless duelist who heals by fighting. Great at chasing down weakened targets and winning long skirmishes." },
    { id: "miya", name: "Miya", role: "Marksman", img: "assets/miya.jpg", blurb: "A fast, forgiving marksman who scales hard into the late game. Stay behind your front line and keep attacking." },
    { id: "eudora", name: "Eudora", role: "Mage", img: "assets/eudora.jpg", blurb: "A burst mage with lightning that can delete a target in seconds. Position carefully and strike first." },
    { id: "tigreal", name: "Tigreal", role: "Tank", img: "assets/tigreal.jpg", blurb: "A frontline protector who pulls enemies together for teammates to finish. Start fights and soak damage." },
    { id: "natalia", name: "Natalia", role: "Assassin", img: "assets/natalia.jpg", blurb: "A stealthy assassin who hunts supports and carries from the shadows. Flank, silence, and escape." },
    { id: "layla", name: "Layla", role: "Marksman", blurb: "A long-range marksman with huge late-game reach. Fragile early, so play safe and farm." },
    { id: "gusion", name: "Gusion", role: "Assassin", blurb: "A mobile assassin who chains daggers into quick bursts. Rewards precise skill use." },
    { id: "estes", name: "Estes", role: "Support", blurb: "A healer who keeps the team alive through long fights. Stay close to your carry." },
    { id: "balmond", name: "Balmond", role: "Fighter", blurb: "A tough bruiser who spins through groups. Simple to learn and strong in the EXP lane." },
    { id: "franco", name: "Franco", role: "Tank", blurb: "A hook-based tank who can catch key targets and change fights with one pull." },
    { id: "kagura", name: "Kagura", role: "Mage", blurb: "A skill-heavy mage with umbrella combos for high burst and flexible positioning." },
    { id: "rafaela", name: "Rafaela", role: "Support", blurb: "A mobile healer with a speed boost and a stun. Great at keeping allies in the fight." }
  ];

  const $ = (s) => document.querySelector(s);
  const icon = (role) => `<svg class="i" aria-hidden="true"><use href="#i-${role.toLowerCase()}"/></svg>`;
  const mono = (n) => `<span class="mono" aria-hidden="true">${n[0]}</span>`;

  // Open a specific hero from a link like heroes.html?hero=alucard
  const wanted = new URLSearchParams(location.search).get("hero");
  let selectedHero = HEROES.some((h) => h.id === wanted) ? wanted : "natalia";
  let roleFilter = "All";

  function renderFilters() {
    $("#hero-filters").innerHTML = ["All", ...ROLES]
      .map((r) => `<button type="button" class="chip" aria-pressed="${r === roleFilter}" data-role="${r}">${r}</button>`)
      .join("");
  }

  function renderFeature() {
    const h = HEROES.find((x) => x.id === selectedHero);
    $("#hero-feature").innerHTML = `
      <div class="feature-info">
        <span class="role-pill">${icon(h.role)} ${h.role}</span>
        <h2>${h.name}</h2>
        <p>${h.blurb}</p>
        <div class="btn-row"><a class="btn btn-gold" href="guides.html">View build guide</a></div>
      </div>
      <div class="feature-art">${h.img ? `<img src="${h.img}" alt="${h.name} artwork">` : mono(h.name)}</div>`;
  }

  function renderGrid() {
    const list = HEROES.filter((h) => roleFilter === "All" || h.role === roleFilter);
    $("#hero-grid").innerHTML = list.map((h) => `
      <li>
        <button type="button" class="card" data-id="${h.id}" ${h.id === selectedHero ? 'aria-current="true"' : ""}>
          <div class="card-art">${h.img ? `<img src="${h.img}" alt="" loading="lazy">` : mono(h.name)}</div>
          <div class="card-body"><strong>${h.name}</strong><span>${h.role}</span></div>
        </button>
      </li>`).join("") || `<li class="muted">No heroes in this role yet.</li>`;
  }

  $("#hero-filters").addEventListener("click", (e) => {
    const b = e.target.closest("[data-role]");
    if (!b) return;
    roleFilter = b.dataset.role;
    renderFilters();
    renderGrid();
  });

  $("#hero-grid").addEventListener("click", (e) => {
    const c = e.target.closest("[data-id]");
    if (!c) return;
    selectedHero = c.dataset.id;
    renderFeature();
    renderGrid();
    $("#hero-feature").scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  renderFilters();
  renderFeature();
  renderGrid();
})();
