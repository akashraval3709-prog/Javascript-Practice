const nums = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14];

function evenNum(num) {
    return num % 2 === 0;
}

const evenNumbers = nums.filter(evenNum);

console.log("Even Numbers:", evenNumbers);



const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14];

const evenNums = numbers.filter((item) => item % 2 === 0);

console.log("Even Numbers:", evenNums);
