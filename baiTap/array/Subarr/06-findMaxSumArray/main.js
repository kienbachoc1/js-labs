const getMax = (a, b) => Math.max(a, b);
const getSum = (a, b) => a + b;

const findArr = (arr, avgMax) => arr.reduce(getSum, 0) === avgMax;

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
  const avgMax = arrSum.reduce(getMax, arrSum[0]) || 0;

  return arrList.find((arr) => findArr(arr, avgMax)) || [];
};

// console.log(findMaxSumArray([]));
