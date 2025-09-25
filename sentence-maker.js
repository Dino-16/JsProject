// 👋 Start with a friendly greeting
console.log("Hi there!");

// 🤖 Define the bot's name and introduce it
const botName = "teacherBot";
const greeting = `My name is ${botName}.`;
console.log(greeting);

// 📚 Define the subject and topic being taught
const subject = "JavaScript";
const topic = "strings";

// 🗣️ Print a sentence introducing today's lesson
const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

// 📏 Demonstrate the .length property on a string
const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);
console.log(subject.length); // Outputs the number of characters in "JavaScript"

// 📏 Another example using the topic string
console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length); // Outputs the number of characters in "strings"

// 🔤 Accessing specific characters in a string
console.log(`Here is an example of accessing the first letter in the word ${subject}.`);
console.log(subject[0]); // First character: "J"

console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]); // Second character: "a"

console.log(`Here is an example of accessing the last letter in the word ${subject}.`);
const lastCharacter = subject[subject.length - 1]; // Dynamic way to get the last character
console.log(lastCharacter); // Last character: "t"

// 🔍 Searching for substrings using .indexOf()
const learningIsFunSentence = "Learning is fun.";
console.log("Here are examples of finding the positions of substrings in the sentence.");

console.log(learningIsFunSentence.indexOf("Learning")); // Returns 0 (starts at beginning)
console.log(learningIsFunSentence.indexOf("fun"));      // Returns position of "fun"
console.log(learningIsFunSentence.indexOf("learning")); // Returns -1 (case-sensitive search)

// 🎉 Wrap up the session
console.log("I hope you enjoyed learning today.");