
//For the header 

//humburgerbutton on off toggle
function toggleHumburger() {
    document.getElementById("primaryNav").classList.toggle("open");

}

let humburgerButton = document.getElementById("hamburgerBtn");
humburgerButton.onclick = toggleHumburger;

//current page wayfinding


let currentPath = window.location.pathname;
currentPath = currentPath.substring(1);
let currentPage = "[href='" + currentPath + "']";
let child = document.querySelector(currentPage);
child.parentElement.classList.add('active');