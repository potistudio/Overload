var WIDTH = 1920;
var HEIGHT = 1080;
var FPS = 30;

var newComp = createComposition ("New Comp");
createRectangle (newComp, 1280, 720);

function createComposition (name) {
	return app.project.items.addComp (name, WIDTH, HEIGHT, 1.0, 1.0, FPS);
}

function createRectangle (comp, width, height) {
	var newShapeLayer = comp.layers.addShape();
	var rootProperty = newShapeLayer.property ("Contents");

	var newShapeGroup = rootProperty.addProperty ("ADBE Vector Group")
	newShapeGroup.name = "New Rect";

	var newTransform = newShapeGroup.addProperty ("ADBE Vector Transform Group");
	var newRectProperty = newShapeGroup.addProperty ("ADBE Vectors Group");

	var newRectShape = newRectProperty.addProperty ("ADBE Vector Shape - Rect");
	newRectShape.property ("ADBE Vector Rect Size").setValue ([ width, height ]);

	var newFillProperty = newRectProperty.addProperty ("ADBE Vector Graphic - Fill");
	var newStrokeProperty = newRectProperty.addProperty ("ADBE Vector Graphic - Stroke");
}
