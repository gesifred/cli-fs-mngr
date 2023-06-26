import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { cwd } from 'node:process';
import { pathValidUtil } from '../util-args.js';

export function hashCmd(line,rl) {
    let line2 = line.slice(5);
    const validArgs = pathValidUtil(line2,1);
    if (!validArgs.valid){
        console.log("Invalid input");
        console.log(`You are currently in ${cwd()}`);
        return;
    }
    let filePath = validArgs.nArgs[0];
    const hash = createHash('sha256');
    //createReadStream(path.join(dir,srcFolder,srcFile)).pipe(hash).setEncoding('hex').pipe(process.stdout);
    createReadStream(filePath)
        .on('error', (err) => {
            console.log("Operation failed");
            console.log(`You are currently in ${cwd()}`);
            rl.prompt();
        })
        .pipe(hash)
        .setEncoding('hex')
        .on("readable", () => {
            const data = hash.read();
            if (data) console.log(data);
            console.log(`You are currently in ${cwd()}`);
            rl.prompt();
        })
        .on('error', (err) => {
            console.log("Operation failed");
            console.log(`You are currently in ${cwd()}`);
            rl.prompt();
        });
        
  }