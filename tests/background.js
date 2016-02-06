QUnit.module("Background", function(hooks) {
	QUnit.test("Its src can be changed.", function(assert) {
		var background = new Background("/image_url");
		assert.equal(background.src, "file:///image_url");
		background.src = "/other_image_url";
		assert.equal(background.src, "file:///other_image_url");
		background.remove();
	});
	QUnit.test("Its opacity can be changed.", function(assert) {
		var background = new Background("/image_url");
		assert.equal(background.opacity, 0.2);
		background.opacity = 0.4;
		assert.equal(background.opacity, 0.4);
		background.remove();
	});
});
