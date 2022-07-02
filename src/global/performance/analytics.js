const path = require("path");

const { performance, PerformanceObserver } = require("node:perf_hooks");
const { fork } = require("child_process");

const observer = new PerformanceObserver((items) => {
  const j = items.getEntries([0]);
  console.log(j);
});

observer.observe({ type: "function" });
observer.observe({ type: "mark" });
observer.observe({ type: "measure" });

function someFn() {
  performance.mark("A")
  let sum = 0;
  for (let index = 0; index < 1000000000; index++) {
    sum += index;
  }
  performance.measure("A")
  return sum;
}

function getPerformance(fn) {
  performance.timerify(fn)();
}

getPerformance(someFn);


function fromFrok() {
  const forkPath = path.join(__dirname, "someFn.js");
  const forked = fork(forkPath);
  forked.send("start");
  let s = 0;
  forked.on("message", (sum) => {
    s = sum
  });
  console.log(s)
}



// fromFrok()
// getPerformance(fromFrok);
