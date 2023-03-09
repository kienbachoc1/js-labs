import { hasEvenNumberGreaterThanN } from './main';

describe('hasEvenNumberGreaterThanN(numberList, n)', () => {
  test('should return false when numberList, n empty', () => {
    expect(hasEvenNumberGreaterThanN([], 5)).toBe(false);
    expect(hasEvenNumberGreaterThanN([2, 3, 4], -1)).toBe(false);
    expect(hasEvenNumberGreaterThanN([2, 3, 4], 1100000)).toBe(false);
  });

  test('should return false when numberList has not even number > n', () => {
    expect(hasEvenNumberGreaterThanN([2, 3, 4], 5)).toBe(false);
  });

  test('should return true when numberList has even number > n', () => {
    expect(hasEvenNumberGreaterThanN([2, 3, 4, 6], 5)).toBe(true);
  });
});
