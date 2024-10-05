function sameLastDigit(a, b, c) {
  return a % 10 === b % 10 && b % 10 === c % 10;
}

console.log(sameLastDigit(123, 43, 13));
console.log(sameLastDigit(123, 43, 14));
