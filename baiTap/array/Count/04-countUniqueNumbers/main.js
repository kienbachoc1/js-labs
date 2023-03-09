export const countUniqueNumbers = (numberList) => {
  let result = [];
  for (let i = 0; i < numberList.length; i++) {
    if (!result.includes(numberList[i])) result.push(numberList[i]);
  }
  return result.length;
};
