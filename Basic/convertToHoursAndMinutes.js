function toHoursAndMinutes(num) {
  const hours = Math.floor(num / 60);
  const minutes = num % 60;
  return `${hours} hour(s) and ${minutes} minute(s)`;
}

console.log(toHoursAndMinutes(130)); // "2 hour(s) and 10 minute(s)"
console.log(toHoursAndMinutes(90)); // "1 hour(s) and 30 minute(s)"
