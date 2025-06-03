// let randno = Math.random();
// console.log(randno);

// let randno2 = Math.floor(Math.random() * 6) + 1;
// console.log(randno2);

const myButton = document.getElementById("rollbtn")
const myLabel1 = document.getElementById("txtlabel1")
const myLabel2 = document.getElementById("txtlabel2")
const myLabel3 = document.getElementById("txtlabel3")
const min = 1;
const max = 6;

let randno1;
let randno2;
let randno3;
myButton.onclick = function () {

    randno1 = Math.floor(Math.random() * max) + min;
    randno2 = Math.floor(Math.random() * max) + min;
    randno3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randno1
    myLabel2.textContent = randno2
    myLabel3.textContent = randno3
}

