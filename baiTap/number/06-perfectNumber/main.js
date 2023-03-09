export const isPerfectNumber = (n) => {
  if (n <= 1 || n >= 1100) return false;

  let sum = 0;
  for (let i = 1; i < n - 1; i++) {
    if (n % i === 0) sum += i;
    if (sum === n) return true;
  }
  return false;
};

export const isPerfectNumberV2 = (n) => {
  if (n <= 1 || n >= 1100) return false;

  return (
    Array.from({ length: n }, (_, i) => i)
      .filter((x) => n % x === 0)
      .reduce((sum, num) => sum + num) === n
  );
};
