const vowels = 'aeiou';
const consonants = 'bcdfghjklmnpqrstvwxyz';
let vowelsCount = consonantsCount = 0;

let string = prompt('Please, enter string');

string = string.replace(/(\t+|\s+)/g, '').toLowerCase();

for (i = 0; i < string.length; i++) {
  if (vowels.indexOf(string[i]) >= 0)
    vowelsCount++;
  else if (consonants.indexOf(string[i]) >= 0) {
    consonantsCount++;
  }
}

console.log('Count of vowels: ' + vowelsCount + '\nCount of consonants: ' + consonantsCount);
