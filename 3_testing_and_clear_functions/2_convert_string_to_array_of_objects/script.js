/**
 * Count sum of word's chars code
 * @param  {string} word word
 * @return {number}      sum of word's chars code
 */
function sumCharsCode(word) {
  if (!(typeof word === 'string'))
    throw new Error('It is not a String');

  const charsArray = word.split('');

  return charsArray.reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

/**
 * Convert string to array of objects
 * @param  {string} text    text
 * @return {ResultObject[]} array with ResultObject's elements
 */
function wordStat(text) {
  if (!(typeof text === 'string'))
    throw new Error('It is not a String');

  let arr = text.trim().split(' ');

  let resultArray = [].map.call(arr, (word) => {
    /**
     * @type {ResultObject}
     */
    const resultObject = {
      word,
      sum: sumCharsCode(word),
    };
    return resultObject;
  });

  return resultArray;
}

module.exports = { sumCharsCode, wordStat };
