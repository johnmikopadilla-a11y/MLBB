(() => {
  "use strict";
  const RANKS = [
    { name: "Warrior", img: "assets/ranks/warrior.png", sub: "Tier III to I", c: "#b08d57", note: "Learn the basics: lanes, last hits and objectives." },
    { name: "Elite", img: "assets/ranks/elite.png", sub: "Tier III to I", c: "#9fb4cc", note: "Start to coordinate with your team and watch the map." },
    { name: "Master", img: "assets/ranks/master.png", sub: "Tier IV to I", c: "#c9a45c", note: "Hero pool and item choices begin to matter." },
    { name: "Grandmaster", img: "assets/ranks/grandmaster.png", sub: "Tier V to I", c: "#e0be7a", note: "Rotations and objective control decide games." },
    { name: "Epic", img: "assets/ranks/epic.png", sub: "Tier V to I", c: "#58c27d", note: "Strong macro play and good draft awareness." },
    { name: "Legend", img: "assets/ranks/legend.png", sub: "Tier V to I", c: "#e8883a", note: "Expect disciplined teams and fast decisions." },
    { name: "Mythic", img: "assets/ranks/mythic.png", sub: "Star-based ladder", c: "#e0554f", note: "The top of the ladder. Every mistake is punished." }
  ];

  document.getElementById("rank-grid").innerHTML = RANKS.map((r) => `
    <li class="rank" style="--c:${r.c}">
      <img class="emblem" src="${r.img}" alt="" width="96" height="96" loading="lazy">
      <strong>${r.name}</strong>
      <span>${r.sub}</span>
      <p>${r.note}</p>
    </li>`).join("");
})();
