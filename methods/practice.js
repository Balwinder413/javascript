// given array filter out marks of students that scord 90+
let marks=[45,67,89,98,99,100,10];

 let newMarks =marks.filter((val)=>{
     return val >90;
})
console.log(newMarks);
