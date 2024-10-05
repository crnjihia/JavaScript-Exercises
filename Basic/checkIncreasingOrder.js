function checkIncreasingOrder(a, b, c, mode = "strict") {
  if (mode === "strict") {
    return a < b && b < c;
  } else {
    return a <= b && b <= c;
  }
}

console.log(checkIncreasingOrder(10, 15, 20)); // true (strict)
console.log(checkIncreasingOrder(10, 10, 20, "soft")); // true (soft)
