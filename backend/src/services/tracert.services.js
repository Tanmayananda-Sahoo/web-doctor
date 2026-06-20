import { exec } from "child_process";
import { stderr } from "process";

async function tracertTest(url) {
    return new Promise((resolve) => {
        exec("tracert -h 10 google.com", (error, stdout, stderr) => {
            const destinationReached = stdout.includes("Trace complete")

            const timedOutMatches = stdout.match(/Request timed out/g);
            const timedOutHopCount = timedOutMatches? timedOutMatches.length : 0;

            const hopLines = stdout.split("\n");

            resolve({
                success: true,
                destinationReached,
                timedOutHopCount,
                hopCount: hopLines.length
            })
        })
    })
}

export {
    tracertTest,
}