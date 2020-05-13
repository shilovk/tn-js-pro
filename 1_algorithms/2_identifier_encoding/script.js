const timestamp = Math.floor(Date.now() / 1000);
const a = timestamp.toString(16);

const cluster = 5;
const b = cluster < 10 ? '0' + cluster.toString(16) : cluster.toString(16);

const type = 5;
const c = type.toString(16);

const user = 1234567;
const d = user.toString(16);

const id = a + b + c + d;

console.log(timestamp, cluster, type, user);
console.log(`id encoding by format AAAAAAAABBCDDDDDD : ${id}`);
