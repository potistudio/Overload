/// <reference types="types-for-adobe/AfterEffects/23.0" />

const WIDTH = 1920;
const HEIGHT = 1080;
const FPS = 30;

let newComp = createComposition ("New Comp");
createRectangle (newComp, 1280, 720);

function createComposition (name: string) {
	return app.project.items.addComp (name, WIDTH, HEIGHT, 1.0, 1.0, FPS);
}

function createRectangle (comp: CompItem, width: number, height: number) {
	let newShapeLayer = comp.layers.addShape();
	let rootProperty = newShapeLayer.property ("Contents");

	let newShapeGroup = rootProperty.addProperty ("ADBE Vector Group")
	newShapeGroup.name = "New Rect";

	let newTransform = newShapeGroup.addProperty ("ADBE Vector Transform Group");
	let newRectProperty = newShapeGroup.addProperty ("ADBE Vectors Group");

	let newRectShape = newRectProperty.addProperty ("ADBE Vector Shape - Rect");
	newRectShape.property ("ADBE Vector Rect Size").setValue ([ width, height ]);

	let newFillProperty = newRectProperty.addProperty ("ADBE Vector Graphic - Fill");
	let newStrokeProperty = newRectProperty.addProperty ("ADBE Vector Graphic - Stroke");
}
