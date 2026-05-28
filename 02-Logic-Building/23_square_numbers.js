const nums = [1, 2, 3, 4, 5, 6, 7, 8];

function square(num) {
    return num ** 2;
}

const squareNum = nums.map(square);

console.log("Square Numbers:", squareNum);
