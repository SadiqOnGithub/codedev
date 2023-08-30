
// const fs = require("node:fs/promises");

// Execution time 500ms - 1.2s;
// RAM 15
// (async () => {
//   console.time("writeMany");
//   const fileHandle = await fs.open("test.txt", "w");

//   for (let i = 0; i < 8000; i++) {
//     await fileHandle.write(`${i}\n`);
//   }
//   console.timeEnd("writeMany");
// })();



// const fs = require("node:fs");

// Execution time 150ms - 250ms;
// RAM < 1
// (async () => {
//   console.time("writeMany");
//   fs.open("test.txt", "w", (err, fd) => {
//     for (let i = 0; i < 8000; i++) {
//       const buff = Buffer.from(`${i}\n`, "utf-8");
//       fs.writeSync(fd, buff);
//     }

//     console.timeEnd("writeMany");
//   });
// })();


// const fs = require('fs/promises');
// const fsSync = require('fs');
// const path = require('path');


// (async () => {
//   console.time('writeMany');
//   const fileHandle = await fs.open(filePath, 'w');
//   const filePath = path.join(__dirname, 'test.txt');
//   const stream = fileHandle.createWriteStream();

//   for (let i = 0; i < 8000; i++) {
    // for 8000 ittiration
    
    // Execution time 6s;
    // RAM 15-20
    // await fs.appendFile(filePath, `${i}\n`);

    // Execution time 3s;
    // RAM <= 15
    // fsSync.appendFileSync(filePath, `${i}\n`);

    // Execution time 500ms;
    // RAM < 30
    //  fsSync.appendFile(filePath, `${i}\n`, (err) => err && console.log(err));

    // Execution time < 30ms;
    // RAM < 1mb
//     stream.write(`${i}\n`);

//   }
//   console.timeEnd('writeMany');
// });