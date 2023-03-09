import { findAllPositiveEvenSubArr } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20])).toEqual([
      [2, 4],
      [10, 20],
    ]);
  });
});
