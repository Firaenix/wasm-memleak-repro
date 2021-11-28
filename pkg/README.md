## Steps to reproduce

1. Pull down repo
2. Run `node ./index.js`
3. Watch memory usage using a tool such as `top`.  
   You will notice the performance drop off rapidly, the memory usage will spike fast and eventually the WASM runtime will crash.