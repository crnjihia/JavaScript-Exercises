function largestInRange(a, b) {
  if (a >= 40 && a <= 60 && b >= 40 && b <= 60) {
    return Math.max(a, b);
  }
  return "Both numbers should be in the range of 40 to 60.";
}

console.log(largestInRange(45, 50));
console.log(largestInRange(35, 55));
