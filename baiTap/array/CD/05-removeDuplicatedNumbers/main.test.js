import { removeDuplicatedNumbers } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(removeDuplicatedNumbers([1, 1, 2, 3, 2])).toEqual([3]);
    expect(removeDuplicatedNumbers([1, 2, 3])).toEqual([1, 2, 3]);
    expect(removeDuplicatedNumbers([])).toEqual([]);
  });
});
