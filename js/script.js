// Christopher Magnus
$(document).ready(function(){
    const today = new Date()

    document.getElementById("footerText").innerHTML = "&copy;" + today.getFullYear().toString() + " Christopher Magnus";

    // Sticky Navbar
    window.onscroll = function() { stickyNavbar() };
    var navbar = document.querySelector("nav");
    var skills = document.querySelector("main")
    var navPos = navbar.offsetTop;

    function stickyNavbar() 
    {
        if (window.pageYOffset >= navPos) 
        {
            navbar.classList.add("sticky")
            skills.classList.add("stickyContent")
        } 
        else 
        {
            navbar.classList.remove("sticky");
            skills.classList.remove("stickyContent")
        }
    }
})