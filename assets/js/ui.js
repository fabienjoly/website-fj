lazyload();

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
		document.ontouchmove = function(e){ e.preventDefault(); }
	} else {
		menuContainer.classList.remove('menu-visible');
		menuCache.classList.remove("active");
		pageBody.classList.remove("scroll-locked");
		menuToggler.classList.remove("menu-visible");
		document.ontouchmove = function(e){ return true; }
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
// menuLink.addEventListener("click", toggleClassMenu, false);

var menuLink = document.getElementsByClassName("menu-link");
for (var i = 0; i < menuLink.length; i++) {
	menuLink[i].addEventListener("click", toggleClassMenu, false);
}


// Buttons highlight stuff

var highlightButtons = document.getElementsByClassName("highlight-on-click");

function setHighlightPosition(e) {

	var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;

	var createHighlight = document.createElement("span");
	createHighlight.classList.add("button-click-highlight");
	createHighlight.style.top = y - 30 + "px";
	createHighlight.style.left = x - 30 + "px";
	this.appendChild(createHighlight);

	setTimeout(function(){
		createHighlight.remove();
  }, 600);

}

for (var i = 0; i < highlightButtons.length; i++) {
	highlightButtons[i].addEventListener("click", setHighlightPosition, false);
}



// Composition gallery lightbox
window.addEventListener("load", function() {

  var thumbnail = document.querySelectorAll(".compo-thumbnail");
  var fullImage = document.querySelectorAll(".compo-big");

  function lockScroll() {
    document.body.classList.add("scroll-locked");
  }

  function unlockScroll() {
    document.body.classList.remove("scroll-locked");
  }

  function highlightImage(imageClickEvent) {

    var clickedItem = imageClickEvent.currentTarget;
    var itemID = clickedItem.getAttribute("compo-id");
    var associatedHighlight = document.querySelector("#id" + itemID);

    associatedHighlight.classList.add("active");

    lockScroll();
  };

  function closeImage() {
    for (var i = 0; i < fullImage.length; i++) {
      fullImage[i].classList.remove("active");
    }
    unlockScroll();
  }

  for (i = 0; i < thumbnail.length; i++) {
     thumbnail[i].addEventListener("click", function(e) {
      closeImage();
      highlightImage(e);
     })
  }

  for (i = 0; i < fullImage.length; i++) {
    fullImage[i].addEventListener("click", closeImage);
  }
});






// Scroll top animation

function scrollToTop(scrollDuration) {
    var cosParameter = window.scrollY / 2,
        scrollCount = 0,
        oldTimestamp = performance.now();
    function step (newTimestamp) {
        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
        if (scrollCount >= Math.PI) window.scrollTo(0, 0);
        if (window.scrollY === 0) return;
        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}
// for (var i = 0; i < docButtons.length; i++) {
// 	docButtons[i].addEventListener("click", function() {
// 		console.log("button clicked man !");
// 	}, false);
// }
