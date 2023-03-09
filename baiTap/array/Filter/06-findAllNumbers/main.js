const isObbNumber = (number) => {
  const arr = number
    .toString()
    .split('')
    .map((e) => Number(e));
  return arr[0] % 2 === 1;
};
export const findAllNumbers = (numberList) => numberList.filter((e) => isObbNumber(e));
