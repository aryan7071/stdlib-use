const mean = require('@stdlib/stats/base/mean');
const variance = require('@stdlib/stats/base/variance');

const data = new Float64Array([2, 4, 6, 8, 10]);
console.log('Mean:', mean(data.length, data, 1));
console.log('Variance:', variance(data.length, 1, data, 1));