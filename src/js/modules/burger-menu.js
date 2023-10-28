const navMenu = {
  toggleMenu: () => {
    const burgerBtn = document.querySelector(".burger-button");
    const navMenuList = document.querySelector(".nav-menu");
    const body = document.body;

    burgerBtn.addEventListener("click", () => {
      if (burgerBtn.classList.contains("burger-button--open")) {
        burgerBtn.classList.toggle("burger-button--close");
        body.classList.toggle("lock");
      }
      else {
        burgerBtn.classList.add("burger-button--open");
        body.classList.toggle("lock")
      }

      navMenuList.classList.toggle("nav-menu--active")
    })
  },

  highlightMenuItem: () => {
    const menuLinks = document.querySelectorAll(".nav-menu__link");
    menuLinks[0].classList.add("nav-menu__link--active");

    menuLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        for (let i = 0; i < menuLinks.length; i++) {
          menuLinks[i].classList.remove("nav-menu__link--active");
        }

        e.currentTarget.classList.add("nav-menu__link--active");
      })
    })
  },
}

export const toggleMenu = navMenu.toggleMenu;
export const highlightMenuItem = navMenu.highlightMenuItem;