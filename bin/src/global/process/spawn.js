"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const child = (0, child_process_1.spawn)('dir', { shell: true });
child.stdout.on('data', (data) => {
    console.log(`stdout ${data}`);
});
child.stdout.on('error', (err) => console.log(err));
