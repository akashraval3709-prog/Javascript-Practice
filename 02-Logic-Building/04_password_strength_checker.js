function checkPassword(password) {

    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;

    let len = password.length;

    for (let i = 0; i < len; i++) {

        if (password[i] >= 'A' && password[i] <= 'Z') {
            hasUpper = true;
        }

        else if (password[i] >= 'a' && password[i] <= 'z') {
            hasLower = true;
        }

        else if (password[i] >= '0' && password[i] <= '9') {
            hasNumber = true;
        }
    }

    if (password.length < 6) {
        return "Weak Password";
    }

    else if (hasLower && hasUpper && hasNumber && password.length >= 10) {
        return "Strong Password";
    }

    else if ((hasLower || hasUpper) && hasNumber) {
        return "Medium Password";
    }

    return "Weak Password";
}

console.log(checkPassword("akash"));
console.log(checkPassword("abc"));
console.log(checkPassword("abc123"));
console.log(checkPassword("Abc12345XYZ"));
