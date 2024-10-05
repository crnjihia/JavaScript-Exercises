const userVarName = prompt("Enter the variable name:");
window[userVarName] = "This is a user-defined variable";
console.log(window[userVarName]);
