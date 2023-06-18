import fs from 'fs/promises';
import path from 'path';

const copy = async () => {
    const __dirname = path.resolve();
    try {
        await fs.access(path.join(__dirname, 'src', 'fs', 'files'));
        const isFolder = await fs.access(path.join(__dirname, 'src', 'fs', 'files_copy')).then(()=> true).catch(()=> false);
        if(!isFolder) {
            await fs.mkdir(path.join(__dirname, 'src', 'fs', 'files_copy'));
            const files = await fs.readdir(path.join(__dirname, 'src', 'fs', 'files'));
            for (var i=0; i<files.length; i++){
                await fs.copyFile(path.join(__dirname, 'src', 'fs', 'files', files[i]), path.join(__dirname, 'src', 'fs', 'files_copy', files[i]));
            }
        } else {
            throw new Error('FS operation failed')
        }
    } catch(err) {
        throw new Error('FS operation failed');
    }
};

await copy();
