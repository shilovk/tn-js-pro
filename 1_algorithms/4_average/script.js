let array = new Array;
const sum = () => array.reduce((a, b) => a + b, 0);
const average = () => sum(array) / array.length;

while (true) {
  let number = prompt('Please, enter new number (empty value - exit)');
  number = parseFloat(number);

  if (isNaN(number)) {
    alert(`sum: ${sum(array)}, count: ${array.length}, average: ${average(array)}`);
    break;
  } else {
    array.push(number);
    console.log(average());
  }
}
