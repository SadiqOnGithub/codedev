// const fs = require('fs/promises');
// const fsSync = require('fs');
// const path = require('path');


(async () => {
  console.time('writeMany');
  const filePath = path.join(__dirname, 'test.txt');

  for (let i = 0; i < 8000; i++) {
    // for 8000 ittiration

    // Execution time 6s;
    // RAM 15-20
    await fs.appendFile(filePath, `${i}\n`);

    // Execution time 3s;
    // RAM <= 15
    fsSync.appendFileSync(filePath, `${i}\n`);

    // Execution time 500ms;
    // RAM < 30
    fsSync.appendFile(filePath, `${i}\n`, (err) => err && console.log(err));

  }
  console.timeEnd('writeMany');
});


const fs = require("node:fs/promises");

(async () => {
  console.time("writeMany");
  const fileHandle = await fs.open("test.txt", "w");

  for (let i = 0; i < 500 * 1000; i++) {
    // for 500*1000 ittiration
    // Execution time 30-50s;
    // RAM 50mb
    await fileHandle.write(`${i}\n`);
  }
  console.timeEnd("writeMany");
})();



// const fs = require("node:fs");

(async () => {
  console.time("writeMany");
  fs.open("test.txt", "w", (err, fd) => {
    for (let i = 0; i < 500 * 1000; i++) {
      // for 500*1000 ittiration
      // Execution time 6.5s;
      // RAM 19-22
      fs.writeSync(fd, `${i}\n`);
    }

    console.timeEnd("writeMany");
  });
});



// const fs = require('fs/promises');
// const fsSync = require('fs');
// const path = require('path');


(async () => {
  console.time('writeMany');
  const filePath = path.join(__dirname, 'test.txt');
  const fileHandle = await fs.open(filePath, 'w');
  const stream = fileHandle.createWriteStream();

  for (let i = 0; i < 500 * 1000; i++) {
    // for 500*1000 ittiration
    // Execution time 350ms-450ms;
    // RAM 130mb
    stream.write(`${i}\n`);
  }
  console.timeEnd('writeMany');
});