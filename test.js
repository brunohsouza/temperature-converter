const assert = require('assert');
const { fahrenheitToCelsius, celsiusToFahrenheit } = require('./index');


// Test fahrenheitToCelsius
assert.strictEqual(fahrenheitToCelsius(32), 0, '32F should be 0C');
assert.strictEqual(fahrenheitToCelsius(212), 100, '212F should be 100C');

// Test celsiusToFahrenheit
assert.strictEqual(celsiusToFahrenheit(0), 32, '0C should be 32F');
assert.strictEqual(celsiusToFahrenheit(100), 212, '100C should be 212F');

console.log('All tests passed!');