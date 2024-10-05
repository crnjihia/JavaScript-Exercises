function divideWithCommas(a, b) {
  const result = (a / b).toLocaleString();
  return result;
}

console.log(divideWithCommas(1000000, 3)); // "333,333.33"
console.log(divideWithCommas(123456789, 5)); // "24,691,357.8"
