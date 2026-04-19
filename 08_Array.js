const myArr = [1,2,3,4,5,]
console.log(myArr[4]);
// 5  *because 4 is index of 5

const myHeroes = ["Shaktiman","Superman","Spiderman"]
console.log(myHeroes[2]);
// Spiderman *because 2 is index of Spiderman

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2)
// [ 1, 2, 3, 4, 5 ]
console.log(myArr2.length);
// 5

myArr.push(6)
console.log(myArr);
// [ 1, 2, 3, 4, 5, 6 ]

myArr.pop(3)
console.log(myArr)
// [ 1, 2, 3, 4, 5 ] an element pop from last

myArr.unshift(9)
console.log(myArr);
// [ 9, 1, 2, 3, 4, 5 ] added a element at front(0th index)

myArr.shift()
console.log(myArr);
// [ 1, 2, 3, 4, 5 ] removed a element from front(0th index)

console.log(myArr.includes(2));
// true *checking if this element present in array or not

console.log(myArr.indexOf(4));
// 3 *3 is index of 4

const newArr = myArr.join()
console.log(myArr);
// [ 1, 2, 3, 4, 5 ] same array but converted into string
console.log(typeof newArr)
// String


/*********** Slice, Splice ************/

console.log("A ", myArr)
// A  [ 1, 2, 3, 4, 5 ] 

const myn1 = myArr.slice(1, 3)
console.log(myn1);
// [ 2, 3 ] slice returns values fron index 1 to 2 and except index 3

console.log("B ", myArr);
// B  [ 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(2, 4)
console.log("C ",myArr)
// C  [ 1, 2 ] 

console.log(myn2);
// [ 3, 4, 5 ] splice returns values from index 2 to 4

/* splice() modifies the original array (add/remove items), while slice() returns a new array without changing the original. */