$(document).ready(function () {
  const $menuButton = $(".header__menu-button");
  const $menu = $(".header__menu-mobile");

  function toggleMenu() {
    const isActive = $menu.toggleClass("active").hasClass("active");
    $menuButton.toggleClass("active");

    if (isActive) {
      $("html").css("overflow-y", "hidden");
    } else {
      $("html").css("overflow-y", "");
    }
  }

  $menuButton.on("click", toggleMenu);

  $menu.find("a").on("click", function () {
    $menu.removeClass("active");
    $menuButton.removeClass("active");
    $("html, body").css("overflow-y", "");
  });
});
