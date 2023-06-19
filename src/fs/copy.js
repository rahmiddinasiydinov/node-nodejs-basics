import fs from 'fs';
import path from 'path'

const copy = async () => {
    const source = './files';
    const destionation = 'files_copy';

    fs.access(source, fs.constants.F_OK, (err) => {
        if(err){
            console.error("FS operation failed")
        } else{
            fs.access(destionation, fs.constants.F_OK, (err) => {
                if(err){
                    fs.mkdirSync(destionation)
                    fs.readdirSync(source).forEach(file => {
                        const sourceFile = path.join(source, file);
                        const destinationFile = path.join(destionation, file);

                        fs.copyFile(sourceFile, destinationFile, err => {
                            if(err){
                                console.error('Error occured while copying')
                            } else {
                                console.log("File copied!");
                            }
                        })
                    })
                    
                } else{
                    console.error("FS operation failed")
                }
            }) 
        }
    })    
};

await copy();
