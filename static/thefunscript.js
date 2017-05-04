//alert(font);
document.body.style = "font-family: " + font;
var p = document.createElement("p");
p.innerHTML = "HI";
document.body.appendChild(p);

function dark() {
	var can = document.getElementById("nam");
	can.width = window.innerWidth * 50 / 100;
	can.height = "75";
	can.style.left = ((window.innerWidth / 2) - (can.width / 2)) + "px";
	can.style.top = ((window.innerHeight / 2) - (can.height / 2)) + "px";
	var ctx = can.getContext("2d");
	ctx.font = "42px " + font;
	ctx.textAlign = "center";
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, can.width, can.height);
	ctx.fillStyle = "white";
	ctx.fillText("Avinash Shenoy", can.width / 2, can.height / 2 + 15);
}

function light() {
	var can = document.getElementById("nam");
	can.width = window.innerWidth * 50 / 100;
	can.height = "75";
	can.style.left = ((window.innerWidth / 2) - (can.width / 2)) + "px";
	can.style.top = ((window.innerHeight / 2) - (can.height / 2)) + "px";
	var ctx = can.getContext("2d");
	ctx.font = "42px " + font;
	ctx.textAlign = "center";
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, can.width, can.height);
	ctx.fillStyle = "black";
	ctx.fillText("Avinash Shenoy", can.width / 2, can.height / 2 + 15);
}

function init() {
	light();

	var temp = document.getElementById("can");
	if (temp)
		temp.remove();

	var can = document.createElement("canvas");
	can.id = "can";
	can.height = window.innerHeight - 100;
	can.width = window.innerWidth - 100;
	can.addEventListener("mousemove", here, false);
	document.body.appendChild(can);
	var ctx = can.getContext("2d");

	ctx.fillStyle = "white";
	ctx.strokeStyle = "white";
	ctx.fillRect(0, 0, can.width, can.height);
	rem();
}

function here(event) {
	var canvas = document.getElementById("can");
	var ctx = canvas.getContext("2d");
	
	if (curx != null && cury != null) {
		ctx.fillStyle = "white";
		ctx.beginPath();
		ctx.arc(curx, cury, 60, 0, 2 * Math.PI);
		ctx.fill();

		ctx.fillStyle = "black";
		ctx.beginPath();
		ctx.arc(event.clientX - 50, event.clientY - 50, 50, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fill();

		curx = event.clientX - 50;
		cury = event.clientY - 50;
	}
	else {
		curx = event.clientX - 50;
		cury = event.clientY - 50;
	}
}

function rem() {
	var canvas = document.getElementById("can");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "white";
	ctx.beginPath();
	ctx.arc(curx, cury, 60, 0, 2 * Math.PI);
	ctx.fill();
	curx = cury = null;
}

curx = null;
cury = null;
init();