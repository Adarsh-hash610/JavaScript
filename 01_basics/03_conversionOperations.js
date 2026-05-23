let score = "33abx"
// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// Conversions...
/*
"33" => 33
"33abc" =>NaN
true => 1; false => 0
null => 0
undefined => NaN
*/

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false; "abc" => true

let someNumber = 33
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ******************************* OPERATIONS *********************************

let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "Namaste"
let str2 = " Adarsh"
let str3 = str1 + str2
console.log(str3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + "2");
// console.log("1" + 2 +2);
// console.log(1 + "2" + 2);
// console.log(1 + 2 + "2");
// console.log(1 - "2");
// console.log("1"- 2);
// console.log("2" - "2");


console.log(+true);     //o/p :- 1
console.log(+"");       //o/p :- 0

/* Postfix and prefix */
let x = 3;
let y = x++
console.log(`x: ${x} and y: ${y}`);
y = x;
console.log(y);


let a = 5;
let b = ++a;
console.log(`a: ${a} and b: ${b}`);







