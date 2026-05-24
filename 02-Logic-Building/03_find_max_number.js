let nums = new Array(12, 281, 32, 4, 7, 23, 87);

console.log("Nums Array:", nums);

let max = nums[0];

for (let i = 0; i < nums.length; i++) {

    if (nums[i] > max) {
        max = nums[i];
    }
}

console.log("Max Element in Array:", max);
