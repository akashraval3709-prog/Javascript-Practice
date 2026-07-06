
function addEverything(...numbers) {
let sum=0
    numbers.forEach( (i)=>{
        sum += i 
    })
    return sum;
}

console.log(addEverything(2, 3));           
console.log(addEverything(10, 20, 30, 40, 50));
console.log(addEverything(10, 20, 30, 40, 50,60,70,90,100,200));
