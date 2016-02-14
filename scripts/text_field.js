function TextField(name, kwargs) {
	var element = document.createElement("input");
	Field.call(this, name, element, kwargs);
	element.type = "text";
	element.style.width = "100%";
	element.style.borderStyle = "solid";
	element.style.borderColor = "black";
	element.style.borderWidth = "1px";
	element.style.borderRadius = "5px";
	element.style.padding = "5px";
};
