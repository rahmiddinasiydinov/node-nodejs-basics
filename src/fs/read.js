import fs from 'fs';

const read = async () => {
    const filePath = './files/fileToRead.txt';
    fs.readFile(filePath, 'utf-8', (err, content) => {
        if(err){
          console.error('FS operation failed!');
        } else {
            console.log(content);
        }
    })
};

await read();