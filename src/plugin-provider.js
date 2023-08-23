import{ osCmd } from "./plugins/os-handler.js";
import{ hashCmd } from "./plugins/hash-handler.js";
import{ lsCmd } from "./plugins/ls-handler.js";
import{ upCmd } from "./plugins/up-handler.js";
import{ cdCmd } from "./plugins/cd-handler.js";
import{ addCmd } from "./plugins/add-handler.js";
import{ rnCmd } from "./plugins/rn-handler.js";
import{ catCmd } from "./plugins/cat-handler.js";
import{ cpCmd } from "./plugins/cp-handler.js";
import{ rmCmd } from "./plugins/rm-handler.js";
import{ mvCmd } from "./plugins/mv-handler.js";
import{ compressCmd } from "./plugins/compress-handler.js";
import{ decompressCmd } from "./plugins/decompress-handler.js";

const cliCmds = {
    up: upCmd,
    ls: lsCmd,
    cd: cdCmd,
    cat: catCmd,
    add: addCmd,
    rn: rnCmd,
    cp: cpCmd,
    mv: mvCmd,
    rm: rmCmd,
    os: osCmd,
    hash: hashCmd,
    compress: compressCmd,
    decompress: decompressCmd,
}

export { cliCmds }