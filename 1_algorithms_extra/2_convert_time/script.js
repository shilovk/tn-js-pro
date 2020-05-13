let resource = prompt('Please, enter time');
const re = /(\d{1,2}|am|pm)/g;

resource = resource.match(re);

let hours   = +resource[0];
let minutes = +resource[1];
let prefix  = resource[2];

if (prefix == 'pm')
  hours += 12;

if (hours > 24 | minutes > 60) {
  resource = 'Wring time input';
} else {
  if (hours == 12 && prefix == 'am')
    hours = '00'
  else
    hours = `0${hours}`.slice(-2);
  minutes = `0${minutes}`.slice(-2);
  resource = `${hours}:${minutes}`;
}

alert(resource);
console.log(resource);
