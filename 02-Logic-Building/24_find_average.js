const nums = [10, 20, 30, 40];

function total(acc, curr) {
    return acc + curr;
}

const totalSum = nums.reduce(total, 0);

let average = totalSum / nums.length;

console.log("Average:", average);
