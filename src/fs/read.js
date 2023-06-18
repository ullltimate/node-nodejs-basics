import fs from 'fs/promises';
import path from 'path';

const read = async () => {
    const __dirname = path.resolve();
    try{
        const contents = await fs.readFile(path.join(__dirname, 'src', 'fs', 'files', 'fileToRead.txt'), {encoding: 'utf8'});
        console.log(contents);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();