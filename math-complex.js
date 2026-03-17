const pow = require('@stdlib/math/base/special/pow');
const exp = require('@stdlib/math/base/special/exp');
const ln = require('@stdlib/math/base/special/ln');
const log2 = require('@stdlib/math/base/special/log2');
const log10 = require('@stdlib/math/base/special/log10');

console.log('2 to the power 10:', pow(2, 10));
console.log('e to the power 3:', exp(3));
console.log('Natural log of 100:', ln(100));
console.log('Log base 2 of 1024:', log2(1024));
console.log('Log base 10 of 1000:', log10(1000));