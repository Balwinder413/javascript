let cities=["delhi","pune","mumbai"]
cities.forEach(function printValue(val){
    console.log(val.toUpperCase());
})


let heroes=["veer ji","champo","pampo"]
heroes.forEach((val,idx,arr)=>{
     console.log(val.toUpperCase(),idx,arr);
     })
