var c = 300;
let a = 300

if(true){
    let a = 10;
    const b = 20;
    console.log("Inner: ",a);
    
}
console.log("Outer: ",a);
// console.log(b);
console.log(c);


function one() {
    const userName = "Adarsh"
    function two() {
        const website = "cricbuzz.com";
        console.log(userName);
    }
    // console.log(website);
    two()    
}
one()

if(true){
    const userName = "Adarsh";
    if(userName === "Adarsh")
    {
        const website = " Github";
        console.log(userName + website);
        
    }
    // console.log(website);
    
}
// console.log(userName);


console.log(addOne(5))
function addOne(num)
{
    return num + 1;
}

const addTwo = function addTwo(num){
    return num + 2;
}
console.log(addTwo(6))

