"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
// execute OS scripts from the code
const callback = (error, stdout, stderr) => {
    if (error) {
        console.log(`error ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`error ${stderr}`);
        return;
    }
    console.log(`log ${stdout}`);
};
(0, child_process_1.exec)('ls -al', (error, stdout, stderr) => callback(error, stdout, stderr));
