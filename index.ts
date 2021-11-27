import init, { greet } from './pkg/wasm_memleak_repro.js';
// const { promisify } = await import('util')
// const crypto = await import('crypto');
// const randomBytesFill = promisify(crypto.randomFill);
const iterations = 100_000_000_000;

(async () => {
  await init();
  for (let index = 0; index < iterations; index++) {
    // const ciphertext = bsv.AES.encrypt(key, iv, message, bsv.AESAlgorithms.AES256_CBC);
    // bsv.AES.decrypt(key, iv, ciphertext, bsv.AESAlgorithms.AES256_CBC);
    // let hmac = ciphertext.getHMAC();
    // let ctx = ciphertext.getCiphertext();
    // let keys = ciphertext.getCipherKeys();
  
    // bsv.AES.get_string();
    greet()
    // bsv.AES.next_string(out_str)
    
    if (index % 10000 == 0) {
      console.log(`Iteration ${index}`);
    }
    // keys.free();
  }

})()




// let from = bsv.PrivateKey.fromRandom();
// let to = bsv.PrivateKey.fromRandom().toPublicKey();
// let ciphertext = bsv.ECIES.encrypt(message, from, to, false);

// const key = Buffer.alloc(32);
// await randomBytesFill(key);

// const iv = Buffer.alloc(16);
// await randomBytesFill(iv);

// const message = Buffer.alloc(4096);
// await randomBytesFill(message);



console.log("Finished")

