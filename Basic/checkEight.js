function checkEight(a, b) {
  return a === 8 || b === 8 || a + b === 8 || Math.abs(a - b) === 8;
}

console.log(checkEight(3, 5)); // true
console.log(checkEight(16, 8)); // true
