import { calculateGST } from "./taxCalculator.js";


function getFinalPrice(productName, price){
    let gstPrice= calculateGST(price)
    console.log(`${productName}'s filan price with GST ${price + gstPrice}`);
    
}

let price =2300
let product_name = 'keybord'

getFinalPrice(product_name,price)