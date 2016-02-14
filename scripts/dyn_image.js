function DynImage(src, kwargs) {
	var element = document.createElement("img");
	BaseObject.call(this, element, kwargs);
	element.src = src;
	Object.defineProperty(this, "src", {
		set: function(value) {
			element.src = value;
		},
		get: function() {
			return element.src;
		},
	});
};
