import fs from 'fs';

const remove = async () => {
    const filePath = './files/fileToRemove.txt';

    fs.access(filePath, fs.constants.F_OK, err => {
        if(err){
          console.error("FS operation failed")  
        }
         else{
            fs.unlink(filePath, err => {
                if (err) {
                    console.error('An error occurred while deleting the file:', err);
                  } else {
                    console.log('File deleted successfully!');
                  }
            })
         }
    })
};

await remove();