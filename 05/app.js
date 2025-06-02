
// let age = 25;

// if (age < 18) {
//     console.log("Not old enough!")
// } else {
//     console.log("Old enough!")
// }

// let licence = false
// let money = true

// if (licence == true) {
//     console.log("Good to go");
// } else if (licence == false && money == true) {
//     console.log("$$$ Good to Go $$$");
// } else {
//     console.log("You can't go");
// }

const myText = document.getElementById("age")
const MySubmit = document.getElementById("submitbtn")
const MyResult = document.getElementById("result")
let age;
MySubmit.onclick = function () {

    age = myText.value;
    age = Number(age);
    if (age >= 100) {
        MyResult.textContent = "You are TOO OLD to enter this site";
    } else if (age == 0) {
        MyResult.textContent = "You can't enter. You were just born.";
    } else if (age >= 18) {
        MyResult.textContent = "You are old enough to enter this site";
    } else if (age < 0) {
        MyResult.textContent = "Your age can't be below 0";
    } else {
        MyResult.textContent = "You must be 18+ to enter this site";
    }
}