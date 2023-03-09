import { findMinPositive, findMinPositiveV2 } from './main';

describe('findMinPositive(numberList)', () => {
  test('should return undefined when numberList is empty', () => {
    expect(findMinPositive([])).toBe(undefined);
  });

  test('should return undefined when numberList has not positive number', () => {
    expect(findMinPositive([-1, -5])).toBe(undefined);
  });

  test('should return min number when numberList has positive number', () => {
    expect(findMinPositive([-1, -5, 2, 6])).toBe(2);
  });
});

describe('findMinPositiveV2(numberList)', () => {
  test('should return undefined when numberList is empty', () => {
    expect(findMinPositiveV2([])).toBe(undefined);
  });

  test('should return undefined when numberList has not positive number', () => {
    expect(findMinPositiveV2([-1, -5])).toBe(undefined);
  });

  test('should return min number when numberList has positive number', () => {
    expect(findMinPositiveV2([-1, -5, 2, 6])).toBe(2);
  });
});
