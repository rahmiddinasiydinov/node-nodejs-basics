import fs from 'fs';

const rename = async () => {
    const oldFile = './files/wrongFilename.txt'
    const newFile = './files/properFilename.md'
    fs.access(oldFile, fs.constants.F_OK, err => {
        if(err){
           

            console.error('FS operation failed!')
        }
        else{
            fs.access(newFile, fs.constants.F_OK, err => {
                if(err){
                    fs.rename(oldFile, newFile, (err) => {
                        if (err) {
                          console.error('An error occurred while renaming the file:', err);
                        } else {
                          console.log('File renamed successfully!');
                        }
                      });
                }
                else{
                    console.error('FS operation failed!')
                }
            })
        }
    })
};

await rename();