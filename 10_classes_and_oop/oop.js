const user = {
    username: "Adp",
    loginCnt: 0,
    email: "adp@google.com",
    isSignedIn: true,
    getUserDetails: function(){
        // console.log('Got the user details from the DB');
        console.log(`username: ${this.username}`);
    }
}
// console.log(user.isSignedIn);
// console.log(user.getUserDetails());


// const promiseOne = new Promise()

function User(username,loginCnt, isLoggedIn){
    this.username = username;
    this.loginCnt = loginCnt;
    this.isLoggedIn = isLoggedIn

    return this;
}
const userOne = new User("adp",2, true)
const userTwo = new User("google", 3, false)
console.log(userOne);
console.log(userTwo);

//1. When we use the new keyword, a new empty object is being created which is also known as
// generation of new instance.
//2. A constructor function is also called with the help of new keyword.
//3. All the arguments are being injected in that constructor function.



