import path from 'node:path';
export function pathValidUtil(line2, reqArgs) {
    let valid;
    let nArgs =[];
    let fileToAdd;
    let result;
    if (line2.match(/'[^']*'/g)) {
        result = line2.match(/'[^']*'/g);
        if (line2.split(" ").length > reqArgs && result.length > reqArgs) {
            console.log("Invalid input")
            nArgs = null;
            valid = false;
            //return
        } else if (/*line2.split(" ").length > reqArgs &&*/ result.length === reqArgs) {
            for(let element of result){
                nArgs.push(element.replace(/'/g, '').replace(" ", "\ ").trim())
            }
            console.log(path.basename(line2.replace(/'/g, '').replace(" ", "\\ ")));// requirement says only current work directory
            fileToAdd = line2.replace(/'/g, '').replace(" ", "\ ").trim();// requirement says only current work directory
            valid = true;
            //nArgs = fileToAdd;
        } else {
            console.log("Invalid input")
            nArgs = null;
            valid = false;
            //return
        }
    } else {
        result = line2.split(" ");
        if (result.length > reqArgs) {
            console.log("Invalid input")
            nArgs = null;
            valid = false;
        } else if(result.length === reqArgs){
            fileToAdd = line2;
            for (let el of result){
                nArgs.push(el);
            }
            valid = true;
        }
    }
    //console.log(nArgs);
    return {
        valid: valid,
        nArgs: nArgs
    }
}