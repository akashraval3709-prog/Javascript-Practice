const trackerStream = [
    [24.2589, 72.1924],
    "Active",
    "Running"
];

// Array Destructuring
const [[latitude, longitude], status, currentActivity] = trackerStream;

console.log("Latitude:", latitude);
console.log("Longitude:", longitude);
console.log("Status:", status);
console.log("Current Activity:", currentActivity);
