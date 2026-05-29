const user = {
    username : "Adarsh",
    price : 999,

    welcomeMessage: function()
    {
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
        
    }    
}
// user.welcomeMessage()
// user.username = "Developer"
// user.welcomeMessage()
//console.log(this);

// function one(){
//     let username = "Adarsh";
//     console.log(this.username);
// }
// one()


const one = () => {
    username: "Adarsh"
    console.log(this.username);
    
}
//one()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
const addTwo = (num1, num2) => num1 + num2
console.log(addTwo(3,4));


