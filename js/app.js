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

// parse the DOM content before executing js code
document.addEventListener("DOMContentLoaded", populateNavBar);

/**
 * @description Activates associated section when in viewport
 */
function activateSections(){

    // get all sections
    let sections = document.querySelectorAll("section");

    // for each section get viewport and check if section is in viewport
    for(const section of sections){

        // get section dimensional coordinates
        let sectionDomRect = section.getBoundingClientRect(); 

        // check if section is in viewport
        let inViewPort = sectionDomRect.left >= 0 && sectionDomRect.top >= 0
        && (sectionDomRect.right <= (window.innerWidth
        || document.documentElement.clientWidth))
        && (sectionDomRect.bottom <= (window.innerHeight
        || document.documentElement.clientHeight));

        // check if section is in mobile viewport
        let inMobileViewPort = sectionDomRect.top <= 0
        && sectionDomRect.bottom >= 100;
        
        // if in viewport render section active for css styling
        if(inViewPort || inMobileViewPort){
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    }
}

/**
 * @description Builds navigation bar functionality
 */
function populateNavBar(){

    // sectional css styling active upon scrolling down webpage
    document.addEventListener("scroll", activateSections);

    // get div tags associated with section class landing container
    let parts = document.querySelectorAll(".landing__container");

    // gets ul tag to append list items
    let ul = document.querySelector("#navbar__list");

    // iterates through all sections of the webpage
    for(let i = 1; i <= parts.length; i++){
        
        // creates list item and a div tag
        let li = document.createElement("li");
        let div = document.createElement("div");

        // adds the menu__link class for css styling
        div.classList.add("menu__link");

        // then appends div to list item and list item to ul tag
        li.appendChild(div);
        ul.appendChild(li);

        // changes cursor to a pointer over anchors
        div.style.cursor = "pointer";

        // adds anchor section title content to nav bar
        div.textContent = `Section ${i}`; 
    }

    // listener scrolls into associated section upon clicking
    ul.addEventListener("click", scrollIntoSection);
}

/**
 * @description Event listener function scrolls into section upon clicking event
 * @param {click} event - The click event
 */

function scrollIntoSection(event){

    // checks if the event target is the div tag that contains the anchor
    if (event.target.tagName === "DIV"){

        // add highlight style to navigation menu section
        event.target.classList.add("active2");

        // gets the div content section and section number
        let section = event.target.textContent;

        // gets the section number
        let sectionNum = section.charAt(section.length - 1);

        // gets the section tag by section id
        let sectionView = document.getElementById(`section${sectionNum}`)

        // scrolls into view to the appropriate section
        sectionView.scrollIntoView({behavior: "smooth"}); 
    }

    // set time for the highlight functionality
    setTimeout(unhighlight, 750, event);

    /**
     * @description Function unhighlights navigation menu section
     * @param {click} event - The click event
     */
    function unhighlight(event){

        // remove highlighting from navigation menu section
        event.target.classList.remove("active2");
    } 
}

