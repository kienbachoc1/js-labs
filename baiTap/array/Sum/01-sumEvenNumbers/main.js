export const sumEvenNumbers = (numberList) => {
  const result = [];
  console.log(numberList[-1]);
  for (let i = 0; i < numberList.length; i++)
    if (numberList[i] % 2 === 0 && numberList[i] > numberList[i - 1]) result.push(numberList[i]);
  return result.reduce((a, b) => a + b, 0);
};
