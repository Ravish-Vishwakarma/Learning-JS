// Strings Methods

let usersName = "   Someone";
console.log(usersName.charAt(2)); // Index
console.log(usersName.length); // len()
console.log(usersName.trim(' ')); // remove
console.log(usersName.toUpperCase()); // Uppercase
console.log(usersName.repeat(3));
console.log(usersName.startsWith("   ")); // Bool function
console.log(usersName.endsWith("~~"));
console.log(usersName.includes(" "));
console.log(usersName.replaceAll("e", ""));
console.log(usersName.padStart(15, "0")); // makes the string 15 chracters
console.log(usersName.padEnd(15, "0")); // makes the string 15 chracters but in the end
