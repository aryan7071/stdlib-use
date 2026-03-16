const array = require('@stdlib/ndarray/array');

const x = array([[1, 2, 3], [4, 5, 6]]);
console.log('Shape:', x.shape);
console.log('Value at (1,2):', x.get(1, 2));