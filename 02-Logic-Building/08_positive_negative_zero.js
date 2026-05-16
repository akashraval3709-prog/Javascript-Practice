const checkNumber = (num) => {

    if (num > 0) {
        return "Number is Positive";
    } 
    
    else if (num < 0) {
        return "Number is Negative";
    } 
    
    else {
        return "Number is Zero";
    }
};

console.log(checkNumber(10));
console.log(checkNumber(-42));
console.log(checkNumber(0));
