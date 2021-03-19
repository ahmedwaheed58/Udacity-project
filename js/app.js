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
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll(".sections");  //collect sections
const menu = document.getElementById("navbar__list");   

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const frag = document.createDocumentFragment();




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav menu
sections.forEach( function(listElement) {
    const nav = listElement.getAttribute("data-nav");    // get data-nav
    const listItem = document.createElement("li");       // create list item
    listItem.classList.add("navItem");
    const newLink = document.createElement("a");         // create new link
    const text = document.createTextNode(nav);           // create list item text

    newLink.addEventListener("click" , function(){       // add event listener to the link
        listElement.scrollIntoView({behavior:"smooth" , block : "start"});
    });

    newLink.appendChild(text);                              // append list to document fragment
    newLink.classList.add("menu__link");
    listItem.appendChild(newLink);
    frag.appendChild(listItem);
});

menu.appendChild(frag);                                 // append list to menu node
const activeMenu = document.querySelectorAll(".navItem");

// Add class 'active' to section when near top of viewport

window.addEventListener("scroll", react => {
    sections.forEach( sec => {
        const dim=sec.getBoundingClientRect();
        if(dim.top >= -50 && dim.top <= 200){
            sections.forEach( inactive =>{
                inactive.classList.remove("your-active-class");
            });
            sec.classList.add("your-active-class");
            const activeSec = sec.getAttribute("data-nav");
            activeMenu.forEach(activate => {
                if(activate.innerText === activeSec){
                    activate.classList.add("active");
                }
                else {
                    activate.classList.remove("active");
                }
            });
        }
    })
    if (document.documentElement.scrollTop >= 300 ){
        document.querySelector("#btn").style.display="block";
    }
    else {
        document.querySelector("#btn").style.display="none";
    }
});
function hide(){                                                                            // Hide nav bar function
    if(document.documentElement.scrollTop >= 300){
        setTimeout(function() { 
            document.querySelector(".navbar__menu").classList.add('hidden_bar'); 
        }, 4000);
    } 
    else{
        expand();
    }
}

function expand(){
    document.querySelector(".navbar__menu").classList.remove('hidden_bar');
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


