import fs from 'fs/promises';
import path from 'path';

const create = async () => {
    const __dirname = path.resolve();
    try{
        await fs.appendFile(
            path.join(__dirname, 'src', 'fs', 'files', 'fresh.txt'),
            'I am fresh and young', {flag: 'wx'}
        );
    } catch(err) {
        console.error('ERROR:', err);
        if(err.code === 'EEXIST') throw new Error('FS operation failed');
    }
};

await create();