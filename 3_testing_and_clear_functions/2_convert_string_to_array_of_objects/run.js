const { sumCharsCode, wordStat } = require('./script.js');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
run.js

You open '2 Convert string to array of objects by using clear functions and testing' on Node.js!
Версия: 1.0.0.

Using: user must should input an array with numbers.
`);

rl.question('Please, enter a string for converting to array: ', (inputText) => {
  console.log(wordStat(inputText));
  rl.close();
});
