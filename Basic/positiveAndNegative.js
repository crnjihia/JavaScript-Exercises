function positiveNegative(a, b) {
  return (a < 0 && b > 0) || (a > 0 && b < 0);
}

console.log(positiveNegative(5, -10));
console.log(positiveNegative(-10, 20));
