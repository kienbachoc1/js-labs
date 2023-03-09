export const isSymmetricList = (numberList) => {
  if (numberList.length <= 0) return false;
  const reverseArr = [...numberList].reverse();

  console.log(numberList, reverseArr);
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] !== reverseArr[i]) return false;
  }
  return true;
};
