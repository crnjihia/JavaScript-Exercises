function cityNameCheck(str) {
  if (str.startsWith("Los") || str.startsWith("New")) {
    return str;
  }
  return "";
}

console.log(cityNameCheck("Los Angeles")); // "Los Angeles"
console.log(cityNameCheck("New York")); // "New York"
console.log(cityNameCheck("Paris")); // ""
