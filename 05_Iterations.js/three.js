// for of..
// ["","",""]
// [{},{},{}]

// Syntax:-
// for (const element of object) {
    
// }

const arr = [1,2,3,4,5]
for(const num of arr)
{
    // console.log(num);
}

const greetings = "Namaste India!!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps...
const map = new Map()
map.set('In',"India");
map.set('US','United States of America')
map.set('Fr',"France")

// console.log(map);
for (const [key,value] of map) {
    console.log(key, ':-', value);
    
}
