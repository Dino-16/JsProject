// 🤖 Define the bot's name and introduce the topic
const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;
console.log(greeting);

// 🎲 Introduce Math.random()
console.log("The Math.random() method returns a pseudo random number between 0 and less than 1.");
const randomNum = Math.random(); // Generates a random decimal between 0 and 1
console.log(randomNum);

// 🎯 Generate a random number between two values
console.log("Now, generate a random number between two values.");
const min = 1;
const max = 100;
const randomNum2 = Math.random() * (max - min) + min; // Scales the random number to the desired range
console.log(randomNum2);

// 🔽 Round down using Math.floor()
console.log("The Math.floor() method rounds the value down to the nearest whole integer.");
const numRoundedDown = Math.floor(6.7); // Returns 6
console.log(numRoundedDown);

// 🔼 Round up using Math.ceil()
console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");
const numRoundedUp = Math.ceil(3.2); // Returns 4
console.log(numRoundedUp);

// 🔁 Round to nearest whole number using Math.round()
console.log("The Math.round() method rounds the value to the nearest whole integer.");
const numRounded = Math.round(2.7); // Returns 3
console.log(numRounded);
const numRounded2 = Math.round(11.2); // Returns 11
console.log(numRounded2);

// 📈📉 Find max and min values in a set
console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");
const maxNum = Math.max(3, 125, 55, 24); // Returns 125
console.log(maxNum);
const minNum = Math.min(6, 90, 14, 90, 2); // Returns 2
console.log(minNum);

// 🎉 Wrap up the lesson
console.log("It was fun learning about the different Math methods with you!");