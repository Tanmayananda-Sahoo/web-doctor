import dns from 'dns/promises';
async function resolveDns4(url) {
    try {
        const records = await dns.resolve4(url);
        return {
            success: true,
            records
        };
    } catch (error) {
        return {
            success: false,
            message: error.message
        }
    }
}
async function resolveDns6(url) {
    try {
        const records = await dns.resolve6(url);
        return {
            success: true,
            records
        };
    } catch (error) {
        return {
            success: false,
            message: error.message
        }
    }
}

export {
    resolveDns4,
    resolveDns6
}