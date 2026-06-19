import dns from 'dns/promises';
async function resolveDns4(url) {
    try {
        const records = await dns.resolve4(url);
        return records;
    } catch (error) {
        return error.message
    }
}
async function resolveDns6(url) {
    try {
        const records = await dns.resolve6(url);
        return records;
    } catch (error) {
        return error;
    }
}

export {
    resolveDns4,
    resolveDns6
}