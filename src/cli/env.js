import process from 'node:process';

const parseEnv = () => {
    const objEnv = process.env;
    const keysObjEnv = Object.keys(objEnv);
    const valuesObjEnv = Object.values(objEnv);
    for(let i=0; i<keysObjEnv.length; i++){
        if (keysObjEnv[i].substring(0, 4) === 'RSS_'){
            console.log(`${keysObjEnv[i]}=${valuesObjEnv[i]}`);
        }
    }
};

parseEnv();