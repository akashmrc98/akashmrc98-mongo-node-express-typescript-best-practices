import { execFile } from 'child_process';
import path from 'path';

// execute OS commands from the code
const exec = (err: any, stdout: string, stderr: string) => {
    if(err){
        console.log(err);
        return
    }
    if(stderr){
        console.log(stderr)
        return
    }
    console.log(stdout)
}

const filePath = path.join(__dirname, "test.bat")
console.log(filePath)
execFile(filePath, (err, stdout, stderr) => exec(err, stdout, stderr))