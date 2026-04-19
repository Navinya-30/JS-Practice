
let myDate = new Date()
console.log(myDate.toString());
// Sun Apr 19 2026 12:16:47 GMT+0530 (India Standard Time)
// current date and time

console.log(myDate.toLocaleString());
// 19/4/2026, 12:16:47 pm

console.log(myDate.toDateString());
// Sun Apr 19 2026

console.log(typeof myDate);
// object

let myCreateDate = new Date (2026, 3, 19)
console.log(myCreateDate.toDateString());
// Sun Apr 19 2026
// In JS month start from 0 that is 0 => January

let myCreatedDate = new Date (2026, 3, 20, 12, 25);
console.log(myCreatedDate.toLocaleString());
// 20/4/2026, 12:25:00 pm

let myTimeStamp = Date.now()
console.log(myTimeStamp);
// 1776582779579
console.log(myCreatedDate.getTime());
// 1776668100000
console.log(Math.floor(Date.now()/1000));
// 1776582779

let newDate =new Date()
console.log(newDate);
// 2026-04-19T07:12:59.580Z
console.log(newDate.getMonth() + 1);
// 4
console.log(newDate.getDay());
// 0
