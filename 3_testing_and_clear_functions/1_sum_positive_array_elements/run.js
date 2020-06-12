const { sumOfPositive } = require('./script.js');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
run.js

You open '1 Sum of positive array elements by using clear functions and testing' on Node.js!
Версия: 1.0.0.

Using: user must should input an array with numbers.
`);

rl.question('Please, enter items of array separated by commas: ', (inputString) => {
  const inputArray = inputString.split(',').map(item => +item);
  console.table(sumOfPositive(inputArray));
  rl.close();
});
