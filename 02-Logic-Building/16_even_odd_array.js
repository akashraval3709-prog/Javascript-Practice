let numbers = [10, 22, 33, 15, 67, 2, 5];

let evens = [];
let odds = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {
        evens.push(numbers[i]);
    }

    else {
        odds.push(numbers[i]);
    }
}

console.log("Even Array:", evens);
console.log("Odd Array:", odds);
