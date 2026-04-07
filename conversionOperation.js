let score = 33
console.log(typeof score);
console.log(typeof(score));
//output is number


let score = "33"
console.log(typeof score);
console.log(typeof(score)); 
// output is string


let score ="33"
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
// output is number


let score ="33abc"
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
// output is number

console.log(valueInNumber)
//output is NaN(Not a Number)


let score = null
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score)
console.log(valueInNumber);
//output is 0


let score = undefined
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score)
console.log(valueInNumber);
// output is NaN


let score = true;
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score)
console.log(valueInNumber);
//output is 1


let score = "Navinya";
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score)
console.log(valueInNumber);
//output is NaN


Conversion in Number

"33" => 33
"33abc" => NaN
true => 1; false => 0


let isLoggedIn = true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// output is true


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// output is true


let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// output is false


let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// output is false


let isLoggedIn = "Navinya";
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// output is true


1 => true; 0 => false
"" => false;
"Navinya" => true


let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
// output is 33 and string


