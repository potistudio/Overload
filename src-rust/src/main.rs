use std::char;

use bstr::ByteSlice;

fn main() {
	let buffer = bstr::BString::from(std::fs::read("D:/Projects/Development/After Effects Scripts/overload/dist/Untitled_005.ai").unwrap());

	let mut layers = Vec::new();

	// Find Layer Start
	for start in buffer.find_iter("%AI5_BeginLayer\x0d\x0a") {
		layers.push (start);
	}

	// Collect Rectangle
	for start in buffer.find_iter("(ai::Rectangle::Height)") {
		// println!("Rectangle found at: {}", start);
	}

	// Collect metadata
	for start in buffer.find_iter("endobj\x0D44\x200\x20") {
		// println!("endobj found at: {}", start);
	}

	println! ("Layer Count: {}", layers.len());
	for layer in layers.iter().enumerate() {
		let index = layer.0;
		let next_offset ;

		if index < layers.len() - 1 {
			next_offset = layers[index + 1];
		} else {
			next_offset = buffer.len();
		}

		let view = buffer.get (*layer.1 .. next_offset).unwrap();

		let a = view.find_char(char::from(0x28)).unwrap();
		let b = view.find_char(char::from(0x29)).unwrap();

		println!("├ {}", bstr::BString::from(view.get(a + 1 .. b).unwrap()));
	}

	// println! ("byte length: {}", buffer.len());
}
