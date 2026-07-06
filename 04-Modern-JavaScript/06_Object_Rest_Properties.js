const userData = {
    username: "akash_raval",
    password: "SuperSecretPassword123",
    email: "akash@cyber.com",
    secretKey: "TOKEN_XYZ_99",
    role: "Admin"
};

const {password, secretKey ,...cleanProfile} = userData

console.log(password);
console.log(secretKey);
console.log(cleanProfile);


