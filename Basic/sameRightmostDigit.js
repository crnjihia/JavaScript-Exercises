function sameRightmostDigit(a, b, c) {
  return a % 10 === b % 10 || b % 10 === c % 10 || a % 10 === c % 10;
}

console.log(sameRightmostDigit(27, 57, 77)); // true
console.log(sameRightmostDigit(21, 34, 52)); // false
