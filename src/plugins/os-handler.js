import { EOL, cpus, homedir, userInfo, arch } from "node:os"

export function osCmd(line,rl) {
    let argsToProcess = line.split(" ")[1] || "--";
    let commandFromLine = "";
    if (argsToProcess.match(/^--/)){
        commandFromLine += argsToProcess.slice(2);
        switch (commandFromLine) {
            case 'EOL':
                console.log(EOL);
                break;
            case 'cpus':
                console.log(cpus());
                break;
            case 'homedir':
                console.log(homedir());
                break;
            case 'username':
                console.log(userInfo().username);
                break;
            case 'architecture':
                console.log(arch());
                break;
            default:
                console.log("Invalid input");
                break;
        }
    } else {
    console.log("Invalid input");
    }
    console.log(`You are currently in ${process.cwd()}`)
}