export const findFirstPositiveEven = (numberList) => {
  if (numberList.length === 0 || !Array.isArray(numberList)) return undefined;
  const positiveList = numberList.filter((x) => x > 0 && x % 2 === 0);
  return positiveList ? positiveList[0] : undefined;
};
