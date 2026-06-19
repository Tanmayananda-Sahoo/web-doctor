async function httpTest(url) {
    try {
        const startTime = Date.now();
        const response = await fetch(`https://${url}`);
        const endTime = Date.now();
        return {
            status: response.status,
            success: true,
            ok: response.ok,
            reachable: true,
            responseTime: endTime - startTime,
            headers: Object.fromEntries(response.headers.entries())
        }
    } catch (error) {
        return {
            success: false,
            reachable: false,
            reason: error.message,
        }
    }
}

export {
    httpTest
}