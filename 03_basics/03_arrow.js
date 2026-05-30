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
//     return num1 + num2                           //Explicit return
// }


// const addTwo = (num1, num2) => (num1 + num2)        //Implicit return
// console.log(addTwo(3,4));

const addTwo = (num1 , num2) => ({username : "Adarsh"})     //implicit return
console.log(addTwo(3,4));



