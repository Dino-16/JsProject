// 🔮 Define five possible fortunes
let fortune1 = "Your cat will look very cuddly today.";
let fortune2 = "The weather will be nice tomorrow.";
let fortune3 = "Be cautious of your new neighbors.";
let fortune4 = "You will find a new hobby soon.";
let fortune5 = "It would be wise to avoid the color red today.";

// 🎲 Generate a random number between 1 and 5
let randomNumber = Math.floor(Math.random() * 5) + 1;

// 🧠 Prepare a variable to hold the selected fortune
let selectedFortune;

// ⚠️ FIXED: Use comparison operator (== or ===), not assignment (=)
// ⚠️ FIXED: Correct variable name casing (randomNumber, not randomnumber)
if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else {
  selectedFortune = fortune5;
}

// 🗣️ Output the selected fortune
console.log(selectedFortune);