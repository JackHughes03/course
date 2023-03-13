var cssjsnav = document.getElementById("cssjsnav");
var csslinknav = document.getElementsByClassName("csslinknav");
var mainvideo = document.getElementById("mainvideo");
var titlecourses = document.getElementById("titlecourses");
cssjsnav.style.transition = "0.2s";

window.addEventListener('scroll', function() {   
    if (window.scrollY === 0) {
        cssjsnav.style.backgroundColor = "transparent";
        mainvideo.style.filter = "blur(0px)";
        titlecourses.style.backgroundColor = "#b6b6b64f";
        
        for (var i = 0; i < csslinknav.length; i++) {
            csslinknav[i].style.color = "black";
            csslinknav[i].style.backgroundColor = "rgba(255, 255, 255, 0.564)";
            csslinknav[i].style.padding = "10px 15px";
        }
    } else {
        cssjsnav.style.backgroundColor = "black";
        mainvideo.style.filter = "blur(5px)";
        titlecourses.style.backgroundColor = "transparent";
        
        for (var i = 0; i < csslinknav.length; i++) {
            csslinknav[i].style.color = "white";
            csslinknav[i].style.backgroundColor = "transparent";
            csslinknav[i].style.padding = "0px";
        }
    }
});