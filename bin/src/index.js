"use strict";
// import os from 'os';
// import cluster from 'cluster'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const route_1 = require("./domain/route");
const body_parser_1 = require("body-parser");
const fun = () => {
    console.log("running on port 5000");
};
// max performance technique
// if (cluster.isPrimary) {
//     const cpus = os.cpus().length
//     console.log(cpus)
//     for (let i = 0; i < cpus; i++) {
//         console.log(`>> forking ${i}`)
//         cluster.fork();
//     }
// } else {
//     const app = express()
//     const pid = process.pid;
//     console.log(`>> process id ${pid}`)
//     app.use(cors())
//     app.use(json())
//     app.use(TestRoutes)
//     app.listen(5000, () => fun())
// }
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use(route_1.TestRoutes);
app.listen(5000, () => fun());
