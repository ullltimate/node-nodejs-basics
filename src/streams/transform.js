import { Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';
import { pipeline } from 'node:stream/promises';
 
const transform = async () => {
    
    function reverse(str){
        return str.toString().split("").reverse().join("");
    }

    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, reverse(chunk))
        }
    })
    
    await pipeline(stdin, reverseTransform, stdout)
};

await transform();