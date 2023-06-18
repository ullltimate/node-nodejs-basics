import fs from 'fs/promises';
import path from 'path';
import { createHash } from 'crypto';

const calculateHash = async () => {
    const __dirname = path.resolve();
    const hash = createHash('sha256');
    const data = await fs.readFile(path.join(__dirname, 'src', 'hash', 'files', 'fileToCalculateHashFor.txt'), {encoding: 'utf8'})
    hash.update(data);
    console.log(hash.digest('hex'));
};

await calculateHash();