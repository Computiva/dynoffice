function TextField(name, kwargs) {
	var element = document.createElement("textarea");
	Field.call(this, name, element, kwargs);
	element.style.width = "100%";
	element.style.borderStyle = "solid";
	element.style.borderColor = "black";
	element.style.borderWidth = "1px";
	element.style.borderRadius = "5px";
	element.style.padding = "7px";
	element.style.resize = "none";
	element.rows = 1;
	autosize(element);
};
