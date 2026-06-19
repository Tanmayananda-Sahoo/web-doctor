import dns from "dns";
import {analyze} from '../services/analyzer.services.js'
async function analyzeWeb(req, res) {
    const { url } = req.body;
    const result = await analyze(url);
    return res.status(200)
        .json({
            message: "Recieved target",
            result,
        })
}

export {
    analyzeWeb,
}