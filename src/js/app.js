// Header Burger -------
const burgerButton = document.querySelector("button.header__burger");
const headerNav = document.querySelector("nav.nav");

burgerButton.addEventListener("click", (e) => {
	e.preventDefault();
	burgerButton.classList.toggle("header__burger_active");
	headerNav.classList.toggle("nav_active");
	burgerButton.classList.contains("header__burger_active")
		? document.body.classList.add("no-scroll")
		: document.body.classList.remove("no-scroll");
});
// ------- Header Burger