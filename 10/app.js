
const temp = 40;

if (temp > 0 && temp <= 30) { // AND operator
    console.log("The Weather is Good")
} else {
    console.log("The Weather is Bad")
}


if (temp <= 0 || temp > 30) { // OR operator
    console.log("The Weather is Bad")
} else {
    console.log("The Weather is Good")
}


const rainy = true;
if (!rainy) {  // NOT operator
    console.log("It is not Rainy")
}
else {
    console.log("It's Rainy")
}

