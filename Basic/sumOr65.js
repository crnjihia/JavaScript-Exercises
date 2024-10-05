function sumOr65(a, b) {
  const sum = a + b;
  return sum >= 50 && sum <= 80 ? 65 : 80;
}

console.log(sumOr65(30, 30)); // 65
console.log(sumOr65(40, 50)); // 80
