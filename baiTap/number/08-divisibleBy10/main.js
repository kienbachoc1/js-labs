export const isDivisibleBy10 = (n) => {
  if (n <= 0 || n >= 1000000) return false;
  const arr = n
    .toString()
    .split('')
    .map((x) => Number(x));
  return arr.reduce((sum, number) => sum + number, 0) % 10 === 0;
};
