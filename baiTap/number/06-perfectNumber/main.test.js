import { isPerfectNumber, isPerfectNumberV2 } from './main';

describe('isPerfectNumber(n)', () => {
  test('should return false when n != [1-1000]', () => {
    expect(isPerfectNumber(0)).toBe(false);
    expect(isPerfectNumber(-1)).toBe(false);
    expect(isPerfectNumber(1100)).toBe(false);
  });

  test('should return true when n is perfect number', () => {
    expect(isPerfectNumber(6)).toBe(true);
    expect(isPerfectNumber(15)).toBe(false);
  });
});

describe('isPerfectNumberV2(n)', () => {
  test('should return false when n != [1-1000]', () => {
    expect(isPerfectNumberV2(0)).toBe(false);
    expect(isPerfectNumberV2(-1)).toBe(false);
    expect(isPerfectNumberV2(1100)).toBe(false);
  });

  test('should return true when n is perfect number', () => {
    expect(isPerfectNumberV2(6)).toBe(true);
    expect(isPerfectNumberV2(15)).toBe(false);
  });
});
