const sumSymbolsCode = function(word) {
  return word.split('').reduce((memo, current) => memo + current.charCodeAt(0), 0);
}

const createObject = function(word) {
  return {
    word: word,
    sum: sumSymbolsCode(word),
  };
}

const convertStringToArray = function(string) {
  let array = string.split(' ');

  return array.map(el => createObject(el));
}

console.log(convertStringToArray(prompt('Please, enter a string for convert array')));
