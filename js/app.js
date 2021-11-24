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
    document.addEventListener("mouseover", activateSections);
    populateNavBar();
}

function activateSections(){
    let sections = document.querySelectorAll("section");
    for(const section of sections){
        let sectionDomRect = section.getBoundingClientRect();
        let inViewPort = sectionDomRect.left >= 0 && sectionDomRect.top >= 0 
        && (sectionDomRect.right <= (window.innerWidth
        || document.documentElement.clientWidth))
        && (sectionDomRect.bottom <= (window.innerHeight
        || document.documentElement.clientHeight));
        if(inViewPort){
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class");
        }
    }
}

function populateNavBar(){
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

    ul.addEventListener("click", scrollIntoSection);
}

function scrollIntoSection(event){
    if (event.target.tagName === "DIV"){
        let section = event.target.textContent;
        let sectionNum = section.charAt(section.length - 1);
        let sectionView = document.getElementById(`section${sectionNum}`)
        sectionView.scrollIntoView({behavior: "smooth"}); 
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


