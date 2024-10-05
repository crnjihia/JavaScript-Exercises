function endsWithScript(str) {
  return str.length >= 6 && str.slice(-6) === "Script";
}

console.log(endsWithScript("JavaScript")); // true
console.log(endsWithScript("TypeScript")); // true
console.log(endsWithScript("Java")); // false
