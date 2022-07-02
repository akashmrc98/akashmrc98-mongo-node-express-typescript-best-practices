"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const autocannon_1 = __importDefault(require("autocannon"));
function startBench() {
    const url = "http://localhost:5000/fork";
    const connections = 100;
    const maxConnectionRequests = 100;
    const instance = (0, autocannon_1.default)({
        url,
        connections: connections,
        maxConnectionRequests: maxConnectionRequests,
        duration: 10,
        headers: {},
        requests: [
            {
                path: url,
                method: "GET",
            }
        ]
    }, finishedBench);
    autocannon_1.default.track(instance);
    function finishedBench(err, res) {
        console.log("Finished, Bench, ", err, res);
    }
}
startBench();
