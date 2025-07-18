const name ="balwinder kaur"
const age=22
console.log(`hello my name is ${name} my age is ${age}`);
// second method to decalre string
const fullname=new String(`balwinder kaur`)
console.log(fullname[2]);
console.log(fullname.__proto__);
console.log(fullname.length)
console.log(fullname.toUpperCase());
console.log(fullname.charAt('4'));
console.log(fullname.indexOf('d'));


// substring
const newString=fullname.substring(0,4)
console.log(newString)// 4 value not include
console.log(fullname.slice(0 ,3))


//TRIM
const anotherString="     ghangas    "
console.log(anotherString)
console.log(anotherString.trim());

// replace
console.log(anotherString.replace('g','G'))
console.log(anotherString.includes('veer ji'))

console.log(anotherString.split('-'))
