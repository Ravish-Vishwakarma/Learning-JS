const dbtn = document.getElementById("dbtn");
const rbtn = document.getElementById("rbtn");
const ibtn = document.getElementById("ibtn");
const counter = document.getElementById("counter");


let count = 0;

ibtn.onclick = function () {
    count++;
    counter.textContent = count;
}
rbtn.onclick = function () {
    count = 0;
    counter.textContent = count;
}
dbtn.onclick = function () {
    count--;
    counter.textContent = count;
}

