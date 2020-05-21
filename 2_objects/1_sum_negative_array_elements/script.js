const getNegativeArrayElements = (array) => {
  if (!Array.isArray(array))
    throw new Error('It is not an Array');

  return array.filter(el => el < 0);
}

const sumArrayElements = (array) => {
  if (!Array.isArray(array))
    throw new Error('It is not an Array');

  if (array.length === 0)
    return 0;

  return array.reduce((previous, current) => previous + current);
}

const createObject = (resource) => {
  resource = resource.split(',').map(item => +item);
  resource = getNegativeArrayElements(resource);

  const length = resource.length;
  const sum = sumArrayElements(resource);

  return {
    count: length,
    sum: sum,
  }
}

const result = createObject(prompt('Please, enter items separated by commas'));


console.log(result);
