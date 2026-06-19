async function test(url) {
    const response = await fetch(url);
    return {
        status: response.status,
        success: true,
        ok: response.ok,
        headers: Object.fromEntries(response.headers.entries())
    }
}

export {
    test
}