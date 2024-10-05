function removePFromEnds(str) {
  if (str.startsWith("P") && str.endsWith("P")) {
    return str.slice(1, -1);
  }
  return str;
}

console.log(removePFromEnds("PythonP")); // "ython"
console.log(removePFromEnds("Java")); // "Java"
