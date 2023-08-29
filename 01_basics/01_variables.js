const accountId = 144553
let accountEmail = "amol@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

accountEmail ="amol@amol.com"
accountPassword = "6481"
accountCity = "Bengaluru"
let accountState

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
