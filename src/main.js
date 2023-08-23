import { cliCmds } from "./plugin-provider.js";

async function main(rl, line) {
    line.trim()===".exit" && rl.close();
    const commandFromLine = line.trim().split(" ")[0];
    if (!Object.keys(cliCmds).includes(commandFromLine)) {
        console.log("Invalid input");
        rl.prompt();
    } else {
        await cliCmds[commandFromLine](line.trim(),rl);
        rl.prompt();
    }
}
export { main };