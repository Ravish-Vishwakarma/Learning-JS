// Random Password Generator



function passgen(password_length, include_lowercase, include_uppercase, include_number, include_symbols) {
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars = "0123456789";
    const symbolschar = "!@#$%^&*()_-=+"

    let allowedchar = "";
    let password = "";

    if (password_length <= 0) {
        return 'Password length must be greater than 0.';

    }


    allowedchar += include_lowercase ? lowercasechars : "";
    allowedchar += include_uppercase ? uppercasechars : "";
    allowedchar += include_number ? numberchars : "";
    allowedchar += include_symbols ? symbolschar : "";


    if (allowedchar.length === 0) {
        return 'At least one set of character must be selected.';
    }

    for (let i = 0; i < password_length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedchar.length)
        password += allowedchar[randomIndex];
    }

    return password;
}

const password_length = 20;
const include_lowercase = true;
const include_uppercase = true;
const include_number = true;
const include_symbols = true;

const password = passgen(password_length,
    include_lowercase,
    include_uppercase,
    include_number,
    include_symbols);

console.log(`Your Password is: ${password}`)