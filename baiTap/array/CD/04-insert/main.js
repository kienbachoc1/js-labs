export const insert = (numberList, newNumber) => {
  numberList.push(newNumber);
  return numberList.sort();
};
