
const mycheckbox = document.getElementById("mycheckbox")
const rcat = document.getElementById("radiocat")
const rdog = document.getElementById("radiodog")
const rparrot = document.getElementById("radioparrot")
const rtortoise = document.getElementById("radiotortoise")
const submitbtn = document.getElementById("submitbtn")
const txtresult = document.getElementById("txtresult18")
const txtresultanimal = document.getElementById("txtresultanimal")

submitbtn.onclick = function () {
    if (mycheckbox.checked) {
        txtresult.textContent = `You Liked`;
    } else {
        txtresult.textContent = `You Disliked`;
    }

    if (rcat.checked) {
        txtresultanimal.textContent = "Your Cat will be delivered"
    } else if (rdog.checked) {
        txtresultanimal.textContent = "Your Dog will be delivered"
    } else if (rparrot.checked) {
        txtresultanimal.textContent = "Your Parrot will be delivered"
    } else if (rtortoise.checked) {
        txtresultanimal.textContent = "Your Tortoise will be delivered"

    }
}