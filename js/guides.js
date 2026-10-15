(() => {
  "use strict";
  const GUIDES = [
    { key: "hero", label: "Hero basics", icon: "i-star", title: "Gameplay tips", tips: [
      "Learn your hero's skills and cooldowns in practice mode.",
      "Pick a role that fits how you like to play.",
      "Use the minimap every few seconds.",
      "Play with your team, not around them.",
      "Review your replays after every loss."
    ]},
    { key: "equip", label: "Equipment", icon: "i-book", title: "Equipment tips", tips: [
      "Buy your core item first, then adapt to the enemy team.",
      "Add defense items when you get focused in fights.",
      "Sell boots and early items late if you need slots.",
      "Use the recommended build as a start, not a rule.",
      "Keep a Wings or Cooldown item in mind for mages."
    ]},
    { key: "spells", label: "Battle spells", icon: "i-bolt", title: "Battle spell tips", tips: [
      "Flicker is the safest pick for most heroes.",
      "Take Retribution if you play the jungle.",
      "Sprint helps heroes that chase or escape.",
      "Save your spell for the key moment, not the first fight.",
      "Track enemy spell cooldowns before engaging."
    ]},
    { key: "emblems", label: "Emblems", icon: "i-gem", title: "Emblem tips", tips: [
      "Match the emblem set to your hero's role.",
      "Level up your talents when you have enough points.",
      "Pick the talent that fixes your hero's weakest stat.",
      "Test a new setup in classic mode before ranked.",
      "Revisit emblem choices after major balance changes."
    ]}
  ];

  const tabs = document.getElementById("guide-tabs");

  function render(key) {
    const g = GUIDES.find((x) => x.key === key) || GUIDES[0];
    tabs.querySelectorAll(".side-btn").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.key === g.key)));
    document.getElementById("guide-title").textContent = g.title;
    document.getElementById("guide-tips").innerHTML = g.tips.map((t) => `<li>${t}</li>`).join("");
  }

  tabs.innerHTML = GUIDES.map((g) =>
    `<button type="button" role="tab" class="side-btn" data-key="${g.key}" aria-selected="false"><svg class="i" aria-hidden="true"><use href="#${g.icon}"/></svg>${g.label}</button>`
  ).join("");
  tabs.addEventListener("click", (e) => {
    const b = e.target.closest("[data-key]");
    if (b) render(b.dataset.key);
  });
  render("hero");
})();
