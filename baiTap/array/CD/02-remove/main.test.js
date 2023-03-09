import { remove } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(remove([1, 2, 3], -1, 10)).toEqual([1, 2, 3]);
    expect(remove([1, 2, 3], 3, 10)).toEqual([1, 2, 3]);
    expect(remove([1, 2, 3], 1, 2)).toEqual([1]);
    expect(remove([1, 2, 3], 0)).toEqual([]);
  });
});
