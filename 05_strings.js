const name = "navinya"
const repoCount = 10

console.log(name + repoCount + " Value")

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`NavinyaNG`)
console.log(gameName[5]);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('G'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newString1 = "  navinya  "
console.log(newString1)
console.log(newString1.trim());

const url = "https://navinya.com/nav%email"
console.log(url.replace('%email', '-'))

console.log(url.includes('navinya'))

console.log(gameName.split('-'));
