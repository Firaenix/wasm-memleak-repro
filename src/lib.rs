use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn string_leak() -> String {
    "asdjkhaskjdhasjkdhaskjdhasjkdhasdkjashdkjashdjkashdaskjdhasjkdhaskjdhasdjkashdkjashdaskjdhaskjdhaskjdhasdjkkashdkjashdkajsdhasjkd".into()
}