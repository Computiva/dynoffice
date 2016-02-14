QUnit.module("DynImage", function(hooks) {
	QUnit.test("It has a source.", function(assert) {
		var image = new DynImage("foo:/bar", {id: "foo"});
		var element = document.getElementById("foo");
		assert.equal(element.src, "foo:/bar");
		assert.equal(image.src, element.src);
		image.remove();
	});
	QUnit.test("Its source can be changed.", function(assert) {
		var image = new DynImage("foo:/bar", {id: "foo"});
		var element = document.getElementById("foo");
		assert.equal(element.src, "foo:/bar");
		image.src = "foo:/bar/bar";
		assert.equal(element.src, "foo:/bar/bar");
		image.remove();
	});
});
