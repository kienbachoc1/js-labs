import { hasFibonaciNumber } from './main';

describe('hasFibonaciNumber(numberList)', () => {
  test('should return false when numberList is empty', () => {
    expect(hasFibonaciNumber([])).toBe(false);
  });

  test('should return false when numberList has not fibonaci number', () => {
    expect(hasFibonaciNumber([4, 6, 7])).toBe(false);
  });

  test('should return false when numberList has fibonaci number', () => {
    expect(hasFibonaciNumber([0, 1, 2, 3, 5, 8])).toBe(true);
    expect(hasFibonaciNumber([89])).toBe(true);
  });
});
