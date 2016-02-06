QUnit.module("Field", function(hooks) {
	QUnit.test("It has a label.", function(assert) {
		var element = document.createElement("span");
		assert.notOk(element.previousElementSibling);
		var field = new Field("Label", element);
		assert.equal(element.previousElementSibling.innerHTML, "Label");
		field.remove();
	});
});
