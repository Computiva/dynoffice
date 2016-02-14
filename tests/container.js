QUnit.module("Container", function(hooks) {
	QUnit.test("It can append a child.", function(assert) {
		function Foo() {
			var element = document.createElement("span");
			element.id = "foo";
			Container.call(this, element);
			var bar = document.createElement("span");
			this.appendChild(bar);
		};
		var foo = new Foo();
		var element = document.getElementById("foo");
		assert.equal(element.children.length, 1);
		assert.equal(element.children[0].tagName, "SPAN");
		foo.remove();
	});
	QUnit.test("It can remove a child.", function(assert) {
		function Foo() {
			var element = document.createElement("span");
			element.id = "foo";
			Container.call(this, element);
			var bar = document.createElement("span");
			bar.id = "bar";
			this.appendChild(bar);
		};
		var foo = new Foo();
		var element = document.getElementById("foo");
		var child = document.getElementById("bar");
		assert.equal(element.children.length, 1);
		foo.removeChild(child);
		assert.equal(element.children.length, 0);
		foo.remove();
	});
});
