// -----------------------------------------------

function hello() {
    console.log("Hi")
    console.log("Hi 2")
    console.log("Hi 3")
    console.log("Hi 4")
}
hello();

// -----------------------------------------------

function add2no(no1, no2) {
    console.log(`${no1} + ${no2} = ${no1 + no2}`);
}
add2no(2, 3);

// -----------------------------------------------

function add3no(no1, no2, no3) {
    return no1 + no2 + no3;
}
ans = add3no(1, 2, 3);
console.log(ans);

// -----------------------------------------------

function validemail(email) {
    return email.includes("@") ? true : false;
}
console.log(validemail("sample@gmail.com"))
console.log(validemail("smaple_gamil.com"))

// ------------------------------------------------


