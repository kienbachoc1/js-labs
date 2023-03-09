import { insert } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(insert([1, 2, 3], 0, -1)).toEqual([0, 1, 2, 3]);
    expect(insert([1, 2, 3], 4, 10)).toEqual([1, 2, 3, 4]);
    expect(insert([1, 2, 3], 10, 2)).toEqual([1, 2, 10, 3]);
  });
});
