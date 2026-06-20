import tls from "tls";

async function tlsTest(url) {
    return new Promise((resolve) => {
        const socket = tls.connect({
            port: 443,
            host: url,
            servername: url
        },
            () => {
                const certificate = socket.getPeerCertificate();
                resolve({
                    success: true,
                    valid: true,
                    subject: certificate.subject,
                    issuer: certificate.issuer,
                    valid_from: certificate.valid_from,
                    valid_to: certificate.valid_to
                })
                socket.end();
            }
        )

        socket.on("error", (error) => {
            resolve({
                success: false,
                valid: false,
                reason: error.message
            })
        })
    })
}

export {
    tlsTest,
}