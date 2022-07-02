import autocannon from "autocannon";

function startBench() {
    const url = "http://localhost:5000/fork"
    const connections = 100
    const maxConnectionRequests = 100

    const instance = autocannon({
        url,
        connections: connections,
        maxConnectionRequests: maxConnectionRequests,
        duration: 10,
        headers: {
        },
        requests: [
            {
                path: url,
                method: "GET",
            }
        ]
    }, finishedBench)

    autocannon.track(instance)

    function finishedBench(err: any, res: any) {
        console.log("Finished, Bench, ", err, res);
    }
}

startBench()
