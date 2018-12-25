document.body.addEventListener("mousewheel", checkNavPos);

var header = document.getElementById("header");
var navBarEle = document.getElementById("navBar");

function checkNavPos() {
    //console.log(window.scrollY);
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