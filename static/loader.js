var s = document.createElement("style");
s.innerHTML = "* { display: none; }";
s.id = "loaderStage";
document.head.appendChild(s);

var handle = setInterval(function() {
	if(/loaded|complete/.test(document.readyState)) {
		clearInterval(handle);
		console.log("loaded");
		document.getElementById("loaderStage").remove();
		var sc = document.createElement("script");
		sc.src = "static/master.js";
		sc.type = "text/javascript";
		document.body.appendChild(sc);
	}
})