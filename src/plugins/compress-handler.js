import path from 'node:path'
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';
import { unlink } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import { pathValidUtil } from '../util-args.js';
import { cwd } from 'node:process';

export async function compressCmd(line,rl){
    let line2 = line.slice(9);
    const validArgs = pathValidUtil(line2,2);
    if (!validArgs.valid){
        console.log("Invalid input");
        console.log(`You are currently in ${cwd()}`);
        return;
    }
    let pathToFile = validArgs.nArgs[0];
    let pathToCopy = validArgs.nArgs[1];

    const fileStream = createReadStream(pathToFile);
    const writableFile = createWriteStream(path.join(pathToCopy,path.basename(pathToFile)+".br")); //overwrites
    const brotliCompress = createBrotliCompress();
    const runner = async function () {
        try {
            await pipeline(
                fileStream,
                brotliCompress,
                writableFile
            );
            console.log(`You are currently in ${cwd()}`);
            rl.prompt();
        } catch (e) {
            if (e.code =="ENOENT"){
                unlink(path.join(pathToCopy,pathToFile+".br"));
            }
            //console.error(e)
            console.log("Operation failed--");
            console.log(`You are currently in ${cwd()}`);
            rl.prompt();
        }
    }
    runner()
}