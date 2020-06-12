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

  return text.trim()
    .split(' ')
    .map((word) => ({
      word,
      sum: sumCharsCode(word),
    }));
}

module.exports = { sumCharsCode, wordStat };
