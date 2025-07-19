// for given array with marks of student[85,97,99,56,45] find average marks of entire class


let marks= [85,97,99,56,45];
 
let sum=0;
for(let val of marks){
   sum= sum+val;
}
let average= sum/ marks.length;

console.log(sum);

//given array  prices of items[23,45,67,78,89] all array have offer 10% on them.change the array final price after appying

// for of loop
// let items =[23, 45, 67,78 ,89]
// let i=0;
// for(let val of items){
//    let offer= val/10;
//    items[i]=items[i]-offer;
//    console.log(items[i]);
// i++;
// }


// for loop
let items=[23,45,67,78,89]
for(let i=0; i<items.length;i++){
   let offer= items[i]/10;
    items[i]=items[i]-offer;
    console.log(items[i])
}



// create array 
// 1.remove the first campany
//2. remove uber& add ola in place
//3.add amazon at the end


let campanies=["bloomberg","microsoft","uber","gogle","ibm","netflix"]
campanies.shift("bloomberg");
console.log(campanies);
campanies.splice(1,1,"ola")
console.log(campanies)
campanies.push("amazon")
console.log(campanies)
