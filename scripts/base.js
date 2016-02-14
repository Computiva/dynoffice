function BaseObject(element, kwargs) {
	if (!kwargs) {
		var kwargs = new Object();
	};
	if (!kwargs.parent) {
		kwargs.parent = document.body;
	};
	if (kwargs.id) {
		element.id = kwargs.id;
	};
	kwargs.parent.appendChild(element);
	element.style.fontFamily = "Arial";
	this.remove = function() {
		kwargs.parent.removeChild(element);
	};
	this.show = function() {
		kwargs.parent.appendChild(element);
	};
};

function Container(element, kwargs) {
	BaseObject.call(this, element, kwargs);
	this.appendChild = function(child) {
		element.appendChild(child);
	};
	this.removeChild = function(child) {
		element.removeChild(child);
	};
};

function Background(src) {
	var element = new Image();
	BaseObject.call(this, element);
	element.src = src;
	element.id = "background";
	element.style.position = "fixed";
	element.style.top = 0;
	element.style.left = 0;
	element.style.width = "100%";
	element.style.height = "100%";
	element.style.zIndex = -1;
	element.style.opacity = 0.2;
	Object.defineProperty(this, "src", {
		set: function(value) {
			element.src = value;
		},
		get: function() {
			return element.src;
		},
	});
	Object.defineProperty(this, "opacity", {
		set: function(value) {
			element.style.opacity = value;
		},
		get: function() {
			return element.style.opacity;
		},
	});
};

function Field(name, element, kwargs) {
	if (!kwargs) {
		var kwargs = new Object();
	};
	this.id = name.toLowerCase();
	var div_element = document.createElement("div");
	BaseObject.call(this, div_element, {parent: kwargs.parent});
	div_element.style.fontFamily = "Arial";
	var label = document.createElement("label");
	label.innerHTML = name;
	label.style.display = "block";
	label.style.fontWeight = "bold";
	div_element.appendChild(label);
	div_element.appendChild(element);
	element.addEventListener("change", function(event) {
		updateAutoTexts();
	});
};

function Fieldset(name) {
	var element = document.createElement("fieldset");
	BaseObject.call(this, element);
	element.style.fontFamily = "Arial";
	var legend = document.createElement("legend");
	legend.innerHTML = name;
	legend.style.fontWeight = "bold";
	legend.style.fontSize = "x-large";
	element.appendChild(legend);
	this.appendChild = function(child) {
		element.appendChild(child);
		if (child.field) {
			this[child.field.id] = child.field;
		};
	};
	this.removeChild = function(child) {
		element.removeChild(child);
	};
};

function Header() {
	var element = document.createElement("header");
	Container.call(this, element);
};

function Menu(actions) {
	var element = document.createElement("div");
	BaseObject.call(this, element);
	element.style.fontFamily = "Arial";
	element.style.margin = "7px";
	for (action in actions) {
		var item = document.createElement("a");
		item.innerHTML = action;
		item.style.padding = "7px";
		item.style.backgroundColor = "white";
		item.style.borderLeftStyle = "solid";
		item.style.borderTopStyle = "solid";
		item.style.borderBottomStyle = "solid";
		item.style.borderWidth = "1px";
		item.style.borderColor = "black";
		item.style.color = "black";
		item.style.textDecoration = "none";
		item.style.outline = 0;
		item.style.cursor = "pointer";
		element.appendChild(item);
		item.addEventListener("click", actions[action]);
	};
	element.querySelector("a:last-child").style.borderRightStyle = "solid";
	element.querySelector("a:last-child").style.borderTopRightRadius = "5px";
	element.querySelector("a:last-child").style.borderBottomRightRadius = "5px";
	element.querySelector("a:first-child").style.borderTopLeftRadius = "5px";
	element.querySelector("a:first-child").style.borderBottomLeftRadius = "5px";
};

function DynWindow() {
	var element = document.createElement("div");
	BaseObject.call(this, element);
	var title = document.createElement("div");
	var content = document.createElement("div");
	var close = document.createElement("a");
	close.innerHTML = "X";
	close.style.cursor = "default";
	close.style.padding = "7px";
	close.style.borderStyle = "solid";
	close.style.borderColor = "black";
	close.style.borderWidth = "1px";
	close.style.borderTopLeftRadius = "4px";
	close.addEventListener("click", this.remove);
	title.style.cursor = "default";
	title.style.paddingTop = "9px";
	title.style.paddingBottom = "9px";
	title.style.paddingLeft = "1px";
	title.style.borderBottomStyle = "solid";
	title.style.borderColor = "black";
	title.style.borderWidth = "1px";
	content.style.borderStyle = "solid";
	content.style.borderColor = "black";
	content.style.borderWidth = "1px";
	content.style.borderBottomLeftRadius = "4px";
	content.style.borderBottomRightRadius = "4px";
	content.style.margin = "1px";
	element.style.fontFamily = "Arial";
	element.style.position = "absolute";
	element.style.top = "30%";
	element.style.left = "50%";
	element.style.width = "400px";
	element.style.marginLeft = "-200px";
	element.style.backgroundColor = "white";
	element.style.borderStyle = "solid";
	element.style.borderColor = "black";
	element.style.borderWidth = "1px";
	element.style.borderRadius = "5px";
	function windowMove(event) {
		element.style.left = event.clientX + "px";
		element.style.top = window.scrollY + event.clientY - 20 + "px";
	};
	function windowDrag(event) {
		title.style.cursor = "move";
		window.addEventListener("mousemove", windowMove);
	};
	function windowDrop(event) {
		title.style.cursor = "default";
		window.removeEventListener("mousemove", windowMove);
	};
	title.addEventListener("mousedown", windowDrag);
	title.addEventListener("mouseup", windowDrop);
	title.appendChild(close);
	element.appendChild(title);
	element.appendChild(content);
	this.appendChild = function(child) {
		content.appendChild(child);
		if (child.field) {
			this[child.field.id] = child.field;
		};
	};
	this.removeChild = function(child) {
		content.removeChild(child);
	};
};

function createPrintCSS() {
	var stylesheet = document.createElement("style");
	stylesheet.media = "print";
	stylesheet.innerHTML += "button { display: none }";
	stylesheet.innerHTML += "img#background { display: none }";
	stylesheet.innerHTML += "input[type=text] { border-width: 0 }";
	stylesheet.innerHTML += "input[type=number] { border-width: 0 }";
	stylesheet.innerHTML += "select { border-width: 0 }";
	document.head.appendChild(stylesheet);
};

createPrintCSS();

if (!window.updateAutoTexts) {
	window.updateAutoTexts = function() {};
};
