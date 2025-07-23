 // create a function using the"function" keyboard that takes a string as an argument &return the number vovel in the string
 function countVovel(str){
    let count = 0;
    for(let char of  str){
        if( char === "a"|char === "e"||char === "i"||char === "o"||char === "u"){
            count++;
        }
        console.log(count);
    }
 }
 countVovel("heeloi")
