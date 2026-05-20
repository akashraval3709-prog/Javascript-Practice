const emptyString = (str) => {

    if (str.trim().length === 0) {
        return "Empty String";
    } 
    
    else {
        return `"${str}" is Not Empty`;
    }
};

console.log(emptyString("Akash"));
console.log(emptyString(" "));
console.log(emptyString(""));
console.log(emptyString("dsfd"));
