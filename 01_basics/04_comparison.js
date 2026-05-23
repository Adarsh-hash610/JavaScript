// console.log(2>1);
// console.log(2<1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// strict check => '==='
console.log("2"===2);   //o/p: false


// ********************************************************
// Stack:- Used in case of primitive type
// Heap:- Used in case of non-primitive type

let myName = "Adarsh"
let anotherName = myName
anotherName = "Babuu"

console.log(myName);
console.log(anotherName);

let userOne ={
    email:"user@google.com",
    upi:"user@ybl",
}
let userTwo = userOne
userTwo.email = "adarsh@google.com"
console.log(userOne.email);
console.log(userTwo.email);





