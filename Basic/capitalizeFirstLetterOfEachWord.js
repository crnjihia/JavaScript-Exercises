function capitalizeFirstLetter(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

console.log(capitalizeFirstLetter("hello world")); // "Hello World"
console.log(capitalizeFirstLetter("javascript is fun")); // "Javascript Is Fun"
