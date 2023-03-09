export const isIncreasingNumber = (n) => {
  if (isNaN(n) || n < 0 || n > 1000000) return false;
  if (n < 10) return false;

  let arrUnitNumber = n.toString().split('');
  for (let index = 0; index < arrUnitNumber.length - 1; index++) {
    if (arrUnitNumber[index] >= arrUnitNumber[index + 1]) return false;
  }
  return true;
};

export const isIncreasingNumberV2 = (n) => {
  if (isNaN(n) || n < 0 || n > 1000000) return false;
  if (n < 10) return false;

  let arrUnitNumber = n.toString().split('');
  let flag = true;
  arrUnitNumber.forEach((_, index) => {
    if (arrUnitNumber[index] >= arrUnitNumber[index + 1]) flag = false;
  });
  return flag;
};
