let fruits = ["apple", "mango", "banana"];

console.log("Fruits Array:", fruits);

console.log("Accessing Element by Index:", fruits[2]);

fruits[1] = "orange";

console.log("Updated Array:", fruits);

console.log("Array Length:", fruits.length);

const mixArray = ["Akash", 19, true, 75.64];

console.log("\nMixed Array:", mixArray);

let numbers = [12, 42, 14, 67];

console.log("\nNumber Array:", numbers);

numbers.push(10);
console.log("After push():", numbers);

numbers.pop();
console.log("After pop():", numbers);

numbers.unshift(21);
console.log("After unshift():", numbers);

numbers.shift();
console.log("After shift():", numbers);

console.log("\nPrint Array Using Loop:");

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
