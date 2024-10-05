function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log(`60°C is ${celsiusToFahrenheit(60)}°F`);
console.log(`45°F is ${fahrenheitToCelsius(45)}°C`);
