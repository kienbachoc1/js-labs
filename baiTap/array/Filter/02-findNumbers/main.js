export const findNumbers = (numberList) => {
  if (numberList.length === 1) return [];
  const result = [];
  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] > numberList[i - 1]) result.push(numberList[i]);
  }
  return result;
};
