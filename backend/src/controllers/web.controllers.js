import dns from "dns";
import {analyze} from '../services/analyzer.services.js'
import { tracertTest } from "../services/tracert.services.js";
async function analyzeWeb(req, res) {
    const { url } = req.body;
    const result = await analyze(url);
    return res.status(200)
        .json({
            message: "Recieved target",
            result,
        })
}

async function traceRouter(req,res) {
    const { url } = req.body;
    const traceResponse = await tracertTest(url);
    return res.status(200)
    .json({
        traceResponse,
    })
}
export {
    analyzeWeb,
    traceRouter
}