export const findLastNegativeOdd = (numberList) => {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
  const arr = numberList.filter((x) => x < 0 && Math.sqrt(x * x) % 2 === 1);
  console.log(arr);
  return arr ? arr[arr.length - 1] : undefined;
};
