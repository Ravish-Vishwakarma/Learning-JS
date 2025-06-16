


function rollDice() {
    const noofdie = document.getElementById("noofdie").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    for (let i = 0; i < noofdie; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="assets/dice/dice${value}.png" alt="${value}">`);
    }
    diceResult.textContent = `dice: ${values.join(', ')}`
    diceImages.innerHTML = images.join('');

}