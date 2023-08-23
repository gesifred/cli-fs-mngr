import { cwd } from 'node:process';
import { readdir } from 'node:fs/promises';

export async function lsCmd(line,rl) {
    try {
        const files = await readdir(cwd(), { withFileTypes:true} );
        //console.table(files); 
        let tmpFiles = [];
        let tmpFolders = [];
        let final = [];
        for (const el of files) { //only files and directories
            if (el.isFile()){
                tmpFiles.push({Name:el.name,Type:"file"});
            } else if(el.isDirectory()){
                tmpFolders.push({Name:el.name,Type:"directory"});
            }
        }
        final = [...tmpFolders.sort(),...tmpFiles.sort()];
        console.table(final);
        console.log(`You are currently in ${cwd()}`);
    } catch (err) {
        console.log("Operation failed");
        console.log(`You are currently in ${cwd()}`);
    }
    
}