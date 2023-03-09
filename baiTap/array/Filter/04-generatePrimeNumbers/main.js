const isPrime = (n) => {
  if (n <= 0 || n >= 100000) return false;

  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

export const generatePrimeNumbers = (n) => {
  if (n <= 0 || n >= 1000) return [];
  const result = [];
  for (let i = 2; i < n; i++) if (isPrime(i)) result.push(i);
  return result;
};
