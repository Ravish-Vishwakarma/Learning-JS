
const minrange = 1;
const maxrange = 100;
const ans = Math.floor(Math.random() * (maxrange - minrange + 1));


let guess;
let attempt = 0;
let running = true;

for (let i = minrange; i = maxrange; i++) {
    guess = window.prompt(`Guess a no between ${minrange}-${maxrange}`);
    guess = Number(guess);
    if (isNaN(guess)) {
        window.alert("Enter a valid Number");
    } else if (guess < minrange || guess > maxrange) {
        window.alert("Enter number in the given range");
    } else {
        attempt++;
        if (guess < ans) {
            window.alert("The no. is Bigger, try again")
        } else if (guess > ans) {
            window.alert("The no Smaller, try again")
        } else {
            window.alert(`You guessed is correctly. \nAnswer -> ${ans} \nNo. of attempts -> ${attempt}`)
        }
    }

}