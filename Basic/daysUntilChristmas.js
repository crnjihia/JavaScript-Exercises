const today = new Date();
const christmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() === 11 && today.getDate() > 25) {
  christmas.setFullYear(christmas.getFullYear() + 1);
}
const diff = Math.ceil((christmas - today) / (1000 * 60 * 60 * 24));
console.log(`${diff} days left until Christmas!`);
