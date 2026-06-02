const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'Ruby',
    swift : 'Swift by apple'
}

for (const key in myObject) {
    console.log(key);
}

// for (const key in myObject) {
//     console.log(myObject[key]);
    
// }

for (const key in myObject) {
    console.log(`${key} shortcut for ${myObject[key]}`);
    
}

const programming = ["js","cpp","py","java","rb"]
for (const key in programming) {
    console.log(programming[key]);
    
}