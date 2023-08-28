const fs = require('fs/promises');


(async () => {
  const fileHandler = await fs.open(__dirname + '/new.txt', 'r');

  fileHandler.on('change', async () => {
    const fileSize = (await fileHandler.stat()).size;
    const content = await fileHandler.read(Buffer.alloc(fileSize), 0, fileSize, 0);
    console.log(content);
  });


  // watching the file
  const watcher = fs.watch(__dirname + '/new.txt');
  for await (const event of watcher) {
    if (event.eventType === 'change') {
      fileHandler.emit('change');
      
    }
  }
})();