export const statisticsNumbers = (numberList) => {
  const result = {};
  numberList.forEach((number) => (number in result ? (result[number] += 1) : (result[number] = 1)));
  return result;
};

// console.log(statisticsNumbers([1, 1, 1, 2, 2, 3]));
