const useremail = "adarsh.com"

if(useremail){
    console.log("Got the email!!");
}
else{
    console.log("Don't have the email!!");    
}

// falsy values...
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values...
// "0", 'false', ' ',[], {}, function(){}, 

const userEmailTwo = []
if (userEmailTwo.length === 0) {
    console.log("Array is Empty!!");
    
}
else{
    console.log("Array is not Empty!!");
    
}

const obj = {}
if(Object.keys(obj).length === 0){
    console.log("Object is empty!!")
}