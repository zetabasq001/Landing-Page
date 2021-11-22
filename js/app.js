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
    let ul = document.querySelector("#navbar__list");
    for(let i = 1; i <= parts.length; i++){
        let li = document.createElement("li");
        let div = document.createElement("div");
        div.classList.add("menu__link");
        li.appendChild(div);
        ul.appendChild(li);
        div.style.cursor = "pointer";
        div.textContent = `Section ${i}`; 
    }

    ul.addEventListener("click", activateSection);
}

function activateSection(event){

    if (event.target.tagName === "DIV"){
        let section = event.target.textContent;
        let sectionNum = section.charAt(section.length - 1);
        document.getElementById(`section${sectionNum}`).scrollIntoView({behavior: "smooth"});     
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


