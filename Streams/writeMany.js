const fs = require('fs/promises');
const path = require('path');

(async () => {
  console.time('writeMany');
  for (let i = 0; i < 10000; i++) {
    await fs.appendFile(path.join(__dirname, 'test.txt'), 'test\n');
  }
  console.timeEnd('writeMany');
})();