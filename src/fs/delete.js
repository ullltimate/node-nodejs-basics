import fs from 'fs/promises';
import path from 'path';

const remove = async () => {
    const __dirname = path.resolve();
    try{
        await fs.unlink(path.join(__dirname, 'src', 'fs', 'files', 'fileToRemove.txt'));
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();