// Stack Memory (Primitive) and Heap Memory (Non-Primitive)


let myGithub_name= "Navinya-30"

let Linkdin_name = myGithub_name
Linkdin_name = "Navinya2006"


console.log(myGithub_name);
console.log(Linkdin_name);

let user = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = user
userTwo.email = "navinya@google.com"

console.log(user.email);
console.log(userTwo.email)