var s = document.createElement("style");
s.innerHTML = "* { display: none; }";
s.id = "loaderStage";
document.head.appendChild(s);

var handle = setInterval(function() {
	if(/loaded|complete/.test(document.readyState)) {
		console.log("loaded");
		document.getElementById("loaderStage").remove();
		clearInterval(handle);
	}
})