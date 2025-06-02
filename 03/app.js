
let x = 2.4;
let y = 43.264;
let z = 6.734;


// console.log(Math.PI)
console.log("Original");
console.log(x);
console.log(y);
console.log(z);

console.log("Round");
console.log(Math.round(x));
console.log(Math.round(y));
console.log(Math.round(z));

console.log("Floor");
console.log(Math.floor(x));
console.log(Math.floor(y));
console.log(Math.floor(z));

console.log("Ceil");
console.log(Math.ceil(x));
console.log(Math.ceil(y));
console.log(Math.ceil(z));

console.log("Truncate");
console.log(Math.trunc(x));
console.log(Math.trunc(y));
console.log(Math.trunc(z));

console.log(Math.sign(-5)); // -1

let max = Math.max(x, y, z);
let min = Math.min(x, y, z);
console.log("Max: ", max);
console.log("Min: ", min);