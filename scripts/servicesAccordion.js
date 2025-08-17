document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".services__accordion-header");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const panelId = btn.getAttribute("aria-controls");
      const panel = document.getElementById(panelId);
      const isExpanded = btn.getAttribute("aria-expanded") === "true";

      document.querySelectorAll(".services__accordion-header").forEach((b) => {
        b.setAttribute("aria-expanded", "false");
        b.classList.remove("active");
      });
      document.querySelectorAll(".services__accordion-panel").forEach((p) => {
        p.classList.remove("active");
      });

      if (!isExpanded) {
        btn.setAttribute("aria-expanded", "true");
        btn.classList.add("active");
        panel.classList.add("active");
      }
    });
  });
});
