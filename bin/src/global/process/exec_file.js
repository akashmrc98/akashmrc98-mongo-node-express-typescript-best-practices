"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
// execute OS commands from the code
const exec = (err, stdout, stderr) => {
    if (err) {
        console.log(err);
        return;
    }
    if (stderr) {
        console.log(stderr);
        return;
    }
    console.log(stdout);
};
const filePath = path_1.default.join(__dirname, "test.bat");
console.log(filePath);
(0, child_process_1.execFile)(filePath, (err, stdout, stderr) => exec(err, stdout, stderr));
