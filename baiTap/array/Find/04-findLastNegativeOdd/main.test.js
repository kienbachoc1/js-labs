import { findLastNegativeOdd } from './main';

describe('findLastNegativeOdd(numberList)', () => {
  test('should return undefined when numberList is empty', () => {
    expect(findLastNegativeOdd([])).toBe(undefined);
  });

  test('should return undefined when numberList has not negative odd number', () => {
    expect(findLastNegativeOdd([1, 3, 5])).toBe(undefined);
  });
  test('should return string number when numberList has number positive even', () => {
    expect(findLastNegativeOdd([-1, -3, -5])).toBe(-5);
  });
});
