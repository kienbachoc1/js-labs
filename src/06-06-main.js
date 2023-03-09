// Random một số ngẫu nhiên trong khoảng [0, n]
const randomNumber = (n) => {
  if (n <= 0) return -1;

  const random = Math.random() * n;
  return Math.round(random);
};

console.log(randomNumber(100));
console.log(randomNumber(100));
console.log(randomNumber(100));
console.log(randomNumber(100));
console.log(randomNumber(100));
console.log(randomNumber(100));
console.log(randomNumber(100));
console.log(randomNumber(100));
console.log(randomNumber(100));
console.log(randomNumber(100));
// Random một số ngẫu nhiên trong khoảng [a, b] với a < b
const randomNumberInRange = (a, b) => {
  if (a >= b) return -1;

  //min: a
  //range: b-a

  const random = Math.random() * (b - a);
  return Math.round(random) + a;
};
