import { insert } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(insert([], 3)).toEqual([3]);
    expect(insert([1, 2, 4], 3)).toEqual([1, 2, 3, 4]);
    expect(insert([1, 2, 3], 3)).toEqual([1, 2, 3, 3]);
  });
});
