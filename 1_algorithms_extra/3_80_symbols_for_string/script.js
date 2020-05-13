let resource = prompt('Please, enter text');
const re = /.{1,80}/g;

resource = resource.match(re).join('\n');

console.log(resource);
