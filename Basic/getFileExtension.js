function getFileExtension(filename) {
  return filename.split(".").pop();
}

console.log(getFileExtension("example.txt"));
console.log(getFileExtension("index.html"));
