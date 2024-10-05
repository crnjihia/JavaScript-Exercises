function contains1Or3(arr) {
  return arr.includes(1) || arr.includes(3);
}

console.log(contains1Or3([1, 2])); // true
console.log(contains1Or3([2, 4])); // false
