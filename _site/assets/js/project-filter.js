// Filter projects when using dropdown

function filterProjects() {
	var dropdownValue = projectDropdown.options[projectDropdown.selectedIndex].value;
	var hiddingClass = "hidden"

	if (dropdownValue == "no-filter") {
		// Show all projects if no-filter is selected
		for (var i = 0; i < projectItem.length; i++) {
   		projectItem[i].classList.remove(hiddingClass);
		}
	} else {
		// remove already active filters
		for (var i = 0; i < projectItem.length; i++) {
   		projectItem[i].classList.remove(hiddingClass);
			// Adding hidden class if value not in class list
			if(!projectItem[i].classList.contains(dropdownValue)) {
				projectItem[i].classList.add(hiddingClass);
			}
		}
	}
}

var projectDropdown = document.getElementById("project-filter");
var projectItem = document.querySelectorAll(".project-container");

projectDropdown.addEventListener("change", filterProjects, false);



// TODO refresh custom select when you click a category
// Filter projects when clicking a category

// Get category "links"
// var categoryLink = document.getElementsByClassName("project-category");
//
// function setFilterByClick() {
// 	// Get value of category attribute
// 	var categoryValue = this.getAttribute("category");
// 	// Set value of the dropdown to category value
// 	projectDropdown.value = categoryValue;
//
// 	// dispatch dropdown change event to trigger project filtering
// 	projectDropdown.dispatchEvent(new Event('change'));
// }
//
// for (var i = 0; i < categoryLink.length; i++) {
//     categoryLink[i].addEventListener("click", setFilterByClick, false);
// }
