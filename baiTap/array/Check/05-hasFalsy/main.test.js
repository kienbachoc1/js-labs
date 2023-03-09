import { hasFaslsy } from './main';

describe('hasFaslsy(arr)', () => {
  test('should return false when all item of array is Truthy', () => {
    expect(hasFaslsy([])).toBe(false);
    expect(hasFaslsy([111, 'sdfds'])).toBe(false);
  });

  test('should return true when one item of array is falsy', () => {
    expect(hasFaslsy([false, 'abc', 123, 'dsdsd', 10])).toBe(true);
  });
});
