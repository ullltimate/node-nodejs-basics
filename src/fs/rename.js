import fs from 'fs/promises';
import path from 'path';

const rename = async () => {
    const __dirname = path.resolve();
    try {
        await fs.access(path.join(__dirname, 'src', 'fs', 'files', 'wrongFilename.txt'));
        const isFile = await fs.access(path.join(__dirname, 'src', 'fs', 'files', 'properFilename.md')).then(()=> true).catch(()=> false);
        if(!isFile) {
            await fs.copyFile(path.join(__dirname, 'src', 'fs', 'files', 'wrongFilename.txt'), path.join(__dirname, 'src', 'fs', 'files', 'properFilename.md'));
            await fs.unlink(path.join(__dirname, 'src', 'fs', 'files', 'wrongFilename.txt'));
        } else {
            throw new Error('FS operation failed');
        }
    } catch(err) {
        throw new Error('FS operation failed');
    }
};

await rename();