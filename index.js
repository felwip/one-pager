// creating Variable of nav section
var nav = document.querySelector("nav");

// function for adding a class to the classList of nav
var expandMobileNavigation = function() {
  nav.classList.add("mobile-navigation-expanded");
};
// and a function to delete the class from nav again
var collapseMobileNavigation = function() {
  nav.classList.remove("mobile-navigation-expanded");
};

// now we want the event of mouseclick on the button trigger the appearance of the menu bar
// first create connection to the buttons classes
var expandButton = document.querySelector("#expand-mobile-navigation");
// second connect the function to the event of mouseclick on our new variable --> addEventListener, wich takes 2 parameters: the event we listen to and the function which then is to be applied
expandButton.addEventListener("click", expandMobileNavigation);

// the same to hide the mobile menu again
var collapseButton = document.querySelector("#collapse-mobile-navigation");
collapseButton.addEventListener("click", collapseMobileNavigation);
// ----------------------------------------------------
// Darkmode
var toggleClassButton = function(buttonID, className) {
  var toggleClass = function() {
    document.querySelector("main").classList.toggle(className);
  };
  document.querySelector(buttonID).addEventListener("click", toggleClass);
};
toggleClassButton("a.darkmode-button", "darkmode");
toggleClassButton("a.light-button", "darkmode");
// ----------------------------------------------------
// switching buttons buttons

var toggleHideClass = function(hidingButton, showingButton) {
  var toggleHide = function() {
    document.querySelector(hidingButton).classList.add("hide-button");
    document.querySelector(showingButton).classList.remove("hide-button");
  };
  document.querySelector(hidingButton).addEventListener("click", toggleHide);
};
toggleHideClass("a.darkmode-button", "a.light-button");
toggleHideClass("a.light-button", "a.darkmode-button");
//are the selectors right? --> CSS diner
