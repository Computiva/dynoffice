function Background(src) {
	DynImage.call(this, src, {id: "background"});
	var element = document.getElementById("background");
	element.style.position = "fixed";
	element.style.top = 0;
	element.style.left = 0;
	element.style.width = "100%";
	element.style.height = "100%";
	element.style.zIndex = -1;
	element.style.opacity = 0.2;
};
