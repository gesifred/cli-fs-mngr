import { cwd } from 'node:process';
import { createReadStream } from 'node:fs';
import { pathValidUtil } from '../util-args.js';
export async function catCmd(line, rl) {
    //let filePath = line.split(" ")[1];
    let line2 = line.slice(4);
    const validArgs = pathValidUtil(line2,1); //required arguments
    if (!validArgs.valid){
        console.log("Invalid input");
        console.log(`You are currently in ${cwd()}`);
        return;
    }
    let filePath = validArgs.nArgs[0];
    const fileStream = createReadStream(filePath);//.pipe(process.stdout);
    let content = "";
    fileStream.on('readable', () => {
        let chunk;
        while (null !== (chunk = fileStream.read())) {
            content += chunk;
        }
    });
    fileStream.on('end', () => {
        console.log(content);
        console.log(`You are currently in ${cwd()}`);
        rl.prompt();
    });
    fileStream.on('error', (err) => {
        console.log("Operation failed");
        console.log(`You are currently in ${cwd()}`);
        rl.prompt();
    });
}