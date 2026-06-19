import { resolveDns4 } from "./dns.services.js";
import { resolveDns6 } from "./dns.services.js";
import { portTest } from "./port.services.js";
import { httpTest } from "./http.services.js";
import {generateDiagnosis} from "./diagnosis.services.js";

async function analyze(url) {
    const record4 = await resolveDns4(url);
    const record6 = await resolveDns6(url);
    const portResponse = await portTest(443, url);
    const httpResponse = await httpTest(url);
    const diagnosis = generateDiagnosis(record4, record6, portResponse, httpResponse);
    return {
        IPv4: record4,
        IPv6: record6,
        port: portResponse,
        http: httpResponse,
        diagnosis
    }
}
export {
    analyze,
}