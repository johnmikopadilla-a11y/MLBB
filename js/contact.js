(() => {
  "use strict";
  const form = document.getElementById("contact-form");
  const ok = document.getElementById("form-ok");
  const fields = [...form.querySelectorAll(".field")];
  const rules = {
    name: (v) => (v.trim().length < 2 ? "Enter your name." : ""),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Enter a valid email address."),
    topic: (v) => (v ? "" : "Choose a topic."),
    message: (v) => (v.trim().length < 10 ? "Write at least 10 characters." : "")
  };

  function check(field) {
    const input = field.querySelector("input, select, textarea");
    const msg = rules[input.name](input.value);
    field.classList.toggle("bad", !!msg);
    field.querySelector(".err").textContent = msg;
    input.setAttribute("aria-invalid", String(!!msg));
    return !msg;
  }

  fields.forEach((f) => {
    const input = f.querySelector("input, select, textarea");
    input.addEventListener("blur", () => check(f));
    input.addEventListener("input", () => { if (f.classList.contains("bad")) check(f); });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    ok.hidden = true;
    const results = fields.map(check);
    if (results.every(Boolean)) {
      ok.hidden = false;
      form.reset();
    } else {
      form.querySelector(".field.bad input, .field.bad select, .field.bad textarea")?.focus();
    }
  });

  form.addEventListener("reset", () => {
    ok.hidden = true;
    fields.forEach((f) => { f.classList.remove("bad"); f.querySelector(".err").textContent = ""; });
  });
})();
