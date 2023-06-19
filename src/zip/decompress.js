import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';

const decompress = async () => {
    const __dirname = path.resolve();
    
    const readStream = createReadStream(path.join(__dirname, 'src', 'zip', 'files', 'archive.gz'));
    const writeSream = createWriteStream(path.join(__dirname, 'src', 'zip', 'files', 'fileToCompress.txt'));
    try {
        await pipeline(readStream, createGunzip(), writeSream,);
    } catch(err){
        console.error('ERR: ', err);
    }
};

await decompress();