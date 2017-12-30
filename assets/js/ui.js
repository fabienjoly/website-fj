// Menu Opening
function toggleClassMenu() {
	menuContainer.classList.add("menu-animatable");
	if(!menuContainer.classList.contains("menu-visible")) {
		menuContainer.classList.add("menu-visible");
		menuCache.classList.add("active");
		pageBody.classList.add("scroll-locked");
	} else {
		menuContainer.classList.remove('menu-visible');
		menuCache.classList.remove("active");
		pageBody.classList.remove("scroll-locked");
	}
}

function OnTransitionEnd() {
	menuContainer.classList.remove("menu-animatable");
}

var menuContainer = document.querySelector(".menu-container");
var menuCache = document.querySelector(".menu-cache")
var menuToggler = document.querySelector(".menu-toggler");
var pageBody = document.body;

menuContainer.addEventListener("transitionend", OnTransitionEnd, false);
menuToggler.addEventListener("click", toggleClassMenu, false);
menuCache.addEventListener("click", toggleClassMenu, false);




// Changing the transform origin of the scale container on scroll

var scaleContainer = document.querySelector(".scale-animation-container");

function setTransformOrigin() {
	var scrollPosition = window.scrollY;
	var windowHeight = window.innerHeight;
	var centerOfViewport = (windowHeight/2) + scrollPosition;

	scaleContainer.style.transformOrigin = " 50% " + centerOfViewport + "px";
}

document.addEventListener("DOMContentLoaded", setTransformOrigin, false);
document.addEventListener("scroll", setTransformOrigin, false);
