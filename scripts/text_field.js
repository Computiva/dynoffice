function TextField(name, initial_value) {
	var element = document.createElement("input");
	Field.call(this, name, element);
	element.type = "text";
	if (initial_value) {
		element.value = initial_value;
	};
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
