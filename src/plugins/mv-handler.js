import { cwd } from 'node:process';
import { pathValidUtil } from "../util-args.js";
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { unlink } from 'node:fs/promises';

export function mvCmd(line, rl) {
    let line2 = line.slice(3);
    const validArgs = pathValidUtil(line2,2)
    if (!validArgs.valid){
        console.log("Invalid input");
        console.log(`You are currently in ${cwd()}`);
        return;
    }
    let pathToFile = validArgs.nArgs[0];
    let pathToCopy = validArgs.nArgs[1];

    const fileStream = createReadStream(pathToFile);
    const writableFile = createWriteStream(path.join(pathToCopy,path.basename(pathToFile))); //overwrites
    async function proc(){
        await pipeline(fileStream, writableFile);
        console.log(`You are currently in ${cwd()}`);
        await unlink(pathToFile);
        rl.prompt();
    }
    proc().catch(async (err)=>{
        //console.log("proc ",err);
        console.log("Operation failed");
        await unlink(path.join(pathToCopy,path.basename(pathToFile))); // to delegate deletion of unused fd
        console.log(`You are currently in ${cwd()}`);
        rl.prompt();
    })
}