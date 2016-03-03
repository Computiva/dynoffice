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

var fields = new Array();

function Field(name, element, kwargs) {
	if (!kwargs) {
		var kwargs = new Object();
	};
	if (!kwargs.id) {
		kwargs.id = name.toLowerCase().replace(" ", "_");
	};
	var div_element = document.createElement("div");
	BaseObject.call(this, div_element, kwargs);
	fields.push(this);
	var label = document.createElement("label");
	label.innerHTML = name;
	label.style.display = "block";
	label.style.fontWeight = "bold";
	div_element.appendChild(label);
	div_element.appendChild(element);
	Object.defineProperty(this, "value", {
		set: function(value) {
			element.value = value;
		},
		get: function() {
			return element.value;
		},
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

function saveForm() {
	var field_values = fields.map(function(field) { return field.value; });
	var download_link = document.createElement("a");
	download_link.href = "data:text/html,<html><head>";
	download_link.href += encodeURIComponent(document.head.innerHTML);
	download_link.href += "<script>";
	download_link.href += "window.addEventListener(\"load\", function() { var field_values = JSON.parse(";
	download_link.href += encodeURIComponent(JSON.stringify(JSON.stringify(field_values)));	
	download_link.href += "); for (i in fields) { fields[i].value = field_values[i]; }});%3C/script>";
	download_link.href += "</head></html>";
	download_link.download = "meeting_record.html";
	document.body.appendChild(download_link);
	download_link.click();
	document.body.removeChild(download_link);
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

function loadScript(url) {
	var script = document.createElement("script");
	script.src = url;
	document.head.appendChild(script);
};

if (!window.updateAutoTexts) {
	window.updateAutoTexts = function() {};
};
