var auto_texts = new Array();

function AutoTextField(name, update, kwargs) {
	if (!kwargs) {
		var kwargs = new Object();
	};
	if (!kwargs.initial_value) {
		kwargs.initial_value = new String();
	};
	var element = document.createElement("p");
	Field.call(this, name, element, {parent: kwargs.parent});
	this.update = update;
	element.innerHTML = kwargs.initial_value;
	Object.defineProperty(this, "value", {
		set: function(value) {
			element.innerHTML = value;
		},
		get: function() {
			return element.innerHTML;
		},
	});
	auto_texts.push(this);
};

function updateAutoTexts() {
	for (i in auto_texts) {
		auto_texts[i].value = auto_texts[i].update();
	};
};
