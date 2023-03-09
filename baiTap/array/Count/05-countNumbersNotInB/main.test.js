import { countNumbersNotInB } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(countNumbersNotInB([1, 2, 3], [4, 5])).toBe(3);
    expect(countNumbersNotInB([1, 2, 3], [1, 2, 3])).toBe(0);
    expect(countNumbersNotInB([1, 2, 3], [3, 4, 5])).toBe(2);
  });
});
