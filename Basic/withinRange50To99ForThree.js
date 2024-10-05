function withinRangeThree(a, b, c) {
  return (a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >= 50 && c <= 99);
}

console.log(withinRangeThree(52, 30, 45));
console.log(withinRangeThree(20, 88, 10));
