import { unlink } from 'node:fs/promises';
import { cwd } from 'node:process';
import { pathValidUtil } from '../util-args.js';

export async function rmCmd(line, rl) {
    let line2 = line.slice(3);
    const validArgs = pathValidUtil(line2,1); //required arguments
    if (!validArgs.valid){
        console.log("Invalid input");
        console.log(`You are currently in ${cwd()}`);
        return;
    }
    let filePath = validArgs.nArgs[0];
    try {
        await unlink(filePath);
        console.log(`You are currently in ${cwd()}`);
    } catch (err) {
        console.log("Operation failed");
        console.log(`You are currently in ${cwd()}`);
        rl.prompt();
    }
}