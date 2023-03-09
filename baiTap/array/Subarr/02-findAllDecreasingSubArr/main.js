export const findAllDecreasingSubArr = (numberList) => {
  const result = [];
  let k = 0;
  for (let i = 1; i <= numberList.length; i++) {
    if (numberList[i] > numberList[i - 1] || i === numberList.length) {
      result.push(numberList.slice(k, i));
      k = i;
    }
  }
  return result.filter((arr) => arr.length >= 3);
};
