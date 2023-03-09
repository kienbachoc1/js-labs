const getMax = (a, b) => Math.max(a, b);

export const hasEvenNumberGreaterThanN = (numberList, n) => {
  if (numberList.length === 0 || !Array.isArray(numberList)) return false;
  if (n <= 0 || n >= 1000000) return false;

  return numberList.filter((x) => x % 2 === 0).reduce(getMax, numberList[0]) > n;
};
