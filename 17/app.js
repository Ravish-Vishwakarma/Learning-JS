let fruits = ["Apple", "Banana", "Orange", "Jack Fruit"];

// console.log(fruits[0]);
// console.log(fruits[1]);


fruits.push("Toamato"); // append to the last index
// fruits.pop(); // remve the last element
fruits.unshift("Mango"); // Add to the first index
// fruits.shift(); // remmove the first element


console.log(fruits);
console.log(fruits.length);
console.log(fruits.indexOf("Mango"));

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

for (let fruit of fruits) {
    console.log(fruit);
}