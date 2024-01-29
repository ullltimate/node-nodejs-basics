import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';

const compress = async () => {
    const __dirname = path.resolve();
    
    const readStream = createReadStream(path.join(__dirname, 'src', 'zip', 'files', 'fileToCompress.txt'));
    const writeSream = createWriteStream(path.join(__dirname, 'src', 'zip', 'files', 'archive.gz'));
    try {
        await pipeline(readStream, createGzip(), writeSream,);
    } catch(err){
        console.error('ERR: ', err);
    }
};

await compress();