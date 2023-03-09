export const isPrime = (n) => {
  if (n <= 0 || n >= 100000) return false;

  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

export const isPrimeV2 = (n) => {
  if (n <= 0 || n >= 100000) return false;

  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};
