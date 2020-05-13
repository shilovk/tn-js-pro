let array = new Array;
const sum = () => array.reduce((a, b) => a + b, 0);
const average = () => sum(array) / array.length;

while (true) {
    let number = prompt('Please, enter new number (empty value - exit)');
    let memo = parseFloat(number);

    if (isNaN(memo)) {
        alert(`sum: ${sum(array)}, count: ${array.length}, average: ${average(array)}`);
        break;
    } else {
        array.push(memo);
        console.log(average());
    }
}
