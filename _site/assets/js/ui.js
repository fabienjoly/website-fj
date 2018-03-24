
var scaleContainer = document.querySelector(".scale-animation-container");

// Menu Opening
function toggleClassMenu() {
	var scrollPosition = window.scrollY;
	var windowHeight = window.innerHeight;
	var centerOfViewport = (windowHeight/2) + scrollPosition;

	// Set transform origin for the main container
	scaleContainer.style.transformOrigin = " 50% " + centerOfViewport + "px";

	menuContainer.classList.add("menu-animatable");
	if(!menuContainer.classList.contains("menu-visible")) {
		menuContainer.classList.add("menu-visible");
		menuCache.classList.add("active");
		pageBody.classList.add("scroll-locked");
		menuToggler.classList.add("menu-visible");
	} else {
		menuContainer.classList.remove('menu-visible');
		menuCache.classList.remove("active");
		pageBody.classList.remove("scroll-locked");
		menuToggler.classList.remove("menu-visible");
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


// Buttons highlight stuff

var docButtons = document.getElementsByClassName("project-detail-button");

function getPosition(e) {
  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  return {
    x,
    y
  }
}


function setHighlightPosition(e) {
	var position = getPosition(e);
	console.log(position);
	var createHighlight = document.createElement("span");
	createHighlight.classList.add("button-click-highlight");
	createHighlight.style.top = position.y - 15 + "px";
	createHighlight.style.left = position.x - 15 + "px";
	this.appendChild(createHighlight);

	setTimeout(function(){
		createHighlight.remove();
  }, 600);


	// buttonHighlight.classList.add("animated");
  // setTimeout(function(){
  //   buttonHighlight.classList.remove("animated");
  // }, 600);
}

for (var i = 0; i < docButtons.length; i++) {
	docButtons[i].addEventListener("click", setHighlightPosition, false);
}


// for (var i = 0; i < docButtons.length; i++) {
// 	docButtons[i].addEventListener("click", function() {
// 		console.log("button clicked man !");
// 	}, false);
// }
