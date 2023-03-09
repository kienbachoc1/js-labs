const getMax = (a, b) => Math.max(a, b);
export const findMaxSumArray = (numberList) => {
  const arrList = [];
  let k = 0;
  for (let i = 1; i <= numberList.length; i++) {
    if (numberList[i] < numberList[i - 1] || i === numberList.length) {
      arrList.push(numberList.slice(k, i));
      k = i;
    }
  }
  const arrSum = arrList.map((arr) => arr.reduce((sum, num) => sum + num, 0));
  return arrSum.reduce(getMax, arrSum[0]) || 0;
};

// console.log(findMaxSumArray([]));
// console.log(findMaxSumArray([1, 2, 3]));
// console.log(findMaxSumArray([1, 2, 3, 0, 10, 20]));
