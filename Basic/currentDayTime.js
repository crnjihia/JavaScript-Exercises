const today = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = days[today.getDay()];
let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
const ampm = hour >= 12 ? "PM" : "AM";
hour = hour % 12;
hour = hour ? hour : 12;
console.log(`Today is : ${day}.`);
console.log(`Current time is : ${hour} ${ampm} : ${minute} : ${second}`);
