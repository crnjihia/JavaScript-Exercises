function addFirstChar(str) {
  const firstChar = str.charAt(0);
  return firstChar + str + firstChar;
}

console.log(addFirstChar("Python"));
console.log(addFirstChar("A"));
