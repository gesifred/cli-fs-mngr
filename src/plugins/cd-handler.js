import { chdir, cwd } from 'node:process';
import { pathValidUtil } from '../util-args.js';

export async function cdCmd(line,rl){
    let line2 = line.slice(3);
    const validArgs = pathValidUtil(line2,1);
    if (!validArgs.valid){
      console.log("Invalid input");
      return;
  }
  let argsToProcess = validArgs.nArgs[0];
    try {
        chdir(argsToProcess);
      } catch (err) {
        console.log(`Operation Failed`);
      }
    console.log(`You are currently in ${cwd()}`);
    
}