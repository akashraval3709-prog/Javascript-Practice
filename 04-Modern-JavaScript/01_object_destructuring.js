const apiResponse = {
    id: "USR-9982",
    accountDetails: {
        raw_username: "akash_security_expert",
        email_id: "akash@cyber.org"
    },
    systemAccess: "Admin"
};

// Object Destructuring
const {
    id,
    systemAccess,
    accountDetails: {
        raw_username: username,
        email_id: email
    },
    ip = "127.0.0.1"
} = apiResponse;

console.log("User ID:", id);
console.log("Access Level:", systemAccess);
console.log("Username:", username);
console.log("Email:", email);
console.log("IP Address:", ip);
