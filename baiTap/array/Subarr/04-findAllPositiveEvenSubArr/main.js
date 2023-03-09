const isPositiveEven = (number) => number % 2 === 0 && number > 0;
export const findAllPositiveEvenSubArr = (numberList) => {
  const result = [];
  let k = 0;
  for (let i = 0; i <= numberList.length; i++) {
    if (!isPositiveEven(numberList[i]) || i === numberList.length) {
      result.push(numberList.slice(k, i));
      k = i + 1;
    }
  }
  return result.filter((arr) => arr.length >= 2);
};

// console.log(findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20]));
