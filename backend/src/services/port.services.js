import net from 'net';

async function portTest(port, host) {
    const client = net.createConnection({
        port,
        host
    });
    return new Promise((resolve,reject) => {
        client.on("connect", ()=>{
            resolve({
                open: true,
                success: true,
                port
            })
            client.end();
        })
        client.on("close", ()=>{
            console.log("Connection closed.")
        })
        client.on("error", (err)=>{
            console.log(err);
            resolve({
                open: false,
                success: false,
                port,
                reason: err.code
            })
        })
    })
}

export {
    portTest
}