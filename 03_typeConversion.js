let num = 33
console.log('Number num');
console.table([{Variable : "num" , Value : num , Type : typeof num}])

//Number convert into string

let numString = String(num)
console.log('\nString numString');
console.table([{Variable : "numString" , Value : numString , Type : typeof numString}])

// String convert into number
let score='143'
let numScore = Number(score)
console.log('\nString numScore');
console.table([{Variable : "numScore" , Value : numScore , Type : typeof numScore}])


/*
'23sd' => NaN
'' => 0
'143' => number
*/

//Null and undifined convert into numbe and string
let emailId=null
let eid=Number(emailId)
console.log('\nNull eid');
console.table([{Variable : "eid" , Value : eid , Type : typeof eid}])

let phoneNumber=null
let pNmuber=String(phoneNumber)
console.log('\nNull pNmuber');
console.table([{Variable : "pNmuber" , Value : pNmuber , Type : typeof pNmuber}])

/*
null => 0
null => null
*/

// undifined convert into string and number
let point=undefined
let undefinedPoint=Number(point)
console.log('\nundefined undefinedPoint');
console.table([{Variable : "undefinedPoint" , Value : undefinedPoint , Type : typeof undefinedPoint}])


let city=undefined
let undefinedcity=String(city)
console.log('\nundefined undefinedcity');
console.table([{Variable : "undefinedcity" , Value : undefinedcity , Type : typeof undefinedcity}])

/*
undifined => NaN
undifined => undifined
*/

// Boolean convert into number and string 


let loggedIn = Boolean(12)
console.log('\nloggedIn');
console.table([{Variable : "loggedIn" , Value : loggedIn , Type : typeof loggedIn}])

let login = Boolean(0)
console.log('\nlogin');
console.table([{Variable : "login" , Value : login , Type : typeof login}])

/* 
1 => true
0 => false
Non zero number is true 
Only zero is false in ohter case ture 
0.1 => true
*/

let stringLogin = Boolean('1')
console.log('\nstringLogin');
console.table([{Variable : "stringLogin" , Value : stringLogin , Type : typeof stringLogin}])

let game = Boolean('0')
console.log('\ngame');
console.table([{Variable : "game" , Value : game , Type : typeof game}])


/* 
 '1' => true
 '0' => true
 '' => false
 'Akash' => true

*/


