(() => {
  "use strict";
  const MATCHES = [
    { id: "M-01", teams: "Blue Wolves vs Iron Legion", date: "Oct 18, 2026", time: "3:00 PM" },
    { id: "M-02", teams: "Night Owls vs Crimson Tide", date: "Oct 19, 2026", time: "5:30 PM" },
    { id: "M-03", teams: "Sky Hunters vs Echo Squad", date: "Oct 21, 2026", time: "4:00 PM" },
    { id: "M-04", teams: "Royal Guard vs Storm Riders", date: "Oct 24, 2026", time: "6:00 PM" },
    { id: "M-05", teams: "Dawn Breakers vs Ash Vanguard", date: "Oct 25, 2026", time: "7:00 PM" },
    { id: "M-06", teams: "Blue Wolves vs Night Owls", date: "Oct 28, 2026", time: "3:00 PM" },
    { id: "M-07", teams: "Iron Legion vs Sky Hunters", date: "Oct 30, 2026", time: "5:00 PM" },
    { id: "M-08", teams: "Crimson Tide vs Royal Guard", date: "Nov 1, 2026", time: "4:30 PM" }
  ];
  const VISIBLE = 5;
  let showAll = false;
  const reminders = new Set();
  const body = document.getElementById("sched-body");
  const more = document.getElementById("sched-more");

  function render() {
    const rows = showAll ? MATCHES : MATCHES.slice(0, VISIBLE);
    body.innerHTML = rows.map((m) => {
      const on = reminders.has(m.id);
      return `<tr>
        <td>${m.id}</td>
        <td class="vs">${m.teams}</td>
        <td>${m.date}</td>
        <td>${m.time}</td>
        <td><button type="button" class="remind" data-id="${m.id}" aria-pressed="${on}" aria-label="${on ? "Remove reminder for" : "Remind me about"} ${m.teams}">${on ? "Reminder set" : "Remind me"}</button></td>
      </tr>`;
    }).join("");
    more.textContent = showAll ? "Show fewer matches" : "View full schedule";
  }

  body.addEventListener("click", (e) => {
    const b = e.target.closest(".remind");
    if (!b) return;
    const id = b.dataset.id;
    reminders.has(id) ? reminders.delete(id) : reminders.add(id);
    render();
    body.querySelector(`.remind[data-id="${id}"]`)?.focus();
  });
  more.addEventListener("click", () => { showAll = !showAll; render(); });
  render();
})();
