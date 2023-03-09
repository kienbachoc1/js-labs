import { findAllIncreasingSubArr } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(findAllIncreasingSubArr([1, 2, 3, -5, -10, 5, 10])).toEqual([
      [1, 2, 3],
      [-10, 5, 10],
    ]);
  });
});
