export const hasOddNumberDivisibleBy3 = (numberList) => {
  if (numberList.length === 0 || !Array.isArray(numberList)) return false;
  return !!numberList.filter((x) => x % 2 === 1).find((x) => x % 3 === 0);
};
