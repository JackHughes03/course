var video = document.getElementById("mainvideo");
video.autoplay = true;
video.loop = true;
video.muted = true;
video.play();

function darkmodeclicked() {
    var html = document.getElementsByTagName("html")[0];
    
    var darkmode = document.getElementById("darkmode");

    if (darkmode.src.match("images/darkmode.png")) {
        darkmode.src = "images/darkmodelight.png";

        if (html.style.filter == "invert(100%)") {
            html.style.filter = "invert(0%)";
        }
        else {
            html.style.filter = "invert(100%)";
        }
    }
    else {
        darkmode.src = "images/darkmodelight.png";

        if (html.style.filter == "invert(100%)") {
            html.style.filter = "invert(0%)";
        }
        else {
            html.style.filter = "invert(100%)";
        }
    }
}

