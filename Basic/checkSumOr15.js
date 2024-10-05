function checkSumOr15(a, b) {
  return a === 15 || b === 15 || a + b === 15 || Math.abs(a - b) === 15;
}

console.log(checkSumOr15(10, 5)); // true
console.log(checkSumOr15(20, 15)); // true
