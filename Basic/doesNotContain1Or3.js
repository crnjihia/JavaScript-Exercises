function doesNotContain1Or3(arr) {
  return !arr.includes(1) && !arr.includes(3);
}

console.log(doesNotContain1Or3([4, 5])); // true
console.log(doesNotContain1Or3([1, 2])); // false
