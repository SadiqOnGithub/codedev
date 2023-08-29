const fs = require('fs/promises');
const fsSync = require('fs');
const path = require('path');

(async () => {
  console.time('writeMany');
  for (let i = 0; i < 8000; i++) {
    // Execution time 6s;
    // RAM 15-20
    // await fs.appendFile(path.join(__dirname, 'test.txt'), `${i}\n`);

    // Execution time 3s;
    // RAM <= 15
    // fsSync.appendFileSync(path.join(__dirname, 'test.txt'), `${i}\n`);

    // Execution time 500ms;
    // RAM < 30
    //  fsSync.appendFile(path.join(__dirname, 'test.txt'), `${i}\n`, (err) => err && console.log(err));
  }
  console.timeEnd('writeMany');
})();