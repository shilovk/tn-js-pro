let numbers = Array(10).fill().map((v,i) => i + 1);
console.log('   ' + numbers.join(' '));

for (let j = 2; j < 11; j++) {
    let calcNumbers = Array.from(numbers, v => v * j);
    console.log(j + ' ' + calcNumbers.join(' '));
};

// or
for (let j = 2; j < 11; j++) {
    let calcNumbers = numbers.slice();
    calcNumbers.forEach((v, i, memo) => memo[i] = numbers[i] * j);
    console.log(j + ' ' + calcNumbers.join(' '));
};
