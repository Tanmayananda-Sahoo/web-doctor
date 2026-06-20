import {exec} from "child_process";
import { stderr } from "process";

async function pingTest(url) {
    return new Promise((resolve) => {
        exec(`ping -n 4 ${url}`, (error, stdout, stderr) => {
        if(stdout.includes("could not find host")) {
            resolve({
                success: false,
                reachable: false,
                reason: "Host not found."
            })
        } else if(stdout.includes("Request timed out")) {
            resolve({
                success: true,
                reachable: false,
                reason: "Request timed out."
            })
        } 
        const latency = stdout.match(/Average = (\d+)ms/);
        if(latency) {
            resolve({
                success: true,
                reachable: true,
                latency: Number(latency[1])
            })
        } else {
            resolve({
                success: false,
                reachable: false,
                reason: "Unexpected error."
            })
        }
    })
    })
}

export {
    pingTest,
}