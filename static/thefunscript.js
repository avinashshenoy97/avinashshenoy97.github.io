//alert(font);
document.body.style = "font-family: " + font;
var lmao = document.createElement("p");
lmao.innerHTML = "HI";
document.body.appendChild(lmao);

setTimeout(init, 2000);
var c = new Array();
var cleanme = new Array();

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
	can.style = "margin: 50px;"
	can.addEventListener("mousemove", handler, false);
	document.body.appendChild(can);
	var ctx = can.getContext("2d");

	ctx.fillStyle = "white";
	ctx.strokeStyle = "white";
	ctx.fillRect(0, 0, can.width, can.height);
}

var curx = 0, cury = 0;
var r = 5;

function handler(event) {
	here(event.clientX, event.clientY);
}

function here(x, y) {
	var tx = x - 50;
	var ty = y - 50;

	if (tx != curx && ty != cury) {
		redrawStart();
		curx = tx;
		cury = ty;
		c.push({ x: curx, y: cury });
		r = 5;
		var handle = setInterval(move, 150);

		function move() {
			if (r < 50) {
				var can = document.getElementById("can");
				var ctx = can.getContext("2d");
				ctx.fillStyle = "black";
				ctx.strokeStyle = "black";

				ctx.beginPath();
				ctx.arc(curx, cury, r, 0, 2 * Math.PI);
				ctx.stroke();
				ctx.fill();

				r += 10;
			}
			else {
				clearInterval(handle);
			}
		}
	}
}

function redrawStart() {
	while (c.length > 5) {
		var startx = c[0].x, starty = c[0].y;
		var r = 50;
		var handle = setInterval(redraw, 50);
		cleanme.push(c.shift());
	}

	function redraw() {
		var tx = startx, ty = starty;

		if (Math.abs(curx - tx) < 50 && Math.abs(cury - ty) < 50) {
			r = 0;
			//c.unshift({x : startx, y : starty});
		}

		if (r > 0) {
			var can = document.getElementById("can");
			var ctx = can.getContext("2d");
			ctx.strokeStyle = "white";
			ctx.lineWidth = 5;
			ctx.arc(tx, ty, r, 0, 2 * Math.PI);
			ctx.stroke();
			r -= 5;
		}
		else {
			clearInterval(handle);
		}
	}

	function redrawlast(x, y) {
		var tx = x - 50;
		var ty = y - 50;

		var handle = setInterval(move, 50);

		function move() {
			if (r < 50) {
				var can = document.getElementById("can");
				var ctx = can.getContext("2d");
				ctx.fillStyle = "black";
				ctx.strokeStyle = "black";
				ctx.beginPath();
				ctx.arc(tx, ty, r, 0, 2 * Math.PI);
				ctx.stroke();
				ctx.fill();

				r += 10;
			}
			else {
				clearInterval(handle);
			}
		}
	}
}

function clean() {
	var c = cleanme;
	while (c.length > 1) {
		var can = document.getElementById("can");
		var ctx = can.getContext("2d");
		ctx.strokeStyle = "white";
		ctx.fillStyle = "white";
		ctx.beginPath();
		ctx.arc(c[0].x, c[0].y, 50, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fill();
		c.shift();
	}

	var can = document.getElementById("can");
	var ctx = can.getContext("2d");
	ctx.strokeStyle = "black";
	ctx.fillStyle = "black";
	ctx.beginPath();
	ctx.arc(curx, cury, 50, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();
}
setInterval(clean, 2000);