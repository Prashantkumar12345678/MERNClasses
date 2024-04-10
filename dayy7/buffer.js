const b = new Buffer.from('ABCEFGH');

console.log(b.toString());
b.write('Other');
console.log(b.toString());
