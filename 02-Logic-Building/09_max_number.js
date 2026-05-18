const maxNum = (num1, num2) => {

    if (num1 > num2) {
        return `Max Number: ${num1}`;
    }

    else if (num2 > num1) {
        return `Max Number: ${num2}`;
    }

    else {
        return "Both numbers are equal";
    }
};

console.log(maxNum(12, 34));
console.log(maxNum(453, 14));
console.log(maxNum(-12, 14));
console.log(maxNum(1.2, 1.4));
