const serverLogA = ["192.168.1.1", "10.0.0.5"];
const serverLogB = ["172.16.0.25", "192.168.1.100"];

const allServerLogs= [...serverLogA, "127.0.0.1" , ...serverLogB]

console.log(serverLogA)
console.log(serverLogB)
console.log(allServerLogs)
