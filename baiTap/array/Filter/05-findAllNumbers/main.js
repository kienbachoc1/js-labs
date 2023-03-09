const findEvenNumber = (numberList) => numberList.find((x) => x % 2 === 0);
export const findAllNumbers = (numberList) => {
  const result = [];
  numberList
    .filter((e) => e > 0)
    .forEach((e) => {
      if (e === findEvenNumber(numberList)) result.push(e);
    });
  result.pop();
  return result;
};
