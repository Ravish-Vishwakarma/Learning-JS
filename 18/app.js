
function sum(...numbers) {
    let sum = 0;
    for (let i of numbers) {
        sum += i;
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5));


function avg(...numbers) {
    let sum = 0;
    for (let i of numbers) {
        sum += i;
    }
    return sum / numbers.length;
}

console.log(avg(1, 3, 5, 2, 6))