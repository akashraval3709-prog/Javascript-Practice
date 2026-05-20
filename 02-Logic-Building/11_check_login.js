const checkLogin = (username, password) => {

    if (username === "admin" && password === "1234") {
        return "Login Success";
    } 
    
    else {
        return "Login Failed";
    }
};

console.log(checkLogin("admin", "1234"));
console.log(checkLogin("admin", "123.4"));
