const nums = [1, 2, 3, 4];

const doubleNums = nums.map((item) => item * 2);

console.log("Double Numbers:", doubleNums);


function doubleNum(item) {
    return item * 2;
}

const doubledNumbers = nums.map(doubleNum);

console.log("Double Numbers:", doubledNumbers);
