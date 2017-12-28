function toggleClassMenu() {
	menuContainer.classList.add("menu-animatable");
	if(!menuContainer.classList.contains("menu-visible")) {
		menuContainer.classList.add("menu-visible");
	} else {
		menuContainer.classList.remove('menu-visible');
	}
}

function OnTransitionEnd() {
	menuContainer.classList.remove("menu-animatable");
}

var menuContainer = document.querySelector(".menu-container");
var menuToggler = document.querySelector(".menu-toggler");
menuContainer.addEventListener("transitionend", OnTransitionEnd, false);
menuToggler.addEventListener("click", toggleClassMenu, false);
menuContainer.addEventListener("click", toggleClassMenu, false);
