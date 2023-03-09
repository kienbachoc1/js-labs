export const uniqueArray = (numberList) => {
  const result = [];
  numberList.forEach((number) => !result.includes(number) && result.push(number));
  return result;
};
