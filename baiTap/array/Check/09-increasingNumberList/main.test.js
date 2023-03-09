import { isIncreasingNumberList } from './main';

describe('isIncreasingNumberList(numberList)', () => {
  test('should return false when number list only once number or empty', () => {
    expect(isIncreasingNumberList([])).toBe(false);
    expect(isIncreasingNumberList([1])).toBe(false);
  });

  test('should return false when the following element is smaller than the preceding element', () => {
    expect(isIncreasingNumberList([3, 2, 1])).toBe(false);
    expect(isIncreasingNumberList([3, 2])).toBe(false);
    expect(isIncreasingNumberList([3, 3])).toBe(false);
  });

  test('should return true when the following element is always larger than the preceding element', () => {
    expect(isIncreasingNumberList([1, 2])).toBe(true);
    expect(isIncreasingNumberList([1, 2, 3])).toBe(true);
  });
});
