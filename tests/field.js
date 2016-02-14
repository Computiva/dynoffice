QUnit.module("Field", function(hooks) {
	QUnit.test("It has a label.", function(assert) {
		function Foo() {
			var element = document.createElement("span");
			Field.call(this, "Foo field", element, {id: "foo"});
		};
		var foo = new Foo();
		var div_element = document.getElementById("foo");
		assert.equal(div_element.children[0].tagName, "LABEL");
		assert.equal(div_element.children[0].innerHTML, "Foo field");
		foo.remove();
	});
	QUnit.test("Its value is the element's value.", function(assert) {
		function Foo() {
			var element = document.createElement("span");
			element.value = "bar";
			Field.call(this, "Foo field", element, {id: "foo"});
		};
		var foo = new Foo();
		assert.equal(foo.value, "bar");
		var div_element = document.getElementById("foo");
		div_element.children[1].value = "bar bar";
		assert.equal(foo.value, "bar bar");
		foo.value = "bar bar bar";
		assert.equal(div_element.children[1].value, "bar bar bar");
		foo.remove();
	});
	QUnit.test("Its default id is the lowercased name with no blank spaces.", function(assert) {
		function Foo() {
			var element = document.createElement("span");
			Field.call(this, "Foo field", element);
		};
		var foo = new Foo();
		var element = document.getElementById("foo_field").children[1];
		assert.equal(element.tagName, "SPAN");
		foo.remove();
	});
});
