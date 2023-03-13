var cssjsnav = document.getElementById("cssjsnav");
var csslinknav = document.querySelector(".csslinknav");

window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
        cssjsnav.style.backgroundColor = "transparent";
        
        csslinknav.style.color = "black";
        csslinknav.style.backgroundColor = "rgba(255, 255, 255, 0.564)";
        csslinknav.style.padding = "10px 15px";
    } else {
        cssjsnav.style.backgroundColor = "black";
        
        csslinknav.style.color = "white";
        csslinknav.style.backgroundColor = "transparent";
        csslinknav.style.padding = "0px";
    }
});