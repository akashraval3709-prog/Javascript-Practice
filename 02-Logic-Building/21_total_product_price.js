const productPrices = [100, 200, 300];

const totalPrice = productPrices.reduce(
    (acc, curr) => acc + curr,
    0
);

console.log("Total Product Price:", totalPrice);
