$(document).ready(function () {
  const $buttons = $(".services__accordion-header");

  $buttons.on("click", function () {
    const $btn = $(this);
    const panelId = $btn.attr("aria-controls");
    const $panel = $("#" + panelId);
    const isExpanded = $btn.attr("aria-expanded") === "true";

    $buttons.attr("aria-expanded", "false").removeClass("active");
    $(".services__accordion-panel").removeClass("active");

    if (!isExpanded) {
      $btn.attr("aria-expanded", "true").addClass("active");
      $panel.addClass("active");
    }
  });
});
