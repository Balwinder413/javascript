// for given array with marks of student[85,97,99,56,45] find average marks of entire class


let marks= [85,97,99,56,45];
 
let sum=0;
for(let val of marks){
   sum= sum+val;
}
let average= sum/ marks.length;

console.log(sum);
