// Start with a cheerful greeting to set the tone
console.log("Hello! I'm your coding fun fact guide!");

// Declare and initialize bot-related variables
let botName = "JSBOT";               // Bot's name
let botLocation = "Earth";           // Bot's location
let favoriteLanguage = "English";    // Bot's favorite programming language

// Use template literals to introduce the bot and its location
console.log(`My name ${botName} and I live on ${botLocation}.`); // Missing ${} around botName and botLocation
// Correct version should be:
console.log(`My name is ${botName} and I live on ${botLocation}.`);

console.log(`My favorite programming language is ${favoriteLanguage}.`); // Share favorite language

// Create a fun fact using string concatenation
let codingFact = favoriteLanguage + " bot is amazing!";
console.log(codingFact); // Output the first fun fact

// Update the coding fact with a new message
codingFact = favoriteLanguage + " is easy to understand";
console.log(codingFact); // Output the updated fun fact

// Wrap up the interaction with a friendly farewell using template literals
console.log(`It was fun sharing these facts with you. Goodbye! - ${botName} from ${botLocation}.`);