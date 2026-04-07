const accountId = 32728 // Not changeble
let accountName='Akash' // Vaild declaration
var accountAge=19 // issues
accountCity="Deesa"//Not valid 
let score = 100;       // Integer
let percentage = 95.5; // Float

// accountId=2819  //Not alowed

//Display singe variable 
console.log(accountId);
console.log(score);
console.log(percentage);
/*
 prefer not use var keyword
 because of issue in block scope and functional scope 
*/
if (true) {
    var testVar = "I am Var";
    let testLet = "I am Let";
}

console.log(testVar); //No Error but not valid
// console.log(testLet); //Through Error but valid


// display in table form
console.table([accountId,accountName,accountAge,accountCity]);
