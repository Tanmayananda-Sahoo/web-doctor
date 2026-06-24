function getScore(record4, record6, portResponse, httpResponse, pingResponse, tlsResponse) {
    let score = 0;
    if(record4.success || record6.success) {
        score+=23;
    }
    if(httpResponse.reachable && httpResponse.status < 500) {
        score+=23;
    }
    if(pingResponse.reachable) {
        score+=8;
    }
    if(portResponse.success && portResponse.open) {
        score+=23;
    }
    if(tlsResponse.valid) {
        score+=23;
    }
    let response = "";
    if(score >=90) response="Excellent";
    else if(score >= 80) response="Good";
    else if(score >= 70) response="Healthy";
    else if(score >= 50) response="Warning";
    else  response="Critical";


    return {
        score,
        response
    }
}

export {getScore};