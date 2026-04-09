"use strict"

// Number
let age = 19
let temp = 30.12

// String
let Name = 'Akash'
let city = "Deesa"

//Boolean 
let isStudent = true;

// Null
let state = null;

// Undifined
let userEmail;

// BigInt
let bigNumber = 9007199254740991n;

// Symbol
const id = Symbol('123');

console.log("--- Data Type Analysis ---");

// typeof check the data type of variabel
console.table([{ Variable: 'age', Value: age, Type: typeof age },
{ Variable: "temp", Value: temp, Type: typeof temp },
{ Variable: 'name', Value: Name, Type: typeof Name },
{ Variable: "isStudent", Value: isStudent, Type: typeof isStudent },
{ Variable: "state", Value: state, Type: typeof state },
{ Variable: "userEmail", Value: userEmail, Type: typeof userEmail }
]);

/* Important Notes:
  - 'typeof null' is an 'object'.
  - 'typeof undefined' is 'undefined'.
  
*/
