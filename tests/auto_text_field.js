QUnit.module("AutoTextField", function(hooks) {
	QUnit.test("It can be initialized with a value.", function(assert) {
		var auto_text_field = new AutoTextField("Automatic text", function() {}, {initial_value: "auto"});
		assert.equal(auto_text_field.value, "auto");
		auto_text_field.remove();
	});
});
