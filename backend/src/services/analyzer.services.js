import { resolveDns4 } from "./dns.services.js";
import { resolveDns6 } from "./dns.services.js";
import { portTest } from "./port.services.js";
import { httpTest } from "./http.services.js";
import { generateDiagnosis } from "./diagnosis.services.js";
import { pingTest } from "./ping.services.js";
import { tlsTest } from './ssl.services.js';
import { tracertTest } from "./tracert.services.js";

async function analyze(url) {
    const [
        record4,
        record6,
        portResponse,
        httpResponse,
        pingResponse,
        tlsResponse
    ] = await Promise.all([
        resolveDns4(url),
        resolveDns6(url),
        portTest(443, url),
        httpTest(url),
        pingTest(url),
        tlsTest(url)
    ]);
    const diagnosis = generateDiagnosis(record4, record6, portResponse, httpResponse, pingResponse);
    return {
        IPv4: record4,
        IPv6: record6,
        port: portResponse,
        http: httpResponse,
        pingResponse,
        tlsResponse,
        diagnosis,
    }
}
export {
    analyze,
}