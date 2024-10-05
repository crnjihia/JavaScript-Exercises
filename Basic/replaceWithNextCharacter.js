function replaceWithNextCharacter(str) {
  return str.replace(/./g, (char) =>
    String.fromCharCode(char.charCodeAt(0) + 1)
  );
}

console.log(replaceWithNextCharacter("abc")); // "bcd"
console.log(replaceWithNextCharacter("xyz")); // "yza"
