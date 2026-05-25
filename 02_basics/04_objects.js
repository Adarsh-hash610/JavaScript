const tinderUser = new Object()     //Singleton object
console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedIn = false
// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Adarsh",
            lastName : "Pandey",
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2)
// Using spread operator...
const obj3 = {...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "adp@gmail.com",
    },
    {
        id: 2,
        email: "adp2@google.com",
    }
]
console.log(users[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


