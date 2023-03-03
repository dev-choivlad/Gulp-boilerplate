const navMenu = {
	burgerButtonHandler: () => {
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
}

export const burgerButtonHandler = navMenu.burgerButtonHandler;