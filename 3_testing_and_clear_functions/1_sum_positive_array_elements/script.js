/**
 * Filter only positive array elements
 * @param  {array} arr array
 * @return {array}     array without negatove elements
 */
const getPositiveArray = (arr = []) => {
  if (!Array.isArray(arr))
    throw new Error('It is not an Array');

  return arr.filter(el => el > 0);
}

/**
 * Sum of array elements
 * @param  {array} arr array
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
 * @param {array} arr      array
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

  return {
    ...resultObject,
  }
}

const inputString = prompt('Please, enter items separated by commas');
const inputArray = inputString.split(',').map(item => +item);

console.table(sumOfPositive(inputArray));
