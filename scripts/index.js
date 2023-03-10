var video = document.getElementById("mainvideo");
// video.autoplay = true;
// video.loop = true;
// video.muted = true;
// video.play();

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
function getip() {
    var title = document.getElementById("maintitle");
    var desc = document.getElementById("desc");
    var getipbutton = document.getElementById("getipbutton");
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {

        if(title.innerHTML === "Your IP address is " + data.ip) {
            getipbutton.innerHTML = "Get IP";
        title.innerHTML = "Learn to code websites";
        desc.innerHTML = "Learn to make websites through coding HTML, CSS, and Javascript. Additionally master your design skills.";
        } else {
        title.innerHTML = "Your IP address is " + data.ip;
        getipbutton.innerHTML = "Revert";
        fetch('https://ipapi.co/' + data.ip + '/json/')
        .then(response => response.json())
        .then(data => {
            desc.innerHTML = "You're in " + data.country_name + ", " + data.city + ".";
        })
        }
    })
}