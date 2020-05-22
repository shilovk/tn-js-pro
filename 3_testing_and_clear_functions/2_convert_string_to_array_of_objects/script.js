/**
 * Count sum of word's chars code
 * @param  {string} word word
 * @return {number}      sum of word's chars code
 */
const sumCharsCode = function(word) {
  const charsArray = word.split('');

  return charsArray.reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

/**
 * Convert string to array of objects
 * @param  {string} text    text
 * @return {ResultObject[]} array with ResultObject's elements
 */
const wordStat = function(text) {
  let arr = text.split(' ');
  let resultArray = [];

  for (i = 0; i < arr.length; i++) {
    word = arr[i];

    /**
     * @type {ResultObject}
     */
    const resultObject = {
      word,
      sum: sumCharsCode(word),
    };

    resultArray.push(resultObject);
  };

  return [...resultArray];
}

const inputText = prompt('Please, enter a string for converting to array');

console.log(wordStat(inputText));
