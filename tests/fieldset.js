QUnit.module("Fieldset", function(hooks) {
	QUnit.test("It can add a field.", function(assert) {
		var fieldset = new Fieldset("Person");
		new TextField("Name", {initial_value: "John", parent: fieldset});
		assert.equal(fieldset.name.value, "John");
		fieldset.remove();
	});
});
