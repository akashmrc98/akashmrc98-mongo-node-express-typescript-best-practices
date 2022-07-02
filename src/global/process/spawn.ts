import { spawn,  } from 'child_process';

const child = spawn('dir', { shell: true });

child.stdout.on('data', (data) => {
    console.log(`stdout ${data}`);
});

child.stdout.on('error', (err) => console.log(err))
