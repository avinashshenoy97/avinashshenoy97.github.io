var height = window.outerHeight;
var width = window.innerWidth;
var bheight = document.getElementById("bg").offsetHeight;
var bwidth = document.getElementById("bg").offsetWidth;
var flag = true;
var revflag = false;
var lastScrollTop = 0;
var e = document.getElementById("avi-container");
var avi = document.getElementById("avi");
var y = document.getElementById("yeti");

var categories = ['High School', 'Pre-University', 'Bachelors'];
var flags = [false, false, false, false, false, false, false];

function setupExit() {
	if(flag) {
		y.style.left = bwidth + "px";
	}
	else {
		y.style.left = "-200px";
	}
	y.style.display = "inline";
	handle = setInterval(away, 10);
}

function away() {
	var pos = e.getBoundingClientRect();
	var ypos = y.getBoundingClientRect();
	var next = 0, ynext = 0;
	if(flag) {
		next = pos.left - 10;
		ynext = ypos.left - 10;
		if(ynext < -200) {
			window.clearInterval(handle);
		}
	}
	else {
		next = pos.left + 10;
		ynext = ypos.left + 10;
		if(ynext > bwidth) {
			window.clearInterval(handle);
		}
	}
	e.style.left = next + "px";
	y.style.left = ynext + "px";
}

function controlAvinash() {
	var pos = e.getBoundingClientRect();
	var st = window.pageYOffset || document.documentElement.scrollTop;
	if(st > lastScrollTop) {
		if(revflag) {
			revflag = false;
			if(flag) {
				avi.style.left = "0px";
			}
			else {
				avi.style.left = "-200px";
			}
			flag = !flag;
		}
		var next;
		if(flag) {
			next = pos.left - 10;
			e.style.left = next + "px";
		}
		else {
			next = pos.left + 10;
			e.style.left = next + "px";
		}
		if(next < 0) {
			flag = false;
			avi.style.left = "0px";
		}
		else if((width-(pos.left+200)) < 0) {
			flag = true;
			avi.style.left = "-200px";
		}
	}
	else if(st < lastScrollTop){
		if(!revflag) {
			revflag = true;
			if(flag) {
				avi.style.left = "0px";
			}
			else {
				avi.style.left = "-200px";
			}
			flag = !flag;
		}
		var next;
		if(flag) {
			next = pos.left - 10;
			e.style.left = next + "px";
		}
		else {
			next = pos.left + 10;
			e.style.left = next + "px";
		}
		if(next < 0) {
			flag = false;
			avi.style.left = "0px";
		}
		else if((width-(pos.left+200)) < 0) {
			flag = true;
			avi.style.left = "-200px";
		}
	}
	lastScrollTop = st;

	if(window.scrollY > 340 && !flags[0]) {
		flags[0] = true;
		var ele = document.getElementById("bar");
		var each = 100 / categories.length;
		document.getElementById("ibar").style.width = (each * 2.5) + "%";
		for(var i = 0 ; i < categories.length ; i++) {
			var newele = document.createElement("div");
			newele.className = "seperator";
			ele.appendChild(newele);
			newele.style.left = "0%";
			var labele = document.getElementById("l" + (i+1));
			labele.style.left = (each * (i)) + "%";
			labele.style.width = (each/2) + "%";
			var labele = document.getElementById("ll" + (i+1));
			labele.style.left = (each * (i)) + "%";
			//labele.style.width = (each/2) + "%";
			setTimeout((function(newele, each, i) {newele.style.left = (each * (i+1)) + "%";}).bind(null, newele, each, i), 4);
		}
	}
	else if(window.scrollY > 1350 && !flags[1]) {
		flags[1] = true;
		var fs = document.getElementsByClassName("flags");
		for(var i = 0 ; i < fs.length ; i++) {
			fs[i].style.bottom = "50px";
		}
	}
	else if(window.scrollY > 2560 && !flags[2]) {
		flags[2] = true;
		var fs = document.getElementsByClassName("trees");
		for(var i = 0 ; i < fs.length ; i++) {
			fs[i].style.bottom = "50px";
		}
	}
	else if(window.scrollY > 4310 && !flags[3]) {
		flags[3] = true;
		addWeights();
	}
	else if(window.scrollY >= 9100) {
		document.removeEventListener("scroll", controlAvinash);
		setupExit();
	}
}

var namePos = 100;
var nameEle = document.getElementById("name");
function nameTicker() {
	namePos -= 5;
	nameEle.style.left = namePos + "%";
	if(namePos == -105) {
		namePos = 105;
	}
}

document.addEventListener("scroll", controlAvinash);
handle2 = setInterval(nameTicker, 250);

function createCell(r, c, x, y) {
	var e = document.createElement("div");
	e.className = "cell";
	e.style.left = x + "px";
	e.style.top = y + "px";
	return e;
}

function fillTicker() {
	var ele = document.getElementById("ticker");
	var hi = ele.offsetHeight - 40;
	var iw = width - 10;
	for(var r = 0, y = 20; (y - 12) < hi ; r++, y += 12) {
		for(var c = 0, x = 0; x < iw ; c++, x += 12) {
			ele.appendChild(createCell(r, c, x, y));
		}
	}
}
fillTicker();

function moveWeight() {
	var wt = document.getElementsByClassName("weights");
	for(var i = 0 ; i < wt.length ; i++) {
		wt[i].style.left = (i * 10) + "%";
	}
}

var my = 40;
var tot = 74;
function addWeights() {
	var di = document.getElementById("weightl");
	var plates = parseInt((my/tot) * 10);
	for(var i = 0 ; i < plates ; i++) {
		var e = document.createElement("img");
		e.src = "static/images/plate.png";
		e.alt = "plate";
		e.className = "weights";
		e.style.left = "0%";
		di.appendChild(e);
	}
	var e = document.createElement("h4");
	e.innerHTML = (plates * 10) + "%";
	e.style.position = "absolute";
	e.style.top = "690px";
	if(plates != 10) {
		e.style.left = ((plates) * 10) + "%";
	}
	else {
		e.style.left = ((plates - 1) * 10) + "%";
	}
	di.appendChild(e);
	setTimeout(moveWeight, 10);
}