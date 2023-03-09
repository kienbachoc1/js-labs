const convertMinDigits = (number) => {
  const arrNumber = number
    .toString()
    .split('')
    .map((e) => Number(e));
  return arrNumber.reduce((min, num) => Math.min(min, num), arrNumber[0]);
};

export const sumAllMinDigits = (numberList) =>
  numberList.map((e) => convertMinDigits(e)).reduce((sum, num) => sum + num, 0);
