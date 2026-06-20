function generateDiagnosis(record4, record6, portResponse, httpResponse, pingResponse) {
    let diagnosisReport;
    const dnsSuccess = (record4.success || record6.success);
    if (!dnsSuccess) {
        diagnosisReport = {
            cause: "DNS Issue",
            details: "DNS Resolver could not find such domain"
        };
    } else if (!portResponse.open) {
        diagnosisReport = {
            cause: "Network Issue",
            details: "Port is closed and TCP connection could not be established."
        };
    } else if(portResponse.open && httpResponse.status >= 400 && httpResponse.status < 500) {
        diagnosisReport = {
            cause: "Client side error",
            details: `Server responded with status code ${httpResponse.status}`
        }
    } else if (portResponse.open && httpResponse.status >= 500) {
        diagnosisReport = {
            cause: "Server Issue",
            details: "Server responded with a status code 5xx"
        };
    } else if(portResponse.open && httpResponse.reachable && !pingResponse.reachable) {
        diagnosisReport = {
            cause: "ICMP blocked.",
            details: "Website is reachable but does not respond to ICMP packets. Maybe because of firewalls."
        }
    } else {
        diagnosisReport = {
            cause: "Healthy",
            details: "Website is healthy and reachable"
        }
    }

    return diagnosisReport;
}

export {
    generateDiagnosis,
}