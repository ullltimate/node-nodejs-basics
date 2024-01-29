import path from 'path';
import { createReadStream } from 'fs';
import { stdout } from 'process';

const read = async () => {
    const __dirname = path.resolve();
    
    const readStream = createReadStream(path.join(__dirname, 'src', 'streams', 'files', 'fileToRead.txt'));
    readStream.pipe(stdout);
};

await read();