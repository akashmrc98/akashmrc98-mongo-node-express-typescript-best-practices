import { exec ,  } from 'child_process';


// execute OS scripts from the code
const callback = (error: any, stdout: string, stderr: string) => {
    if (error) {
        console.log(`error ${error.message}`)
        return
    }
    if (stderr) {
        console.log(`error ${stderr}`)
        return
    }
    console.log(`log ${stdout}`)
}

exec('ls -al', (error, stdout, stderr) => callback(error, stdout, stderr));