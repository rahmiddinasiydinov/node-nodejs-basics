import fs from 'fs';
import crypto from 'crypto'

const calculateHash = async () => {
    const fileName = './files/fileToCalculateHashFor.txt';
    const hash = crypto.createHash('sha256');
    const input = fs.createReadStream(fileName);
    input.on('data', (chunk) => {
        hash.update(chunk);
      });
    
      input.on('end', () => {
        const fileHash = hash.digest('hex');
        console.log('SHA256 hash:', fileHash);
      });
    
      input.on('error', (error) => {
        console.error('Error calculating hash:', error);
      });
    
};

await calculateHash();