function closestTo100(a, b) {
  const diffA = Math.abs(a - 100);
  const diffB = Math.abs(b - 100);
  return diffA < diffB ? a : b;
}

console.log(closestTo100(90, 95));
console.log(closestTo100(85, 120));
