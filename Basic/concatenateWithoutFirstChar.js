function concatenateWithoutFirstChar(str1, str2) {
  return str1.slice(1) + str2.slice(1);
}

console.log(concatenateWithoutFirstChar("hello", "world")); // "elloworld"
console.log(concatenateWithoutFirstChar("abc", "xyz")); // "bcyz"
