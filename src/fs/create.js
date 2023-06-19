import fs from 'fs';
import path from 'path';

const create = async () => {
    const fileName = "fresh.text";
    const filePath = path.join('./files', fileName)
    const content = "I am fresh and young";
    const errorMessage = "FS operation failed"
    const successMessage = "Created succesfully!"

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if(err){
            fs.writeFile(filePath, content, (err) => {
                if(err){
                    console.error(errorMessage);
                } else {
                    console.log(successMessage)
                }
            })
        } else {
            console.error(errorMessage)
        }
    })
    
};

await create();