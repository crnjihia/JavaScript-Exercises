function checkScriptAt5th(str) {
  if (str.length >= 6 && str.substring(4, 10) === "Script") {
    return str.substring(0, 4) + str.substring(10);
  }
  return str;
}

console.log(checkScriptAt5th("JavaScript"));
console.log(checkScriptAt5th("JavaScripts"));
