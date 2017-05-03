var d = new Date();
var l = document.createElement("link");
l.rel = "stylesheet";
var font;
var cond = d.getDay();

switch (cond) {
	case 0:
		l.href = "https://fonts.googleapis.com/css?family=Bungee+Inline";
		font = "Bungee Inline";
		break;

	case 1:
		l.href = "https://fonts.googleapis.com/css?family=Covered+By+Your+Grace";
		font = "Covered By Your Grace";
		break;

	case 2:
		l.href = "https://fonts.googleapis.com/css?family=Orbitron";
		font = "Orbitron";
		break;

	case 3:
		l.href = "https://fonts.googleapis.com/css?family=Indie+Flower";
		font = "Indie Flower";
		break;

	case 4:
		l.href = "https://fonts.googleapis.com/css?family=Gloria+Hallelujah";
		font = "Gloria Hallelujah";
		break;

	case 5:
		l.href = "https://fonts.googleapis.com/css?family=Revalia";
		font = "Revalia";
		break;

	case 6:
		l.href = "https://fonts.googleapis.com/css?family=Audiowide";
		font = "Audiowide";
		break;
}
document.head.appendChild(l);