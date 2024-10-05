function checkSameNumbers(a, b, c) {
  if (a === b && b === c) {
    return 30;
  } else if (a === b || b === c || a === c) {
    return 40;
  } else {
    return 20;
  }
}

console.log(checkSameNumbers(10, 10, 10)); // 30
console.log(checkSameNumbers(10, 20, 20)); // 40
