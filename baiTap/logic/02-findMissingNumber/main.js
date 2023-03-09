const generateArr = (end) => {
  const result = [];
  for (let i = 5; i <= end; i++) {
    result.push(i);
  }
  return result;
};
export const findMissingNumber = (numberList, n) => {
  const arrNumber = generateArr(n);
  console.log(arrNumber);
  for (let i = 0; i < arrNumber.length; i++) {
    const number = arrNumber[i];
    if (!numberList.includes(number)) return number;
  }
};

// console.log(findMissingNumber([5, 6, 8, 9, 10], 10));
