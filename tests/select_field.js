QUnit.module("SelectField", function(hooks) {
	QUnit.test("It calls a function when an option is selected.", function(assert) {
		var select_field = new SelectField("Fruit", {
			Banana: function() {
				assert.ok(true);
			},
			Orange: function() {
				assert.ok(true);
			},
		});
		select_field.select("Banana");
		select_field.select("Orange");
		assert.expect(2);
		select_field.remove();
	});
});
