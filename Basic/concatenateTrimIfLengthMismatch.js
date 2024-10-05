function concatenateTrimIfLengthMismatch(str1, str2) {
  if (str1.length !== str2.length) {
    const minLength = Math.min(str1.length, str2.length);
    return str1.slice(0, minLength) + str2.slice(0, minLength);
  }
  return str1 + str2;
}

console.log(concatenateTrimIfLengthMismatch("hello", "world!")); // "helloworld"
console.log(concatenateTrimIfLengthMismatch("java", "script")); // "javacript"
