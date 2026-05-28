let nums = [-2, 5, -1, 8, 0];

function positive(num) {
    return num > 0;
}

const positiveNumbers = nums.filter(positive);

console.log("Positive Numbers:", positiveNumbers);
