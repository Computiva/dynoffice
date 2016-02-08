function BaseObject(element, kwargs) {
	if (!kwargs) {
		var kwargs = new Object();
	};
	if (!kwargs.parent) {
		kwargs.parent = document.body;
	};
	element.field = this;
	kwargs.parent.appendChild(element);
	delete element.field;
	this.remove = function() {
		kwargs.parent.removeChild(element);
	};
	this.show = function() {
		element.field = this;
		kwargs.parent.appendChild(element);
		delete element.field;
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
		this[child.field.id] = child.field;
	};
	this.removeChild = function(child) {
		element.removeChild(child);
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
