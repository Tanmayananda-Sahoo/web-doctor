import dns from "dns";
import {resolveDns4, resolveDns6} from '../services/dns.services.js';
import {portTest} from '../services/port.services.js';
import {test} from '../services/http.services.js';
async function analyzeWeb(req, res) {
    const { url } = req.body;
    const record4 = await resolveDns4(url);
    const record6 = await resolveDns6(url);
    const portResponse = await portTest(443, url);
    const httpResponse = await test(url);
    return res.status(200)
        .json({
            message: "Recieved target",
            target: url,
            record4,
            record6,
            portResponse,
            httpResponse
        })
}

export {
    analyzeWeb,
}