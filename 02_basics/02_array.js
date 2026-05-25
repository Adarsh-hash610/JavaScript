const cric_heroes = ["Virat","Rohit","AB"]
const football_heroes = ["Messi","Mbaappe","Cristiano"]

// cric_heroes.push(football_heroes)
// console.log(cric_heroes);
// console.log(cric_heroes.length);

// concat operation...
const all_heroes = cric_heroes.concat(football_heroes)
// console.log(all_heroes);

// spread operator...
const all_new_heroes = [...cric_heroes,...football_heroes]
console.log(all_new_heroes);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"}));       //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));






