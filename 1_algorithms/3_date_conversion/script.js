function checkLength(value, count) {
  value = value.toString()

  if (value.length < count)
    value = ('0'.repeat(count) + value).slice(-count)

  return value
}

let dateUs = prompt('Please, input date by US format mm/dd/yyyy, for example 5/30/2006');

dateUs = dateUs.split('/');

const month = checkLength(dateUs[0], 2);
const day   = dateUs[1];
const year  = checkLength(dateUs[2], 4);

const dateRu = `${day}.${month}.${year}`;

alert('Date in RU format ' + dateRu);
console.log('Date in RU format ' + dateRu);
