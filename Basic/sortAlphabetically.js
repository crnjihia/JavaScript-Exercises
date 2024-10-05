function sortAlphabetically(str) {
  return str.split("").sort().join("");
}

console.log(sortAlphabetically("javascript")); // "aacijprstv"
console.log(sortAlphabetically("programming")); // "aggimmnoprr"
