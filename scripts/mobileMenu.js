document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".header__menu-button");
  const menu = document.querySelector(".header__menu-mobile");

  const toggleMenu = () => {
    const isActive = menu.classList.toggle("active");
    menuButton.classList.toggle("active");

    if (isActive) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "";
    }
  };

  menuButton.addEventListener("click", toggleMenu);

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      menuButton.classList.remove("active");
      document.documentElement.style.overflowY = "";
      document.body.style.overflowY = "";
    });
  });
});
