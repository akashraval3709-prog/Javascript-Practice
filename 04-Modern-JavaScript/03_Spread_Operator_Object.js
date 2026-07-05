const cartItem = {
    productId: "PROD-101",
    productName: "Mechanical Keyboard",
    price: 1500,
    quantity: 1,
    deliveryDetails: {
        status: "Pending",
        days: 3
    }
};


const updatedCartItem = {...cartItem,quantity:3,couponApplied: true}


console.log(cartItem)
console.log(updatedCartItem)
