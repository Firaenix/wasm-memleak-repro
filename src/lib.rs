extern crate wee_alloc;

// Use `wee_alloc` as the global allocator.
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn string_leak() -> String {
    "asdjkhaskjdhasjkdhaskjdhasjkdhasdkjashdkjashdjkashdaskjdhasjkdhaskjdhasdjkashdkjashdaskjdhaskjdhaskjdhasdjkkashdkjashdkajsdhasjkd".into()
}