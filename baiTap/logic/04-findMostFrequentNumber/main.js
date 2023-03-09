const findTargetMax = (obj) => {
  const vals = Object.values(obj);
  return Math.max(...vals);
};

const statisticsNumbers = (numberList) => {
  const result = {};
  numberList.forEach((number) => (number in result ? (result[number] += 1) : (result[number] = 1)));
  return result;
};

export const findMostFrequentNumber = (numberList) => {
  const objCountNumber = statisticsNumbers(numberList);
  const targetMax = findTargetMax(objCountNumber);
  for (const key in objCountNumber) {
    if (objCountNumber[key] === targetMax) {
      return Number(key);
    }
  }
  return undefined;
};

// console.log(findMostFrequentNumber([1]));
