import fs from 'fs';

const list = async () => {
    const source = './files';

    fs.readdir(source, (err, files) => {
        if (err) {
          console.error('FS operation failed!');
        } else {
          console.log(files);
        }
      });
};

await list();