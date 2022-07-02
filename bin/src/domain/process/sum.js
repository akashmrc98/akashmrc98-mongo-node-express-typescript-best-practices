"use strict";
function longCompute() {
    let sum = 0;
    for (let i = 0; i < 100; i++) {
        sum += i;
    }
    return sum;
}
process.on("message", function (message) {
    console.log(message);
    if (message === "start") {
        const sum = longCompute();
        process.send(sum);
    }
});
