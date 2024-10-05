function contains30And40Twice(arr) {
  const count30 = arr.filter((num) => num === 30).length;
  const count40 = arr.filter((num) => num === 40).length;
  return count30 === 2 && count40 === 2;
}

console.log(contains30And40Twice([30, 30, 40, 40])); // true
console.log(contains30And40Twice([30, 30, 40])); // false
