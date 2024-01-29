const parseArgs = () => {
    const arrayArgs = process.argv.splice(2);
    let str = '';
    for(let i=0; i<arrayArgs.length; i++){
        if (i === 0 || i % 2 === 0){
            str +=`${arrayArgs[i].slice(2)} is ${arrayArgs[i+1]}, `;
        }
    }
    console.log(str)
};

parseArgs();