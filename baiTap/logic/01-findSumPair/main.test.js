import { findSumPair } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(findSumPair({})).toEqual([]);
    expect(findSumPair([], 10)).toEqual([]);
    expect(findSumPair([1, 2], 2)).toEqual([]);
    // [] vì không có 2 số nào có tổng bằng 2
    expect(findSumPair([3, 2, 1], 5)).toEqual([2, 3]);
    // [2, 3] vì 2 + 3 = 5 và sắp xếp tăng dần nên có mảng [2, 3]
  });
});
