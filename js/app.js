/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


document.addEventListener("DOMContentLoaded", main);

function main(){
    let parts = document.querySelectorAll(".landing__container");
    let navbar = document.querySelector(".navbar__menu ul");
    for(let i = 1; i <= parts.length; i++){
        let li = document.createElement("li");
        li.style.setProperty("width", "100px");
        li.style.setProperty("color", "black");
        li.textContent = `Section ${i}`; 
        navbar.appendChild(li);
    }
}














/**
 * Define Global Variables
 * 
*/



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


