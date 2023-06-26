import { chdir, cwd } from 'node:process';

export async function upCmd(line,rl){
    if(line.split(" ").length >1){
      console.log("Invalid input")
      return;
    }
    if (cwd()!=="/"){
    try {
        chdir('./..');
        //console.log(`New directory: ${cwd()}`);
        console.log(`You are currently in ${cwd()}`)
      } catch (err) {
        console.log("Operation failed");
        console.log(`You are currently in ${cwd()}`)
      }
    } else {
        console.log(`You are currently in ${cwd()}`);
    }
}