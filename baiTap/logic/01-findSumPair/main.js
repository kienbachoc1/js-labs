export const findSumPair = (numberList, targetSum) => {
  for (let i = 0; i < numberList.length - 1; i++) {
    for (let j = 1; j < numberList.length; j++) {
      if (numberList[i] + numberList[j] === targetSum) return [numberList[i], numberList[j]].sort();
    }
  }

  return [];
};

// console.log(1, findSumPair({}));
// console.log(2, findSumPair([], 10));
// console.log(3, findSumPair([1, 2], 2));
// console.log(4, findSumPair([3, 2, 1], 5));
