export const hasTwoDigitsWithSum = (n, sum) => {
  if (n <= 9 || n >= 1000000 || sum <= 0 || sum >= 19) return false;

  const arr = n
    .toString()
    .split('')
    .map((x) => Number(x));
  return arr.reduce((sum, x) => sum + x) === sum;
};
