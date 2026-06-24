import { exec } from "child_process";
import { stderr } from "process";

async function tracertTest(url) {
    return new Promise((resolve) => {
        exec(`tracert -h 10 ${url}`, (error, stdout, stderr) => {
            const destinationReached = stdout.includes("Trace complete")
            const res = stdout.includes("Unable to resolve");
            console.log(stdout);
            if(res) {
                resolve({
                    success: false,
                    destinationReached: "could not resolve destination."
                })
            }
            const timedOutMatches = stdout.match(/Request timed out/g);
            const timedOutHopCount = timedOutMatches? timedOutMatches.length : 0;

            const hopLines = stdout.split("\n");

            resolve({
                success: true,
                destinationReached: "true",
                timedOutHopCount,
                hopCount: hopLines.length
            })
        })
    })
}

export {
    tracertTest,
}