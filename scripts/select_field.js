function SelectField(name, options, kwargs) {
	if (!kwargs) {
		var kwargs = new Object();
	};
	var element = document.createElement("select");
	Field.call(this, name, element, {parent: kwargs.parent});
	for (option_name in options) {
		var option = document.createElement("option");
		option.value = option_name;
		option.innerHTML = option_name;
		element.appendChild(option);
	};
	this.select = function(option) {
		options[option].call();
	};
	var that = this;
	element.addEventListener("change", function() {
		that.select(element.value);
	});
};
