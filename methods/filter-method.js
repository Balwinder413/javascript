//filter method
let num=[1,2,3,4,5,6]
  let newNum=num.filter((val)=>{
    return val % 2 == 0;
})
console.log(newNum);

let numb=[1,2,3,4,5,6]
  let newNumb=num.filter((val)=>{
    return val % 2 !== 0;
})
console.log(newNumb);

let number=[1,2,3,4,5,6]
  let newNumber=num.filter((val)=>{
    return val >3;
})
console.log(newNumber);
