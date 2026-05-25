// Object Declaration...
// object literals

const mySym = Symbol("key1")
const JsUser = {
    name : "Adarsh",
    email : "adarsh@google.com",
    age : 18,
    [mySym] : "myKey1",
    location : "Lucknow",
    isloggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "adarsh123@google.com"
// Object.freeze(JsUser)
JsUser.email = "adarsh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetingTwo());



