import { findAllNumbers } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(findAllNumbers([1, 5, 6])).toEqual([1, 5]);
    expect(findAllNumbers([234, 421, 123])).toEqual([123]);
  });
});
