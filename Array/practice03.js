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
