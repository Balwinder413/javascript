/* stack = primitive
heap= non peimitive*/
// stack k ander copy hi milta hai
let myName="balwinder kaur"
let  anotherName=myName
anotherName= "retu"
console.log(myName);
console.log(anotherName);


// heap k ander reference milta hai
let userOne={
    fullName:"balwinder kaur", 
     email:"balwinderghangas99@gamil.com"
}

let userTwo=userOne
userTwo.email="rjgur@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);
