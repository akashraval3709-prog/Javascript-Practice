const threatReport = {
    incidentId: "INC-8891",
    meta: {
        source: "DarkWeb Scanner",
        severity: "CRITICAL"
    },
    payload: {
        targetServer: "Prod-DB-01"
    }
};



const {incidentId,meta :{severity:alertLevel}, payload :{targetServer:compromisedHost}, mitigated=false} = threatReport

console.log(incidentId);
console.log(alertLevel);
console.log(compromisedHost);
console.log(mitigated);
