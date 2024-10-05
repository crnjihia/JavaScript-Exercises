function createStringFirstAndLastNChars(str, n) {
  if (str.length >= n) {
    return str.slice(0, n) + str.slice(-n);
  }
  return str;
}

console.log(createStringFirstAndLastNChars("JavaScript", 3)); // "Javipt"
console.log(createStringFirstAndLastNChars("abcdef", 2)); // "abef"
