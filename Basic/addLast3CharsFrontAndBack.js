function addLast3Chars(str) {
  if (str.length < 3) return str;
  const last3 = str.slice(-3);
  return last3 + str + last3;
}

console.log(addLast3Chars("Python"));
console.log(addLast3Chars("abc"));
