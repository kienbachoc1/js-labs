export const findSecondLargestNumber = (numberList) => {
  if (numberList.length <= 1) return undefined;
  return numberList.sort((a, b) => b - a)[1];
};
