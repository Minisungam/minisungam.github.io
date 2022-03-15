const today = new Date()

function onLoad()
{
    document.getElementById("footerText").innerHTML = "&copy;" + today.getFullYear().toString() + " Christopher Magnus";
}