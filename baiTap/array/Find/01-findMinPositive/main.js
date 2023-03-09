const getMin = (a, b) => Math.min(a, b);

export const findMinPositive = (numberList) => {
  if (!Array.isArray(numberList || numberList.length === 0)) return undefined;
  const positiveNumbers = numberList.filter((x) => x > 0);
  return positiveNumbers.length ? positiveNumbers.reduce(getMin) : undefined;
};

export const findMinPositiveV2 = (numberList) => {
  if (!Array.isArray(numberList || numberList.length === 0)) return undefined;
  return numberList.filter((x) => x > 0).sort()[0];
};
