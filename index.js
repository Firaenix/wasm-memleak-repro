const fs = require('fs');
const wasmBuffer = fs.readFileSync('./pkg/wasm_memleak_repro_bg.wasm');

WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
  const string_leak = wasmModule.instance.exports.string_leak;


  for (let index = 0; index < 1e15; index++) {
    const sum = string_leak()
    
    if (index % 1e5 === 0) {
      console.log("Iteration", index);
    }
  }
});