document.body.addEventListener("mousewheel", checkNavPos);

var header = document.getElementById("header");
var navBarEle = document.getElementById("navBar");

function checkNavPos() {
    //console.log(window.scrollY);
    if(window.scrollY >= header.offsetHeight) {
        navBarEle.style.position = "fixed";
        navBarEle.style.top = 0;
        navBarEle.style.left = 0;
        //document.body.removeEventListener("mousewheel", checkNavPos);
    }
    else {
        navBarEle.style = "";
    }
}

function restartSite() {
    navBarEle.style = ''; 
    typed = 0;
    typeIt();
}