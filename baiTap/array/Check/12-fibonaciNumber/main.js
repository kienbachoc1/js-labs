const fb = (n) => {
  if (n >= 0 && n <= 3) return n;
  return fb(n - 2) + fb(n - 1);
};
const isFibonacci = (n) => {
  let d = 0;
  for (let i = 0; i <= n; i++) if (n === fb(i)) return true;
  return false;
};

export const hasFibonaciNumber = (numberList) => {
  if (numberList.length === 0) return false;
  return numberList.every(isFibonacci);
};
