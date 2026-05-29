const cart = [
    { item: "Laptop", price: 50000 },
    { item: "Mouse", price: 1000 },
    { item: "Keyboard", price: 2000 }
];

const totalSum = cart.reduce(
    (acc, item) => acc + item.price,
    0
);

console.log("Shopping Cart Total:", totalSum);
