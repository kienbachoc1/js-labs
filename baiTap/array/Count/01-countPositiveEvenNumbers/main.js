const isPositiveEvenNumber = (number) => number > 0 && number % 2 === 0;
export const countPositiveEvenNumbers = (numberList) =>
  numberList.filter(isPositiveEvenNumber).length;
