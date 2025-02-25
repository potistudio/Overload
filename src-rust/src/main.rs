use std::io::Read;
use bstr::ByteSlice;

fn main() {
	// let mut aiFile = std::fs::File::open ("D:/Projects/Development/After Effects Scripts/overload/dist/Untitled_003.ai").unwrap();
	// let mut buffer = bstr::BString::new ();

	let mut buffer = bstr::BString::from(std::fs::read("D:/Projects/Development/After Effects Scripts/overload/dist/Untitled_003.ai").unwrap());

	for start in buffer.find_iter("endobj") {
		println!("{}", start);
	}

	println! ("{}", buffer.len());
}
