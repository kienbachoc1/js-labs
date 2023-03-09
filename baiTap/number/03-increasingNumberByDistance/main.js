export const isIncreasingNumberByDistance = (n, x) => {
  if (isNaN(n) || n <= 0 || n >= 1000000) return false;
  if (isNaN(x) || x <= 0 || x >= 5) return false;
  if (n < 10) return false;

  let arrUnitNumber = n.toString().split('');

  for (let i = 0; i < arrUnitNumber.length - 1; i++) {
    if (
      arrUnitNumber[i] >= arrUnitNumber[i + 1] ||
      Number(arrUnitNumber[i]) + x !== Number(arrUnitNumber[i + 1])
    ) {
      return false;
    }
  }

  return true;
};
