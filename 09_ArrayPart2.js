const marvel_heros = ["thor", "Spiderman", "Ironman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[2][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
// [ 'thor', 'Spiderman', 'Ironman', 'superman', 'flash', 'batman' ] concat merge two arrays in new array.

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/

console.log(Array.isArray("Navinya"))
// false

console.log(Array.from("Navinya"));
/*
[
  'N', 'a', 'v',
  'i', 'n', 'y',
  'a'
]
*/

console.log(Array.from({name: "Navinya"}))
// []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// [ 100, 200, 300 ]