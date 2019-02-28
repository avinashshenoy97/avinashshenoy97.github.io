document.body.addEventListener("mousewheel", checkNavPos);

var header = document.getElementById("header");
var navBarEle = document.getElementById("navBar");

function checkNavPos() {
    // console.log(window.scrollY);
    if(window.scrollY >= header.offsetHeight) {
        navBarEle.style.position = "fixed";
        navBarEle.style.top = 0;
        navBarEle.style.left = 0;
        document.getElementById("content").style.paddingTop = "80px";
        // if(document.getElementById("navLeftArea").children[0].className.search("active") == -1)
        //     document.getElementById("navLeftArea").children[0].className += "active ";
        //document.body.removeEventListener("mousewheel", checkNavPos);
    }
    else {
        navBarEle.style = "";
        document.getElementById("content").style.paddingTop = "0";
        // document.getElementById("navLeftArea").children[0].className.replace("active", "");
    }
}

function restartSite() {
    navBarEle.style = ''; 
    typed = 0;
    typeIt();
}

offsetStep = window.innerWidth * 4 / 100;
document.getElementById('projects').addEventListener("wheel", function(event) {
    if(event.deltaY > 0) {
        if(($('#projects')[0].offsetLeft - offsetStep) > (-5000 + window.innerWidth)) {
            $('#projects')[0].style.left = ($('#projects')[0].offsetLeft) - offsetStep + 'px';
        }
        else {
            $('#projects')[0].style.left = (-5000 + window.innerWidth) + 'px';
        }
    }
    else if(event.deltaY < 0) {
        if(($('#projects')[0].offsetLeft + offsetStep) < 0) {
            $('#projects')[0].style.left = ($('#projects')[0].offsetLeft) + offsetStep + 'px';
        }
        else {
            $('#projects')[0].style.left = '0px';
        }
    }
    event.preventDefault();
})