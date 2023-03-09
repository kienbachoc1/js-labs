export const findAllIncreasingSubArr = (numberList) => {
  const result = [];
  let k = 0;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > numberList[i + 1] || i === numberList.length - 1) {
      result.push(numberList.slice(k, i + 1));
      k = i + 1;
    }
  }
  return result.filter((arr) => arr.length > 1);
};

// console.log(findAllIncreasingSubArr([1, 2, 3, -5, -10, 5, 10]));
