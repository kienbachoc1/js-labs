import { uniqueArray } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(uniqueArray([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
    expect(uniqueArray([1, 1, 1, 1])).toEqual([1]);
  });
});
