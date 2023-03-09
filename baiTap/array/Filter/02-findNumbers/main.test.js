import { findNumbers } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(findNumbers([1])).toEqual([]);
    expect(findNumbers([2, 5, 3, 7])).toEqual([5, 7]);
  });
});
