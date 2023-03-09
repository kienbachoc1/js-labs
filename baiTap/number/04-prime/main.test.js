import { isPrime, isPrimeV2 } from './main';

describe('isPrime(n)', () => {
  test('should return false when n != [0-100000]', () => {
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(200000)).toBe(false);
  });

  test('should return true when n is prime', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
  });
});

describe('isPrimeV2(n)', () => {
  test('should return false when n != [0-100000]', () => {
    expect(isPrimeV2(-1)).toBe(false);
    expect(isPrimeV2(200000)).toBe(false);
  });

  test('should return true when n is prime', () => {
    expect(isPrimeV2(2)).toBe(true);
    expect(isPrimeV2(5)).toBe(true);
    expect(isPrimeV2(1)).toBe(false);
    expect(isPrimeV2(4)).toBe(false);
  });
});
