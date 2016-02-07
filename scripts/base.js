function BaseObject(element, kwargs) {
	if (!kwargs) {
		var kwargs = new Object();
	};
	if (!kwargs.parent) {
		kwargs.parent = document.body;
	};
	kwargs.parent.appendChild(element);
	this.remove = function() {
		kwargs.parent.removeChild(element);
	};
};

function Background(src) {
	var element = new Image();
	BaseObject.call(this, element);
	element.src = src;
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
	div_element.field = this;
	BaseObject.call(this, div_element, {parent: kwargs.parent});
	delete div_element.field;
	div_element.style.fontFamily = "Arial";
	var label = document.createElement("label");
	label.innerHTML = name;
	label.style.display = "block";
	label.style.fontWeight = "bold";
	div_element.appendChild(label);
	div_element.appendChild(element);
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
};
