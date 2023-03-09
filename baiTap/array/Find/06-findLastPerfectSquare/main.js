const isPerfectSquare = (n) => {
  if (n <= 0 || n >= 100000) return false;

  const sqr = Math.sqrt(n);
  return sqr * sqr === n;
};

export const findLastPerfectSquare = (numberList) => {
  if (numberList.length === 0) return undefined;

  const arr = numberList.filter(isPerfectSquare).reverse();

  return arr[0];
};
