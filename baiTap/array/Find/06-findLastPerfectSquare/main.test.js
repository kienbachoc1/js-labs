import { findLastPerfectSquare } from './main';

describe('findLastPerfectSquare(numberList)', () => {
  test('should return undefined when numberList is empty ', () => {
    expect(findLastPerfectSquare([])).toBe(undefined);
  });

  test('should return number when numberList has perfect square', () => {
    expect(findLastPerfectSquare([2, 3, 5])).toBe(undefined);
    expect(findLastPerfectSquare([4, 16, 25, 36, 40])).toBe(36);
  });
});
