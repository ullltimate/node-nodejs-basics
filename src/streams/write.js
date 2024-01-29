import path from 'path';
import { createWriteStream } from 'fs';
import { stdin } from 'process';

const write = async () => {
    const __dirname = path.resolve();

    const writeStream = createWriteStream(path.join(__dirname, 'src', 'streams', 'files', 'fileToWrite.txt'))
    stdin.pipe(writeStream);
};

await write();