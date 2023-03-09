export const removeDuplicatedNumbers = (numberList) => {
  const result = [];
  numberList.forEach((number) => {
    if (result.includes(number)) {
      result.splice(result.indexOf(number), 1);
    } else {
      result.push(number);
    }
  });
  return result;
};
