// Christopher Magnus
$(document).ready(function(){
    const today = new Date()

    document.getElementById("footerText").innerHTML = "&copy;" + today.getFullYear().toString() + " Christopher Magnus";

    // Sticky Navbar
    window.onscroll = function() { stickyNavbar() };
    var navbar = document.querySelector("nav");
    var content = document.querySelector("#skills");
    var navPos = navbar.offsetTop;

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