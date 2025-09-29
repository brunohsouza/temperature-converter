# Temperature-converter
Converts temperature between Fahrenheit and Celsius using a NodeJS structure.

A simple Node.js module for converting temperatures between Fahrenheit and Celsius.

## Example usage
const { fahrenheitToCelsius, celsiusToFahrenheit } = require('@npmusername/temperature-converter');

const celsius = fahrenheitToCelsius(100);
console.log(`100°F is ${celsius}°C`);

const fahrenheit = celsiusToFahrenheit(37);
console.log(`37°C is ${fahrenheit}°F`);

## Running Tests
To run tests and ensure the module is working as expected, navigate to the module's root directory and execute:

$ node testTemperatureConverter.js

## License
GPL-3.0-or-later.