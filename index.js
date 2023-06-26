import { createInterface } from 'node:readline';
import { main } from './src/main.js';
import { homedir } from 'node:os';

process.chdir(homedir());
const cliUsername = process.argv.slice(2)[0].split("=")[1];
if (process.argv.slice(2)[0].split("=")[0]!="--username"){
  console.log("Invalid input");
  process.exit(1);
}
console.log(`Welcome to the File Manager, ${cliUsername}!`);
console.log(`You are currently in ${process.cwd()}`)
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.prompt();
rl.on('line', (line) => {
    main(rl,line);
}).on('close', () => {
  console.log(`Thank you for using File Manager, ${cliUsername}, goodbye!`);
  process.exit(0);
});
