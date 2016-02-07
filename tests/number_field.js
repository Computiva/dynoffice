QUnit.module("NumberField", function(hooks) {
	QUnit.test("It can be initialized with a value.", function(assert) {
		var number_field = new NumberField("Age", {initial_value: 18});
		assert.equal(number_field.value, 18);
		number_field.remove();
	});
});
