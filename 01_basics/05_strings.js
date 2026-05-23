const name = "Adarsh"
const repoCount = 50
// console.log(name + repoCount+" value");
console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('AdarshPD')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const str1 = "   Adarsh  "
console.log(str1);
console.log(str1.trim());
console.log(str1.trimEnd());
console.log(str1.trimStart());

const url = "https://adarsh.com/adarsh%20pandey"
console.log(url.replace('%20','-'));
console.log(url.includes('adarsh'));
console.log(url.includes('babu'));

const str2 = "software-development-engineer"
console.log(str2.split('-'));




