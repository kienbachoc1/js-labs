import { findAllDecreasingSubArr } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(findAllDecreasingSubArr([3, 2, 1, 15, 10, 20])).toEqual([[3, 2, 1]]); // còn mảng [15, 10] là mảng giảm dần nhưng độ dài chưa đủ 3
  });
});
