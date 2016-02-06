function BaseObject(element) {
	document.body.appendChild(element);
	this.remove = function() {
		document.body.removeChild(element);
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

function Field(name, element) {
	var div_element = document.createElement("div");
	BaseObject.call(this, div_element);
	div_element.style.fontFamily = "Arial";
	var label = document.createElement("label");
	label.innerHTML = name;
	label.style.display = "block";
	label.style.fontWeight = "bold";
	div_element.appendChild(label);
	div_element.appendChild(element);
};
