//create a function using the" arrow function" keyboard that takes a string as an argument &return the number vovel in the string
 const countVovel=(str)=>{
count=0;
for(let char of str){
    if( char === "a"|char === "e"||char === "i"||char === "o"||char === "u"){
        count++;
    }
    console.log(count);
}
 }
 countVovel("ballu");
