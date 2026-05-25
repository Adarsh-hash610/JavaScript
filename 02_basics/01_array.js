// array...
// Array are objects that stores collection of multiple items under a single variable.

// Array declaration...
const myArray = [0,1,2,3,4,5,"Adarsh"];

const myArray2 = new Array(1,2,4,6,"Software");
// console.log(myArray2[4]);

// Array methods...
myArray.push(6)
myArray.push(7)
// console.log(myArray);
myArray.pop()
// console.log(myArray);

myArray.unshift(8);
// console.log(myArray);

myArray.shift()
// console.log(myArray);

const newArr = myArray.join()       //.join() -> Adds all the elements of an array into a string
// console.log(myArray);
// console.log(newArr);
// console.log(typeof newArr);


// Slice and Splice
console.log("A ",myArray);
const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B ",myArray);

const myn2 = myArray.splice(1,3);
console.log(myn2);
console.log("C ",myArray);






