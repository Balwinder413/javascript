// reduce method
let value=[2,3,4]
let output= value.reduce((res,curr)=>{
     return  res+ curr;
})
console.log(output);

let value1=[2,3,4]
let output1= value.reduce((res,curr)=>{
     return  res>curr ? res:curr;
})
console.log(output1)
