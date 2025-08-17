document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".header__menu-button");
  const menu = document.querySelector(".header__menu-mobile");

  const toggleMenu = () => {
    const isActive = menu.classList.toggle("active");
    menuButton.classList.toggle("active");

    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  menuButton.addEventListener("click", toggleMenu);

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      menuButton.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
});
