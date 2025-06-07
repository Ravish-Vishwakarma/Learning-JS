
// While Loop

let username = "";
while (username === "" || username === null) {
    username = window.prompt(`Enter your name`);
}
console.log(`Hello ${username}`)


// In Do-While loop the output always run once before checking the condition
let username2;
do {
    username = window.prompt(`Enter your name`);
} while (username === "" || username === null)
console.log(`Hello ${username}`)