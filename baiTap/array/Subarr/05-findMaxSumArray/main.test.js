import { findMaxSumArray } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(findMaxSumArray([])).toBe(0);
    expect(findMaxSumArray([1, 2, 3])).toBe(6);
    expect(findMaxSumArray([1, 2, 3, 0, 10, 20])).toBe(30);
    // should return 30 vì lấy tổng của mảng con [0, 10, 20]
  });
});
