(() => {
  "use strict";
  const nav = document.getElementById("nav");
  const toggle = document.querySelector(".nav-toggle");

  function closeNav() {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeNav(); });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
