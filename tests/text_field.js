QUnit.module("TextField", function(hooks) {
	QUnit.test("It can be initialized with a value.", function(assert) {
		var text_field = new TextField("Name", "Richard");
		assert.equal(text_field.value, "Richard");
		text_field.remove();
	});
});
