// Christopher Magnus

$(document).ready(function() {

    // Get current year, add to footer.
    const today = new Date()

    document.getElementById("footerText").innerHTML = "&copy;" + today.getFullYear().toString() + " Christopher Magnus";

    // Sticky Navbar
    window.onscroll = function() { stickyNavbar() };
    var navbar = document.querySelector("nav");
    var content = document.querySelector("#skills");
    var navPos = navbar.offsetTop;

    if (window.pageYOffset >= navPos) 
    {
        navbar.classList.add("sticky");
        content.classList.add("stickyContent");
    } 
    else 
    {
        navbar.classList.remove("sticky");
        content.classList.remove("stickyContent");
    }

    function stickyNavbar() 
    {
        if (window.pageYOffset >= navPos) 
        {
            navbar.classList.add("sticky");
            content.classList.add("stickyContent");
        } 
        else 
        {
            navbar.classList.remove("sticky");
            content.classList.remove("stickyContent");
        }
    }
})

// Modals

const modalCalculator = document.querySelector("#modalCalculator");
const modalPatientNotes = document.querySelector("#modalPatientNotes");
const modalCar = document.querySelector("#modalCar");

$("#modalCalculatorBox").click(function() { modalCalculator.showModal() })