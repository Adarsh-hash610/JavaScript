const accountId= 24364
let accountEmail  = "adarsh@google.com"
var accountPass = "12345"
accountCity = "Kanpur"
let accountState;

// accountId = 1 --> it is not allowed because variable declared under const cannot be reassigned

accountEmail = "ad@ad.com"
accountPass = "121212"
accountCity = "Bengaluru"

console.log(accountId)
/*
Prefer not to use var,
because of issue in block scope and fuctional scope...
*/
console.table([accountId,accountEmail,accountPass,accountCity,accountState]);