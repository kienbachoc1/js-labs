import { findMaxSumArray } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(findMaxSumArray([])).toEqual([]);
    expect(findMaxSumArray([1, 2, 3, 0, 2, 4])).toEqual([1, 2, 3]);
    // có 2 mảng con hợp lệ: [1, 2, 3] và [0, 2, 4]
    // cả 2 đều có tổng bằng 6, nên return mảng đầu tiên
    expect(findMaxSumArray([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
