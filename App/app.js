const fs = require('fs/promises');
const fsSync = require('fs');

(async () => {
  // command file
  const COMMAND_FILE = '/command.txt';

  // commands
  const CREATE_FILE = 'create the file';
  const DELETE_FILE = 'delete the file';
  const RENAME_FILE = 'rename the file';
  const ADD_TO_FILE = 'add to the file';

  async function createFile(path, data = "") {
    try {
      await fs.appendFile(path, data);
      console.log("file created: ", path);
      if (data !== "") console.log("data added: ", data);
      return;
    } catch (error) {
      console.log(error);
    }
  }


  async function deleteFile(path) {
    try {
      if (fsSync.existsSync(path)) {
        await fs.unlink(path);
        console.log("file deleted", path);
        return;
      }
      console.log("file does not exist: ", path);
    } catch (error) {
      console.log(error);
    }
  }

  async function renameFile(oldPath, newPath) {

    try {
      if (fsSync.existsSync(oldPath)) {
        await fs.rename(oldPath, newPath);
        console.log("renameFile from ", oldPath, " to ", newPath);
        return;
      }
      console.log("file does not exist: ", oldPath);
    } catch (error) {
      console.log(error);
    }
  }

  const fileHandler = await fs.open(__dirname + COMMAND_FILE, 'r');

  fileHandler.on('change', async () => {
    const fileSize = (await fileHandler.stat()).size;
    const content = await fileHandler.read(Buffer.alloc(fileSize), 0, fileSize, 0);

    const command = content.buffer.toString();

    // create a new file <path>
    if (command.includes(CREATE_FILE)) {
      const filePath = command.substring(CREATE_FILE.length + 1);
      createFile(filePath);
    }

    // delete a file <path>
    if (command.includes(DELETE_FILE)) {
      const filePath = command.substring(DELETE_FILE.length + 1);
      deleteFile(filePath);
    }

    // rename the file <path> to <newpath>
    if (command.includes(RENAME_FILE)) {
      const _index = command.indexOf(" to ");
      const oldPath = command.substring(RENAME_FILE.length + 1, _index);
      const newPath = command.substring(_index + 4);

      renameFile(oldPath, newPath);

    }

    // add content to the existing file
    if (command.includes(ADD_TO_FILE)) {
      const _index = command.indexOf(" this content: ");
      const path = command.substring(ADD_TO_FILE.length + 1, _index);
      const content = command.substring(_index + 15);

      createFile(path, content);

    }
  });


  // watching the file
  const watcher = fs.watch(__dirname + COMMAND_FILE);
  for await (const event of watcher) {
    if (event.eventType === 'change') {
      fileHandler.emit('change');
    }
  }
})();