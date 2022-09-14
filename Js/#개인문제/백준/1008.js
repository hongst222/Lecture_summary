let fs = require('fs');
let input = fs.readFileSync('1008.txt').toString().split(' ');


const n = parseInt(input[0]);
const m = parseInt(input[1]);

console.log(n/m);
console.log(n%m);
