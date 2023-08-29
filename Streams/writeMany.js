const fs = require('fs/promises');
const fsSync = require('fs');
const path = require('path');

(async () => {
  console.time('writeMany');
  for (let i = 0; i < 10 * 1000; i++) {
    // await fs.appendFile(path.join(__dirname, 'test.txt'), 'test\n');
    fsSync.appendFileSync(path.join(__dirname, 'test.txt'), 'test\n');
  }
  console.timeEnd('writeMany');
})();