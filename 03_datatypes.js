//************** Primitive ****************//

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
//datatype is number
const scoreValue = 100.3
//datatype is number

const isLoggedIn = false;
//datatype is boolean
const outsideTemp = null;
//datatype is object
let userEmail;
//datatype is undefined

const id = Symbol('123')
const anotherId = Symbol('123');
console.log( id===anotherId);
//datatype is symbol

const bigNumber = 3456789234554n
//datatype is bigInt

//************** Referance (Non-Primitive) ***************//

// Arrays, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]
//datatype is object

let myObj = {
    name : "navinya",
    age: 20,
}
//datatype is object

const myFunction = function(){
    console.log("Hello world");
}
//datatype is function


console.log(typeof myFunction);