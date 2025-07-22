//push method
let food=["burger", "piza"];
food.push("kulcha");
console.log(food);


//pop method
let food2=["burger", "piza"];
food.pop();
console.log(food2);


// cancat method
let marveHeroes=["thor","spiderman"]
let dcHeroes=["superman", "batman"]

 let heroes=marveHeroes.concat(dcHeroes);
console.log(heroes)

//.unshit
let marveHero=["thor","spiderman"]
 marveHero.unshift("ANTMAN")
console.log(marveHero)

// .shift
let marveHero1=["thor","spiderman"]
marveHero1.shift();

console.log(marveHero1)


let heroes=["thor","spiderman","antman","dr.chandu"]

console.log(heroes.slice(1,3))


let val=[1,2,3,4,5,6,7,8]
val.splice(1,3,23,45)
console.log(val)
