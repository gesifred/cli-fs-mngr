import { rename as renamePromise } from 'node:fs/promises';
import { cwd } from 'node:process';
import path from 'node:path'
import { pathValidUtil } from '../util-args.js';

export async function rnCmd(line,rl){
    let line2 = line.slice(3);
    const validArgs = pathValidUtil(line2,2)
    if (!validArgs.valid){
        console.log("Invalid input");
        console.log(`You are currently in ${cwd()}`);
        return;
    }
    let pathToFile = validArgs.nArgs[0];
    let fileDirname = path.dirname(pathToFile);
    let newFilename = validArgs.nArgs[1];
    try {
        await renamePromise(pathToFile , path.join(fileDirname, newFilename)); //it overwrites
        console.log(`You are currently in ${cwd()}`);
    } catch (err) {
        console.log(err);
        console.log("Operation failed");
        console.log(`You are currently in ${cwd()}`);
    }
}