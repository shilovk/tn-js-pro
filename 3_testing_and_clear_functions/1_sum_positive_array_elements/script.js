/**
 * Filter only positive array elements
 * @param  {number[]} arr array
 * @return {number[]}     array without negatove elements
 */
const getPositiveArray = (arr = []) => {
  if (!Array.isArray(arr))
    throw new Error('It is not an Array');

  return arr.filter(el => el > 0);
}

/**
 * Sum of array elements
 * @param  {number[]} arr array
 * @return {number}    sum of array elements
 */
const sumArray = (arr = []) => {
  if (!Array.isArray(arr))
    throw new Error('It is not an Array');
  if (arr.length === 0)
    return 0;

  return arr.reduce((previous, current) => previous + current);
}

/**
 * Create object with count and sum of positive array elements
 * @param {number[]} arr      array
 * @returns {ResultObject} object with count and sum
 */
const sumOfPositive = (arr = []) => {
  const positiveArray = getPositiveArray(arr);

  /**
   * @type {ResultObject}
   */
  const resultObject = {
    count: positiveArray.length,
    sum: sumArray(positiveArray),
  }

  return resultObject
}

module.exports = { sumOfPositive };

// const inputString = prompt('Please, enter items separated by commas');
// const inputArray = inputString.split(',').map(item => +item);
//
// console.table(sumOfPositive(inputArray));
