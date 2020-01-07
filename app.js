const characterAmountRange = document.getElementById("characterAmountRange");

const characterAmountNumber = document.getElementById("characterAmountNumber");

characterAmountNumber.addEventListener("input", syncCharacterAmount);

characterAmountRange.addEventListener("input", syncCharacterAmount);

const syncCharacterAmount = e => {
    const value = e.target.value;
    characterAmountNumber.value = value;
    characterAmountRange.value = value;
}