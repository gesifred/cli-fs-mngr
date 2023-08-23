import { cwd } from 'node:process';
import path from 'node:path';
import { open } from 'node:fs/promises';
import { pathValidUtil } from '../util-args.js';

export async function addCmd(line,rl){
    let line2 = line.slice(4);
    const validArgs = pathValidUtil(line2,1) //required arguments
    if (!validArgs.valid){
        console.log("Invalid input");
        console.log(`You are currently in ${cwd()}`);
        return;
    }
    let fileToAdd = validArgs.nArgs[0];
    let fileHandle ;
    try {
        // requirement says only current work directory
        fileHandle = await open(path.join(cwd(),path.basename(fileToAdd)),"wx"); // does not overwrite
        fileHandle.close();
        console.log(`You are currently in ${cwd()}`);
    } catch (e) {
        //console.log(e);
        console.log("Operation failed");
        console.log(`You are currently in ${cwd()}`);
    }
}