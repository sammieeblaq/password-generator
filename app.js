const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSymbolsElement = document.getElementById("includeSymbols");

const form = document.getElementById("generatePassword");
const passwordDisplay = document.getElementById("passwordDisplay");

// Array from low to high constants
const uppercaseCharCodes = arrayLowToHigh(65, 90);
const lowercaseCharCodes = arrayLowToHigh(97, 122);
const numberCharCodes = arrayLowToHigh(48, 57);
const symbolCharCodes = arrayLowToHigh(33, 47).concat(arrayLowToHigh(58, 64)).concat(arrayLowToHigh(91, 96)).concat(arrayLowToHigh(123, 126));




characterAmountNumber.addEventListener("input", syncCharacterAmount);

characterAmountRange.addEventListener("input", syncCharacterAmount);

form.addEventListener("submit", e => {
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const includeUppercase  = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;

    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);

    passwordDisplay.innerText = password;
})

function generatePassword(characterAmount, includeUppercase,includeNumbers, includeSymbols) {
    // using ASCII CODES
    let charCodes = lowercaseCharCodes;
    if (includeUppercase) charCodes = charCodes.concat(uppercaseCharCodes);
    if (includeNumbers) charCodes = charCodes.concat(numberCharCodes);
    if (includeSymbols) charCodes = charCodes.concat(symbolCharCodes);

    const passwordCharacters = [];

    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return  passwordCharacters.join("");
}

function arrayLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}

function syncCharacterAmount(e) {
    const value = e.target.value;
    characterAmountRange.value = value;
    characterAmountNumber.value = value;
}

