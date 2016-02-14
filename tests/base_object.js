QUnit.module("BaseObject", function(hooks) {
	QUnit.test("It is placed on document.", function(assert) {
		function Foo() {
			var element = document.createElement("span");
			assert.notOk(element.parentElement);
			BaseObject.call(this, element);
			assert.equal(element.parentElement, document.body);
		};
		var foo = new Foo();
		assert.expect(2);
	});
	QUnit.test("It can be removed.", function(assert) {
		function Foo() {
			var element = document.createElement("span");
			element.id = "foo";
			BaseObject.call(this, element);
		};
		var foo = new Foo();
		var element = document.getElementById("foo");
		assert.equal(element.parentElement, document.body);
		foo.remove();
		assert.notOk(element.parentElement);
	});
	QUnit.test("It can be placed again.", function(assert) {
		function Foo() {
			var element = document.createElement("span");
			element.id = "foo";
			BaseObject.call(this, element);
		};
		var foo = new Foo();
		var element = document.getElementById("foo");
		foo.remove();
		assert.notOk(element.parentElement);
		foo.show();
		assert.equal(element.parentElement, document.body);
		foo.remove();
	});
	QUnit.test("Its parent can be specified.", function(assert) {
		function Foo(parent_element) {
			var element = document.createElement("span");
			element.id = "foo";
			BaseObject.call(this, element, {parent: parent_element});
		};
		var bar = document.createElement("span");
		var foo = new Foo(bar);
		document.body.appendChild(bar);
		var element = document.getElementById("foo");
		assert.equal(element.parentElement, bar);
		foo.remove();
	});
	QUnit.test("Its element id can be specified.", function(assert) {
		function Foo() {
			var element = document.createElement("span");
			BaseObject.call(this, element, {id: "foo"});
		};
		var foo = new Foo();
		var element = document.getElementById("foo");
		assert.equal(element.tagName, "SPAN");
		foo.remove();
	});
});
