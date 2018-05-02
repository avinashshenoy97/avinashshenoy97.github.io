var s = document.createElement("style");
s.innerHTML = "img { display: inline; margin: auto; position: absolute; left: 40%;} * { visibility: hidden; } h2, a { visibility: visible; position: absolute; left: 40%; top: 250px; font-family: 'Do Hyeon', sans-serif; }";
s.id = "loaderStage";
document.head.appendChild(s);

var parparDiv = document.createElement("div");
var parLoadDiv = document.createElement("div");
var upperArm = document.createElement("img");
var bicep = document.createElement("img");
var forearm = document.createElement("img");

//var tempbod = document.createElement("body");
//document.appendChild(tempbod);

upperArm.src = "static/images/upperArm.png";
bicep.src = "static/images/bicep.png";
forearm.src = "static/images/forearm.png";

upperArm.style.visibility = "visible";
upperArm.style.zIndex = "1";

bicep.style.visibility = "visible";
bicep.style.zIndex = "2";
bicep.style.transition = "all 1s ease 0s";
bicep.style.transform = "scale(0, 0)"

forearm.style.visibility = "visible";
forearm.style.zIndex = "3";
forearm.style.transition = "all 1s ease 0s";

document.body.style.display = "block";
parLoadDiv.appendChild(upperArm);
parLoadDiv.appendChild(bicep);
parLoadDiv.appendChild(forearm);

parparDiv.appendChild(parLoadDiv);

var heading = document.createElement("h2");
heading.textContent = "Loading Interactive Resume !"
/*heading.style.visibility = "visible";
heading.style.position = "absolute";
heading.style.left = "40%";
heading.style.top = "250px";
heading.style.fontFamily = "Do Hyeon, sans-serif";*/
parparDiv.appendChild(heading);

var heading2 = document.createElement("a");
//heading2.id = "skipper";
heading2.href = "profile.html";
heading2.style.top = "300px";
heading2.style.left = "0px";
heading2.color = "blue";
heading2.style.fontSize = "20px";
//heading2.appendChild(document.createElement("h2"));
//heading2.firstChild.textContent = "Skip";
heading2.textContent = " Skip ?";

parparDiv.appendChild(heading2);

document.body.appendChild(parparDiv);

var pos = 0;
var handle2 = setInterval(function() {
	console.log("rotating");
	if(pos == 0) {
		pos = 90;
		bicep.style.transform = "scale(1, 1)"
	}
	else {
		pos = 0;
		bicep.style.transform = "scale(0, 0)"
	}

	forearm.style.transform = "rotate(-" + pos + "deg)";
}, 1000);

var hpos = 0;
var handle3 = setInterval(function() {
	heading2.style.left = hpos + "px";
	hpos += 50;
	if(hpos > window.innerWidth)
		hpos = 0;
}, 1500);

var handle = setInterval(function() {
	if(/loaded|complete/.test(document.readyState)) {
		clearInterval(handle);
		clearInterval(handle2);
		clearInterval(handle3);
		console.log("loaded");
		document.getElementById("loaderStage").remove();
		var sc = document.createElement("script");
		sc.src = "static/master.js";
		sc.type = "text/javascript";
		document.body.appendChild(sc);
		parparDiv.remove();
		//upperArm.remove();
		//bicep.remove();
		//forearm.remove();
		//clearInterval(handle2);
	}
})

