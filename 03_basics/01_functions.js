function addition(num1,num2){
    console.log(num1  + num2);
}
addition(3,4);
addition(2,"4");
addition(3,"a");

function additionOne(num1,num2){
    return num1+num2;
}
const result = additionOne(3,4);
console.log(result);

function loginUser(username){
    return `${username} just logged in!!!`
}
console.log(loginUser("Adarsh"));

function loginUserOne(username){
    return `${username} just logged in!!!`
}
console.log(loginUserOne());        //this will give undefined because no argument is passed!!


function calculateCartPrice(...num1){           //rest operator..
    return num1
}
console.log(calculateCartPrice(200,400,500))

const user = {
    username: "Adarsh",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handleObject(user)

const myNewArray = [200,400,600,2000]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
