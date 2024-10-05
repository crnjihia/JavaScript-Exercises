function checkMultipleOf7Or11(a, b) {
  return (a % 7 === 0 || a % 11 === 0) !== (b % 7 === 0 || b % 11 === 0);
}

console.log(checkMultipleOf7Or11(14, 22)); // false
console.log(checkMultipleOf7Or11(14, 20)); // true
