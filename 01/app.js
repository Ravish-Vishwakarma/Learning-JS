// console.log("Hello World!");
// console.warn("HI");
// console.count("Count string");
// console.count("Count string");
// console.info("This is info");
// console.countReset("Count string");

// console.clear();
// console.table({ name: "My name", age: 20 });

// // This is a comment

// let var1 = "Varaible 1"
// console.log(var1)
// console.log(typeof var1)

// let var2 = 1;
// console.log(var2);
// var2++; // increment the varaible by 1
// console.log(var2);

// console.log(10 == '10') // checks the value
// console.log(10 != '10') // checks the value

// console.log(10 !== '10') // checks the type and value
// console.log(10 === '10') // checks the value and data type also

// -----------------------------------------------

const pi = 3.14;
let rad;
let circumference;
document.getElementById("rsubmit").onclick = function () {
    rad = document.getElementById("rinput").value;
    rad = Number(rad);
    circumference = 2 * pi * rad;
    document.getElementById("result").textContent = circumference;
}







