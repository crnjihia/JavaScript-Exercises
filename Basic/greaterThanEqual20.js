function greaterThanEqual20(a, b, c) {
  return (
    (a >= 20 && (a < b || a < c)) ||
    (b >= 20 && (b < a || b < c)) ||
    (c >= 20 && (c < a || c < b))
  );
}

console.log(greaterThanEqual20(15, 22, 30)); // true
console.log(greaterThanEqual20(15, 10, 5)); // false
