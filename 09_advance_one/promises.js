const promiseOne = new Promise((resolve,reject)=>{
    // Do an async task..
    // DB calls, cryptography, netwok
    setTimeout(()=>{
        console.log('Async task is complete');
        resolve();
    },1000)
})
promiseOne.then(function(){
    console.log('Promise consumed');
});

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
});

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username: "Adp", email:"adp@example.com"})        
    }, 1000);
})
promiseThree.then((user)=>{
    console.log(user);
    
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: 'Adpp', email: 'adp@example.com'})
        }
        else{
            reject('ERROR!! SOMETHING WENT WRONG!!')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("finally the promise is either resolved or rejected!!");
})


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username:"Adp", email:"adp@example.com"})
        }
        else{
            reject("ERROR!! JS WENT WRONG!!");
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);

    }
    
}
consumePromiseFive();


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log('E: ',error);
    }    
}
// getAllUsers();


fetch('https://api.github.com/users/hiteshchoudhary').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("Error !!");
    
})

