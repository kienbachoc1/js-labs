export const isPerfectSquare = (n) => {
  if (n <= 0 || n >= 100000) return false;

  const sqr = Math.sqrt(n);
  return sqr * sqr === n;
};

export const isPerfectSquareV2 = (n) => {
  if (n <= 0 || n >= 100000) return false;

  return n === Math.pow(Math.sqrt(n), 2);
};
