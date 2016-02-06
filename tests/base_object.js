QUnit.module("BaseObject", function(hooks) {
	QUnit.test("It is placed on document.", function(assert) {
		var element = document.createElement("span");
		assert.notOk(element.parentElement);
		var base = new BaseObject(element);
		assert.equal(element.parentElement, document.body);
	});
	QUnit.test("It can be removed.", function(assert) {
		var element = document.createElement("span");
		var base = new BaseObject(element);
		assert.equal(element.parentElement, document.body);
		base.remove();
		assert.notOk(element.parentElement);
	});
});
