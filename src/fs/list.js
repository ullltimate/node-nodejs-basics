import fs from 'fs/promises';
import path from 'path';

const list = async () => {
    const __dirname = path.resolve();
    try{
        const files = await fs.readdir(path.join(__dirname, 'src', 'fs', 'files'));
        console.log(files);
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();