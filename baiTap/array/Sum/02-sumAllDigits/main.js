export const sumAllDigits = (numberList) => {
  const newArr = numberList
    .join('')
    .split('')
    .map((e) => Number(e));
  return newArr.reduce((sum, num) => sum + num, 0);
};
