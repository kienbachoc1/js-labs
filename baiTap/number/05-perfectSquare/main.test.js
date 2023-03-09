import { isPerfectSquare, isPerfectSquareV2 } from './main';

describe('isPerfectSquare(n)', () => {
  test('should return false when n != [0-100000]', () => {
    expect(isPerfectSquare(-1)).toBe(false);
    expect(isPerfectSquare(200000)).toBe(false);
  });

  test('should return true when n is perfect square', () => {
    expect(isPerfectSquare(4)).toBe(true);
    expect(isPerfectSquare(9)).toBe(true);
    expect(isPerfectSquare(25)).toBe(true);
    expect(isPerfectSquare(36)).toBe(true);
    expect(isPerfectSquare(37)).toBe(false);
  });
});

describe('isPerfectSquareV2(n)', () => {
  test('should return false when n != [0-100000]', () => {
    expect(isPerfectSquareV2(-1)).toBe(false);
    expect(isPerfectSquareV2(200000)).toBe(false);
  });

  test('should return true when n is perfect square', () => {
    expect(isPerfectSquareV2(4)).toBe(true);
    expect(isPerfectSquareV2(9)).toBe(true);
    expect(isPerfectSquareV2(25)).toBe(true);
    expect(isPerfectSquareV2(36)).toBe(true);
    expect(isPerfectSquareV2(37)).toBe(false);
  });
});
