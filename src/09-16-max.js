const findMax = (numberList) => {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
  return numberList.reduce((max, number) => (max < number ? number : max));
};

console.log(findMax([10, 2, 5, 7]));

//======================================================================================
function isPrime(n) {
  // your code here
  if (n < 0 && n >= 1000) return undefined;
  if (n < 2) return false;
  for (let i = 2; i <= n - 1; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

//  findIndex
function hasPrimeV4(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  return numberList.findIndex((x) => isPrime(x));
}

console.log(hasPrimeV4([1, 0]));
console.log(isPrime(5));

//======================================================================================
function isPerfectNumber(n) {
  // your code here
  if (n <= 1 || n >= 1000) return false;
  return (
    Array.from({ length: n }, (_, i) => i)
      .filter((x) => n % x === 0)
      .reduce((sum, num) => sum + num) === n
  );
}
function isAllPerfectNumbersV2(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  let dem = numberList.filter((x) => isPerfectNumber(x)).reduce((sum) => ++sum, 0);
  return numberList.length === dem;
}

console.log(isAllPerfectNumbersV2([6, 28]));

//======================================================================================
function calcAvgOfAllEvenNumbers(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length <= 1) return 0;
  const arr = numberList.filter((x) => x % 2 === 0);
  if (arr.length === 0) return 0;
  const sum = arr.reduce((sum, number) => sum + number);
  return Math.round(sum / arr.length);
}

console.log(calcAvgOfAllEvenNumbers([1, 2, 4, 8]));
