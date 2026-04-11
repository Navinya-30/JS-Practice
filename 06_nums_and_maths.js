// const score = 40000

// const balance =  new Number(10000)
// console.log(balance);
// // [Number: 10000]

// console.log(balance.toString().length);
// // 5 length of string

// console.log(balance.toFixed(3));
// //10000.000

// const otherNumber = 23.679
// console.log(otherNumber.toPrecision(3));
// // 23.7 output in decimal of size 3

// const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// // 10,00,000 in US standard

// console.log(hundreds.toLocaleString('en-IN'));
// // 10,00,000 in Indian standard


//***************** Maths *****************//

// console.log(Math);
// // Object [Math] {}

// console.log(Math.abs(-4))
// // 4 absolute value

// console.log(Math.round(8.6))
// // 9 round of value

// console.log(Math.ceil(4.3))
// // 5 top value

// console.log(Math.floor(5.8))
// // 5 lower value

// console.log(Math.min(10, 9, 6, 8));
// // 6 is min value in array

// console.log(Math.max(2, 8, 3, 7, 9))
// 9 is max value in array

console.log(Math.random());
// 0.8774523932630647 value in between 0 and 1

console.log((Math.random()*10) + 1)
// 4.4651348876610815 value in between 1 to 10

console.log(Math.floor(Math.random() * 10 + 1));
// 3 value in between 1 to 9 but it is lower approx

const min = 10
const max =20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// 12 value is min 10 and max 20 but it is lower approx
