/// <reference types="types-for-adobe/AfterEffects/23.0" />

const WIDTH = 1920;
const HEIGHT = 1080;
const FPS = 30;

let newComp = createComposition ("New Comp");
createRectangle (newComp, 400, 100);

const result = system.callSystem ("\"D:\\Projects\\Development\\After Effects Scripts\\overload\\dist\\src-rust.exe\"");
alert (result);

function createComposition (name: string) {
	return app.project.items.addComp (name, WIDTH, HEIGHT, 1.0, 1.0, FPS);
}

function createRectangle (comp: CompItem, width: number, height: number) {
	const newShapeLayer = comp.layers.addShape();
	const rootProperty = newShapeLayer.property ("Contents") as PropertyGroup;

	const newShapeGroup = rootProperty.addProperty ("ADBE Vector Group") as PropertyGroup;
	newShapeGroup.name = "New Rect";

	const newTransform = newShapeGroup.addProperty ("ADBE Vector Transform Group") as PropertyGroup;
	const newRectProperty = newShapeGroup.addProperty ("ADBE Vectors Group") as PropertyGroup;

	const newRectShape = newRectProperty.addProperty ("ADBE Vector Shape - Rect");
	(newRectShape.property ("ADBE Vector Rect Size") as Property).setValue ([ width, height ]);

	const newFillProperty = newRectProperty.addProperty ("ADBE Vector Graphic - Fill");
	const newStrokeProperty = newRectProperty.addProperty ("ADBE Vector Graphic - Stroke");
}
