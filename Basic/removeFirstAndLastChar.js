function removeFirstAndLastChar(str) {
  return str.slice(1, -1);
}

console.log(removeFirstAndLastChar("hello")); // "ell"
console.log(removeFirstAndLastChar("abcdef")); // "bcde"
