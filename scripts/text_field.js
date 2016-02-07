function TextField(name, kwargs) {
	if (!kwargs) {
		var kwargs = new Object();
	};
	if (!kwargs.initial_value) {
		kwargs.initial_value = new String();
	};
	var element = document.createElement("input");
	Field.call(this, name, element, {parent: kwargs.parent});
	element.type = "text";
	element.value = kwargs.initial_value;
	element.style.width = "100%";
	Object.defineProperty(this, "value", {
		set: function(value) {
			element.value = value;
		},
		get: function() {
			return element.value;
		},
	});
};